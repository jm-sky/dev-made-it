<script setup lang="ts">
import { Resume } from '@/types/resume.type';
import PageLayout from '@/pages/resume/layouts/PageLayout.vue';

defineProps<{
  resume: Resume
}>()

</script>

<template>
  <PageLayout class="skills-page">
    <h2 class="title mb-4 font-bold text-3xl text-center">Skills</h2>
    <div class="flex flex-col gap-5">
      <div v-for="(branch, index) in resume.skills" :key="index" class="flex flex-col gap-2">
        <h4 class="font-bold text-lg">
          {{ branch.title }}
        </h4>
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(skill, index) in branch.skills"
            :key="index"
            class="skill border-2 border-primary-500 p-2 rounded-lg text-center transition-all hover:shadow-md hover:bg-white/50 hover:scale-105"
          >
            <i class="fa-fw fa-2x text-primary-500 mb-1" :class="`${skill.icon}`" />
            <h5 class="whitespace-nowrap font-semibold leading-4" :class="skill.level ? '-mb-1' : ''">
              {{ skill.name }}
            </h5>
            <progress v-if="skill.level" :value="skill.level * 20" :max="100" class="max-w-full h-2 -m-1"></progress>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style>
.skill {
  & progress[value] {
    --color:
      repeating-linear-gradient(135deg,rgba(0, 0, 0, .2) 0 10px,rgba(0, 0, 0, 0) 0 20px),
      var(--primary-color); 
    --background: lightgrey;
  
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-radius: .5rem;
    background: var(--background);
  }

  & progress[value]::-webkit-progress-bar {
    border-radius: 10em;
    background: var(--background);
  }

  & progress[value]::-webkit-progress-value {
    border-radius: 10em;
    background: var(--color);
  }

  & progress[value]::-moz-progress-bar {
    border-radius: 10em;
    background: var(--color);
  }
}
</style>