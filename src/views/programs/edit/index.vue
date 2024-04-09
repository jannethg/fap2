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

    <section class="border h-full flex">
      <div class="w-[250px] border px-3 py-7">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-full"
          />
          <button
            class="text-blue-primary font-semibold py-2.5 px-6 rounded flex justify-center items-center text-center mt-5 border mx-auto"
          >
            Change Image
          </button>
        </div>
        <div class="mt-5">
          <p>Summary</p>
          <textarea
            name="summary"
            id="summary"
            rows="10"
            class="border rounded w-full p-2 mt-3"
          ></textarea>
        </div>
      </div>
      <div class="border w-full px-3 py-7">
        <div class="flex justify-between items-center">
          <h5 class="text-lg font-semibold text-primary-blue">Program Identification</h5>
          <RouterLink
            class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded"
            :to="`/programs/edit/1`"
          >
            <IconEdit class="mr-1" />Edit Program details</RouterLink
          >
        </div>
        <div class="text-sm text-[#64748B] mt-5">
          <span class="block w-full mb-2"
            >Address: 2800 N. Charles St. Baltimore, MD 21218
          </span>
          <span class="block w-full mb-2">Phone Number: (410) - 516- 9800 </span>
          <span class="block w-full mb-2"
            >Alternative Phone: <input type="text" class="py-2.5 px-4 border rounded" />
          </span>
        </div>

        <div class="flex justify-between items-center my-10">
          <h5 class="text-lg font-semibold text-primary-blue">Program Information</h5>
        </div>

        <div class="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="flex flex-col">
            <label for="business_as" class="mb-2 text-[#475569]">Doing Business As</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="hours" class="mb-2 text-[#475569]">Hours of Operation</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="date" class="mb-2 text-[#475569]">Operating Since</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="lisence" class="mb-2 text-[#475569]">License Capacity</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="enrollment_date" class="mb-2 text-[#475569]"
              >Enrollment (As of date):
            </label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="vacancies" class="mb-2 text-[#475569]">Vacancies</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
          <div class="flex flex-col">
            <label for="website" class="mb-2 text-[#475569]">Website</label>
            <input
              type="text"
              class="py-2.5 px-3 rounded outline-none border focus:border-primary-blue"
            />
          </div>
        </div>

        <div class="mt-20">
          <div class="flex justify-between items-center">
            <h5 class="text-lg font-semibold text-primary-dark-blue">
              Image Gallery (6)
            </h5>
            <RouterLink
              class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded"
              :to="`/programs/edit/1`"
            >
              <IconEdit class="mr-1" />Upload Images</RouterLink
            >
          </div>

          <div class="border bg-[#F1F5F9] mt-5 rounded">
            <div class="flex items-center mx-auto justify-center space-x-2 p-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1712325632272-b0cbb2a27db6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-[70px]"
              />
            </div>
            <span
              class="text-[#64748B] text-center flex items-center my-5 justify-center w-full"
              >We accept PNG, GIF, JPEG, and JPG files .</span
            >
          </div>
          <hr class="flex w-full border-b-1 my-6 border-[#64748B]" />
          <div class="flex justify-end items-end mt-5">
            <button
              type="button"
              class="flex items-center justify-center text-primary-blue py-3 px-4 border border-primary-blue rounded mr-5"
            >
              Cancel
            </button>
            <button
              type="button"
              class="flex items-center justify-center py-3 px-4 border border-primary-blue bg-primary-blue text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import IconEdit from '@/components/icons/IconEdit.vue'
</script>
