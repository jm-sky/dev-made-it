<script setup lang="ts">
import { useI18n } from '#imports'
import { config } from '@/config'
import { useVersion } from '@/composables/useVersion'

const { t } = useI18n()
const { version, buildDate } = useVersion()
</script>

<template>
  <footer class="bg-gray-900 dark:bg-gray-950 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ config.company.name }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ t('footer.description') }}
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">
            {{ t('footer.quickLinks') }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/#" class="text-gray-400 hover:text-white">{{ t('nav.home') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about" class="text-gray-400 hover:text-white">{{ t('nav.about') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact" class="text-gray-400 hover:text-white">{{ t('nav.contact') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">
            {{ t('footer.contact') }}
          </h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <span class="mr-1 inline-block w-20">{{ t('footer.email') }}:</span>
              <a :href="`mailto:${config.company.email}`" class="text-gray-400 hover:text-white">{{ config.company.email }}</a>
            </li>
            <li>
              <span class="mr-1 inline-block w-20">{{ t('footer.phone') }}:</span>
              <a :href="`tel:${config.company.phone.replaceAll(' ', '')}`" class="text-gray-400 hover:text-white">{{ config.company.phone }}</a>
            </li>
            <li>
              <span class="mr-1 inline-block w-20">{{ t('footer.address') }}:</span>
              <a :href="config.company.addressUrl" class="text-gray-400 hover:text-white">{{ config.company.address }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          © {{ new Date().getFullYear() }} {{ config.company.name }}. {{ t('footer.copyright') }}
        </p>
        <p class="text-sm opacity-50 mt-2">
          v{{ version }}
          @
          {{ buildDate }}
        </p>
      </div>
    </div>
  </footer>
</template>
