<script setup lang="ts">
interface Project {
  id: string
  name: string
  description: string
  tags?: string[]
}

const projects: Project[] = [
  {
    id: 'Bible',
    name: 'mSky Bible',
    description: 'Progressive Web App Bible reader',
    tags: ['JavaScript', 'VueJS', 'Quasar']
  },
  {
    id: 'LiteMes',
    name: 'LiteMes',
    description: 'Production registration tool with web app user interface integrated with ERP system.',
    tags: ['PHP, JavaScript, jQuery, SQL Server'],
  },
  {
    id: 'PortalKlienta',
    name: 'Portal Klienta',
    description: 'Customer Portal application for office-client communication, issuing invoices etc.',
    tags: ['PHP', 'JavaScript', 'VueJS', 'SQL Server'],
  },
  {
    id: 'DevMadeIT',
    name: 'Dev Made IT',
    description: 'This home page.',
  },
];
</script>

<template>
  <div class="projects my-10 grid gap-5">
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-card grid gap-2 px-5 p-3 rounded-xl border text-white border-primary-800 shadow-lg bg-primary-950/30 transition-transform duration-500 hover:scale-105"
    >
      <h3 :id="project.id" class="font-bold text-lg">{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="opacity-80 font-mono text-sm">{{ project.tags?.join(', ') }}</div>
    </div>
  </div>
</template>

<style>
.project-card {
  isolation: isolate;
  position: relative;

  &::before {
    content: '';
    @apply absolute w-full h-full rounded-xl;
    background: radial-gradient(ellipse at top, #eff3 0%, transparent 50%);
  }
}
</style>
