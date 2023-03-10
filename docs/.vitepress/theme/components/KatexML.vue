<template>
  <div v-if="block" v-html="mlContent"></div>
  <span v-else v-html="mlContent"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from "vue";
import katex from "katex";
import macros from "./../../config/plugins/macros";

const options = {
  displayMode: false,
  strict: "ignore",
  output: "mathml",
  macros,
};

const name = ref("KatexML");
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
const { formula, block } = toRefs(props);

const mlContent = computed(() => {
  if (block.value) options.displayMode = true;
  return katex.renderToString(formula.value, options).replaceAll(/<annotation.*?<\/annotation>/g, "");
});
</script>

<style scoped>
span {
  white-space: nowrap;
  font-family: var(--vp-font-family-base);
}
</style>
