<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()
</script>

<template>
  <PageTemplate class="latest-project-page page-front">
    <h2 class="title mb-4 font-bold text-3xl text-center">Latest project</h2>
    <div class="flex flex-col gap-3">
      <div class="image-box rounded-lg border-2 border-primary-500 max-auto overflow-hidden w-full h-64">
        <img
          src="/assets/bible-2.jpg"
          alt="Bible"
          class="object-cover hover:scale-110 transition-all duration-500 h-full"
        />
      </div>
      <div class="flex flex-row items-center justify-between gap-2">
        <h4 class="text-lg font-bold">mSky Bible</h4>
        <a href="#" class="text-sm text-primary-500 font-semibold hover:font-primary-600">
          Preview
          <i class="fa-solid fa-external-link scale-75" />
        </a>
      </div>
      <p>
        Simple Bible reader progressive web application. You can zoom in/out & copy verses with book annotations.
      </p>
      <div class="mt-4 flex flex-row justify-center gap-4">
        <a
          href="https://github.com/jm-sky/bible"
          class="px-5 py-3 bg-primary-500 text-white rounded text-sm font-semibold transition-all duration-500 border border-primary-500 hover:text-primary-500 hover:bg-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github mr-1"></i>
          Source code
        </a>
      </div>
    </div>
  </PageTemplate>
</template>
