<script setup>
import {  PlayCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="w-full h-[695px] bg-[#FCEED5] rounded-b-3xl herro-banner flex flex-col md:flex-row justify-center items-center">
    <div class="md:w-1/2 flex flex-col justify-start text-left max-w-[480px]">
      <p class="text-[#002A48] text-6xl font-extrabold">One more friend</p>
      <p class="text-[#002A48]  text-[46px] font-bold mt-2">Thousands more fun!</p>
      <p class="text-[#242B33] text-base font-medium mt-2">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
      <div class="flex flex-row mt-3 gap-4">
        <button class="flex flex-row md:w-[161px] rounded-full border border-[#003459] py-3 px-7 hover:bg-sky-700 hover:text-white">View Intro 
          <PlayCircleIcon class="w-5 h-5 mt-1 ml-1" /></button>
        <button class="md:w-[161px] rounded-full bg-[#003459] py-3 px-7 hover:bg-sky-700 text-white">Explore Now</button>
      </div>
    </div>
    <div class="md:w-1/2">
      <!-- Image -->
    </div>
  </div>
</template>

<style scoped>
/* maaf bagian banner belum maxsimal masih pakai image */
@media (min-width: 769px) {
  .herro-banner {
    background-image: url('@/assets/image/herro-benner.svg');
  }
}

@media (max-width: 768px) {
  .herro-banner {
    background-image: url('@/assets/image/HerroBannerMobile.svg');
  }
}
</style>
