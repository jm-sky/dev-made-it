<script setup lang="ts">
import DarkModeButton from '../Buttons/DarkModeButton.vue'
import LocaleButton from '../Buttons/LocaleButton.vue'
import CompanyName from '../Logo/CompanyName.vue'
import NavbarLinks from './NavbarLinks.vue'
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-50 border-b transition-colors">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="#" class="block text-xl font-bold hover:opacity-90 hover:scale-105 transition-all duration-100 ease-in-out drop-shadow hover:drop-shadow-lg">
            <CompanyName />
          </a>
        </div>
        <div class="flex flex-row items-center justify-end gap-4">
          <div class="hidden md:block">
            <NavbarLinks />
          </div>
          <DarkModeButton />
          <LocaleButton />
        </div>
      </div>
    </div>
  </nav>
</template>

