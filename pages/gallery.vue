<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="py-6 mb-16 bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between px-4 md:px-8">
        <!-- Back to Home Link -->
        <nuxt-link 
          to="/" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back to Home</span>
        </nuxt-link>
      </div>
    </header>

    <!-- Gallery Section -->
    <section class="py-6 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gallery Items -->
          <div class="relative">
            <img 
              src="../assests/lec5.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Presenting a paper at WARIMA Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec6.JPG" 
              alt="Attending a conference with Prof. Bene Abbey" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Attending a conference with<br> Prof. Bene Abbey</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec7.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita, and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">With fellow Visiting Faculty, Prof. Vinita,<br> and her daughter, Noni at Amherst USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec8.JPG" 
              alt="Speaking at CUGH 2024 Los Angeles California USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Speaking at CUGH 2024<br> Los Angeles California USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec9.JPG" 
              alt="Skiing after a hard day's work at Boston, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Skiing after a hard day's work at<br> Boston, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec10.JPG" 
              alt="Skiing after a hard day's work at Boston, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Skiing after a hard day's work at<br> Boston, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec11.JPG" 
              alt="With assigned undergraduate supervisee at UNMASS Amherst, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">With my assigned undergraduate supervisee at<br> UNMASS Amherst, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec12.JPG" 
              alt="A lavish welcome as a visiting Faculty to UMASS Amherst, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">A lavish welcome as a visiting Faculty to<br> UMASS Amherst, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec14.JPG" 
              alt="Ceremony with members" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Ceremony with members</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec15.JPG" 
              alt="Full Panel Session with members" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Full Panel Session with members</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec16.JPG" 
              alt="Presenting an Invited Paper at Philadelphia, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Presenting an Invited Paper at<br> Philadelphia, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec17.JPG" 
              alt="Learning the USA culture and food under the auspices of round the World Women, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Learning the USA culture and food under the auspices of round the World Women, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec18.JPG" 
              alt="Enjoying some snowy weather at Detroit, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">Enjoying some snowy weather at Detroit, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec19.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 font-bold">With fellow Visiting Faculty, Prof. Vinita and her daughter,<br> Noni at Amherst USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec20.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Received Award from College of Health, Sciences, Rivers State University4 </div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec26.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Walk for life</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec22.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800  text-center  font-bold">Received Award from College of Health, Sciences, Rivers State University</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec27.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Working out</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec24.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Posing with Session colleagues at Triple Helix Conference Sao Paulo,I moderated the Session </div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec28.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Birthday Girl 2024</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec13.JPG" 
              alt="With Lab members at UMass Amherst" 
              class="w-full object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-center  text-gray-800 font-bold">With Lab members at UMass Amherst</div>
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
