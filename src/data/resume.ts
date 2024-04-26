import { Resume } from '@/types/resume.type';

export const resume: Resume = {
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
