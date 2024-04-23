<script setup lang="ts">
defineProps<{
  anchor?: boolean
}>()
</script>

<template>
  <component
    :is="anchor ? 'a' : 'button'"
    class="px-5 py-3 bg-white/75 text-primary-500 rounded-md text-sm font-semibold transition-all duration-500 border border-primary-500 hover:text-white hover:bg-primary-500"
  >
    <slot />
</component>
</template>
