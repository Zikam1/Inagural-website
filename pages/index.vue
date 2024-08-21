<template>
  
  <section class="text-center py-20 bg-gray-100">
    <h2 class="text-4xl font-bold mb-8">PROF. NWAICHI, Eucharia Oluchi </h2>
    <p class="text-xl mb-8">Explore the research, publications, and more.</p>
    <NuxtLink to="/publications" class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">Learn More</NuxtLink>
  </section>
    <!-- About Us Section -->
    <section class="py-24 bg-white">
  <div class="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
    <div class="md:w-1/2">
      <img src="../assests/PIB.jpg" alt="About Us" class="rounded-lg shadow-lg">
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0 md:ml-10">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">About the Inaugural Lecture</h2>
      <p class="text-lg text-gray-600 mb-4">
        I am honored to announce that my inaugural lecture, entitled "Science
        and Sustainability: Pioneering a Greener Future," is scheduled for Thursday,
        August 29, 2024, at 3:00 PM. The lecture will be held at the esteemed
        CBN Centre of Excellence Auditorium, University of Port Harcourt.
      </p>
      <p class="text-lg text-gray-600">
        This lecture represents a pivotal moment in my academic career,
        and I am enthusiastic about presenting an in-depth discussion on
        the role of scientific innovation in advancing sustainable practices.
        I look forward to the opportunity to engage with esteemed colleagues and participants on this crucial topic.
      </p>
    </div>
  </div>
</section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-gray-100">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold text-gray-800">AUDIENCE INSIGHTS</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testimonial 1 -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "The inaugural lecture will be an inspiring event, highlighting Prof. Euchaira’s outstanding work."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-2 font-bold text-gray-800">Mariam Joseph</p>
        <p class="text-gray-600">Alumni</p>
      </div>
      <!-- Testimonial 2 -->
      <div class="bg-white shadow-lg  rounded-lg p-6">
        <p class="text-gray-600 italic">
          "A well-organized event that brings together the best minds in
          academia."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-2 font-bold text-gray-800">Andrew Johnson</p>
        <p class="text-gray-600">Professor</p>
      </div>
      <!-- Testimonial 3 -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p class="text-gray-600 italic">
          "I look forward to the lecture, which I expect
           will inspire me and highlight our professor’s great work."
        </p>
        <div class="mt-4 text-blue-600">
          <i class="fas fa-user-circle text-4xl"></i>
        </div>
        <p class="mt-2 font-bold text-gray-800">Emily Johnson</p>
        <p class="text-gray-600">Student</p>
      </div>
    </div>
  </div>
</section>

    <!-- Gallery Section -->
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
          src="../assests/lec0.jpg"
          alt="Gallery Image 1"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div class="mt-6 text-gray-800 font-bold">
          Conference at <br />Los Angeles California USA
        </div>
      </div>
      <!-- Image 2 -->
      <div class="relative">
        <img
          src="../assests/lec1.jpg"
          alt="Gallery Image 2"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div class="mt-6 text-gray-800 font-bold">
          Speaking at CUGH 2024, <br />Los Angeles California USA
        </div>
      </div>
      <!-- Image 3 -->
      <div class="relative">
        <img
          src="../assests/lec4.JPG"
          alt="Gallery Image 3"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div class="mt-6 text-gray-800 font-bold">
          With the Chairman and fellow members of the<br />HYPREP Technical Committee, Federal Ministry of Environment
        </div>
      </div>
    </div>
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

<section class="py-24 bg-white">
    <div class="container mx-auto flex flex-col md:flex-row-reverse items-center px-4 md:px-8">
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
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold mb-4">Upcoming Inaugural Lecture: Science and Sustainability:</h2>
    <p class="text-2xl mb-8">
      Pioneering a Greener Future.
    </p>
    <nuxt-link
      href="events"
      class="bg-white  text-blue-700 py-3 px-8 rounded-lg shadow-lg text-lg font-semibold  hover:bg-gray-100 transition duration-300"
    >
      Read More
      </nuxt-link
      >
  </div>
</section>

    <!-- Latest News Section -->
    <section class="py-24 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800">Research Excerpts</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- News 1 -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800">Publications</h3>
            <p class="text-gray-600 mt-4">
              Contributions, including research papers, book chapters, 
             offering in-depth analysis on diverse topics in scholarly discourse.
            </p>
            <nuxt-link
              href="/publications" 
              class="mt-4 inline-block text-blue-600 hover:underline"
              >Read More</nuxt-link
            >
            
          </div>
          <!-- News 2 -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800">Paper Presentations</h3>
            <p class="text-gray-600 mt-4">
              Showcasing pioneering research and thought leadership across diverse academic fields.
            </p>
            <nuxt-link
              href="/paperpresent" 
              class="mt-4 inline-block text-blue-600 hover:underline"
              >Read More</nuxt-link
            >
          </div>
          <!-- News 3 -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800">Workshop</h3>
            <p class="text-gray-600 mt-4">
            Advanced learning opportunities across a wide range of topics, designed to enhance 
              participants' skills and understanding in their respective areas of interest..
            </p>
            <nuxt-link
              href="/workshop" 
              class="mt-4 inline-block text-blue-600 hover:underline"
              >Read More</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    


</template>

<script setup>

</script>
