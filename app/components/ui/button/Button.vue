<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { type ButtonVariants, buttonVariants } from '.'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  vibe?: ButtonVariants['vibe']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size, vibe }), props.class)"
  >
    <slot />
  </Primitive>
</template>
