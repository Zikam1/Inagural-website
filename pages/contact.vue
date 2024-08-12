<template>
    <section class="container mx-auto p-8">
      <h2 class="text-4xl font-bold">Contact</h2>
      <p class="mt-4 text-lg">If you have any inquiries or would like to collaborate, please fill out the form below.</p>
      <form class="mt-8 max-w-xl mx-auto">
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" placeholder="Your Name" class="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" placeholder="Your Email" class="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Message</label>
          <textarea placeholder="Your Message" class="w-full p-3 border border-gray-300 rounded-md" rows="5"></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">Send Message</button>
      </form>
    </section>
  </template>
  