<template>
    <section class="py-6 bg-white">
      
      <!-- Section Title -->
      <div class="container mx-auto px-16 md:px-24 text-center">
        
        <h1 class="text-4xl font-semibold mb-12">Explore Some of the Moments Captured During the Event.</h1>
      </div>
  
      <!-- Gallery Grid -->
    
      <div class="container mx-auto px-4 md:px-8">
        <nuxt-link 
          to="/Inaugural Lecture" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back</span>
        </nuxt-link>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop through the images array -->
          <div v-for="(image, index) in images" :key="index" class="relative">
            <img :src="image.url"
              :alt="image.alt"
              class="w-full h-64 object-cover rounded-lg shadow-lg">
          </div>
        </div>
      </div>

     

    </section>
  </template>
  
  <script setup>
  
  const images = [
    {
      url: "https://zikama.sirv.com/Prof/DSC_0912.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0933.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0938%20(1).jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0959.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0962%20(1).jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0963.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0964.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0965.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0967.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0970.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0968.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0971.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0990.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0984.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0978.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0972.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0976.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0980.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0982.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0983.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0984.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0986.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0990.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0997.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0998.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_0999.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1001.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1002.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1003.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1004.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1005.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1006.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1007.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1009.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1010.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1011.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1012.jpg",
      alt: "",
    },
    
    {
      url: "https://zikama.sirv.com/Prof/DSC_1014.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1015.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1016.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1016.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1017.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1018.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1020.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1021.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1022.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1023.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1024.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1025.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1027.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1028.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1029.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1033.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1034.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1036.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1037.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1038.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1039.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1040.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1042.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1204.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1205.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1206.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1207.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/DSC_1213.jpg",
      alt: "",
    },
    {
      url: "https://zikama.sirv.com/Prof/IMG-20240915-WA0010.jpg",
      alt: "",
    },
  
  ];
     const youtubeLink = "https://www.youtube.com/embed/LdfgCzOFzco";
  </script>
  