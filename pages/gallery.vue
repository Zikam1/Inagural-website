<template>
    <div class="bg-gray-100 min-h-screen">
      <header class="p-6 bg-white shadow-md">
        <nuxt-link 
          to="/" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back to Home</span>
        </nuxt-link>
      </header>
  
      <section class="py-24 bg-white">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-800">Gallery</h2>
          <p class="text-lg text-gray-600 mt-4">
            Browse through the highlights of our previous inaugural lectures.
          </p>
          <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Image 1 -->
            <div class="relative">
              <img
                src="../assets/lec0.jpg"
                alt="Gallery Image 1"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <div class="font-bold">Speaking at CUGH 2024, Los Angeles, California USA</div>
              </div>
            </div>
            <!-- Image 2 -->
            <div class="relative">
              <img
                src="../assets/lec1.jpg"
                alt="Gallery Image 2"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <div class="font-bold">Speaking at CUGH 2024, Los Angeles, California USA</div>
              </div>
            </div>
            <!-- Image 3 -->
            <div class="relative">
              <img
                src="../assets/lec4.JPG"
                alt="Gallery Image 3"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <div class="font-bold">With the Chairman and fellow members of the HYPREP Technical Committee, Federal Ministry of Environment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No special script is needed for this simple layout
  </script>
  
  <style scoped>
  /* Additional scoped CSS (if needed) */
  </style>
  