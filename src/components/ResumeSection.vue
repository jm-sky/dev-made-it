<script setup lang="ts">
interface Project {
  id: string
  name: string
  description: string
  tags?: string[]
}

const projects: Project[] = [
  {
    id: 'Bible',
    name: 'mSky Bible',
    description: 'Progressive Web App Bible reader',
    tags: ['JavaScript', 'VueJS', 'Quasar']
  },
  {
    id: 'LiteMes',
    name: 'LiteMes',
    description: 'Production registration tool with web app user interface integrated with ERP system.',
    tags: ['PHP, JavaScript, jQuery, SQL Server'],
  },
  {
    id: 'PortalKlienta',
    name: 'Portal Klienta',
    description: 'Customer Portal application for office-client communication, issuing invoices etc.',
  },
  {
    id: 'DevMadeIT',
    name: 'Dev Made IT',
    description: 'This home page.',
  },
];
</script>

<template>
  <section class="resume-section relative grid place-items-center w-screen min-h-screen bg-primary-800">
    <div class="resume">
      <a href="#Bible" title="m-sky Bible"><img src="/assets/bible-1.jpg" alt="m-sky Bible"></a>
      <a href="#LiteMes" title="LiteMES"><img src="/assets/bible-2.jpg" alt="LiteMES"></a>
      <a href="#PortalKlienta" title="Portal Klienta"><img src="/assets/bible-3.jpg" alt="Portal Klienta"></a>
      <a href="#DevMadeIT" title="DevMadeIT"><img src="/assets/bible-4.jpg" alt="DevMadeIT"></a>
    </div>

    <div class="projects my-10 grid gap-5">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card grid gap-2 px-5 p-3 rounded-xl border border-primary-800 shadow-lg bg-primary-950/30 transition-transform duration-500 hover:scale-105"
      >
        <h3 :id="project.id" class="font-bold text-lg">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="opacity-80 font-mono text-sm">{{ project.tags?.join(', ') }}</div>
      </div>
    </div>

  </section>
</template>

<style>
.resume-section {
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

.resume {
  --gap: 0.5rem;
  --image-size: calc(150px - .5rem);
  --radius: 1rem;
  --columns: 4;
  --rows: 3;
  position: relative;
  height: calc(var(--image-size) * var(--columns) + 4rem);
  width: fit-content;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--image-size));
  grid-template-rows: repeat(var(--rows), var(--image-size));
  gap: var(--gap);

  &:hover a img {
    filter: grayscale(var(--filter-grayscale));
  }

  a {
    --filter-grayscale: 1;
    --filter-blur: 0.25rem;
    cursor: pointer;
    position: relative;
    width: calc(var(--image-size) * 2);
    grid-column: span 2;
    border-radius: var(--radius);
    clip-path: path('M 115.2 28.8 C 144 0 144 0 172.8 28.8 C 182.3998 38.3998 192.0002 48.0002 259.2 115.2 C 288 144 288 144 259.2 172.8 C 230.4 201.6 201.6 230.4 172.8 259.2 C 144 288 144 288 115.2 259.2 C 86.4 230.4 57.6 201.6 28.8 172.8 C 0 144 0 144 28.8 115.2');
    transition: transform 500ms ease-in-out,
              clip-path 500ms ease,
              filter 500ms ease,
              --filter-grayscale 500ms ease;
    
    &:nth-of-type(1) {
      grid-column: 2 / span 2;
    }
    
    &:nth-of-type(4) {
      grid-column: 2 / span 2;
    }
    
    &:hover {
      --filter-grayscale: 0;
      z-index: 100;
      clip-path: path('M 0 0 C 144 0 144 0 288 0 C 288 40 288 49 288 119 C 288 144 288 144 288 172.8 C 288 209 288 200 288 288 C 144 288 144 288 0 288 C 0 216 0 212 0 174 C 0 144 0 144 0 114');
    }

    &:not(:hover) {
      animation: zIndexHack 500ms;
    }

    img {
      aspect-ratio: 1;
      object-fit: cover;
      width: calc(var(--image-size) * 2);
      border-radius: var(--radius);
    }

    &::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      transform: translateY(-50%) scaleY(0);
      left: 0;
      width: 100%;
      background-color: hsl(var(--clr-primary-hsl), .5);
      padding: .5rem 0;
      text-align: center;
      text-shadow: #000a 1px 1px 3px;
      opacity: 0;
      transition: opacity 500ms ease-in-out,
              transform 300ms ease-in-out;
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(-50%) scaleY(1);
      transition: opacity 500ms 100ms ease-in-out,
          transform 300ms 100ms ease-in-out;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 20%;
    height: .75rem;
    transform: translateX(-50%);
    background-color: hsl(0 0 0 / .75);
    border-radius: 50%;
    filter: blur(.7rem);
    transition: width 500ms ease-in-out;
  }

  &:has(a:nth-of-type(4):hover)::before {
    width: 55%;
  }
}

.project-card {
  isolation: isolate;
  position: relative;

  &::before {
    content: '';
    @apply absolute w-full h-full rounded-xl;
    background: radial-gradient(ellipse at top, #eff3 0%, transparent 50%);
  }
}
</style>
