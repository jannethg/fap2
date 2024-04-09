<template>
  <div>
    <ul class="text-sm">
      <li class="mb-3" v-for="(item, index) in navigatios" :key="index">
        <RouterLink
          :to="item.href"
          class="text-white w-full py-2.5 px-4 flex items-center justify-between"
          active-class="bg-special-dark"
        >
          <div class="flex items-center">
            <component
              :is="item.icon"
              class="mr-4 flex-shrink-0 h-6 w-6 text-sky-200"
              aria-hidden="true"
            />
            <span class="block">{{ item.name }}</span>
          </div>
          <IconChevron v-if="item.hasChevronDown" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { navigatios } from '@/constants/navigations.js'
import IconChevron from '@/components/icons/IconChevron.vue'
</script>
<style lang=""></style>
