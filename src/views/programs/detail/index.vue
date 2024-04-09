<template>
  <section>
    <h2 class="text-primary-dark-blue text-3xl my-5 font-bold">Programs Details ✨</h2>

    <section class="bg-white flex justify-between mt-10">
      <div class="w-full">
        <div class="flex items-center w-full">
          <img src="@/assets/images/QR4.svg" alt="" />
          <div class="flex items-start flex-col ml-3 w-full">
            <span class="text-primary-blue text-sm mb-1 block">CHILD CARE CENTER</span>
            <h5 class="text-primary-dark-blue font-semibold">
              All-Stars Learning Center ✨
            </h5>
            <div class="flex items-center mt-3 font-medium">
              <span
                class="px-2 py-1 block mr-3 text-center text-xs rounded bg-[#E0F2FE] text-primary-blue"
                >Quality Rating 1</span
              >
              <span class="px-2 py-1 text-xs rounded bg-[#D1FAE5] text-green-600"
                >Scholarship</span
              >
            </div>
          </div>
        </div>
        <div class="text-sm text-[#64748B] flex mt-10">
          <span class="block w-full"
            >2800 N. Charles St. <br />
            Baltimore, MD 21218
          </span>
          <div class="block w-full">
            <span class="block">(443) 562-2397</span>
            <span class="text-[#6366F1] block">carolinmcneail.com</span>
          </div>
        </div>
      </div>
      <div class="w-full self-end text-right">
        <div class="inline-flex items-start flex-col">
          <h5 class="text-primary-dark-blue w-full font-semibold text-base">
            LIcense # 257449
          </h5>
          <p class="w-full">Lead Contact</p>
          <div class="text-sm text-[#64748B]">
            Clark Kent <br />
            kclark@gmail.com <br />
            410-967-3589 (mobile) <br />
          </div>
        </div>
        <div class="text-sm text-[#1EA379] font-medium flex mt-8">
          <span class="block w-full"
            >✨ Eligible to accept Child Care Scholarship voucher
          </span>
        </div>
      </div>
    </section>
    <hr class="flex w-full border-b-1 my-6 border-[#64748B]" />

    <section>
      <div class="lg:grid grid-cols-4 gap-10">
        <div class="col-span-3">
          <h6 class="text-primary-dark-blue mb-6 text-2xl font-semibold">
            Program Details
          </h6>
          <div class="flex items-center bg-primary-blue relative py-3">
            <img src="@/assets/images/QR4.svg" alt="" class="h-[68px] absolute left-2" />
            <span class="text-white text-xl flex w-full ml-20"
              >Maryland EXCELS Participant</span
            >
          </div>
          <ul class="my-3">
            <li
              class="text-[#475569] flex items-center py-3 px-4"
              :class="index % 2 !== 0 ? 'bg-white' : 'bg-secondary-color'"
              v-for="(participant, index) in participants"
              :key="participant.id"
            >
              <div class="flex space-x-2 mr-10">
                <IconCheckList
                  class="text-green"
                  v-for="(check, idx) in participant.checklist"
                  :key="idx"
                />
                <IconCheckList class="text-[#D1D5DB]" v-if="participant.checklist < 5" />
                <IconCheckList class="text-[#D1D5DB]" v-if="participant.checklist < 4" />
                <IconCheckList class="text-[#D1D5DB]" v-if="participant.checklist < 3" />
                <IconCheckList class="text-[#D1D5DB]" v-if="participant.checklist < 2" />
                <IconCheckList class="text-[#D1D5DB]" v-if="participant.checklist < 1" />
              </div>
              <span>{{ participant.description }}</span>
            </li>
          </ul>

          <div class="flex items-center bg-primary-blue relative py-3">
            <span class="text-white text-xl flex w-full ml-4">Accreditations</span>
          </div>
          <ul class="my-3">
            <li
              class="text-[#475569] bg-secondary-color flex items-center py-3 px-4"
              v-for="(accreditation, index) in accreditations"
              :key="accreditation.id"
            >
              <div class="flex space-x-2 mr-10">✨</div>
              <span>{{ accreditation.description }}</span>
            </li>
          </ul>

          <div class="flex items-center bg-primary-blue relative py-3">
            <span class="text-white text-xl flex w-full ml-4">Achievements</span>
          </div>
          <ul class="my-3 flex bg-secondary-color">
            <li
              class="text-[#475569] h-max flex flex-col items-center py-3 px-4"
              v-for="(achievement, index) in achievements"
              :key="achievement.id"
            >
              <img src="@/assets/images/QR4.svg" alt="" class="h-[60px]" />
              <span class="flex max-w-[100px] text-center">{{ achievement.name }}</span>
            </li>
          </ul>
        </div>

        <div class="">
          <h6 class="text-primary-dark-blue text-2xl font-semibold">PROGRAM USERS (7)</h6>
          <hr class="flex w-full border-b-1 my-3 border" />
          <ul>
            <li
              class="flex items-center px-3 py-2 rounded-md mb-2"
              v-for="user in users"
              :key="user.id"
            >
              <img
                :src="user.image"
                :alt="user.name"
                class="h-[30px] w-[30px] rounded-full"
              />
              <span class="flex w-full ml-4">{{ user.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import IconCheckList from '@/components/icons/IconCheckList.vue'
import IconComment from '@/components/icons/IconComment.vue'
import IconOption from '@/components/icons/IconOption.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconViewDetail from '@/components/icons/IconViewDetail.vue'
import { cardData } from '@/constants/dashboardData.js'

const participants = [
  {
    id: 1,
    description: 'Licensing and Compliance',
    checklist: 5,
  },
  {
    id: 2,
    description: 'Licensing and Compliance',
    checklist: 4,
  },
  {
    id: 3,
    description: 'Licensing and Compliance',
    checklist: 3,
  },
  {
    id: 4,
    description: 'Licensing and Compliance',
    checklist: 2,
  },
  {
    id: 5,
    description: 'Licensing and Compliance',
    checklist: 3,
  },
]

const accreditations = [
  {
    id: 1,
    description: 'Maryland Accreditation',
  },
  {
    id: 2,
    description: 'National Association for the Education of Young Children (NAEYC)',
  },
  {
    id: 3,
    description: 'Council on Accreditation / After-School Accreditation (COA/ASA)',
  },
]
const achievements = [
  {
    id: 1,
    name: 'Accredited Program',
    image: '',
  },
  {
    id: 2,
    name: 'Health and Wellness',
  },
  {
    id: 3,
    name: 'Family Engagement',
  },
  {
    id: 4,
    name: 'Military Child Care in Your Neighborhood',
  },
]

const users = [
  {
    id: 1,
    name: 'Clark Kent (Lead)',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Tony Starks',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Bruce Wayne',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Diana Prince',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Peter Parker',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Natasha Romanova',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
