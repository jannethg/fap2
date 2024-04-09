<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-[#fafafa] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
      @click="clickHandler"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-[250px] 2xl:!w-[250px] shrink-0 bg-primary-blue p-4 sm:p-5 transition-all duration-300 ease-in-out overflow-x-hidden"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-72 lg:w-[90px]'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-gray-500 hover:text-gray-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <RouterLink to="/" class="text-sky-primary flex items-center justify-start">
          <!-- <NavLogo /> -->
          <div class="text-2xl font-semibold" v-if="sidebarOpen">
            <Logo />
          </div>
        </RouterLink>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <NavSide :sidebarOpen="sidebarOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '@/components/icons/Logo.vue'
import NavSide from '@/components/nav/NavSide.vue'

defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false,
  },
})

const trigger = ref(null)
const sidebar = ref(null)

// close on click outside
// const clickHandler = ({ target }) => {
//   if (!sidebar.value || !trigger.value) return
//   if (
//     !props.sidebarOpen ||
//     sidebar.value.contains(target) ||
//     trigger.value.contains(target)
//   )
//     return
//   emit('close-sidebar')
// }

// // close if the esc key is pressed
// const keyHandler = ({ keyCode }) => {
//   if (!props.sidebarOpen || keyCode !== 27) return
//   emit('close-sidebar')
// }
</script>

<style scoped>
#sidebar.active {
  width: 250px;
}
</style>
