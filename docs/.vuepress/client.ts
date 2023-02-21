import { defineClientConfig } from '@vuepress/client'

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";
import MathML from "./components/MathML.vue";

import "katex/dist/katex.css";

export default defineClientConfig({
  // app.config.compilerOptions.isCustomElement = (tag) => {
  //   if (["mi", "mjx-container"].includes(tag)) return true;
  //   return false;
  // }
  enhance({ app }) {
    app.component("BookUrl", BookUrl);
    app.component("ChapterUrl", ChapterUrl);
    app.component("MathML", MathML);
  }
});