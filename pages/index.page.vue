<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue'
import About from '@/components/Page/About.vue'
import Contact from '@/components/Page/Contact.vue'
import Footer from '@/components/Page/Footer.vue'
import Hero from '@/components/Page/Hero.vue'
import ScrollToTop from '@/components/Page/ScrollToTop.vue'
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
</template>