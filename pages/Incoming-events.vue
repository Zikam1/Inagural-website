<template>
  <section class="py-16 sm:py-24 bg-gray-100 mb-12">
    
    <div class="container mx-auto px-4 sm:px-6">
      <nuxt-link 
        to="/events" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 sm:mb-8"
      >
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="text-sm md:text-base">Back</span>
      </nuxt-link>

      <h2 class="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
        Upcoming Events
      </h2>

      <ul class="space-y-16 max-w-7xl mx-auto">
        <!-- AFRICAN GAS INNOVATION SUMMIT -->
       

        <!-- CODAPNU WORKSHOP -->
        <li class="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start">
          <div class="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
            <img src="../assests/ghh.png" alt="CODAPNU Workshop" class="w-full h-auto rounded-lg shadow-sm">
          </div>
          <div class="w-full lg:w-2/3">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">2025 CODAPNU WORKSHOP</h3>
            <p class="text-lg font-semibold text-gray-700 mb-2">
              <strong>Organizer:</strong> Committee of Directors of Academic Planning of Nigerian Universities
            </p>
            <p class="text-lg font-semibold text-gray-700 mb-2">
              <strong>Theme:</strong> Enhancing Academic Excellence & Graduate Employability
            </p>
            <p class="text-base text-gray-600 mb-1"><strong>🗓 Date:</strong> 22nd – 25th June 2025</p>
            <p class="text-base text-gray-600 mb-1"><strong>📍 Venue:</strong> NUC Secretariat, Abuja</p>
            <p class="text-base text-gray-600 mb-1"><strong>⏰ Time:</strong> 9:00 AM Daily</p>
            <p class="text-base text-gray-600">
              <strong>Workshop:</strong> Empowering planning directors and officers to boost employability and academic quality.
            </p>
          </div>
        </li>

        <!-- FUPRE ANNUAL LECTURE -->
        <li class="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start">
          <div class="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
            <img src="../assests/FDP.jpg" alt="FUPRE Lecture" class="w-full h-auto rounded-lg shadow-sm">
          </div>
          <div class="w-full lg:w-2/3">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Federal University of Petroleum Resources Effurun (FUPRE)</h3>
            <p class="text-xl font-semibold text-yellow-500 mb-1">Maiden Annual Lecture Series</p>
            <p class="text-lg font-semibold text-gray-700 mb-2">
              <strong>Theme:</strong> Driving Innovation and Funding Through Quality Research: The Triple Helix Model
            </p>
            <p class="text-base text-gray-600 mb-1"><strong>🗓 Date:</strong> 26th June 2025</p>
            <p class="text-base text-gray-600 mb-1"><strong>📍 Venue:</strong> University Main Auditorium, FUPRE</p>
            <p class="text-base text-gray-600 mb-1"><strong>⏰ Time:</strong> 10:00 AM</p>
            <p class="text-base text-gray-600"><strong>Chief Host:</strong> Prof. Ezekiel Agbalagba (Vice Chancellor)</p>
          </div>
        </li>

        <!-- UNI PORT WEBINAR -->
        <li class="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row-reverse items-center lg:items-start">
          <div class="w-full lg:w-1/3 mb-6 lg:mb-0 lg:ml-8">
            <img src="../assests/secure.jpg" alt="UNIPORT Webinar" class="w-full h-auto rounded-lg shadow-sm">
          </div>
          <div class="w-full lg:w-2/3">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">University of Port Harcourt</h3>
            <p class="text-base font-medium text-gray-600 mb-2">(Faculty of Agriculture)</p>
            <p class="text-lg font-semibold text-yellow-600 mb-2">Departmental Quarterly Webinar Series (5th Edition)</p>
            <p class="text-lg font-semibold text-gray-700 mb-1">
              <strong>Theme:</strong> Securing Grants and Advancing Research: Key Strategies
            </p>
            <p class="text-lg font-semibold text-gray-700 mb-2">
              <strong>Topic:</strong> Budgeting and Financial Planning in Grant Applications
            </p>
            <p class="text-base text-gray-600 mb-1"><strong>🗓 Date:</strong> 26th June 2025</p>
            <p class="text-base text-gray-600 mb-1"><strong>⏰ Time:</strong> 2:30 PM WAT</p>
            <p class="text-base text-gray-600 mb-1">
              <strong>🔗 Register:</strong>
              <a href="https://us06web.zoom.us/meeting/register/6E1eTZuYSq-ROXVaZSxNrA" class="text-blue-600 underline" target="_blank">Click here to register</a>
            </p>
            <p class="text-base text-gray-600">
              <strong>📧 Note:</strong> Confirmation email will be sent after registration.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
