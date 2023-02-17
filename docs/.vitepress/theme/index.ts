import DefaultTheme from "vitepress/theme";
import "./styles/index.styl";

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";
import MathML from "./components/MathML.vue";

import mediumZoom from "medium-zoom";

import { onMounted, watch, nextTick } from "vue";
import { inBrowser, useRoute } from "vitepress";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("BookUrl", BookUrl);
    ctx.app.component("ChapterUrl", ChapterUrl);
    ctx.app.component("MathML", MathML);
  },
  setup() {
    const initZoom = () => {
      if (inBrowser) mediumZoom(".vp-doc img", { background: "var(--vp-c-bg)", margin: 100 });
    };
    const route = useRoute();
    const handler = () => nextTick(initZoom);
    onMounted(initZoom);
    watch(() => route.path, handler);
  },
};
