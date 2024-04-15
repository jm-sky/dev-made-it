<template>
  <section class="resume-section grid place-items-center w-screen h-screen bg-primary-800">
    <div class="resume">
      <img src="/assets/bible-1.jpg" alt="m-sky Bible">
      <img src="/assets/bible-2.jpg" alt="LiteMES">
      <img src="/assets/bible-3.jpg" alt="Portal Klienta">
      <img src="/assets/bible-4.jpg" alt="">
    </div>
  </section>
</template>

<style>
.resume {
  --gap: 0.5rem;
  --image-size: calc(150px - .5rem);
  width: fit-content;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(4, var(--image-size));
  grid-template-rows: repeat(3, var(--image-size));
  gap: var(--gap);

  &:hover img {
    filter: grayscale(var(--filter-grayscale));
  }

  img {
    --filter-grayscale: 1;
    --filter-blur: 0.25rem;
    width: calc(var(--image-size) * 2);
    aspect-ratio: 1;
    object-fit: cover;
    grid-column: span 2;
    border-radius: 1rem;
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
  }

}
</style>