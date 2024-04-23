<script setup lang="ts">
defineProps<{
  flat?: boolean
}>()
</script>

<template>
  <a
    class="text-link relative text-sm font-semibold transition-colors"
    :class="flat ? '' : 'text-primary-500 hover:text-primary-600'"
  >
    <slot />
  </a>
</template>

<style>
.text-link {
  &::after {
    content: '';
    @apply absolute bottom-0 left-0 w-full h-px bg-primary-500 scale-x-0 transition-transform;
  }
  &:hover::after {
    @apply scale-x-100;
  }
}
</style>
