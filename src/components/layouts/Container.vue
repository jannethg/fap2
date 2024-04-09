<template>
  <div class="flex h-screen overflow-hidden">
    <TheSidebar
      :sidebar-open="sidebarOpen"
      @close-sidebar="sidebarOpen = false"
      @open-sidebar="handleOpenSidebar"
    />
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <TheHeader
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="handleOpenSidebar"
        @open-sidebar="handleOpenSidebar"
        @logout="handleLogout"
      />
      <main class="flex-1 pb-8">
        <div class="p-0 w-full mx-auto mt-36 py-2 px-6">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import { ref } from 'vue'

const sidebarOpen = ref(true)

const handleOpenSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const handleLogout = () => {
  console.log('logout')
}
</script>
