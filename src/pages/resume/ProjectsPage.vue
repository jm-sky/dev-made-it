<script setup lang="ts">
import { Resume } from '@/types/resume.type';
import PageLayout from '@/pages/resume/layouts/PageLayout.vue';

defineProps<{
  resume: Resume
}>()
</script>

<template>
  <PageLayout class="projects-page">
    <h2 class="title mb-4 font-bold text-3xl text-center">Projects</h2>
    <div class="flex flex-col gap-6">
      <div v-for="(project, index) in resume.projects" :key="index" class="flex flex-col gap-2">
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i>
          {{ project.period }}
        </span>
        <div class="flex flex-row items-center justify-between gap-4">
          <h3 class="font-bold text-lg leading-4">{{ project.title }}</h3>
          <div class="text-sm text-gray-500 font-light">{{ project.company }}</div>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <p class="text-justify">{{ project.description }}</p>
        </div>
      </div>

      <div class="mt-6 italic text-center text-sm text-gray-400">
        ...and other
      </div>
    </div>
  </PageLayout>
</template>
