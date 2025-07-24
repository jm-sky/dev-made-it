<script setup lang="ts">
import { Briefcase, Building, Github, Linkedin, Mail, MapPin, Phone, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from '#imports'
import { config } from '@/config'
import CardComponent from '../Cards/ContactCard.vue'
import BaseSection from './BaseSection.vue'
import HoverLink from '../ui/HoverLink.vue'

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
      <HoverLink
        href="https://maps.app.goo.gl/whXy58Df4TimY8dz7"
        target="_blank"
        aria-label="Address"
      >
        <MapPin class="size-6" />
        <span>{{ config.company.address }}</span>
      </HoverLink>
      <HoverLink
        :href="`mailto:${config.company.email}`"
        aria-label="Email"
      >
        <Mail class="size-6" />
        <span>{{ config.company.email }}</span>
      </HoverLink>
      <HoverLink
        :href="`tel:${config.company.phone.replaceAll(' ', '')}`"
        aria-label="Phone"
      >
        <Phone class="size-6" />
        <span>{{ config.company.phone }}</span>
      </HoverLink>
    </CardComponent>

    <CardComponent>
      <HoverLink
        href="https://www.linkedin.com/in/jan-madeyski-964913166"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Linkedin class="size-6" />
        <span>Jan Madeyski</span>
      </HoverLink>
      <HoverLink
        href="https://github.com/dev-made-it"
        target="_blank"
        aria-label="GitHub"
      >
        <Github class="size-6" />
        <span>dev-made-it</span>
      </HoverLink>
    </CardComponent>
  </BaseSection>
</template>
