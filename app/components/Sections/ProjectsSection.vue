<script setup lang="ts">
import { Backpack, Lightbulb, Paintbrush } from 'lucide-vue-next'
import { useI18n } from '#imports'
import ProjectCard from '../Cards/ProjectCard.vue'

const { t } = useI18n()
const { slideUp, scaleDown, delayed } = useAnimationConfig()

const ourProjects = [
  {
    title: 'Sava Group',
    link: 'sava-group.pl',
    url: 'https://sava-group.pl',
    descriptionKey: 'projects.ourProjects.savaGroup.description',
    icon: Lightbulb
  },
  {
    title: 'Gear Stack',
    link: 'gear-stack.ovh',
    url: 'https://gear-stack.ovh',
    descriptionKey: 'projects.ourProjects.gearStack.description',
    icon: Backpack
  },
  {
    title: 'WiarBud',
    link: 'wiarbud.dev-made.it',
    url: 'https://wiarbud.dev-made.it',
    descriptionKey: 'projects.ourProjects.wiarbud.description',
    icon: Paintbrush
  }
]

</script>

<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2
        v-motion
        :initial="scaleDown.initial"
        :visible-once="scaleDown.visibleOnce"
        :delay="100"
        class="text-4xl font-bold text-center mb-12 border-b-4 border-primary pb-2 w-fit mx-auto"
      >
        {{ t('projects.title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in ourProjects"
          :key="project.url"
          v-motion
          :title="project.title"
          :link="project.link"
          :url="project.url"
          :description="t(project.descriptionKey)"
          :icon="project.icon"
          :initial="slideUp.initial"
          :visible-once="delayed(slideUp.visibleOnce, 200 + (index * 100))"
        />
      </div>
    </div>
  </section>
</template>

