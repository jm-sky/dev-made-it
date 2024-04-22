<script setup lang="ts">
import '@/css/resume.css'
import ProfilePage from '@/pages/resume/ProfilePage.vue'
import ExperiencePage from '@/pages/resume/ExperiencePage.vue'

const resume = {
  fullName: 'Jan Madeyski',
  caption: "Full Stack Developer",
  description: 'Full Stack Developer with over 10 years of experience. Built apps for business clients, worked in small (3-person) and medium (6-people) teams.',
  socialLinks: [
    {
      icon: 'github',
      url: 'https://github.com/jm-sky',
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/jan-madeyski',
    },
  ],
}
</script>

<template>
  <div class="wrapper p-8">
    <div class="cover cover-left"></div>
    <div class="cover cover-right turn"></div>

    <div class="book">
      <div class="book-page page-left">
        <ProfilePage :resume />
      </div>
      <div class="book-page page-right" id="turn-1">
        <ExperiencePage :resume />
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  width: 66rem;
  height: 45rem;
  isolation: isolate;
}

.cover {
  @apply absolute top-0 left-0 w-1/2 h-full;
  background: var(--cover-color);
  box-shadow: var(--box-shadow);
  border-top-left-radius: .6rem;
  border-bottom-left-radius: .6rem;
  transform-origin: right;

  &.cover-left {
    z-index: -1;
  }

  &.cover-right.turn {
    transform: rotateY(180deg);
  }
}

.book {
  @apply relative w-full h-full flex;

  & .book-page {
    @apply absolute w-1/2 h-full flex flex-col;
    @apply p-8;
    background: var(--pages-color);
    box-shadow: 0 0 .6rem rgba(0, 0, 0, .1);

    & .page-front, .page-back {
      @apply absolute top-0 left-0 w-full h-full py-6 px-8;
      background: var(--pages-color);
    }

    & .page-front {
      transform: rotateY(0deg) translateZ(1px);
    }

    & .page-back {
      transform: rotateY(180deg) translateZ(1px);
    }

    &.page-right {
      @apply absolute right-0;
      transform-style: preserve-3d;
    }
  }
}
</style>
