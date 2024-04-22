<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()

const projects = [
  {
    title: 'Portal Klienta',
    period: '2019 - 2023',
    company: 'TaxOrder',
    description: 'Customer Portal application for invoice management & office-client communication. Written in VueJS + Laravel + SQL Server 2016.',
  },
  {
    title: 'LiteMES',
    period: '2016 - 2017',
    company: 'Kancelaria Skłodowscy',
    description: 'Production registration tool with web application user interface integrated with Softlab ERP. Aimed to be used with tablets and RFID card readers. Contains MES module, editable auto-generated data grid, status module with stats, service module, gate-keeper module.',
  },
  {
    title: 'WMS',
    period: '2014 - 2015',
    company: 'Kancelaria Skłodowscy',
    description: 'Original WMS module for Softlab ERP designed to be use on mobile devices with barcode scanners, integrated with logistic & sales modules.',
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
        <div class="flex flex-row items-center justify-between gap-4">
          <h3 class="font-bold text-lg leading-4">{{ project.title }}</h3>
          <div class="text-sm text-gray-500 font-light">{{ project.company }}</div>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>
