import scrapy
from algoliasearch.search_client import SearchClient

import hashlib

class RehabSpider(scrapy.Spider):
    name = 'rehab'
    allowed_domains = ['rehatec.studyathome.technikum-wien.at']
    start_urls = [
        'https://rehatec.studyathome.technikum-wien.at/',  # English
        'https://rehatec.studyathome.technikum-wien.at/de/'  # German
    ]
    
    def __init__(self):
        self.client = SearchClient.create('[APP_ID]', '[API_KEY]')
        self.index = self.client.init_index('rehabilitationstechnik')
        self.visited_urls = set()  # Initialize the set of visited URLs
        self.delete_index()
        self.configure_index()

    def delete_index(self):
        # Deletes the index
        self.index.delete()

    def configure_index(self):
        # Deletes the index first if it's a fresh start each time
        self.index.delete()
        
        # Configure index settings
        self.index.set_settings({
            'attributesForFaceting': ['lang']  # Adjust facet settings
        })

    def parse(self, response):
        lang = response.xpath('/html/@lang').get() or 'en-US'
        current_hierarchy = [None] * 6  # To keep track of current heading context

        for element in response.css('.content *:not(.sr-only)'):  # Select all children of .content
            tag = element.root.tag
            if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                level = int(tag[1]) - 1  # Convert 'h1' -> 0, 'h2' -> 1, etc.
                text = element.css('::text').get().strip()
                current_hierarchy[level] = text
                current_hierarchy[level + 1:] = [None] * (5 - level)  # Reset lower levels
                anchor = element.attrib.get('id', text.lower().replace(' ', '-'))
                record = {
                    "anchor": anchor,
                    "content": None,
                    "hierarchy": {f"lvl{i}": current_hierarchy[i] for i in range(6)},
                    "type": f"lvl{level}",
                    "tags": ["v1"],
                    "url": response.url,
                    "url_without_variables": response.url.split('#')[0],
                    "lang": lang,
                    "objectID": hashlib.sha1((response.url + '#' + anchor).encode()).hexdigest()
                }
                self.index.save_objects([record], {'autoGenerateObjectIDIfNotExist': True})
            elif tag in ['p', 'li']:
                content_text = ' '.join(element.css('::text').getall()).strip()
                anchor = element.attrib.get('id', content_text[:30].lower().replace(' ', '-'))
                record = {
                    "anchor": anchor,
                    "content": content_text,
                    "hierarchy": {f"lvl{i}": current_hierarchy[i] for i in range(6)},
                    "type": "content",
                    "tags": ["v1"],
                    "url": response.url,
                    "url_without_variables": response.url.split('#')[0],
                    "lang": lang,
                    "objectID": hashlib.sha1((response.url + '#' + anchor).encode()).hexdigest()
                }
                self.index.save_objects([record], {'autoGenerateObjectIDIfNotExist': True})

        # Follow links only within the allowed domains and start URLs
        links = response.css('.content a:not(.sr-only)::attr(href)').getall()
        for link in links:
            full_url = response.urljoin(link)
            if not any(proto in link for proto in ['http://', 'https://', '#']):
                if full_url not in self.visited_urls:
                    self.visited_urls.add(full_url)
                    yield response.follow(link, self.parse)
