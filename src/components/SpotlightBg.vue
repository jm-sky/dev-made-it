<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useSpotlight } from '@/composables/useSpotlight'

const { x, y } = useMouse()

const { size, opacity } = useSpotlight(x, y)
</script> 

<template>
  <div
    class="spotlight-bg"
    :style="{
      opacity,
      '--left': `${x}px`,
      '--top': `${y}px`,
      '--width': `${size}px`,
      '--height': `${size}px`
    }"
  />
</template>

<style>
.spotlight-bg::after {
  @apply absolute bg-primary-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl;
  @apply max-w-full max-h-full;
  content: '';
  left: var(--left);
  top: var(--top);
  width: var(--width);
  height: var(--height);
}
</style>
