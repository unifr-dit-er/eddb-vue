<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()

const parseMarkdownLinks = (text: string) => {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
}
</script>

<template>
  <div class="flex flex-col md:flex-row print:flex-row">
    <div class="font-bold md:w-1/3 md:text-right print:w-1/3 print:text-right md:p-4 print:p-4">
      {{ title }}
    </div>
    <div class="flex-1 md:p-4 print:p-4">
      <div class="whitespace-pre-line leading-tight" v-html="parseMarkdownLinks(content)"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
:deep(p) {
  @apply mb-2;
}
</style>