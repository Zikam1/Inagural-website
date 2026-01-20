<template>
  <section class="bg-gray-100 pt-4 pb-4 min-h-screen flex flex-col items-center justify-start">
    <div class="container mx-auto px-4">
      <nuxt-link 
        to="/events" 
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
      <div class="flex flex-wrap justify-center gap-6">
   
        <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/LdfgCzOFzco"
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
 
        <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/9cm367S1df0" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
          <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/eCY5o_T1oSs" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe 
          src="https://www.youtube.com/embed/ADovNWsf03M" 
          class="w-full h-48 md:h-96" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
        
      <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/HS_a_OlGCJQ?start=1" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe 
          src="https://www.youtube.com/embed/hl8DTqRul1I?start=5" 
          class="w-full h-48 md:h-96" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

       <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/X4Gcw8hCb-4" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe 
          src="https://www.youtube.com/embed/b7Kc_bhScKg" 
          class="w-full h-48 md:h-96" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

       <div class="w-full md:w-1/2 lg:w-1/3">
          <iframe 
            src="https://www.youtube.com/embed/yKSHyFitc0w" 
            class="w-full h-48 md:h-96" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe 
          src="https://www.youtube.com/embed/6GAD0yCvPCA" 
          class="w-full h-48 md:h-96" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>


        <div class="w-full md:w-1/2 lg:w-1/3">
        <video 
          src="../assests/video/profnew.mp4" 
          class="w-full h-48 md:h-96 object-cover" 
          controls 
          autoplay 
          muted 
          loop>
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>
