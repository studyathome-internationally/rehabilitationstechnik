<template>
  <div v-if="block" v-html="mlContent"></div>
  <span v-else v-html="mlContent"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from "vue";
import katex from "katex";

const options = {
  displayMode: false,
  strict: "ignore",
  output: "mathml",
  macros: {
    "\\SI": "{#1\\;\\mathrm{#2}}",
    "\\squared": "{^{2}}",
    "\\cubed": "{^{3}}",
    "\\per": "/",
    "\\tera": "T",
    "\\giga": "G",
    "\\mega": "M",
    "\\kilo": "k",
    "\\milli": "m",
    "\\micro": "μ",
    "\\nano": "n",
    "\\kilogram": "\\text{kg}\\,",
    "\\meter": "\\text{m}\\,",
    "\\second": "\\text{s}\\,",
    "\\ampere": "\\text{A}\\,",
    "\\kelvin": "\\text{K}\\,",
    "\\mol": "\\text{mol}\\,",
    "\\candela": "\\text{cd}\\,",
    "\\newton": "\\text{N}\\,",
    "\\hertz": "\\text{Hz}\\,",
    "\\pascal": "\\text{Pa}\\,",
    "\\volt": "\\text{V}\\,",
    "\\watt": "\\text{W}\\,",
    "\\joule": "\\text{J}\\,",
    "\\henry": "\\text{H}\\,",
    "\\farad": "\\text{F}\\,",
    "\\coulomb": "\\text{C}\\,",
    "\\ohm": "\\Omega\\,",
    "\\weber": "\\text{Wb}\\,",
    "\\tesla": "\\text{T}\\,",
    "\\degree": "\\text{deg}\\,",
  },
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
