import { defineClientAppEnhance } from '@vuepress/client'

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";

import "katex/dist/katex.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.config.compilerOptions.isCustomElement = (tag) => {
    if ("mi" === tag) return true;
    return false;
  }
  app.component("BookUrl", BookUrl);
  app.component("ChapterUrl", ChapterUrl);
})