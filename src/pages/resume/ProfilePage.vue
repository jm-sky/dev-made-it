<script setup lang="ts">
import { Resume } from '@/types/resume.type';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import OutlineButton from '@/components/buttons/OutlineButton.vue';
import PageLayout from '@/pages/resume/layouts/PageLayout.vue';

defineProps<{
  resume: Resume
}>()

const currentPage = defineModel<number>('currentPage', { required: true })
</script>

<template>
  <PageLayout class="profile-page flex flex-col justify-center items-center gap-y-3">
    <img src="/assets/profile.jpg" alt="" class="rounded-full w-40 border-4 border-primary-500">
    <h1 class="text-4xl font-bold">{{ resume.fullName }}</h1>
    <h3 class="text-lg font-bold text-primary-500">{{ resume.caption }}</h3>
    
    <div v-if="resume.socialLinks?.length" class="social-media flex flex-row gap-3">
      <a v-for="(link, index) in resume.socialLinks" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-fw" :class="`fa-${link.icon}`"></i>
      </a>
    </div>

    <p class="text-justify">{{ resume.description }}</p>

    <div class="buttons flex flex-row gap-4 mt-4">
      <PrimaryButton href="/assets/Madeyski Jan - CV.pdf" anchor>
        Download CV
      </PrimaryButton>
      <OutlineButton @click="currentPage = 6">
        Contact Me
      </OutlineButton>
    </div>

  </PageLayout>
</template>

<style>
.profile-page {
  & .social-media a {
  @apply aspect-square text-primary-500 rounded-full border border-primary-500 flex items-center justify-center p-2;
  @apply transition-colors duration-500;
  
  &:hover {
    @apply text-white bg-primary-500;
  }
}
}
</style>
