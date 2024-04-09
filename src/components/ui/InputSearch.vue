<template>
  <div class="flex items-center relative py-6 w-full max-w-md mx-auto">
    <div
      class="absolute pl-3 inset-y-0 left-0 w-10 h-full flex items-center text-gray-400"
    >
      <IconSearch class="w-5 h-5" />
    </div>
    <input
      id="search_programs"
      type="text"
      v-model="keyword"
      @keypress.enter="onSearch"
      placeholder="Search for First Name or Last Name"
      class="w-full px-4 mx-auto py-3 leading-tight text-gray-primary border appearance-none bg-white rounded-lg focus:outline-none placeholder:text-gray-400 border-gray-300 dark:border-gray-400 dark:bg-gray-primary dark:text-white-primary focus:bg-gray-50 focus:ring-1 focus:ring-sky-primary transition-all duration-300 ease pl-10"
    />
    <button
      type="button"
      @click="onSearch"
      class="absolute right-0 py-2.5 px-4 flex items-center text-white font-semibold bg-primary-blue rounded-lg"
    >
      Search
    </button>
  </div>
</template>
<script setup>
import IconSearch from '@/components/icons/IconSearch.vue'
import { ref } from 'vue'

const emit = defineEmits('search')
const keyword = ref('')

const onSearch = () => {
  emit('search', keyword.value)
}
</script>
