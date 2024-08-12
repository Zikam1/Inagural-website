<template>
    <section class="container mx-auto p-8">
      <h2 class="text-4xl font-bold">{{ portfolioItem.title }}</h2>
      <p class="mt-4 text-lg">{{ portfolioItem.description }}</p>
  
      <div class="mt-8">
        <h3 class="text-3xl font-semibold">Abstract</h3>
        <p class="mt-2">{{ portfolioItem.abstract }}</p>
      </div>
  
      <div class="mt-8">
        <h3 class="text-3xl font-semibold">Full Text</h3>
        <p class="mt-2">{{ portfolioItem.fullText }}</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const portfolioId = route.params.id;
  
  const portfolioItems = [
    { id: 1, title: 'Research on Quantum Computing', description: 'A comprehensive research paper on quantum computing and its future implications.', abstract: 'This research explores...', fullText: 'Full text content here...' },
    { id: 2, title: 'AI and Ethics', description: 'An exploration of the ethical concerns surrounding artificial intelligence.', abstract: 'This paper discusses...', fullText: 'Full text content here...' },
    { id: 3, title: 'Innovations in Machine Learning', description: 'A detailed report on the latest innovations in machine learning technology.', abstract: 'This report covers...', fullText: 'Full text content here...' },
  ];
  
  const portfolioItem = portfolioItems.find(item => item.id == portfolioId);
  </script>
  