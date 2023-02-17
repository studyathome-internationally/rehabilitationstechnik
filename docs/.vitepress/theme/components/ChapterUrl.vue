<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref("ChapterUrl");
const url = ref(typeof window === "undefined" ? "" : window.location.origin + window.location.pathname);
</script>

<style scoped></style>
