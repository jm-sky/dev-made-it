<script setup lang="ts">
import LogoSection from '@/pages/main/LogoSection.vue'
import ResumePage from '@/pages/ResumePage.vue';
</script>

<template>
  <main class="overflow-hidden bg-primary-800">
    <LogoSection />
    <div class="grid place-items-center min-h-screen py-8 max-w-full">
      <ResumePage />
    </div>
  </main>
</template>