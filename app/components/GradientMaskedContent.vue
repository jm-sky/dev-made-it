<script setup lang="ts">
import { useMouse, useWindowSize } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const MIN_SIZE = 200
const MAX_SIZE = 500

const size = computed(() => Math.max(MAX_SIZE - distance.value / 3, MIN_SIZE))
const opacity = computed(() => Math.min(Math.max(size.value / MAX_SIZE, 0.7), 1))

const contentElement = useTemplateRef('content')

const maskImageGradient = computed(() => {
  const rect = contentElement.value?.getBoundingClientRect()
  const xPos = x.value - (rect?.left ?? 0)
  const yPos = y.value - (rect?.top ?? 0)

  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 40%, transparent 90%)`
})
</script>

<template>
  <section
    class="w-full h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 from-80% flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute bg-primary-300/30 dark:bg-primary-700/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }"
    />

    <div ref="content" :style="{ maskImage: maskImageGradient }" class="py-20">
      <slot />
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1/8 bg-gradient-to-b from-transparent to-white dark:from-transparent dark:to-gray-900" />
  </section>
</template>
