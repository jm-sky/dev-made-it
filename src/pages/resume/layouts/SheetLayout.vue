<script setup lang="ts">
defineProps<{
  page: number
  currentPage: number
}>()
</script>

<template>
  <div class="book-page page-right" :class="[{ 'turn': currentPage > page }, currentPage < page -1 ? 'not-shown' : 'shown']">
    <slot />
  </div>
</template>