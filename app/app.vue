<script setup>
// app.vue is now a layout that renders pages from the pages/ directory
const route = useRoute()
</script>

<template>
  <NuxtPage :key="route.path" />
</template>
