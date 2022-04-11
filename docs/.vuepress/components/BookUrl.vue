<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}<ExternalLinkIcon /></a>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSiteData } from "@vuepress/client";

const site = useSiteData();

const name = ref("BookUrl");
const url = ref(typeof window === "undefined" ? "" : window.location.origin + site.value.base);
</script>

<style scoped></style>
