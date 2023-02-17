<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useData } from "vitepress";
const { site } = useData();
const name = ref("BookUrl");
const url = ref(typeof window === "undefined" ? "" : window.location.origin + site.value.base);
</script>

<style scoped></style>
