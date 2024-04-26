<script setup lang="ts">
import { ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core'
import '@/css/resume.css'
import OutlineButton from '@/components/buttons/OutlineButton.vue'
import ProfilePage from '@/pages/resume/ProfilePage.vue'
import SheetLayout from '@/pages/resume/layouts/SheetLayout.vue'
import ExperiencePage from '@/pages/resume/ExperiencePage.vue'
import CoursesPage from '@/pages/resume/CoursesPage.vue'
import ProjectsPage from '@/pages/resume/ProjectsPage.vue'
import SkillsPage from '@/pages/resume/SkillsPage.vue'
import LatestProjectPage from '@/pages/resume/LatestProjectPage.vue'
import ContactMePage from '@/pages/resume/ContactMePage.vue'
import { resume } from '@/data/resume'

const currentPage = ref<number>(0)

const onPageTurn = (dir: number) => {
  currentPage.value += dir
} 

const resumeVisible = ref(false)
const resumeRef = ref<HTMLElement | undefined>()
const resumeRefIsVisible = useElementVisibility(resumeRef)

watch(resumeRefIsVisible, (visible: boolean) => {
  resumeVisible.value = resumeVisible.value || visible
})
</script>

<template>
  <div ref="resumeRef" class="resume-wrapper relative isolate p-5 md:p-8 max-w-full" :class="{ onScreen: resumeVisible }">
    <div class="cover cover-left"></div>
    <div class="cover cover-right turn"></div>

    <div class="book max-w-[calc(100vw-1rem)] relative w-full h-full block md:flex">
      <!-- Page 0 -->
      <div class="book-page page-left">
        <ProfilePage v-model:currentPage="currentPage" :page="0" :resume />
      </div>
      
      <!-- Page 1 & 2 -->
      <SheetLayout :page="1" :currentPage>
        <ExperiencePage :currentPage :page="1" :resume @turn="onPageTurn" />
        <CoursesPage :currentPage :page="2" :resume @turn="onPageTurn" />
      </SheetLayout>

      <!-- Page 3 & 4 -->
      <SheetLayout :page="3" :currentPage>
        <ProjectsPage :currentPage :page="3" :resume @turn="onPageTurn" />
        <SkillsPage :currentPage :page="4" :resume @turn="onPageTurn" />
      </SheetLayout>

      <!-- Page 5 & 6 -->
      <SheetLayout :page="5" :currentPage>
        <LatestProjectPage :currentPage :page="5" :resume @turn="onPageTurn" />
        <ContactMePage :currentPage :page="6" :resume @turn="onPageTurn" />
      </SheetLayout>

      <!-- Last page -->
      <SheetLayout :page="7" :currentPage>
        <div class="h-full page-front grid place-items-center">
          <OutlineButton class="md:hidden" @click="currentPage = 0">Back to first page</OutlineButton>
        </div>
      </SheetLayout>
    </div>
  </div>
</template>

<style>
.resume-wrapper {
  width: 66rem;
  height: 45rem;
  scale: .5;
  opacity: .5;
  filter: blur(3px);

  &.onScreen {
    animation: flyIn 500ms 100ms ease-in-out forwards;
  }
}

.cover {
  @apply absolute top-0 left-0 h-full;
  @apply w-full md:w-1/2;
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
  perspective: 250rem;

  & .book-page {
    @apply absolute h-full flex flex-col p-8;
    @apply w-full md:w-1/2;
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
      transform-origin: left;
      transition: transform 1s cubic-bezier(.645, 0.45, .355, 1);

      &.turn {
        transform: rotateY(-180deg);
      }
    }
  }
}

.not-shown {
  z-index: 0;
  animation: not-shown 500ms linear;
}

.shown {
  z-index: 10;
  animation: shown 500ms linear;
}

@keyframes not-shown {
  0% {
    z-index: 10;
  }
  100% {
    z-index: 0;
  }
}

@keyframes shown {
  0% {
    z-index: 0;
  }
  100% {
    z-index: 10;
  }
}

@keyframes flyIn {
  0% {
    scale: .5;
    opacity: .5;
    filter: blur(3px);
  }
  100% {
    scale: 1;
    opacity: 1;
    filter: blur(0px);
  }
}
</style>
