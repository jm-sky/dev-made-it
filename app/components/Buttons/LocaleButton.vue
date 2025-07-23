<script setup lang="ts">
import { useI18n } from '#imports'
import { Button } from '@/components/ui/button'

const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  const nextLocale = locale.value === 'pl' ? 'en' : 'pl'
  setLocale(nextLocale)
}
</script>

<template>
  <Button
    variant="ghost"
    size="sm"
    class="relative size-8"
    @click="toggleLocale()"
  >
    <Transition
      enter-from-class="opacity-0 -translate-y-5"
      enter-active-class="absolute transition-all duration-300 ease-in-out"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="absolute transition-all duration-200 ease-in-out"
      leave-to-class="opacity-0 translate-y-5"
    >
      <span v-if="locale === 'pl'">PL</span>
      <span v-else>EN</span>
    </Transition>
  </Button>
</template>

