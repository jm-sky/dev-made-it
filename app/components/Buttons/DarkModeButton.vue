<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    variant="ghost"
    size="sm"
    class="relative size-8"
    @click="toggleDark()"
  >
    <Transition
      enter-from-class="opacity-0 -translate-y-5"
      enter-active-class="absolute transition-all duration-300 ease-in-out"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="absolute transition-all duration-200 ease-in-out"
      leave-to-class="opacity-0 translate-y-5"
    >
      <MoonIcon v-if="isDark" class="size-4" />
      <SunIcon v-else class="size-4" />
    </Transition>
  </Button>
</template>

