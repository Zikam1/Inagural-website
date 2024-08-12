<template>
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl px-4 font-bold hover:text-gray-300">
          Ingural Lectures
        </NuxtLink>
        <button @click="toggleMenu" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="absolute top-16 left-0 w-full bg-blue-600 md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:flex md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <li><NuxtLink to="/" class="block px-4 py-2 hover:text-gray-300">Home</NuxtLink></li>
        
          <li><NuxtLink to="/about" class="block px-4 py-2 hover:text-gray-300">About</NuxtLink></li>
        
          <li><NuxtLink to="/contact" class="block px-4 py-2 hover:text-gray-300">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
