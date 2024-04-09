<template>
  <aside class="hidden xl:block fixed top-[170px] right-8 w-full aside-right">
    <div
      class="border border-gray-300 col-span-2 w-full bg-transparent rounded-xl p-3 md:p-5"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-secondary dark:text-gray-100">
          ON THIS PAGE
        </h2>
      </div>
      <ul class="mt-5">
        <!-- <li class="mb-2" v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="text-gray-secondary dark:text-gray-300 text-[15px] hover:text-sky-primary dark:hover:text-gray-light"
          >
            {{ link.name }}
          </a>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => ({}),
  },
})
</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
  .aside-right {
    @apply w-full max-w-[260px];
  }
}

@media screen and (min-width: 1440px) {
  .aside-right {
    @apply w-full max-w-[310px];
  }
}

@media screen and (min-width: 1550px) {
  .aside-right {
    @apply w-full max-w-[340px];
  }
}

@media screen and (min-width: 1750px) {
  .aside-right {
    @apply w-full max-w-[380px];
  }
}

@media screen and (min-width: 2000px) {
  .aside-right {
    @apply w-full max-w-[520px];
  }
}
</style>
