<template>
  <section class="bg-gray-100 pt-4 pb-4 min-h-screen flex flex-col items-center justify-start">
    <div class="container mx-auto px-4">
      <nuxt-link 
        to="/Inaugural-Lecture" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
      >
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="text-sm md:text-base">Back</span>
      </nuxt-link>
      
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">
        YouTube Videos
      </h2>
      
      <!-- YouTube Embed Section -->
      <div class="flex flex-wrap justify-center gap-6">
        <!-- First Video -->
        <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/LdfgCzOFzco"
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
        <!-- Second Video -->
        <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/9cm367S1df0" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for embedding videos
</script>

<style scoped>
/* Optional custom styling */
</style>
