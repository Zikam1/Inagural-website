<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold">About</h3>
          <p class="mt-4 text-gray-400">
            Prof. Eucharia Nwaichi, an expert in environmental management, has over 13 years of experience driving student achievement and enhancing university-industry ties.
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
                nodullm@yahoo.com
              </a>
            </li>
            <li>
              Phone:
              <a href="tel:+1234567890" class="text-gray-400 hover:text-white">
                +234 805 603 1989
              </a>
            </li>
            <li>
              Department of Biochemistry, Faculty of Science, University of Port Harcourt, P.M.B.5323 Rivers State Nigeria
            </li>
          </ul>

          <!-- Social Media Links -->
          <div class="mt-6 flex space-x-4">
            <a href="https://twitter.com" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 26 0 26-16.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://ng.linkedin.com/in/eucharia" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"></path>
              </svg>
            </a>
            <!-- Add more social links as needed -->
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
      &copy; 2024 Professor NWAICHI, Eucharia Oluchi. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
/* Make sure links and text are readable on smaller screens */
a {
  word-break: break-all;
}

/* Ensure the footer text is not too small on smaller devices */
@media (max-width: 640px) {
  .text-sm {
    font-size: 0.875rem; /* Adjust text size for smaller screens */
  }
}
</style>
