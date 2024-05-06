<script setup lang="ts">
import {  ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>
<template>
  <div class="w-full px-28 pt-[60px]">
    <div class="flex justify-between px-5">
      <div class="flex flex-row items-end">
        <p class="font-mendium text-base">Proud to be part of</p>
        <p class="font-bold text-2xl ml-1">Pet Sellers</p>
      </div>
      <button class="flex flex-row items-center rounded-full border border-[#003459] py-3 px-7 hover:bg-sky-700 hover:text-white">View all our sellers  <ChevronRightIcon class="w-3 h-3 mt-1 ml-1" /></button>
    </div>
    <div class="grid grid-cols-7 gap-4">
        <img class="" src="@/assets/image/client1.svg">
        <img class="" src="@/assets/image/client2.svg">
        <img class="" src="@/assets/image/client3.svg">
        <img class="" src="@/assets/image/client4.svg">
        <img class="" src="@/assets/image/client5.svg">
        <img class="" src="@/assets/image/client6.svg">
        <img class="" src="@/assets/image/client7.svg">
    </div>
  </div>
</template>