<template>
  <header class="sticky top-0 border-gray-200 z-30">
    <div class="px-4 sm:px-6 lg:px-8 py-3 bg-primary-blue z-[9999] relative">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            class="rounded-full dark:text-white-primary hover:bg-gray-light dark:hover:bg-gray-secondary p-2 transition duration-300 ease-in-out"
            @click.stop="$emit('toggle-sidebar')"
            aria-controls="sidebar"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center justify-between space-x-3">
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-0 lg:p-2 lg:rounded-md"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div
                  class="hidden ml-3 text-white text-sm font-medium lg:flex flex-col items-start justify-start"
                >
                  <span>Welcome Hopkins,</span>
                  <span>Provider</span>
                </div>
                <IconChevron class="w-4 h-4 rotate-180 ml-2" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 p-1 rounded-lg bg-white dark:bg-gray-light ring-1 ring-black/5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <router-link
                    to="/profile"
                    :class="[
                      active
                        ? 'bg-sky-primary text-white-primary'
                        : 'text-gray-secondary',
                      'group flex w-full items-center rounded-md pl-3 pr-10 py-2.5 text-sm ',
                    ]"
                    >Your Profile</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    to="/on-progress"
                    :class="[
                      active
                        ? 'bg-sky-primary text-white-primary'
                        : 'text-gray-secondary',
                      'group flex w-full items-center rounded-md pl-3 pr-10 py-2.5 text-sm ',
                    ]"
                    >Logout</router-link
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <div class="absolute top-0 text-white">
      <img src="@/assets/images/bg-header.svg" alt="" class="h-full" />
      <div class="absolute top-[120px] left-5">
        <h1 class="text-3xl font-semibold">Good afternoon, Hopkins (Provider)👋</h1>
        <p class="">Here is what’s happening with your projects today:</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import IconChevron from '../icons/IconChevron.vue'
</script>
