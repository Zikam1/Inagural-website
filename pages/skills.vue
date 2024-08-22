<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <!-- Main Content -->
      <main class="p-6 md:p-12 lg:p-24">
        <header class="p-6">
        <nuxt-link 
          to="/about" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm md:text-base">Back</span>
        </nuxt-link>
      </header>
        <!-- Section Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Skills Section -->
          <section id="skills" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl md:text-2xl font-bold mb-4">SKILLS</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>Evidence-informed decision-making (2019)</li>
                <li>Science Diplomacy (2018)</li>
                <li>Facilitation (2016)</li>
                <li>Pesticides Safety procedure (2015)</li>
                <li>Biological and Chemical Safety procedure (2015)</li>
                <li>Biolog / Real PCR (2013)</li>
                <li>Community engagement (2013)</li>
                <li>Science Communication (Italy) (2011)</li>
                <li>Public speaking (2010)</li>
                <li>Organizing events/ meetings (2010)</li>
                <li>Technical Report writing (2009)</li>
                <li>Consulting (2009)</li>
                <li>Quality time management (2006)</li>
                <li>Use of AAS/ GC (2000)</li>
                <li>Google Scholar (2009)</li>
                <li>Web browsing and online search abilities (2000)</li>
                <li>Microsoft Office (2000)</li>
              </ul>
            </div>
          </section>
          
          <!-- Supervision and Teaching Section -->
          <section id="supervision" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl md:text-2xl font-bold mb-4">STUDENTS SUPERVISION & TEACHING</h2>
              <p class="mb-4">Supervised or currently supervising:</p>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>111 Undergraduates</li>
                <li>10 Post-graduate diploma students</li>
                <li>32 Master students</li>
                <li>8 PhD students</li>
              </ul>
              <p>Over eleven years of teaching experience at the undergraduate and graduate levels.</p>
            </div>
          </section>
  
          <!-- Professional Services Section -->
          <section id="services" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl md:text-2xl font-bold mb-4">PROFESSIONAL SERVICES</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>Member, SCAPP, University of Port Harcourt. August 2023 – Date</li>
                <li>Director, Academic Planning, Research & Control Unit, University of Port Harcourt. August 2023 to Date</li>
                <li>Associate Editor, International Agrophysics. November 2022</li>
                <li>External Examiner, Department of Biochemistry, Cell and Molecular Biology, University of Ghana. September 2022</li>
              </ul>
            </div>
          </section>
  
          <!-- Recognitions Section -->
          <section id="recognitions" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl md:text-2xl font-bold mb-4">RECOGNITION</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>Named one of Africa Women Experts.</li>
                <li>KOKO’s Best 20 Nigerian Women In Science 2022</li>
                <li>One of the Best Scientists in Africa.</li>
                <li>Evidence Leader in Africa.</li>
              </ul>
            </div>
          </section>
  
          <!-- Endorsements Section -->
          <section id="endorsements" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl md:text-2xl font-bold mb-4">ENDORSEMENTS</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>BBC World Service feature on "People Fixing the World."</li>
                <li>Sense about Science curated significance of work that won John Maddox Prize 2022.</li>
                <li>Endorsement by African Institute for Development Policy (AFIDEP).</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
  
      <!-- Footer -->
    </div>
  </template>
  
  <script setup>
    // No special script is needed for this simple layout
  </script>
  
  <style scoped>
    /* Additional scoped CSS (if needed) */
  </style>
  