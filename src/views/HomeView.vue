<script setup lang="ts">
import HomeCard from '@/components/home/HomeCard.vue';
import HomeProduct from '@/components/home/HomeProduct.vue';
import ClientCard from '@/components/home/ClientCard.vue';
import HomeBenner from '@/components/home/HomeBenner.vue';
</script>

<template>
  <main>
    <HomeBenner></HomeBenner>
    <HomeCard class="desktop-only"></HomeCard>
    <HomeProduct class="desktop-only"></HomeProduct>
    <ClientCard class="desktop-only"></ClientCard>
  </main>
</template>

<style scoped>

.desktop-only {
  display: none; /* Hide by default */
}

@media (min-width: 768px) {
  /* Show elements on screens larger than 768px (tablet/desktop) */
  .desktop-only {
    display: block;
  }
}
</style>