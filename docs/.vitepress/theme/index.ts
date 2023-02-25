import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/index.styl";
import "katex/dist/katex.min.css";

import BookUrl from "./components/BookUrl.vue";
import ChapterUrl from "./components/ChapterUrl.vue";
import MathML from "./components/MathML.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";

import mediumZoom from "medium-zoom";

import { onMounted, watch, nextTick } from "vue";
import { inBrowser, useRoute } from "vitepress";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(ReloadPrompt),
    });
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("BookUrl", BookUrl);
    ctx.app.component("ChapterUrl", ChapterUrl);
    ctx.app.component("MathML", MathML);
  },
  setup() {
    const initZoom = () => {
      if (inBrowser) mediumZoom("[data-zoom-image]", { background: "var(--vp-c-bg)", margin: 0 });
    };
    const route = useRoute();
    const handler = () => nextTick(initZoom);
    onMounted(initZoom);
    watch(() => route.path, handler);
  },
};
