<script setup lang="ts">
import PageTemplate from './PageTemplate.vue';

defineProps<{
  resume: any
}>()
</script>

<template>
  <PageTemplate class="contact-me-page page-back">
    <h2 class="title mb-4 font-bold text-3xl text-center">Contact me</h2>
    <form class="flex flex-col gap-5">
      <input class="field" type="text" placeholder="Title" disabled>
      <input class="field" type="email" placeholder="E-mail" disabled>
      <textarea class="field" name="" id="" cols="30" rows="10" placeholder="Your message" disabled></textarea>
      <button type="submit" disabled
        class="btn px-4 py-2 text-sm font-semibold rounded border border-primary-500 transition-all duration-500 bg-primary-500 text-white hover:bg-white hover:text-primary-500"
      >
        Send
      </button>
    </form>
  </PageTemplate>
</template>

<style>
.field {
  @apply rounded border border-primary-500 px-3 py-2 text-sm;

  &[disabled] {
    @apply bg-gray-200 border-gray-500 cursor-not-allowed;
  }
}

.btn[disabled] {
  @apply bg-gray-400 border-gray-500 text-white cursor-not-allowed;
}
</style>