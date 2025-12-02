<script setup lang="ts">
import { useI18n } from '#imports'
import NavbarSection from '@/components/Layout/Navbar.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
import ScrollToTop from '@/components/Sections/ScrollToTop.vue'
import Button from '@/components/ui/button/Button.vue'
import CompanyLogo from '@/components/Logo/CompanyLogo.vue'

const { t } = useI18n()
const { scale, scaleDown, slideUp, delayed } = useAnimationConfig()

useHead({
  title: `404 - ${t('error404.title')} | DEV Made IT`,
  meta: [
    { name: 'description', content: t('error404.description') },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <div>
    <NavbarSection />

    <section class="w-full min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 from-80% flex flex-col items-center justify-center">
      <CompanyLogo
        v-motion
        :initial="scaleDown.initial"
        :visible-once="scaleDown.visibleOnce"
        class="mb-4"
      />

      <h1
        v-motion
        :initial="slideUp.initial"
        :visible-once="delayed(slideUp.visibleOnce, 200)"
        class="text-6xl md:text-8xl font-bold mb-4 text-center"
      >
        404
      </h1>

      <p
        v-motion
        :initial="slideUp.initial"
        :visible-once="delayed(slideUp.visibleOnce, 300)"
        class="px-4 md:px-0 text-xl leading-relaxed md:text-2xl text-muted-foreground mb-8 text-center"
      >
        {{ t('error404.message') }}
      </p>

      <div
        v-motion
        :initial="scale.initial"
        :visible-once="delayed(scale.visibleOnce, 400)"
        class="flex justify-center gap-4"
      >
        <Button
          as="a"
          href="/"
          size="lg"
          variant="primary"
          vibe="primary"
        >
          <span class="relative z-10">{{ t('error404.backHome') }}</span>
        </Button>
      </div>
    </section>

    <FooterSection />
    <ScrollToTop />
  </div>
</template>

