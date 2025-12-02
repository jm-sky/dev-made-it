<script setup lang="ts">
import { useI18n } from '#imports'
import ButtonLink from '../ui/button/ButtonLink.vue';

const { t } = useI18n()
</script>

<template>
  <div class="ml-10 flex items-baseline space-x-4">
    <ButtonLink
      to="/"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.home') }}
    </ButtonLink>
    <ButtonLink
      to="/#about"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.about') }}
    </ButtonLink>
    <ButtonLink
      to="/#contact"
      variant="ghost"
      vibe="underline"
    >
      {{ t('nav.contact') }}
    </ButtonLink>
  </div>
</template>
