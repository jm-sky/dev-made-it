<script setup lang="ts">
defineProps<{
  page?: number
}>()

const emit = defineEmits<{
  turn: [alpha: number],
}>()
</script>

<template>
  <div class="h-full">
    <slot />

    <span v-if="page" class="page-number absolute bottom-5 left-1/2 -translate-x-1/2">{{ page }}</span>

    <button
      v-if="page && page > 1 && ((page + 1) % 2)"
      class="nextprev-btn w-5 absolute bottom-5 left-5 hover:text-primary-500 transition-colors"
      @click="emit('turn', -2)"
    >
      <i class="fa-solid fa-angle-left fa-fw"></i>
    </button>

    <button
      v-if="page && page % 2"
      class="nextprev-btn w-5 absolute bottom-5 right-5 hover:text-primary-500 transition-colors"
      @click="emit('turn', +2)"
    >
      <i class="fa-solid fa-angle-right fa-fw"></i>
    </button>
  </div>
</template>
