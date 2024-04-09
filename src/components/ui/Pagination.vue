<template>
  <div class="py-5 md:pl-5 flex items-center justify-between">
    <div class="flex-1 flex justify-between sm:hidden">
      <button
        class="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-400 text-sm font-medium rounded-md text-gray-secondary bg-white dark:text-gray-light dark:bg-gray-secondary hover:bg-gray-50 dark:hover:bg-gray-primary disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!hasPrev"
        @click.prevent="changePage(prevPage)"
      >
        prev
      </button>
      <button
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-400 text-sm font-medium rounded-md text-gray-secondary bg-white dark:text-gray-light dark:bg-gray-secondary hover:bg-gray-50 dark:hover:bg-gray-primary disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!hasNext"
        @click.prevent="changePage(nextPage)"
      >
        next
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            class="relative inline-flex items-center mr-2 px-2 py-2 rounded-l-md border border-[#CBD5E1] text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:text-gray-400 bg-white text-primary-blue disabled:cursor-not-allowed"
            :disabled="!hasPrev"
            @click.prevent="changePage(prevPage)"
          >
            <span class="sr-only">Prev</span>
            <Icon icon="heroicons:chevron-left" class="h-5 w-5" aria-hidden="true" />
          </button>
          <a
            v-if="hasFirst"
            href="#"
            class="border-[#CBD5E1] rounded text-special-dark bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click.prevent="changePage(1)"
          >
            1
          </a>
          <span
            v-if="hasFirst"
            class="border-[#CBD5E1] rounded text-special-dark bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            ...
          </span>
          <a
            v-for="page in pages"
            :key="page"
            href="#"
            class="border-[#CBD5E1] rounded text-special-dark bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="
              current === page
                ? 'z-10 bg-sky-primary border-primary-blue text-special-dark'
                : 'bg-white hover:text-special-dark border-gray-200   text-special-dark  '
            "
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
          <span
            v-if="hasLast"
            class="border-[#CBD5E1] rounded text-special-dark bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            ...
          </span>
          <a
            v-if="hasLast"
            href="#"
            class="border-[#CBD5E1] rounded text-special-dark bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click.prevent="changePage(totalPages)"
          >
            {{ totalPages }}
          </a>
          <button
            class="relative inline-flex items-center ml-2 px-2 py-2 rounded-r-md border border-[#CBD5E1] text-sm font-medium bg-white hover:bg-gray-50 disabled:opacity-50 disabled:text-gray-200 text-primary-blue disabled:cursor-not-allowed"
            :disabled="!hasNext"
            @click.prevent="changePage(nextPage)"
          >
            <span class="sr-only">Next</span>
            <Icon icon="heroicons:chevron-right" class="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  currentTotal: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  pageRange: {
    type: Number,
    default: 2,
  },
  textBeforeInput: {
    type: String,
    default: 'Go to page',
  },
  textAfterInput: {
    type: String,
    default: 'Go',
  },
})

const pages = computed(() => {
  const pages = []
  for (let i = rangeStart.value; i <= rangeEnd.value; i++) {
    pages.push(i)
  }
  return pages
})

const rangeStart = computed(() => {
  const start = props.current - props.pageRange
  return start > 0 ? start : 1
})

const rangeEnd = computed(() => {
  const end = props.current + props.pageRange
  return end < totalPages.value ? end : totalPages.value
})

const totalPages = computed(() => Math.ceil(props.total / props.perPage))
const nextPage = computed(() => props.current + 1)
const prevPage = computed(() => props.current - 1)
const hasPrev = computed(() => props.current > 1)
const hasNext = computed(() => props.current < totalPages.value)
const hasFirst = computed(() => rangeStart.value !== 1)
const hasLast = computed(() => rangeEnd.value < totalPages.value)

const emit = defineEmits(['page-changed'])
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    emit('page-changed', page)
  }
}
</script>
