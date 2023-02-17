<template>
  <!-- <MathJaxML :formula="formula" :block="block" /> -->
  <KatexML :formula="formula" :block="block" />
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

import MathJaxML from "./MathJaxML.vue";
import KatexML from "./KatexML.vue";

const el = ref("MathJaxML");

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
</script>
