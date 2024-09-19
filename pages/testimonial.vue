<template>
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
         Testimonials
        </h2>
        <nuxt-link 
          to="/Inagural-Lecture" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back </span>
        </nuxt-link>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <div class="flex items-center space-x-4">
              <img
                class="w-16 h-16 rounded-full object-cover"
                :src="testimonial.image"
                :alt="testimonial.name"
              />
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-500">{{ testimonial.designation }}</p>
              </div>
            </div>
            <p class="mt-4 text-gray-600">
              "{{ testimonial.quote }}"
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    {
      name: "Dr. N.K. Achi",
      designation: "Head of Department, Biochemistry MOUAU",
      quote: "Congratulations to you, my esteemed Professor on your inaugural lecture. It was truly outstanding, and it resonated deeply with everyone in attendance. The depth and clarity of your presentation were exceptional,and the results speak volumes. I want to say l  have gained invaluable insights from your lecture, and i am genuinely grateful to have had the opportunity to be part of  your success .I would also like to extend my gratitude to Dr. Clara  for her outstanding accountability and organization in leading the committee of friends. I look forward to sharing my experiences and your impressive organizational skills with my colleagues Thank you, everyone.",
      image: ".../assests/lec2.jpg",
    },
    {
      name: "Dr Mojisola Owoseni",
      designation: "",
      quote: "Congratulations 🎊 Eucharia on your outstanding delivery of your Inaugural lecturer. I joined via the lecture link. Your research journey is always inspiring. I wish you a more successful journey ✨️ and a blessed New Month ahead.",
      image: "/images/david.jpg",
    },
    {
      name: "Mr Patrick Uhegwu",
      designation: "Arizon USA",
      quote: "Hello my beloved Sister, Congratulations to you on the inaugural lecture delivered. I have no doubt your hard work, and the dedication has truly paid off. Your lectureship and role in environmental research is a testament to your incredible work ethic and leadership. May the Good Lord continue to bless and provide you with the ladder of success. I am very impressed by your accomplishments. Happy new month to you and your family. To God be the glory. Amen!!",
      image: "/images/emily.jpg",
    },
    {
      name: "Ihuoma Clara Aduba ",
      designation: "President JCIN, UNIPORT.",
      quote: "Good evening Ma, Congratulations to you on your outstanding Inaugural Lecture. ❤️🙂🙃😊 You have really done so much. Your dedication and perseverance shine through in your work, and it's remarkable to see how you've overcome obstacles to contribute so significantly to your field. Your lecture was inspiring and is a testament to your brilliance and commitment to advancing knowledge despite the odds..",
      image: "/images/michael.jpg",
    },
    {
      name: "Prof. Omeh Obasi Ngwoke",
      designation: "UNIPORT.",
      quote: "I call that piece a wonder;  a rarity; mind-blowing. Haven't seen any like it. Thanks for making everyone perch on the edges of their seats all hour long. It was difficult seeing anyone half satisfied. We were all full and beaming with that joy that comes with a well-enjoyed spectacle. However, I have just one regret: I didn't get a copy.",
      image: "/images/michael.jpg",
    },
  ];
  </script>
  
  <style scoped>
  /* Add any custom styling here if needed */
  </style>
  