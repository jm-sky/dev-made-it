<script setup lang="ts">
import { useI18n } from '#imports'
import Button from '@/components/ui/button/Button.vue'
import GradientMaskedContent from '../GradientMaskedContent.vue'
import CompanyLogo from '../Logo/CompanyLogo.vue'

const { t } = useI18n()

const { scale, scaleDown, slideUp, delayed } = useAnimationConfig()
</script>

<template>
  <GradientMaskedContent>
    <CompanyLogo
      v-motion
      :initial="scaleDown.initial"
      :visible-once="scaleDown.visibleOnce"
      class="mb-2"
    />

    <p
      v-motion
      :initial="slideUp.initial"
      :visible-once="delayed(slideUp.visibleOnce, 200)"
      class="px-4 md:px-0 text-xl leading-relaxed md:text-2xl text-muted-foreground mb-8"
    >
      {{ t('hero.description') }}
    </p>

    <div
      v-motion
      :initial="scale.initial"
      :visible-once="delayed(scale.visibleOnce, 300)"
      class="flex justify-center gap-4"
    >
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
