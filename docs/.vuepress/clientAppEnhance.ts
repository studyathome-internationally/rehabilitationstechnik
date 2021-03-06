import { defineClientAppEnhance } from '@vuepress/client'

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";
import MathML from "./components/MathML.vue";

import "katex/dist/katex.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // app.config.compilerOptions.isCustomElement = (tag) => {
  //   if (["mi", "mjx-container"].includes(tag)) return true;
  //   return false;
  // }
  app.component("BookUrl", BookUrl);
  app.component("ChapterUrl", ChapterUrl);
  app.component("MathML", MathML);
})