<script setup lang="ts">
import { useI18n } from '#imports'
import { Button } from '@/components/ui/button'

const { t } = useI18n()
</script>

<template>
  <div class="ml-10 flex items-baseline space-x-4">
    <Button
      as="a"
      href="#"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.home') }}
    </Button>
    <Button
      as="a"
      href="#about"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.about') }}
    </Button>
    <Button
      as="a"
      href="#contact"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.contact') }}
    </Button>
  </div>
</template>