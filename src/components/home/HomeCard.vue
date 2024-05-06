<script setup lang="ts">
import { CircleStackIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const cardItems = [
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO231%20-%20Pomeranian%20White.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO502%20-%20Poodle%20Tiny%20Yellow.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO102%20-%20Poodle%20Tiny%20Sepia.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO512%20-%20Alaskan%20Malamute%20Grey.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO231%20-%20Pembroke%20Corgi%20Cream.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO502%20-%20Pembroke%20Corgi%20Tricolor.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO232%20-%20Pomeranian%20White.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    gene: 'Male',
    age: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/dogs/MO512%20-%20Poodle%20Tiny%20Dairy%20Cow.png'
  }
]
</script>
<template>
  <div class="w-full px-28 pt-[60px]">
    <div class="flex justify-between px-5">
      <div class="flex flex-col">
        <p class="font-mendium text-base">Whats new?</p>
        <p class="font-bold text-2xl">Take a look at some of our pets</p>
      </div>
      <button small class=" flex flex-row items-center justify-center rounded-full border border-[#003459] py-3 px-7 hover:bg-sky-700 hover:text-white">View More <ChevronRightIcon class="w-3 h-3 mt-1 ml-1" /></button>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-3 ">
      <div class="w-[280px] h-[378px] bg-white rounded-xl overflow-hidden shadow-md  transition-transform duration-300 transform hover:-translate-y-2" v-for="(item, idx) in cardItems" :key="idx">
        <img class="w-[264px] h-[264px] bg-cover rounded-xl mx-auto mt-1" :src="item.img">

        <div class="text-left mx-3">
          <b>{{item.name}}</b>
          <div class="text-[#667479] text-xs flex flex-row items-center gap-3">
            <span class="font-medium">Gene: <span class="font-bold">{{item.gene}}</span></span>
            .
            <span class="font-medium">Age: <span class="font-bold">{{item.age}} Mounths</span></span>
          </div>
          <b class="mt-1">{{ item.price }} VND</b>
        </div>
      </div>

    </div>
  </div>
</template>