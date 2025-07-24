<script setup lang="ts">
import { useI18n } from '#imports'
import { Button } from '@/components/ui/button'
import GradientMaskedContent from '../GradientMaskedContent.vue'
import DevMadeItLogo from '../Logo/DevMadeItLogo.vue'

const { t } = useI18n()
</script>

<template>
  <GradientMaskedContent>
    <DevMadeItLogo class="mb-2" />
    <p class="px-4 md:px-0 text-xl leading-relaxed md:text-2xl text-muted-foreground mb-8">
      {{ t('hero.description') }}
    </p>
    <div class="flex justify-center gap-4">
      <Button
        as="a"
        href="#about"
        size="lg"
        variant="primary"
        vibe="primary"
      >
        <span class="relative z-10">{{ t('hero.learnMore') }}</span>
      </Button>

      <Button
        as="a"
        href="#contact"
        size="lg"
        variant="outline"
        vibe="outline"
      >
        {{ t('hero.contact') }}
      </Button>
    </div>
  </GradientMaskedContent>
</template>
