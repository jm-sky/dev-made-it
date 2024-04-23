<script setup lang="ts">
defineProps<{
  anchor?: boolean
}>()
</script>

<template>
  <component
    :is="anchor ? 'a' : 'button'"
    class="px-5 py-3 bg-primary-500 text-white rounded-md text-sm font-semibold transition-all duration-500 border border-primary-500 hover:text-primary-500 hover:bg-white/75"
  >
    <slot />
</component>
</template>
