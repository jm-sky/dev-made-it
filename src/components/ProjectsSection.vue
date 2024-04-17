<script setup lang="ts">
import ResumeImageNavigation from './partials/ResumeImageNavigation.vue';
import ResumeProjects from './partials/ResumeProjects.vue';
</script>

<template>
  <section id="projects-section" class="projects-section relative grid place-items-center w-screen min-h-screen bg-primary-800">
    <ResumeImageNavigation />
    <ResumeProjects />
  </section>
</template>

<style>
.projects-section {
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: linear-gradient(to bottom, transparent, #fff 30rem, var(--clr-primary), transparent);
    z-index: -1;
  }
}
</style>
