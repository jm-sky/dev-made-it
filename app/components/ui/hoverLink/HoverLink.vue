<script setup lang="ts">
defineProps<{
  href: string
  target?: string
  ariaLabel?: string
}>()
</script>

<template>
  <a
    :href
    :target
    class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors"
    rel="noopener noreferrer"
    :aria-label
  >
    <slot />
  </a>
</template>
