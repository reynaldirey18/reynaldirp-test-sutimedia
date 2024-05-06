<script setup lang="ts">
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
<nav class="bg-transparent absolute top-0 left-0 right-0 z-10">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-center items-center h-16 gap-4">
      <!-- Burger menu -->
      <div class="flex md:hidden items-center">
        <button id="burger-menu" class="text-[#003459] p-2 focus:outline-none focus:bg-gray-700">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center">
        <a href="#" class="text-[#003459] text-lg font-semibold">
          <img class="w-[115px] h-[40px]" src="@/assets/image/Logo.svg" />
        </a>
      </div>

      <!-- Navbar links -->
      <div class="hidden md:flex md:items-center">
        <a href="#" class="text-[#003459] px-3 py-2 rounded-md text-sm font-bold">Home</a>
        <a href="#" class="text-[#003459] px-3 py-2 rounded-md text-sm font-bold">Category</a>
        <a href="#" class="text-[#003459] px-3 py-2 rounded-md text-sm font-bold">Abouth</a>
        <a href="#" class="text-[#003459] px-3 py-2 rounded-md text-sm font-bold">Contact</a>
      </div>

      <!-- search -->
      <div class="hidden md:flex w-[280px] h-[44px] rounded-full overflow-hidden bg-white shadow-md justify-left items-center">
        <MagnifyingGlassIcon class="w-[20px] h-[20px] ml-2 text-gray-500" />
        <input type="text" name="search" class="p-2 bg-transparent !border-none rounded-full text-sm !focus:outline-none !focus:border-transparent flex-grow" placeholder="Search something here!">
      </div>

      <!-- button community -->
      <button small class="hidden md:flex rounded-full bg-[#003459] py-3 px-7 hover:bg-sky-700 text-white">Joint The Community</button>

      <!-- dropdown -->
      <div class="hidden md:flex items-center px-3 py-2 text-base font-medium focus:outline-none cursor-pointer">
        <img src="@/assets/image/flag-vnd.svg" alt="Flag" class="w-6 h-4 inline mr-2">
        VDN
        <ChevronDownIcon class="w-[20px] h-[20px] ml-2 text-gray-500" />
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <div class="md:hidden" id="mobile-menu" style="display: none;">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" class="text-[#003459] block px-3 py-2 rounded-md text-base font-medium">Home</a>
      <a href="#" class="text-[#003459] block px-3 py-2 rounded-md text-base font-medium">Category</a>
      <a href="#" class="text-[#003459] block px-3 py-2 rounded-md text-base font-medium">Abouth</a>
      <a href="#" class="text-[#003459] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    </div>
  </div>
</nav>
</template>
<style scoped>

</style>