<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()

const projects = [
  {
    title: 'Portal Klienta',
    period: '2019 - present',
    company: 'TaxOrder',
    description: 'Customer Portal single page application made in VueJS',
  },
  {
    title: 'LiteMES',
    period: '2016 - 2017',
    company: 'Skłodowscy',
    description: 'Production registration tool with web user interface',
  },
]
</script>

<template>
  <PageTemplate class="projects-page page-front">
    <h2 class="title mb-4 font-bold text-3xl text-center">Projects</h2>
    <div class="worked-box flex flex-col gap-5">
      <div v-for="(project, index) in projects" :key="index" class="worked-content flex flex-col gap-2">
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i>
          {{ project.period }}
        </span>
        <h3 class="font-bold text-lg leading-4">{{ project.title }}</h3>
        <div class="flex flex-col gap-2 text-sm">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>
