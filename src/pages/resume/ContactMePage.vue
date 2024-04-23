<script setup lang="ts">
import { Resume } from '@/types/resume.type';
import PageLayout from '@/pages/resume/layouts/PageLayout.vue';
import TextLink from '@/components/buttons/TextLink.vue';

defineProps<{
  resume: Resume
}>()
</script>

<template>
  <PageLayout class="contact-me-page">
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
    <div class="mt-8 border border-primary-500 bg-white/50 text-sm px-4 py-4 rounded-md ">
      <i class="fa-solid fa-envelope text-primary-500 mr-2"></i>
      <TextLink href="mailto:jan.madeyski@gmail.com" class="hover:text-primary-500" flat>
        jan.madeyski@gmail.com
      </TextLink>
    </div>
  </PageLayout>
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