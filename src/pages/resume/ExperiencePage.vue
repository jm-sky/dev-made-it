<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()

const experience = [
  {
    position: 'Full Stack Developer',
    period: '2019 - present',
    company: 'TaxOrder',
    description: [
      {
        title: 'Roles and Responsibilities:',
        content: [
          'Creating company’s flagship web application as a tech-lead (PHP, VueJS, SQL Server)',
          'Creating some API services (i.e. KSeF) (PHP, Laravel, XML, JSON)',
          'Development and construction of CI/CD (GitLab, Linux)',
          'Task planning, code review, debugging, writing tests',
        ],
      },
      {
        title: 'Technologies:',
        content: ['PHP 8, Laravel, PHPUnit, TypeScript, JavaScript, VueJS, Microsoft SQL Server, PostgreSQL, Docker, GitLab, GitHub, XML, JSON'],
      },
    ],
  },
  {
    position: 'Implementation Consultant',
    period: '2014 - 2019',
    company: 'Skłodowscy',
    description: [
      {
        title: 'Projects',
        content: [
          'Implementing origincal MES application for production plant',
          'Implementing custom WMS module for Asseco Softlab ERP',
        ],
      }
    ],
  }
]
</script>

<template>
  <PageTemplate class="experience-page page-front">
    <h2 class="title mb-4 font-bold text-3xl text-center">Experience</h2>
    <div class="worked-box flex flex-col gap-5">
      <div v-for="(job, index) in experience" :key="index" class="worked-content flex flex-col gap-2">
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i>
          {{ job.period }}
        </span>
        <h3 class="font-bold text-lg leading-4">{{ job.position }}</h3>
        <div v-if="job.description?.length" class="flex flex-col gap-2 text-sm">
          <template v-for="paragraph in job.description">
            <h5 class="font-bold">{{ paragraph.title }}</h5>
            <ul class="list-disc ml-4">
              <li v-for="(content, jndex) in paragraph.content" :key="jndex">{{ content }}</li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<style>
.experience-page {

  & .worked-box {
    @apply relative border-l-2 border-primary-500;
  }

  & .worked-content {
    @apply relative pl-4;

    &::before {
      content: '';
      @apply absolute top-0 -left-[1px] -translate-x-1/2;
      @apply w-4 aspect-square bg-primary-500 rounded-full;
    }
  }
}
</style>
