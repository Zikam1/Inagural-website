<template>
    <div class="bg-gray-100 min-h-screen">
      <header class="py-6 mb-16 bg-white shadow-md">
        <nuxt-link 
          to="/" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back to Home</span>
        </nuxt-link><h2 class="text-4xl font-bold text-center text-gray-800">Gallery</h2>
      </header>
  
      <section class="py-6 bg-white">
        
        <div class="container mx-auto text-center">
          <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Image 1 -->
             <div class="relative">
                <img
                  src="../assests/lec5.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">Presenting a paper at WARIMA Conference</div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec6.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec7.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec8.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec9.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec10.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec11.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec12.JPG"
                  alt="Gallery Image 3"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
              </div>
              <div class="relative">
                <img
                  src="../assests/lec13.JPG"
                  alt="Gallery Image 3"
                  class="w-full  object-cover rounded-lg shadow-lg"
                /><div class="mt-6 text-gray-800 font-bold">With the Chairman and fellow members of the<br> HYPREP Technical Committee, Federal Ministry of Environment</br></div>
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
  