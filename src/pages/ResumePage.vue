<script setup lang="ts">
import { ref } from 'vue';
import '@/css/resume.css'
import ProfilePage from '@/pages/resume/ProfilePage.vue'
import ExperiencePage from '@/pages/resume/ExperiencePage.vue'
import CoursesPage from '@/pages/resume/CoursesPage.vue'
import ProjectsPage from '@/pages/resume/ProjectsPage.vue'
import SkillsPage from '@/pages/resume/SkillsPage.vue'
import LatestProjectPage from '@/pages/resume/LatestProjectPage.vue';
import ContactMePage from '@/pages/resume/ContactMePage.vue';

interface SocialLink {
  icon: string
  url: string
}

interface Course {
  title: string
  date: string
}

interface Project {
  title: string
  period: string
  company: string
  description: string
}

interface Skill {
  name: string
  icon: string
  level?: number
}

interface SkillBranch {
  title: string
  skills: Skill[]
}

export interface Resume {
  fullName: string
  caption: string
  description: string
  socialLinks: SocialLink[]
  courses: Course[]
  projects: Project[]
  skills: Record<string, SkillBranch>
}

const resume: Resume = {
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
  courses: [
    {
      title: 'Tuning and Optimizing SQL Databases',
      date: '2019',
    },
    {
      title: 'Attacking & protecting web applications',
      date: '2018',
    },
    {
      title: 'PRINCE 2 Foundation',
      date: '2019',
    },
    {
      title: 'Interpersonal Training',
      date: '2009',
    },
  ],
  projects: [
    {
      title: 'Portal Klienta',
      period: '2019 - 2023',
      company: 'TaxOrder',
      description: 'Customer Portal application for invoice management & office-client communication. Written in VueJS + Laravel + SQL Server 2016.',
    },
    {
      title: 'LiteMES',
      period: '2016 - 2017',
      company: 'Kancelaria Skłodowscy',
      description: 'Production registration tool with web application user interface integrated with Softlab ERP. Aimed to be used with tablets and RFID card readers. Contains MES module, editable auto-generated data grid, status module with stats, service module, gate-keeper module.',
    },
    {
      title: 'WMS',
      period: '2014 - 2015',
      company: 'Kancelaria Skłodowscy',
      description: 'Original WMS module for Softlab ERP designed to be use on mobile devices with barcode scanners, integrated with logistic & sales modules.',
    },
  ],
  skills: {
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
  },
}

export interface Turns {
  turn1: boolean
}

const currentPage = ref<number>(0)

const onPageTurn = (dir: number) => {
  currentPage.value += dir
} 
</script>

<template>
  <div class="wrapper p-8">
    <div class="cover cover-left"></div>
    <div class="cover cover-right turn"></div>

    <div class="book">
      <!-- Page 1 & 2 -->
      <div class="book-page page-left">
        <ProfilePage :resume v-model:currentPage="currentPage" />
      </div>

      <div class="book-page page-right" :class="{ turn: currentPage > 1 }">
        <ExperiencePage :page="1" :resume @turn="onPageTurn" />
        <CoursesPage :page="2" :resume @turn="onPageTurn" />
      </div>

      <div v-if="currentPage >= 2" class="book-page page-right" :class="{ turn: currentPage > 3 }">
        <ProjectsPage :currentPage :page="3" :resume @turn="onPageTurn" />
        <SkillsPage :currentPage :page="4" :resume @turn="onPageTurn" />
      </div>

      <div v-if="currentPage >= 4" class="book-page page-right" :class="{ turn: currentPage > 5 }">
        <LatestProjectPage :currentPage :page="5" :resume @turn="onPageTurn" />
        <ContactMePage :currentPage :page="6" :resume @turn="onPageTurn" />
      </div>

      <div v-if="currentPage >= 5" class="book-page page-right">
        <div class="h-full page-front"></div>
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
      transform-origin: left;
      transition: transform 1s cubic-bezier(.645, 0.45, .355, 1);

      &.turn {
        transform: rotateY(-180deg);
      }
    }
  }
}
</style>
