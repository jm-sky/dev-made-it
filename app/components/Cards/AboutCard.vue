<script setup lang="ts">
import BaseCard from './BaseCard.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <BaseCard class="space-y-2">
    <h3 class="text-xl font-semibold mb-4">
      {{ title }}
    </h3>
    <slot />
  </BaseCard>
</template>