<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()

interface Skill {
  name: string
  icon: string
  level?: number
}

interface SkillBranch {
  title: string
  skills: Skill[]
}

const branches: Record<string, SkillBranch> = {
  frontEnd: {
    title: 'Font-end',
    skills: [
      {
        name: 'HTML',
        icon: 'fa-brands fa-html5',
        level: 4,
      },
      {
        name: 'JavaScript',
        icon: 'fa-brands fa-js',
        level: 4,
      },
      {
        name: 'VueJs',
        icon: 'fa-brands fa-vuejs',
        level: 4,
      },
      {
        name: 'CSS',
        icon: 'fa-brands fa-css3-alt',
        level: 3,
      },
      {
        name: 'Tailwind',
        icon: 'fa-brands fa-css3-alt',
        level: 3,
      },
      {
        name: 'Bootstrap',
        icon: 'fa-brands fa-bootstrap',
        level: 3,
      },
    ]
  },
  backend: {
    title: 'Back-end',
    skills: [
      {
        name: 'PHP',
        icon: 'fa-brands fa-php',
        level: 4,
      },
      {
        name: 'SQL',
        icon: 'fa-solid fa-database',
        level: 5,
      },
    ],
  },
  tools: {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        icon: 'fa-brands fa-git-alt',
      },
      {
        name: 'Guitar',
        icon: 'fa-solid fa-guitar',
      },
    ],
  },
}
</script>

<template>
  <PageTemplate class="skills-page page-back">
    <h2 class="title mb-4 font-bold text-3xl text-center">Skills</h2>
    <div class="flex flex-col gap-5">
      <div v-for="(branch, index) in branches" :key="index" class="flex flex-col gap-2">
        <h4 class="font-bold text-lg">
          {{ branch.title }}
        </h4>
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(skill, index) in branch.skills"
            :key="index"
            class="skill border-2 border-primary-500 p-2 rounded-lg text-center transition-all hover:shadow-md"
          >
            <i class="fa-fw fa-2x text-primary-500 mb-1" :class="`${skill.icon}`" />
            <h5 class="whitespace-nowrap font-semibold leading-4 -mb-1">
              {{ skill.name }}
            </h5>
            <progress v-if="skill.level" :value="skill.level * 20" :max="100" class="max-w-full h-2 -m-1"></progress>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
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