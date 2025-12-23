<script setup lang="ts">
import type { Component } from 'vue'
import BaseCard from './BaseCard.vue'

defineProps<{
  title: string
  link: string
  url: string
  description: string
  icon?: Component
}>()
</script>

<template>
  <BaseCard class="space-y-2">
    <div class="flex flex-row items-center justify-start gap-5">
      <component
        :is="icon"
        v-if="icon"
        class="size-6"
      />
      <div class="flex flex-col gap-1">
        <div class="text-xl font-semibold">{{ title }}</div>
        <a :href="url" target="_blank" rel="noopener noreferrer" class="relative inline-block w-fit text-sm text-muted-foreground before:content-[''] before:absolute before:h-[2px] before:bottom-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
          {{ link }}
        </a>
      </div>
    </div>
    <p class="text-muted-foreground text-sm leading-relaxed">
      {{ description }}
    </p>
  </BaseCard>
</template>

