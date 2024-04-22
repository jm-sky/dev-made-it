<script setup lang="ts">
import { Resume } from '../ResumePage.vue';
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: Resume
}>()
</script>

<template>
  <PageTemplate class="page-back">
    <h2 class="title mb-4 font-bold text-3xl text-center">Courses</h2>
    <div class="flex flex-col gap-5">
      <div v-for="(course, index) in resume.courses" :key="index" class="course-box">
        <h3 class="font-bold text-lg">{{ course.title }}</h3>
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i> {{ course.date }}
        </span>
      </div>
    </div>
  </PageTemplate>
</template>
