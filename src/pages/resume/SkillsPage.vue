<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()

const skills = [
  {
    name: 'PHP',
    level: 4,
  },
  {
    name: 'VueJs',
    level: 4,
  },
  {
    name: 'SQL',
    level: 4,
  },
]
</script>

<template>
  <PageTemplate class="skills-page page-back">
    <h2 class="title mb-4 font-bold text-3xl text-center">Skills</h2>
    <div class="flex flex-col gap-5">
      <div v-for="(skill, index) in skills" :key="index" class="worked-content flex flex-col gap-2">
        <div>{{ skill.name }}</div>
        <progress :value="skill.level * 20" :max="100"></progress>
      </div>
    </div>
  </PageTemplate>
</template>
