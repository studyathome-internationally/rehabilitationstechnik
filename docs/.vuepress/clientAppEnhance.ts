import { defineClientAppEnhance } from '@vuepress/client'

import "katex/dist/katex.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.config.compilerOptions.isCustomElement = (tag) => {
    if ("mi" === tag) return true;
    return false;
  }
})