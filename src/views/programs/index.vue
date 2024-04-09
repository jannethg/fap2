<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl font-bold my-5">Search Programs ✨</h2>

    <div class="my-5 w-[80%] mx-auto">
      <div class="bg-gradient-to-r from-[#DAE6F0] to-[#C9DEEE] rounded-lg">
        <InputSearch @search="handleSearch" />
      </div>
    </div>

    <section class="bg-white rounded">
      <div
        class="py-2 px-3 text-primary-dark-blue border mb-2 flex justify-between items-center"
      >
        <p class="text-lg font-semibold">All Programs 248</p>
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <label for="limit" class="block text-sm font-medium text-primary-blue"
              >Show {{ selectedLimit }} Users</label
            >
            <select
              id="limit"
              class="text-gray-900 outline-none focus:border-none text-sm rounded-lg w-[20px] block p-2 cursor-pointer"
              @change="onChangeLimit($event.target.value)"
            >
              <option
                :value="limit"
                :selected="limit === selectedLimit"
                v-for="(limit, index) in limitOptions"
                :key="index"
              >
                {{ limit }}
              </option>
            </select>
          </div>
          <div class="flex items-center border border-primary-blue rounded px-3 py-2">
            <label for="sort" class="block text-sm font-medium text-primary-blue"
              >Sort by</label
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded" v-for="item in filteredPrograms" :key="item.id">
          <div class="flex items-center pt-2 px-6">
            <div class="flex items-center w-full">
              <img src="@/assets/images/QR4.svg" alt="" />
              <div class="flex items-start flex-col ml-3 w-full">
                <span class="text-primary-blue text-sm mb-1 block">{{ item.type }}</span>
                <h5 class="text-primary-dark-blue font-semibold">
                  {{ item.title }}
                </h5>
              </div>
            </div>
            <button class="p-2" type="button">
              <IconOption />
            </button>
          </div>
          <div class="mt-5 px-6 mb-2">
            <span class="text-sm"
              >{{ item.location }} <br />
              {{ item.phone }}</span
            >
          </div>
          <div class="flex justify-between items-center">
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border-t w-full"
              :to="`/programs/detail/${item.id}`"
            >
              <IconViewDetail class="mr-1" />View Details</RouterLink
            >
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border-t border-l w-full"
              :to="`/programs/edit/${item.id}`"
            >
              <IconEdit class="mr-1" />Edit Program</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
    <div class="text-center mx-auto">
      <Pagination :current="1" :current-total="0" :per-page="10" :total="100" />
    </div>
  </section>
</template>

<script setup>
import IconOption from '@/components/icons/IconOption.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconViewDetail from '@/components/icons/IconViewDetail.vue'
import Pagination from '@/components/ui/Pagination.vue'
import InputSearch from '@/components/ui/InputSearch.vue'
import { ref } from 'vue'
import { programs } from '@/constants/programs.js'

const selectedLimit = ref(10)
const limitOptions = ref([10, 50, 100, 200, 500])
const onChangeLimit = (value) => {
  selectedLimit.value = value
}

const filteredPrograms = ref([...programs])

const handleSearch = (keyword) => {
  const lowerCaseKeyword = keyword.toLowerCase()

  // If the keyword is empty, show all programs
  if (lowerCaseKeyword === '') {
    filteredPrograms.value = [...programs]
    return
  }

  // Filter programs based on the keyword
  filteredPrograms.value = programs.filter((program) => {
    return (
      program.title.toLowerCase().includes(lowerCaseKeyword) ||
      program.location.toLowerCase().includes(lowerCaseKeyword)
    )
  })
}
</script>
