<script setup lang="ts">
import { useI18n } from '#imports'
import { config } from '@/config'

const { t } = useI18n()
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
              <a href="#" class="text-gray-400 hover:text-white">{{ t('nav.home') }}</a>
            </li>
            <li>
              <a href="#about" class="text-gray-400 hover:text-white">{{ t('nav.about') }}</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white">{{ t('nav.contact') }}</a>
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
      </div>
    </div>
  </footer>
</template>
