<script setup lang="ts">
import { useAnimationConfig } from '~/composables/useAnimationConfig'

defineProps<{
  title: string
}>()

const { scaleDown } = useAnimationConfig()
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2
        v-motion
        :initial="scaleDown.initial"
        :visible-once="scaleDown.visibleOnce"
        :delay="100"
        class="text-4xl font-bold text-center mb-12 border-b-4 border-primary pb-2 w-fit mx-auto"
      >
        {{ title }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <slot />
      </div>
    </div>
  </section>
</template>
