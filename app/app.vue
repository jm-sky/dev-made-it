<script setup>
import NavbarSection from '@/components/Layout/Navbar.vue'
import HeroSection from '@/components/Sections/HeroSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
import ScrollToTop from '@/components/Sections/ScrollToTop.vue'

useHead({
  title: 'DEV Made IT - Full-stack web development',
  meta: [
    { name: 'description', content: 'Full-stack web development focused on practical solutions and business process optimization.' },
  ],
})

useSeoMeta({
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  robots: 'index,follow',
})
</script>

<template>
  <div>
    <NavbarSection />
    <HeroSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>
