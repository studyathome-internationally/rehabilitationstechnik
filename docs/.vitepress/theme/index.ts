import DefaultTheme from "vitepress/theme";
import "./custom.stylus";

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";
import MathML from "./components/MathML.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("BookUrl", BookUrl);
    ctx.app.component("ChapterUrl", ChapterUrl);
    ctx.app.component("MathML", MathML);
  },
};
