<template>
  <header class="bg-blue-600 text-white p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Logo and Name -->
      <NuxtLink 
        to="/" 
        class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-xl rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <!-- Logo Icon (Optional) -->
        <svg class="w-8 h-8 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v12l7-7 7 7V3H5z" />
        </svg>
        <span>Prof. Nwaichi</span>
      </NuxtLink>

      <!-- Hamburger Menu Button for Mobile -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none relative">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-if="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <ul :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="absolute md:static top-16 right-0 w-full md:w-auto md:flex md:space-x-4 bg-white md:bg-transparent md:ml-auto">
        <li><NuxtLink to="/" class="block px-4 py-2 text-blue-600 md:text-white hover:text-gray-300">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="block px-4 py-2 text-blue-600 md:text-white hover:text-gray-300">About</NuxtLink></li>
        <li><NuxtLink to="/publications" class="block px-4 py-2 text-blue-600 md:text-white hover:text-gray-300">Publications</NuxtLink></li>
        <li><NuxtLink to="/events" class="block px-4 py-2 text-blue-600 md:text-white hover:text-gray-300">Events</NuxtLink></li>
        <li><NuxtLink to="/contact" class="block px-4 py-2 text-blue-600 md:text-white hover:text-gray-300">Contact</NuxtLink></li>
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
