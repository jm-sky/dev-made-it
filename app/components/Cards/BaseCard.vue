<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    :class="cn(
      'p-6 bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
      'bg-gradient-to-br',
      'from-slate-50 via-slate-100 to-slate-50',
      'dark:from-slate-950 dark:via-slate-900 dark:to-slate-950',
      props.class,
    )"
    >
    <slot />
  </div>
</template>