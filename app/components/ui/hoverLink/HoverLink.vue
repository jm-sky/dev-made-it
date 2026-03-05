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
    class="relative isolate overflow-hidden flex gap-4 items-center pl-3 pr-4 py-3 rounded-full hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors before:content-[''] before:absolute before:inset-0 before:bg-primary before:rounded-full before:size-12 before:opacity-0 before:-translate-x-full before:-z-10 before:scale-50 before:transition-all before:duration-300 before:delay-100 before:ease-in-out hover:before:opacity-20 hover:before:translate-x-0 hover:before:scale-100"
    rel="noopener noreferrer"
    :aria-label
  >
    <slot />
  </a>
</template>
