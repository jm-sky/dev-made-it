<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import type { ButtonVariants } from './button.config';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  to: RouteLocationRaw
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  vibe?: ButtonVariants['vibe']
}>()
</script>

<template>
  <NuxtLink v-slot="{ navigate, href }" :to custom>
    <Button
      as="a"
      :href="href"
      :variant="variant"
      :size="size"
      :vibe="vibe"
      :class="props.class"
      @click="navigate"
    >
      <slot />
    </Button>
  </NuxtLink>
</template>
