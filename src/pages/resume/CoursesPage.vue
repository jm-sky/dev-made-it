<script setup lang="ts">
import { Resume } from '@/types/resume.type.ts';
import PageLayout from '@/pages/resume/layouts/PageLayout.vue';

defineProps<{
  resume: Resume
}>()
</script>

<template>
  <PageLayout class="flex flex-col gap-8">
    <div>
      <h2 class="title mb-4 font-bold text-3xl text-center">Courses</h2>
      <div class="flex flex-col gap-5">
        <div v-for="(course, index) in resume.courses" :key="index" class="flex flex-row gap-3">
          <div>
            <i class="text-primary-500" :class="course.icon"></i>
          </div>
          <div class="w-full">
            <h3 class="font-bold text-lg mb-2 flex flex-row items-center">
              {{ course.title }}
            </h3>
            <div class="flex flex-row gap-4  text-gray-500">
              <span class="year text-xs uppercase">
                <i class="fa-solid fa-calendar mr-1"></i> {{ course.date }}
              </span>
              <span class="text-xs">
                <i class="fa-solid fa-university mr-1"></i> {{ course.tutor }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="title mb-4 font-bold text-3xl text-center">Languages</h2>
      <div class="flex flex-col gap-5">
        <div v-for="language in resume.languages" :key="language.language">
          <h4 class="flex flex-row justify-between items-center text-lg font-bold mb-1">
            {{ language.language }}
            <span class="font-light text-sm text-gray-500">{{ language.level }}</span>
          </h4>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
