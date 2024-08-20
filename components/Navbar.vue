<template>
  <!-- <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-600">
        <nuxt-link to="/">Prof. [Name]</nuxt-link>
      </div>
      <div class="hidden md:flex space-x-6">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        <nuxt-link to="/events" class="nav-link">Events</nuxt-link>
        <nuxt-link to="/Publications" class="nav-link">Publications</nuxt-link>
        <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
        <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-blue-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <nuxt-link to="/" class="nav-link block">Home</nuxt-link>
        <nuxt-link to="/about" class="nav-link block">About</nuxt-link>
        <nuxt-link to="/portfolio" class="nav-link block">Portfolio</nuxt-link>
        <nuxt-link to="/publications" class="nav-link block">Publications</nuxt-link>
        <nuxt-link to="/events" class="nav-link block">Events</nuxt-link>
        <nuxt-link to="/contact" class="nav-link block">Contact</nuxt-link>
      </div>
    </div>
  </nav> -->
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
/* .nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium;
} */
</style>
