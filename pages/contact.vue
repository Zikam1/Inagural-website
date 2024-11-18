<template>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto">
        <!-- <h2 class="text-4xl font-bold mb-8 text-center">Contact</h2> -->
        <div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
          <!-- Image Section -->
          <div class="w-full lg:w-1/3 flex-shrink-0">
            <img src="../assests/cctt.png" alt="Contact Us" class="w-full h-auto rounded-lg shadow-lg">
          </div>
  
          <!-- Form Section -->
          <form class="w-full lg:w-1/3 space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div class="flex flex-col">
              <label class="text-lg font-semibold mb-2">Name</label>
              <input 
                type="text" 
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your name"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-lg font-semibold mb-2">Email</label>
              <input 
                type="email" 
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-lg font-semibold mb-2">Message</label>
              <textarea 
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full bg-blue-900 text-white py-3 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  