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
              src="../assests/he.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">HYPREP committee</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/hee.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Handed our end-of-task Report to HYPREP on the 13th of March 2025</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/phh.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Access Bank International Women's Day Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/phhh.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Access Bank International Women's Day Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/fg.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Access Bank International Women's Day Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/phhhh.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Access Bank International Women's Day Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec5.JPG" 
              alt="Presenting a paper at WARIMA Conference" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Presenting a paper at WARIMA Conference</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec6.JPG" 
              alt="Attending a conference with Prof. Bene Abbey" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Attending a conference with<br> Prof. Bene Abbey</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec7.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita, and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">With fellow Visiting Faculty, Prof. Vinita,<br> and her daughter, Noni at Amherst USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec8.JPG" 
              alt="Speaking at CUGH 2024 Los Angeles California USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Speaking at CUGH 2024<br> Los Angeles California USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec9.JPG" 
              alt="Skiing after a hard day's work at Boston, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Skiing after a hard day's work at<br> Boston, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec10.JPG" 
              alt="Skiing after a hard day's work at Boston, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Skiing after a hard day's work at<br> Boston, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec11.JPG" 
              alt="With assigned undergraduate supervisee at UNMASS Amherst, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">With my assigned undergraduate supervisee at<br> UNMASS Amherst, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec12.JPG" 
              alt="A lavish welcome as a visiting Faculty to UMASS Amherst, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">A lavish welcome as a visiting Faculty to<br> UMASS Amherst, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec14.JPG" 
              alt="Ceremony with members" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Ceremony with members</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec15.JPG" 
              alt="Full Panel Session with members" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Full Panel Session with members</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec16.JPG" 
              alt="Presenting an Invited Paper at Philadelphia, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Presenting an Invited Paper at<br> Philadelphia, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec17.JPG" 
              alt="Learning the USA culture and food under the auspices of round the World Women, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Learning the USA culture and food under the auspices of round the World Women, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec18.JPG" 
              alt="Enjoying some snowy weather at Detroit, USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Enjoying some snowy weather at Detroit, USA</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec19.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">With fellow Visiting Faculty, Prof. Vinita and her daughter,<br> Noni at Amherst USA</div>
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
              src="../assests/lec30.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Relaxing at a Park in Spain</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec31.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Celeberating the End of year 2024 in Cordoba, Spain</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec32.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Members of Board</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec33.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Sharing in Research to Policy Symposium in Kumasi Ghana</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec34.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">After delivering a STEM inspirational lecture to girls in science</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec35.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Receiving University of PortHarcourt Merit Award 2023</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec36.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">End of year celeberations at the University of Port Harcourt 2022</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec37.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Giving a Lecture on  Online presence of a Scholar in the 21st Century</div>
          </div>
          
          <div class="relative">
            <img 
              src="../assests/lec47.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Discussion on weather conditions due to Climate change</div>
          </div>
         
          <div class="relative">
            <img 
              src="../assests/lec42.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Speaking in Kenya</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec43.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Ready for my interview at BBC London Headquarters</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec44.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">With the King of Finima in Bonny Island and some dignitaries after working with them</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec45.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Triple Helix Conference in Brazil 2023</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec48.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">I became first Cohort Affiliate of Africa of African Academy of Science in 2016 at Botswana</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec49.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Responding to children during flood emergency in Ahoada, 2012</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec50.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Serving as a Resource person for a Retreat for the Committee of Vice Chancellors in Nigeria, Abuja 2016</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec51.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">After my presentation at EUROSOIL 2012 in Italy</div>
          </div>
           <div class="relative">
            <img 
              src="../assests/lec52.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">At IPS Conference in France, 2010</div>
          </div>
          
          <div class="relative">
            <img 
              src="../assests/lec54.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Admiring UNESCO Heriatage Lavaux in SwitzerLand</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec56.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Mentoring outing with First Class Graduands of Uniport in 2019</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec57.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">In a workshop in SanFrancisco, USA 2014</div>
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
