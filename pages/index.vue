<template>
  <section class="relative py-5 bg-gradient-to-r from-indigo-50 to-blue-100 text-center overflow-hidden">
    <!-- Rhombus Patterns -->
    <div class="absolute inset-0 grid grid-cols-4 gap-4">
      <div class="bg-indigo-200 h-full w-full transform rotate-45"></div>
      <div class="bg-blue-200 h-full w-full transform rotate-45"></div>
      <div class="bg-indigo-200 h-full w-full transform rotate-45"></div>
      <div class="bg-blue-200 h-full w-full transform rotate-45"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 bg-white bg-opacity-90 p-5 rounded-lg shadow-lg max-w-5xl mx-auto px-4 md:px-8">
      <h2 class="text-4xl font-bold mb-6 text-gray-900">PROF. NWAICHI, Eucharia Oluchi</h2>
      <p class="text-xl mb-8 text-gray-700">Seasoned Biochemistry Professor with International Expertise in Environmental Toxicology, <br>Executive Research, and 13+ Years Of Groundbreaking</br> Teaching Experience.</p>
      <NuxtLink to="/publications" class="inline-block bg-indigo-700 text-white py-3 px-8 rounded-lg hover:bg-indigo-600 transition-transform transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        Discover More
      </NuxtLink>
    </div>
  </section>

  <!-- About Us Section -->
  <section class="py-24 bg-gray-50">
  <div class="container mx-auto flex flex-col md:flex-row items-center max-w-5xl px-4 md:px-8">
    <div class="md:w-1/2">
      <img src="../assests/PIB.jpg" alt="About Us" class="rounded-lg shadow-lg">
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0 md:ml-10">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">About the Inaugural Lecture</h2>
      <p class="text-lg text-gray-600 mb-4">
        I am honored to announce that my inaugural lecture, entitled "Science
        and Sustainability: Pioneering a Greener Future," is scheduled for Thursday,
        August 29, 2024, at 3:00 PM. The lecture will be held at the esteemed
        CBN Centre of Excellence Auditorium, University of Port Harcourt.
      </p>
      <p class="text-lg text-gray-600 mb-6">
        This lecture marks a pivotal moment in my career, where I will discuss the vital role of scientific innovation in advancing sustainability.
      </p>
      <!-- Zoom Link Button -->
      <a href="https://us06web.zoom.us/j/86896769009?pwd=mE0utiEMJIR6UTHZbfVygAqOjcJaJW.1" target="_blank" class="inline-flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-lg font-semibold py-3 px-5 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
        <i class="fas fa-video mr-2 text-white"></i> 
        Join via Zoom
      </a>
    </div>
  </div>
</section>


  <!-- Testimonials Section -->
  <section class="py-24 bg-gray-100">
  <div class="container mx-auto text-center max-w-7xl px-4 md:px-9">
    <h2 class="text-4xl font-bold text-gray-800">DISTINGUISHED TESTIMONIALS</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Testimonial 1 -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "She is a dedicated, brilliant, and hardworking scholar, and as Vice Chancellor, I am extremely proud of her accomplishments."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-14 font-bold text-gray-800">Prof. Georgewill Owunari</p>
        <p class="text-gray-600">Vice Chancellor, University of Portharcourt</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "Prof's work is not only a credit to herself, but also an inspiration to her peers and students who aspire to follow in her distinguished footsteps."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-8 font-bold text-gray-800">Prof. Paul Iroh</p>
        <p class="text-gray-600">Educationist, Uniport</p>
      </div>
      <!-- Testimonial 2 -->
      
       <!-- Testimonial 3 -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "The only African that has grapped the extremely revered John Maddox Prize for outstanding impact in Science."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-12 font-bold  text-gray-800">Dr. Clara C. Ifeanyi Obi</p>
        <p class="text-gray-600">Head of Department of Agric Extension, Uniport</p>
      </div>
      <!-- Testimonial 4 -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "Prof. Eucharia's research in environmental toxicology and pollution control has advanced science and influenced Nigerian policies, benefiting communities and industries."
        </p>
        <div class="mt-0 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-2 font-bold text-gray-800">Prof. Dr. Rafael Popper </p>
        <p class="text-gray-600">Director of Centre for Foresight and Internationalisation(CFI),  Poland</p>
      </div> 
    </div>
  </div>
</section>




  <section class="py-24 bg-gray-50">
  <div class="container mx-auto flex flex-col md:flex-row items-center max-w-5xl px-4 md:px-8">
    
    <!-- Image Section (Left) -->
    <div class="md:w-1/2 mt-8 md:mt-0 md:mr-10">
      <img src="../assests/ui.jpg" alt="Upcoming Event" class="rounded-lg shadow-lg">
    </div>
    
    <!-- Text Section (Right) -->
    <div class="md:w-1/2 m-8">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Upcoming Event</h2>
      <p class="text-lg text-gray-600 mb-4">
        <strong>Webinar Invitation</strong><br>
        Join us for a transformative webinar on <strong>"Leveraging Networks for Research and Innovation"</strong> with Professor Eucharia Nwaichi.<br><br>
        <strong>📅 Date:</strong> September 7, 2024<br>
        <strong>⏰ Time:</strong> 5:00 PM (WAT)<br>
        <strong>🎓 Facilitator:</strong> Professor Eucharia Nwaichi<br><br>
        Discover actionable strategies to enhance your research impact through effective networking.<br><br>
        Secure your spot: <a href="https://bit.ly/AGE-LEVERAGING-NETWORKS" class="text-blue-600 hover:underline">Register here</a><br><br>
        <em>©AGE</em>
      </p>
      <p class="text-lg text-gray-600">
        This lecture marks a pivotal moment in my career, where I will discuss the vital role of scientific innovation in advancing sustainability.
      </p>
    </div>

  </div>
</section>


  <!-- Gallery Section -->
  <section class="py-24 bg-white">
  <div class="container mx-auto text-center max-w-5xl px-4 md:px-8">
    <h2 class="text-4xl font-bold text-gray-800">Gallery</h2>
    <p class="text-lg text-gray-600 mt-4">
      Browse through photo sessions and see activities.
    </p>
    <div class="mt-10 overflow-hidden relative">
      <div class="whitespace-nowrap animate-slide-left flex items-center">
        <!-- Image 1 -->
        <div class="inline-block mx-4">
          <img
            src="../assests/lec0.jpg"
            alt="Gallery Image 1"
            class="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div class="mt-4 text-gray-800 font-bold text-center">
            Conference at <br />Los Angeles California USA
          </div>
        </div>
        <!-- Image 2 -->
        <div class="inline-block mx-4">
          <img
            src="../assests/lec1.jpg"
            alt="Gallery Image 2"
            class="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div class="mt-4 text-gray-800 font-bold text-center">
            Speaking at CUGH 2024, <br />Los Angeles California USA
          </div>
        </div>
      
        <!-- Repeat images for seamless sliding -->
        <div class="inline-block mx-4">
          <img
            src="../assests/lec58.jpg"
            alt="Gallery Image 1"
            class="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div class="mt-4 text-gray-800 font-bold text-center">
            Conducting training for the Academic <br />Staff at Military University Biu
          </div>
        </div>
        <div class="inline-block mx-4">
          <img
            src="../assests/lec1.jpg"
            alt="Gallery Image 2"
            class="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div class="mt-4 text-gray-800 font-bold text-center">
            Speaking at CUGH 2024, <br />Los Angeles California USA
          </div>
        </div>
        <div class="inline-block mx-4">
          <img
            src="../assests/lec4.JPG"
            alt="Gallery Image 3"
            class="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div class="mt-4 text-gray-800 font-bold text-center">
            With HYPREP Technical Committee,<br /> Federal Ministry of Environment
          </div>
        </div>
      </div></div>
      <!-- Centralized NuxtLink -->
      <div class="mt-12 flex justify-center">
        <NuxtLink 
          to="/gallery" 
          class="bg-white text-blue-700 py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
        Click to view more images
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="py-24 bg-gray-100">
    <div class="container mx-auto flex flex-col md:flex-row-reverse items-center max-w-5xl px-4 md:px-8">
      <!-- Image on the right -->
      <div class="md:w-1/2 flex justify-center md:justify-end">
        <img src="../assests/project-.webp" alt="About Us" class="rounded-lg shadow-lg">
      </div>
      <!-- Text on the left -->
      <div class="md:w-1/2 mt-8 md:mt-0 md:mr-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Victory at Debate Championship:</h2>
        <p class="text-lg text-gray-600 mb-4">
          Led the University of Port Harcourt to win the Gold Trophy at the All Nigeria Universities Debate Championship.
        </p>
        <NuxtLink 
          to="/projects" 
          class="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          See More
        </NuxtLink>
      </div>
    </div>
  </section>


  <section class="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-24">
    <div class="container mx-auto text-center max-w-5xl px-4 md:px-8">
      <h2 class="text-4xl font-bold mb-4">Upcoming Inaugural Lecture: Science and Sustainability:</h2>
      <p class="text-lg mb-6">
        "Join me on Thursday, August 29, 2024, as I explore the critical role of science in advancing sustainable practices for a greener future."
      </p>
      <NuxtLink 
        to="/events" 
        class="inline-block bg-white text-blue-700 py-3 px-8 rounded-lg hover:bg-gray-200 transition-transform transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        Learn More
      </NuxtLink>
    </div>
  </section>


 
  <section class="py-24 bg-gray-100">
    <!-- Section Title -->
    <div class="container mx-auto px-16 md:px-24 text-center">
      <h1 class="text-4xl font-bold mb-6">Recent Event</h1>
    </div>

    <!-- Gallery Grid -->
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Gallery Item 1 -->
        <div class="relative">
          <img src="https://zikama.sirv.com/Prof/DSC_0912.jpg"
            width="6016" height="4016" 
            alt=""
            class="w-full h-64 object-cover rounded-lg shadow-lg">
        </div>

        <!-- Gallery Item 2 -->
        <div class="relative">
          <img src="https://zikama.sirv.com/Prof/DSC_0933.jpg"
            width="6016" height="4016" 
            alt=""
            class="w-full h-64 object-cover rounded-lg shadow-lg">
        </div>

        <!-- Gallery Item 3 -->
        <div class="relative">
          <img src="https://zikama.sirv.com/Prof/DSC_0938%20(1).jpg"
            width="2625" height="1857"
            alt=""
            class="w-full h-64 object-cover rounded-lg shadow-lg">
        </div>
      </div>

      <!-- "View More" Nuxt Link -->
      <div class="text-center mt-8">
        <NuxtLink to="/recent" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          View More Images
        </NuxtLink>
      </div>
    </div>
</section>


  
</template>

<script setup>
</script>

<style>
  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-slide-left {
    display: inline-block;
    animation: slide-left 50s linear infinite;
  }
  
</style>