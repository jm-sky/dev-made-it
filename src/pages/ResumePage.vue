<script setup lang="ts">
import { ref } from 'vue';
import '@/css/resume.css'
import { Resume } from '@/types/resume.type';
import OutlineButton from '@/components/buttons/OutlineButton.vue';
import ProfilePage from '@/pages/resume/ProfilePage.vue'
import SheetLayout from '@/pages/resume/layouts/SheetLayout.vue'
import ExperiencePage from '@/pages/resume/ExperiencePage.vue'
import CoursesPage from '@/pages/resume/CoursesPage.vue'
import ProjectsPage from '@/pages/resume/ProjectsPage.vue'
import SkillsPage from '@/pages/resume/SkillsPage.vue'
import LatestProjectPage from '@/pages/resume/LatestProjectPage.vue';
import ContactMePage from '@/pages/resume/ContactMePage.vue';

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
  experience: [
    {
      position: 'Full Stack Developer',
      period: '2019 - present',
      company: 'TaxOrder',
      description: [
        {
          title: 'Roles and Responsibilities:',
          content: [
            'Creating company’s flagship web application as a tech-lead (PHP, VueJS, SQL Server)',
            'Creating some API services (i.e. KSeF) (PHP, Laravel, XML, JSON)',
            'Development and construction of CI/CD (GitLab, Linux)',
            'Task planning, code review, debugging, writing tests',
          ],
        },
        {
          title: 'Technologies:',
          content: ['PHP 8, Laravel, PHPUnit, TypeScript, JavaScript, VueJS, Microsoft SQL Server, PostgreSQL, Docker, GitLab, GitHub, XML, JSON'],
        },
      ],
    },
    {
      position: 'Implementation Consultant',
      period: '2014 - 2019',
      company: 'Skłodowscy',
      description: [
        {
          title: 'Projects',
          content: [
            'Implementing origincal MES application for production plant',
            'Implementing custom WMS module for Asseco Softlab ERP',
          ],
        }
      ],
    },
  ],
  languages: [
    {
      language: 'English',
      level: 'B2',
    },
    {
      language: 'Russian',
      level: 'B1',
    },
    {
      language: 'Ukrainian',
      level: 'A2',
    },
  ],
  courses: [
    {
      title: 'Tuning and Optimizing SQL Databases',
      tutor: 'Microsoft',
      date: '2019',
      icon: 'fa-solid fa-database',
    },
    {
      title: 'Attacking & protecting web applications',
      tutor: 'Niebezpiecznik.pl',
      date: '2018',
      icon: 'fa-solid fa-shield',
    },
    {
      title: 'PRINCE 2 Foundation',
      tutor: 'Axelos',
      date: '2019',
      icon: 'fa-solid fa-list-check',
    },
    {
      title: 'Interpersonal Training',
      tutor: 'PFS',
      date: '2009',
      icon: 'fa-solid fa-comments',
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
      title: 'Front-end',
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
          name: 'Laravel',
          icon: 'fa-brands fa-laravel',
          level: 3,
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
          name: 'Docker',
          icon: 'fa-brands fa-docker',
        },
        {
          name: 'Linux',
          icon: 'fa-brands fa-linux',
        },
        {
          name: 'Guitar',
          icon: 'fa-solid fa-guitar',
        },
      ],
    },
  },
}

const currentPage = ref<number>(0)

const onPageTurn = (dir: number) => {
  currentPage.value += dir
} 
</script>

<template>
  <div class="wrapper relative isolate p-5 md:p-8 max-w-full">
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
.wrapper {
  width: 66rem;
  height: 45rem;
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
</style>
