<script setup lang="ts">
import LogoSection from '@/pages/main/LogoSection.vue'
import ResumePage from '@/pages/ResumePage.vue'
</script>

<template>
  <main class="overflow-hidden">
    <LogoSection class="logo-section " />
    <div class="resume-outer-wrapper grid place-items-center min-w-screen min-h-screen mt-4 py-8 max-w-full">
      <ResumePage />
    </div>
  </main>
</template>
