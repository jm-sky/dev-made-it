<script setup lang="ts">
import { Briefcase, Building, Github, Linkedin, Mail, MapPin, Phone, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from '#imports'
import { config } from '@/config'
import CardComponent from '../Cards/ContactCard.vue'
import BaseSection from './BaseSection.vue'

const { t } = useI18n()
</script>

<template>
  <BaseSection id="contact" :title="t('contact.title')">
    <CardComponent>
      <div class="flex gap-4 items-center px-4 py-3 rounded-full">
        <Briefcase class="size-6" />
        <div class="font-semibold">
          {{ config.company.name }}
        </div>
      </div>
      <div class="flex gap-4 items-center px-4 py-3 rounded-full">
        <ShieldCheck class="size-6" />
        <div>
          <span class="font-semibold">NIP:</span>
          {{ config.company.nip }}
        </div>
      </div>
      <div class="flex gap-4 items-center px-4 py-3 rounded-full">
        <Building class="size-6" />
        <div>
          <span class="font-semibold">REGON:</span>
          {{ config.company.regon }}
        </div>
      </div>
    </CardComponent>

    <CardComponent>
      <a
        href="https://maps.app.goo.gl/whXy58Df4TimY8dz7"
        class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Address"
      >
        <MapPin class="size-6" />
        <span>{{ config.company.address }}</span>
      </a>
      <a
        :href="`mailto:${config.company.email}`"
        class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Email"
      >
        <Mail class="size-6" />
        <span>{{ config.company.email }}</span>
      </a>
      <a
        :href="`tel:${config.company.phone.replaceAll(' ', '')}`"
        class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Phone"
      >
        <Phone class="size-6" />
        <span>{{ config.company.phone }}</span>
      </a>
    </CardComponent>

    <CardComponent>
      <a
        href="https://www.linkedin.com/in/jan-madeyski-964913166"
        target="_blank"
        rel="noopener noreferrer"
        class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin class="size-6" />
        <span>Jan Madeyski</span>
      </a>
      <a
        href="https://github.com/dev-made-it"
        target="_blank"
        rel="noopener noreferrer"
        class="flex gap-4 items-center px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="GitHub"
      >
        <Github class="size-6" />
        <span>dev-made-it</span>
      </a>
    </CardComponent>
  </BaseSection>
</template>
