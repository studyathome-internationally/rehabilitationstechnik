<template>
  <div v-if="block" v-html="mlContent"></div>
  <span v-else v-html="mlContent"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from "vue";

import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AssistiveMmlHandler } from "mathjax-full/js/a11y/assistive-mml.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import juice from "juice/client";

const name = ref("MathJaxML");

const documentOptions = {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new SVG({ fontCache: "none" }),
};
const convertOptions = {
  display: false,
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
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  AssistiveMmlHandler(handler);
  const mathDocument = mathjax.document(formula.value, documentOptions);
  const html = adaptor.outerHTML(mathDocument.convert(formula.value, convertOptions));
  const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument));
  return juice(html + stylesheet);
});
</script>

<style scoped>
span {
  white-space: nowrap;
}
</style>
