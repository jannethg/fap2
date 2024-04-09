<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl font-bold my-5">My Active Programs ✨</h2>

    <section class="bg-white rounded">
      <div class="py-2 px-3 bg-primary-blue text-white border mb-2">
        <p class="text-lg font-semibold">My Approved Programs</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded" v-for="item in programs" :key="item.id">
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

    <section class="bg-white rounded mt-10">
      <div class="py-2 px-3 bg-[#F59E0B] text-white border mb-2">
        <p class="text-lg font-semibold">My Pending Programs</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded" v-for="item in programs" :key="item.id">
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

    <section class="bg-white rounded mt-10">
      <div class="py-2 px-3 bg-[#6B7280] text-white border mb-2">
        <p class="text-lg font-semibold">My Rejected Programs</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded" v-for="item in programs" :key="item.id">
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
  </section>
</template>

<script setup>
import IconComment from '@/components/icons/IconComment.vue'
import IconOption from '@/components/icons/IconOption.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconViewDetail from '@/components/icons/IconViewDetail.vue'

const programs = [
  {
    id: 1,
    type: 'Child Care Center',
    title: 'Start Learning Center',
    location: 'Middle River, MD 21220',
    phone: '(443) 317-6105',
    icon: IconComment,
  },
  {
    id: 2,
    type: 'Family Child Center',
    title: 'Above & Beyond Child Care, LLC',
    location: 'Baltimore, MD 21218',
    phone: '(410) 335-0176',
    icon: IconComment,
  },
  {
    id: 3,
    type: 'School-Age Only',
    title: 'Our Lady Queen of Peace Child Care',
    location: 'Owings Mills, MD 21239',
    phone: '(410) 314-8794',
    icon: IconComment,
  },
  {
    id: 4,
    type: 'Child Care Center',
    title: 'Caliday Before and After Care of Vincent Farms',
    location: 'Annapolis, MD 21220',
    phone: '(443) 317-6105',
    icon: IconComment,
  },
]
</script>
