# Scrapy Crawler for OER - Rehabilitation Technology

This project contains a Scrapy spider designed to scrape content related to Rehabilitation Technology from a specified website and index it using Algolia for search purposes. It's tailored to extract structured data including hierarchical headings and associated content.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.6 or higher
- pip (Python package installer)

## Installation

Install the necessary dependencies using pip:

```sh
$ pip install scrapy algoliasearch
```

## Configuration

Before running the spider, you may need to configure the following:

- Algolia API Keys: Set your `Application ID` and `Admin API Key` in the spider's initialization section in `rehab_spider.py`.
  ```python
  self.client = SearchClient.create('[APP_ID]', '[API_KEY]')
  ```
- Target URL: Ensure the start_urls list in rehab_spider.py reflects the pages you intend to crawl.

## Running the Spider

Navigate to the project directory and run the spider:

```sh
$ scrapy crawl rehab
```

## Output

Data scraped by the spider is indexed directly to Algolia under the configured index. Check your Algolia dashboard to view and manage the indexed data.

## Troubleshooting

If you encounter issues related to Scrapy or connectivity, consider the following steps:

- Check your internet connection.
- Ensure your Algolia API keys are correct and have sufficient permissions.
- Verify that the target website is up and accessible.

## Contributing

Contributions to the crawler are welcome! Please fork the repository and submit a pull request with your enhancements.

