<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'
import { useSpotlight } from '@/composables/useSpotlight'
import DevMadeItLogo from '@/pages/main/logo/DevMadeItLogo.vue'
import FooterLinks from '@/pages/main/logo/FooterLinks.vue'
import TypeWriter from '@/pages/main/logo/TypeWriter.vue'

const { x, y } = useMouse()

const logo = ref<HTMLElement>()

const { size, opacity, logoGradient } = useSpotlight(x, y, logo)
</script> 

<template>
  <section
    class="logo-section w-screen h-screen bg-gradient-to-b from-black to-transparent from-80% flex flex-col items-center justify-center relative overflow-hidden"
  >
    <TypeWriter />

    <div
      class="absolute bg-primary-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }"
    />

    <div ref="logo" :style="{ maskImage: logoGradient }">
      <DevMadeItLogo />
    </div>

    <FooterLinks />
  </section>
</template>
