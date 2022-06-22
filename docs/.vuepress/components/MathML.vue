<template>
  <div v-if="block" v-html="mlContent"></div>
  <span v-else v-html="mlContent"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, onMounted } from "vue";
import katex from "katex";

// import { mathjax } from "mathjax-full/js/mathjax.js";
// import { TeX } from "mathjax-full/js/input/tex.js";
// import { SVG } from "mathjax-full/js/output/svg.js";
// import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
// import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
// import { AssistiveMmlHandler } from "mathjax-full/js/a11y/assistive-mml.js";
// import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
// import juice from "juice/client";

// const documentOptions = {
//   InputJax: new TeX({ packages: AllPackages }),
//   OutputJax: new SVG({ fontCache: "none" }),
// };
// const convertOptions = {
//   display: false,
// };

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const katexInline = function (latex) {
  const options = { displayMode: false, strict: "ignore", throwOnError: false };
  try {
    return katex.renderToString(latex, options);
  } catch (error) {
    if (options.throwOnError) {
      console.log(error);
    }
    return `<span v-pre class='katex-error' title='${escapeHtml(error.toString())}'>${escapeHtml(latex)}</span>`;
  }
};

const props = defineProps({
  block: {
    type: Boolean,
    required: false,
    default: false,
  },
  formula: {
    type: String,
    required: true,
  },
});

const { formula } = toRefs(props);

const mlContent = computed(() => {
  //   const adaptor = liteAdaptor();
  //   const handler = RegisterHTMLHandler(adaptor);
  //   AssistiveMmlHandler(handler);
  //   const mathDocument = mathjax.document(formula.value, documentOptions);
  //   const html = adaptor.outerHTML(mathDocument.convert(formula.value, convertOptions));
  //   const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument));
  //   return juice(html + stylesheet);
  return katexInline(formula.value).replace(`<span class="katex">`, `<span v-pre class="katex">`);
});
</script>

<style scoped>
span {
  white-space: nowrap;
}
</style>
