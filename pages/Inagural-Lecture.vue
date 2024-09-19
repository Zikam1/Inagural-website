<template>
  <div class="container mx-auto px-4 py-8 lg:px-8 xl:px-16">
    <div class="flex flex-wrap justify-start items-center mb-6">
      <!-- Events Tab -->
      <nuxt-link
        exact-active-class="bg-blue-600 text-white"
        class="inline-block px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-colors mb-2 mr-2 w-full sm:w-auto"
        to="/Inagural-Lecture"
      >
        EVENTS
      </nuxt-link>

      <!-- Recent Pictures Tab -->
      <nuxt-link
        exact-active-class="bg-blue-400 text-white"
        class="inline-block px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition-colors mb-2 mr-2 w-full sm:w-auto"
        to="/recent"
      >
        RECENT PICTURES
      </nuxt-link>

      <!-- Testimonials Tab -->
      <nuxt-link
        exact-active-class="bg-blue-400 text-white"
        class="inline-block px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition-colors mb-2 mr-2 w-full sm:w-auto"
        to="/testimonial"
      >
        TESTIMONIALS
      </nuxt-link>

      <!-- Videos Tab -->
      <nuxt-link
        exact-active-class="bg-blue-400 text-white"
        class="inline-block px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition-colors mb-2 w-full sm:w-auto"
        to="/videos"
      >
        VIDEOS
      </nuxt-link>
    </div>

    <section class="py-10 bg-gray-100">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <ul class="space-y-12">
          <!-- Research Area 1 -->
          <li class="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row-reverse items-center lg:items-start">
            <!-- Image Section -->
            <div class="w-full lg:w-1/3 mb-6 lg:mb-0 lg:ml-8">
              <img src="../assests/PIPA.jpg" alt="Research Area 1" class="w-full h-auto rounded-lg shadow-sm">
            </div>
            
            <!-- Text Section -->
            <div class="w-full lg:w-2/3">
              <h3 class="text-3xl font-bold mb-4">191ST INAGURAL LECTURE SERIES</h3>
              <p class="text-lg text-gray-700 font-semibold mb-4">
                Science and Sustainability: Pioneering a Greener Pasture.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                <span class="font-semibold">Key Findings:</span> Join us for an insightful lecture on "Science and Sustainability," exploring cutting-edge research and innovations driving a greener future. 
              </p>
              <p class="text-lg text-gray-700 mb-4">
                <span class="font-semibold">Time:</span> 3PM.
              </p>
              <p class="text-lg text-gray-700">
                <span class="font-semibold">Date:</span> 29TH AUGUST, 2024
              </p>
            </div>
          </li>
          
          <!-- Upcoming Event -->
          <li class="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start">
            <!-- Image Section -->
            <div class="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
              <img src="../assests/ui.jpg" alt="Webinar Event" class="w-full h-auto rounded-lg shadow-sm">
            </div>

            <!-- Text Section -->
            <div class="w-full lg:w-2/3">
              <h3 class="text-3xl font-bold mb-4">Upcoming Event</h3>
              <p class="text-lg text-gray-700 mb-4">
                <strong>No man is an island</strong>
                <br>
                This is a timeless wisdom that holds weight especially in the world of research and innovation. The journey to groundbreaking discoveries and impactful work is rarely walked alone. Collaboration, shared knowledge, and strategic networking are the keys to accessing new possibilities.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                The Academic and Grant Writing Enclave is excited to invite you to a transformative webinar on <strong>"𝗟𝗲𝘃𝗲𝗿𝗮𝗴𝗶𝗻𝗴 𝗡𝗲𝘁𝘄𝗼𝗿𝗸𝘀 𝗳𝗼𝗿 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗮𝗻𝗱 𝗜𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝗼𝗻"</strong>
              </p>
              <p class="text-lg text-gray-700 mb-4">
                <strong>🗓 𝗗𝗔𝗧𝗘:</strong> 7𝘁𝗵 𝗦𝗲𝗽𝘁𝗲𝗺𝗯𝗲𝗿, 2024
                <br>
                <strong>⏰ 𝗧𝗜𝗠𝗘:</strong> 5:00 PM (WAT)
                <br>
                <strong>🎓 𝗙𝗔𝗖𝗜𝗟𝗜𝗧𝗔𝗧𝗢𝗥:</strong> Professor Eucharia Nwaichi
              </p>
              <p class="text-lg text-gray-700 mb-4">
                Join Professor Nwaichi, a distinguished academic with a track record of success, as she shares actionable strategies for building and leveraging networks that amplify research impact.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                You cannot afford to miss this opportunity to learn how to turn your network into a powerful asset for your research and innovation efforts.
              </p>
              <p class="text-lg text-gray-700">
                Secure your spot now via: <a href="https://bit.ly/AGE-LEVERAGING-NETWORKS" class="text-blue-500 hover:underline">https://bit.ly/AGE-LEVERAGING-NETWORKS</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this simple layout
</script>

<style scoped>
/* Optional custom styling */
</style>
