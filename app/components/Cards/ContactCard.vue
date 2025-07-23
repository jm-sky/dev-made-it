<script setup lang="ts">
import BaseCard from './BaseCard.vue'

</script>

<template>
  <BaseCard>
    <div class="flex flex-col justify-center gap-1.5 mx-auto">
      <slot />
    </div>
  </BaseCard>
</template>