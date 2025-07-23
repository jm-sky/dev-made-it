<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <button
    v-show="isVisible"
    type="button"
    class="fixed bottom-8 cursor-pointer right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-300"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
</template>
