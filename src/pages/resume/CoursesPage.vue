<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

</script>

<template>
  <PageTemplate class="page-back">
    <h2 class="title mb-4 font-bold text-3xl text-center">Courses</h2>
    <div class="flex flex-col gap-5">
      <div class="course-box">
        <h3 class="font-bold text-lg">Optimizing & Tuning SQL Server</h3>
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i> 2019
        </span>
      </div>
      <div class="course-box">
        <h3 class="font-bold text-lg">Attacking & Defending Web Applications</h3>
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i> 2019
        </span>
      </div>
      <div class="course-box">
        <h3 class="font-bold text-lg">PRINCE 2 Foundation</h3>
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i> 2019
        </span>
      </div>
      <div class="course-box">
        <h3 class="font-bold text-lg">Interpersonal Training</h3>
        <span class="year text-xs text-primary-500 uppercase">
          <i class="fa-solid fa-calendar mr-1"></i> 2010
        </span>
      </div>
    </div>
  </PageTemplate>
</template>
