<template>
  <button class="glossy-button">
    <span><slot /></span>
  </button>
</template>

<style>
.glossy-button {
  --color: hsl(196 90% 70%);
  --padding: 1rem 2rem;
  --speed: 300ms;
  --hover-distance: .4rem;
  --press-distance: .25rem;
  --hover-blur: 5px;
  --press-blur: 8px;
  --hover-opacity: .4;
  --press-opacity: .2;

  cursor: pointer;
  position: relative;
  border: 0;
  padding: 0;
  border-radius: 1rem;
  background-color: transparent;
  font-weight: bold;
  color: white;
  isolation: isolate;
  z-index: 0;

  span {
    display: block;
    border-radius: inherit;
    padding: var(--padding);
    backdrop-filter: blur(0px);
    text-shadow: #0007 0 1px 5px;
    transition: translate var(--speed) ease,
        background-color var(--speed) ease,
        backdrop-filter var(--speed) ease;
  }

  &::before {
    content: '';
    position: absolute;
    border-radius: inherit;
    inset: 0;
    z-index: -1;
    box-shadow: rgba(0, 0, 0, .2) 0 0 1rem inset;
    background-color: var(--color);
    transition: translate var(--speed) ease,
            scale var(--speed) ease;
  }

  &:hover,
  &:focus-visible {
    span {
      outline: 1px solid hsl(0 0% 100% / .6);
      translate: 0 calc(-1 * var(--hover-distance));
      background-color: hsl(0 0% 100% / var(--hover-opacity));
      backdrop-filter: blur(var(--hover-blur));
    }

    &::before {
      scale: .95;
      translate: 0 calc(var(--hover-distance) * 1.1);
    }
  }

  &:active {
    span {
      outline: 1px solid hsl(0 0% 100% / .5);
      translate: 0 calc(-1 * var(--press-distance));
      background-color: hsl(0 0% 100% / var(--press-opacity));
      backdrop-filter: blur(var(--press-blur));
    }

    &::before {
      scale: .85;
      translate: 0 calc(var(--press-distance) * 1.1);
    }
  }
}
</style>
