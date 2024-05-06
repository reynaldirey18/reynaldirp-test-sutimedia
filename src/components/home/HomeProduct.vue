<script setup lang="ts">
import {  ChevronRightIcon } from '@heroicons/vue/24/solid'


const cardProduct = [
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Zealandia%20Deluxe%20Dog%20Salmon%20Pate.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Reflex%20Plus%20Adult%20Cat%20Food%20Salmon.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Cat Food',
    pruduct: 'Custome',
    size: '',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Cat%20scratching%20ball%20toy%20kitten%20sisal%20rope%20ball.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Cute%20Pet%20Cat%20Warm%20Nest.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/NaturVet%20Dogs%20-%20Omega-Gold%20Plus%20Salmon%20Oil.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '02',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Costumes%20Fashion%20Pet%20Clother%20Cowboy%20Rider.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Cat Food',
    pruduct: 'Custome',
    size: '',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Costumes%20Chicken%20Drumsti%20ck%20Headband.png'
  },
  {
    name: 'MO231 - Pomeranian White',
    free: 'Free Toy & Free Shaker',
    pruduct: 'Custome',
    size: '',
    price: '6.900.000',
    img: 'https://next-monito.vercel.app/static/img/catalog/products/Plush%20Pet%20Toy.png'
  }
]
</script>
<template>
  <div class="w-full px-28 pt-[60px]">
    <div class="flex justify-between px-5">
      <div class="flex flex-col">
        <p class="font-mendium text-base">Hard to choose right products for your pets?</p>
        <p class="font-bold text-2xl">Our Products</p>
      </div>
      <button class="flex flex-row items-center rounded-full border border-[#003459] py-3 px-7 hover:bg-sky-700 hover:text-white">View More   <ChevronRightIcon class="w-3 h-3 mt-1 ml-1" /></button>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-3">
      <div class="w-[280px] bg-white rounded-xl overflow-hidden shadow-md  transition-transform duration-300 transform hover:-translate-y-2" v-for="(item, idx) in cardProduct" :key="idx">
        <img class="w-[264px] h-[264px] bg-cover rounded-xl mx-auto mt-1" :src="item.img">

        <div class="text-left mx-3">
          <b>{{item.name}}</b>
          <div class="text-[#667479] text-xs flex flex-row items-center gap-3">
            <span class="font-medium">Product: <span class="font-bold">{{item.pruduct}}</span></span>
           .
            <span v-if="item.size" class="font-medium">Size: <span class="font-bold">{{item.size}} Mounths</span></span>
          </div>
          <b class="mt-1">{{ item.price }} VND</b>
        </div>
        <div class="flex flex-row bg-[#FCEED5] rounded-md m-3 px-3 py-1 flex justify-center items-center">
          <img src="@/assets/image/Frame.svg" />
           .
            <b class="text-sm">Free Toy & Free Shaker</b>
        </div>
      </div>

    </div>
  </div>
</template>