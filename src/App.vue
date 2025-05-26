<script setup lang="ts">
import { useMouse, useWindowSize } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'
import DevMadeItLogo from './components/Logo/DevMadeItLogo.vue'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(300 - distance.value / 3, 150))

const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))

const logo = useTemplateRef('logo')

const logoGradient = computed(() => {
  const rect = logo.value?.getBoundingClientRect()
  const xPos = x.value - (rect?.left ?? 0)
  const yPos = y.value - (rect?.top ?? 0)

  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
})
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-b from-black to-primary-500/30 from-80% flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute bg-primary-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }"
    />

    <div ref="logo" :style="{ maskImage: logoGradient }">
      <DevMadeItLogo />
    </div>
  </div>
</template>
