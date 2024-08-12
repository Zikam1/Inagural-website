<template>
  <section class="bg-gray-100 p-8">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-bold">Professor [Name]</h1>
      <p class="mt-4 text-xl text-gray-700">Leading Innovations in [Field/Discipline]</p>
      <div class="mt-8">
        <nuxt-link to="/about" class="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">About Me</nuxt-link>
        <nuxt-link to="/portfolio" class="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 ml-4">View Portfolio</nuxt-link>
      </div>
    </div>
  </section>

  <section class="container mx-auto p-8">
    <h2 class="text-3xl font-semibold text-center">Recent Work</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div v-for="item in recentWorks" :key="item.id" class="bg-white shadow-md rounded p-4">
        <h3 class="text-xl font-bold">{{ item.title }}</h3>
        <p class="mt-2">{{ item.description }}</p>
        <nuxt-link :to="`/portfolio/${item.id}`" class="text-blue-500 hover:underline mt-4 block">Read more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const recentWorks = [
  { id: 1, title: 'AI in Healthcare', description: 'Exploring AI applications in the healthcare industry.' },
  { id: 2, title: 'Ethics of AI', description: 'A deep dive into the ethical considerations of AI development.' },
  { id: 3, title: 'Machine Learning Advances', description: 'Recent advancements in machine learning technologies.' },
];
</script>
