<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        class="bg-primary-slate border rounded-2xl p-2 text-center min-h-max"
        v-for="item in cardData"
        :key="item.id"
      >
        <div
          class="relative flex justify-center items-center flex-col bg-white rounded-2xl border p-3 h-full"
        >
          <component :is="item.icon" />
          <h3 class="text-primary-indigo font-semibold text-lg mt-2">{{ item.name }}</h3>
          <p class="mt-1 text-[#475569]">{{ item.description }}</p>
          <RouterLink
            class="mt-7 flex items-center justify-center text-primary-blue"
            :to="item.href"
            >{{ item.textLink }} <IconArrow class="ml-1"
          /></RouterLink>
          <span
            class="text-xs absolute top-2 right-2 font-semibold rounded-full text-white block px-2 py-1 bg-[#059669]"
            >+{{ item.count }}</span
          >
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-7">
      <div class="bg-primary-slate border rounded-2xl p-2 min-h-max lg:col-span-3">
        <div class="relative flex-col bg-white rounded-2xl border py-1 h-full">
          <div class="lg:w-3/4 text-primary-indigo">
            <h3 class="font-semibold text-lg mt-2 p-2">Recent Activities</h3>
            <div class="mt-3" v-for="activity in recentActivities" :key="activity.id">
              <div>
                <span
                  class="flex w-full text-[#9CA3AF] bg-[#F8FAFC] py-2 px-4 rounded-[15px] font-semibold uppercase"
                  >{{ activity.time }}</span
                >
              </div>
              <ul class="flex flex-col items-start text-sm">
                <li
                  class="px-4 pb-3 mr-4 flex items-center w-full list-item-activity"
                  v-for="item in activity.items"
                  :key="item.id"
                >
                  <component :is="item.icon" class="mr-4" />
                  <div
                    class="flex pr-4 pt-4 pb-6 items-center w-full justify-between border-b"
                  >
                    <span class="">{{ item.description }}</span>
                    <RouterLink
                      class="flex items-center justify-center text-primary-blue"
                      to="/"
                      >View <IconArrow class="ml-1"
                    /></RouterLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-primary-slate border rounded-2xl p-2 min-h-max">
        <div class="relative flex-col bg-white rounded-2xl border py-1 h-full">
          <div class="text-primary-indigo p-2">
            <h3 class="font-semibold text-lg mt-2 p-1">Recent Annoucements</h3>
            <ul class="flex flex-col items-start text-sm">
              <li
                class="p-4 mr-4 flex flex-col w-full pb-12 border"
                v-for="announcment in recentAnnouncment"
                :key="announcment.id"
              >
                <span class="text-primary-blue font-semibold text-xs flex w-full mb-1">{{
                  announcment.date
                }}</span>
                <p>{{ announcment.description }}</p>
              </li>
            </ul>
            <RouterLink
              to="/"
              class="bg-primary-blue flex w-full py-2 items-center rounded-md justify-center text-white"
            >
              View All
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconComment from '@/components/icons/IconComment.vue'
import IconShuffle from '@/components/icons/IconShuffle.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import { cardData } from '@/constants/dashboardData.js'

const recentActivities = [
  {
    id: 1,
    time: 'TODAY',
    items: [
      {
        id: 1,
        description: 'Clark Kent commented in a new Testimonial',
        icon: IconComment,
      },
      {
        id: 2,
        description: 'Bruce Wayne  posted a Testimonial',
        icon: IconComment,
      },
      {
        id: 3,
        description: 'Peter Parker  a new Testimonial ',
        icon: IconComment,
      },
    ],
  },
  {
    id: 2,
    time: 'YESTERDAY',
    items: [
      {
        id: 1,
        description: 'New Exciting News Announcement',
        icon: IconShuffle,
      },
      {
        id: 2,
        description: 'New System Update Announcement',
        icon: IconShuffle,
      },
    ],
  },
]

const recentAnnouncment = [
  {
    id: 1,
    date: 'MON DEC 27, 2023',
    description: 'Maryland EXCELS Find a Program Release date',
  },
  {
    id: 2,
    date: 'MON  DEC 26, 2023',
    description: 'Find a Program Phase 2 Development',
  },
  {
    id: 3,
    date: 'WED Nov 29, 2023',
    description: 'Find a Program Phase 1 Development',
  },
  {
    id: 4,
    date: 'WED Nov 29, 2023',
    description: 'Maryland EXCELS FAP Phase two Development',
  },
]
</script>

<style scoped>
.list-item-activity {
  position: relative;
}
.list-item-activity::after {
  position: absolute;
  content: '';
  bottom: 0px;
  margin-left: 14px;
  display: block;
  height: 20px;
  width: 3px;
  background-color: #cbd5e1;
  border-radius: 4px;
}

.list-item-activity:last-child::after {
  display: none;
}
</style>
