<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  page?: number
  currentPage?: number
}>()

const emit = defineEmits<{
  turn: [alpha: number],
}>()

const isOdd = computed<boolean>(() => !!props.page && !!(props.page % 2))
const isEven = computed<boolean>(() => !!props.page && (props.page % 2 === 0))
</script>

<template>
  <div class="h-full" :class="[page && isEven ? 'page-back' : 'page-front']">
    <slot />

    <span v-if="page" class="page-number absolute bottom-5 left-1/2 -translate-x-1/2">{{ page }}</span>

    <button
      v-if="page"
      class="nextprev-btn w-5 absolute bottom-5 left-5 hover:text-primary-500 transition-colors"
      :class="{ 'md:hidden': isOdd }"
      @click="emit('turn', -2)"
    >
      <i class="fa-solid fa-angle-left fa-fw"></i>
    </button>

    <button
      class="nextprev-btn w-5 absolute bottom-5 right-5 hover:text-primary-500 transition-colors"
      :class="{ 'md:hidden': !page || isEven }"
      @click="emit('turn', +2)"
    >
      <i class="fa-solid fa-angle-right fa-fw"></i>
    </button>
  </div>
</template>
