<template>
  <div class="typewriter absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
    <h1 class="text-white/80 text-lg font-mono">Hello, my name is John.</h1>
  </div>
</template>

<style>
.typewriter {
  --caret-color: #fffd;
  --bg-color: black;
  --gallery-bg: hsl(210, 10%, 80%);
  --length: 23;
  --speed: 4s;
  --delay: .5s;
  animation: hide 1s ease calc(var(--speed) + var(--delay) + 1s) forwards;

  & h1::before, h1::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  & h1::before {
    background-color: var(--bg-color);
    animation: typewriter var(--speed) var(--delay) steps(var(--length)) forwards;
  }

  & h1::after {
    width: 0.125em;
    background-color: var(--caret-color);
    animation: typewriter var(--speed) var(--delay) steps(var(--length)) forwards,
                blink 1s steps(var(--length)) infinite;
  }
}

@keyframes typewriter {
  100% {
    left: 100%;
  }
}

@keyframes hide {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  50%, 90% {
    background-color: transparent;
  }
}
</style>