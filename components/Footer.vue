<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div>
        <h3 class="text-xl font-bold">About</h3>
        <p class="mt-4 text-gray-400">
          Professor [Name] is a leading expert in [Field/Discipline], with a career dedicated to research, teaching, and innovation. Learn more about her work and contributions to the field.
        </p>
      </div>

      <!-- Navigation Links -->
      <div>
        <h3 class="text-xl font-bold">Quick Links</h3>
        <ul class="mt-4 space-y-2">
          <li>
            <nuxt-link to="/" class="text-gray-400 hover:text-white">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="text-gray-400 hover:text-white">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="text-gray-400 hover:text-white">Contact</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div>
        <h3 class="text-xl font-bold">Contact</h3>
        <ul class="mt-4 space-y-2">
          <li>
            Email: 
            <a href="mailto:professor@example.com" class="text-gray-400 hover:text-white">
              professor@example.com
            </a>
          </li>
          <li>
            Phone: 
            <a href="tel:+1234567890" class="text-gray-400 hover:text-white">
              +1 (234) 567-890
            </a>
          </li>
          <li>
            Office: [University Name], [Building], [Room Number]
          </li>
        </ul>

        <!-- Social Media Links -->
        <div class="mt-6 flex space-x-4">
          <a href="https://twitter.com" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 26 0 26-16.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"></path>
            </svg>
          </a>
          <!-- Add more social links as needed -->
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-2 pt-2 text-center text-gray-500">
      &copy; 2024 Professor [Name]. All rights reserved.
    </div>
  </footer>
</template>
