<script setup lang="ts">
import { useI18n } from '#imports'
import AboutCard from '../Cards/AboutCard.vue'
import List from '../List/List.vue'
import ListItem from '../List/ListItem.vue'
import BaseSection from './BaseSection.vue'

const { t } = useI18n()
</script>

<template>
  <BaseSection id="about" :title="t('about.title')">
    <AboutCard :title="t('about.whatWeDo.title')" class="leading-relaxed">
      <p class="text-gray-600 dark:text-gray-300">
        {{ t('about.whatWeDo.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.whatWeDo.customWebApplications') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.documentManagement') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.integrations') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.processOptimization') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard :title="t('about.values.title')" class="leading-relaxed">
      <p class="text-gray-600 dark:text-gray-300">
        {{ t('about.values.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.values.cleanCode') }}</ListItem>
        <ListItem>{{ t('about.values.architecture') }}</ListItem>
        <ListItem>{{ t('about.values.userExperience') }}</ListItem>
        <ListItem>{{ t('about.values.processUnderstanding') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard :title="t('about.technologies.title')" class="leading-relaxed">
      <p class="text-gray-600 dark:text-gray-300">
        {{ t('about.technologies.description') }}
      </p>
      <List>
        <ListItem>
          <span class="font-semibold mr-1">{{ t('about.technologies.list.backend') }}:</span>
          <span>PHP, Laravel, Python (Flask, Django), Node.js</span>
        </ListItem>
        <ListItem>
          <span class="font-semibold mr-1">{{ t('about.technologies.list.frontend') }}:</span>
          <span>Vue.js 3, JavaScript, TailwindCSS</span>
        </ListItem>
        <ListItem>
          <span class="font-semibold mr-1">{{ t('about.technologies.list.databases') }}:</span>
          <span>SQL Server, PostgreSQL, MySQL</span>
        </ListItem>
        <ListItem>
          <span class="font-semibold mr-1">{{ t('about.technologies.list.ops') }}:</span>
          <span>Linux, Apache, Nginx, Kafka</span>
        </ListItem>
      </List>
    </AboutCard>
  </BaseSection>
</template>
