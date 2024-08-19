<template>
    <div class="container mb-16 mx-auto p-6">
        <nuxt-link 
          to="/publications" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
          </nuxt-link>
      <header class="mb-8 text-center">
        
        <h1 class="text-4xl font-bold mb-4">Professional Information</h1>
        <p class="text-lg text-gray-700">Explore my professional affiliations, board memberships, degree theses, and reviewer roles in detailed sections below.</p>
      </header>
     
      <div class="space-y-8">
        <!-- First Section: Professional Affiliations -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-semibold mb-6">Professional Affiliations</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Affiliation 1</h3>
              <p class="text-gray-700">Member, Content Review Committee for Evidence 2023, Africa Evidence Network.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Affiliation 2</h3>
              <p class="text-gray-700">Member, Africa Evidence Network.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Affiliation 3</h3>
              <p class="text-gray-700">Fellow, West African Science Leadership Programme.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Affiliation 4</h3>
              <p class="text-gray-700">Fellow, International Society of Engineering Science and Technology.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Affiliation 5</h3>
              <p class="text-gray-700">Affiliate, African Academy of Science.</p>
            </div>
          </div>
        </div>
  
        <!-- Second Section: Memberships in Boards and Advisory Committees -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-semibold mb-6">Memberships in Boards and Advisory Committees</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Board 1</h3>
              <p class="text-gray-700">Member, Governing Council of Hillside University of Science & Technology Okemesi Ekiti State Nigeria.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Board 2</h3>
              <p class="text-gray-700">Vice President, Organization for Women Science in the Developing World (OWSD), Nigeria National Chapter.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Board 3</h3>
              <p class="text-gray-700">Member, School of Graduate Studies University of Port Harcourt Academic Board.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Board 4</h3>
              <p class="text-gray-700">Panel Member, American Association of University Women, AAUW’s International Fellowships and Grants.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Board 5</h3>
              <p class="text-gray-700">Member, Academic Board of Institute of Petroleum Studies, an Affiliate of IFP School France.</p>
            </div>
          </div>
        </div>
  
        <!-- Third Section: Degree Theses -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-semibold mb-6">Degree Theses</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Thesis 1</h3>
              <p class="text-gray-700">Post Doc – Comparative evaluation of thermal and phyto-assisted technologies at remediation sites</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Thesis 2</h3>
              <p class="text-gray-700">Post Doc - Comparative performance of second-generation clean-up of crude oil polluted agricultural soil</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Thesis 3</h3>
              <p class="text-gray-700">Post Doc - As and Cu removal in a crude oil polluted soil by Lemon grass and Bambara beans</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Thesis 4</h3>
              <p class="text-gray-700">PhD - Remediation of Crude oil contaminated agricultural soil by Vigna subterranea</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Thesis 5</h3>
              <p class="text-gray-700">MSc - Physico-chemical properties of effluent from a beverage company</p>
            </div>
          </div>
        </div>
  
        <!-- Fourth Section: Reviewer Roles -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-semibold mb-6">Reviewer Roles</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Reviewer 1</h3>
              <p class="text-gray-700">International Journal of Environmental Science (2020)</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Reviewer 2</h3>
              <p class="text-gray-700">Applied Soil Ecology (2019)</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Reviewer 3</h3>
              <p class="text-gray-700">Microbial Ecology (2019)</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Reviewer 4</h3>
              <p class="text-gray-700">Environmental Science and Pollution Research (2016)</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Reviewer 5</h3>
              <p class="text-gray-700">Journal of Hazardous Materials (2016)</p>
            </div>
          </div>
        </div>
  
        <!-- Fifth Section: Conference Organization -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-semibold mb-6">Conference Organization</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Conference 1</h3>
              <p class="text-gray-700">Organizer, International Conference on Soil Science, 2021</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Conference 2</h3>
              <p class="text-gray-700">Organizer, Global Environmental Forum, 2019</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Conference 3</h3>
              <p class="text-gray-700">Coordinator, Workshop on Phytoremediation, 2018</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Conference 4</h3>
              <p class="text-gray-700">Organizer, Symposium on Sustainable Agriculture, 2017</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold mb-2">Conference 5</h3>
              <p class="text-gray-700">Coordinator, International Workshop on Soil Management, 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 

    <div class="container  mx-auto p-6">
      <header class="mb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">Duties & Responsibilities</h1>
        <p class="text-lg text-gray-700">Here’s a summary of various duties, roles, and events I’ve participated in over the years.</p>
      </header>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Duty Card Template -->
        <div v-for="(duty, index) in duties" :key="index" class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-semibold mb-2">{{ duty.duty }}</h3>
          <p class="text-gray-700 mb-2">{{ duty.description }}</p>
          <span class="text-gray-500 text-sm">{{ duty.date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const duties = [
    {
      duty: 'Speaker',
      description: 'Sharing my UK experience as a Commonwealth Fellow. Pre-Departure Networking event at British Council Office. Port Harcourt.',
      date: '17 August 2018',
    },
    {
      duty: 'Chief Judge',
      description: 'Beauty pageant organised by Brainfield Academy. Off EastWest road Eliogbolo Port Harcourt',
      date: '8 December 2017',
    },
    {
      duty: 'Radio guest',
      description: 'Discussing the Impact of my Recognition as “One of the 10 Female Scientists pulling weight in Nigeria”. BBC London at 7:40am.',
      date: '16 November 2017',
    },
    {
      duty: 'Resource Person',
      description: 'Discussing World Science Day at the national Radio in Port Harcourt, Treasure FM 98.5 at 9am.',
      date: '10 November 2017',
    },
    {
      duty: 'Guest Facilitator',
      description: 'AuthorAID Grant Proposal Writing & Research Writing Course',
      date: '18 April to June 12, 2017',
    },
    {
      duty: 'Guest Facilitator',
      description: 'AuthorAID e - Research Writing Course',
      date: '4 October to 14 November 2016',
    },
    {
      duty: 'Director of Information',
      description: 'Chapel of Annunciation Catholic Chaplaincy, University of Port Harcourt',
      date: 'Ongoing',
    },
    {
      duty: 'Judge',
      description: 'The Queen’s Commonwealth Essay competition',
      date: '16 May to 10 June 2016',
    },
    {
      duty: 'Guest Facilitator',
      description: 'AuthorAID e - Research Writing Course',
      date: '1 April to 12 May 2016',
    },
    {
      duty: 'Facilitator',
      description: 'Host community (Akala olu Ahoada West Local Government Area Rivers Nigeria) Engagement on research output and uptake at the paramount ruler’s Palace',
      date: '8 October 2014',
    },
    {
      duty: 'Facilitator',
      description: 'A session with Polish students from Polish Noblists School (Gimnazjum nr 3 im. Noblistów) Polskich w Świdnik, East Poland and their UNESCO club.',
      date: '18 December 2013',
    },
    {
      duty: 'Trainer',
      description: 'Case Management training for members of Child Protection Networks in Abia, Rivers, Cross river, Bayelsa, and Akwaibom states of Nigeria. EEM JM Hotels and suites Uyo. Sponsored by UNICEF.',
      date: '26th – 31st August 2013',
    },
    {
      duty: 'Facilitator',
      description: 'Establishment of Child protection vanguards in Ahoada communities (Post Flood response) in Rivers state. A project sponsored by UNICEF.',
      date: '3rd – 10th August 2013',
    },
    {
      duty: 'Facilitator',
      description: 'Cohort study on the prevalence of substance abuse among children at the Bundu Waterside municipality in Rivers state. A study sponsored by UNICEF',
      date: '3rd – 7th September 2012',
    },
    {
      duty: 'Co-Facilitator',
      description: '2012 CPN flood intervention (Response) funded by UNICEF Nigeria',
      date: 'April 2010',
    },
    {
      duty: 'Resource person',
      description: 'Vision Nigeria Live Radio Programme to discuss “Child Labour and National Development”. Radio Rivers Port Harcourt Nigeria.',
      date: '25th August 2011',
    },
    {
      duty: 'Co- Facilitator/ Anchor',
      description: 'UNICEF awarded project to monitor and engender protection on Children during all phases of the Nigerian electioneering period/ “Talk Show” on “Engendering a Protective Environment for Children, EPEC 2011” in the electioneering period on popular WAZOBIA FM radio in Port Harcourt, Nigeria.',
      date: 'January to June 2011',
    },
    {
      duty: 'Supervisor',
      description: 'Voter’s Registration for Independent Electoral Commission INEC in Rivers state, Nigeria',
      date: 'Jan to Feb 2011',
    },
    {
      duty: 'Facilitator',
      description: 'Public awareness / rally on child trafficking in Port Harcourt Rivers state',
      date: '25th September 2012',
    },
  ];
  </script>
  
  <style scoped>
  /* Custom styles can be added here */
  </style>
  
  
  <style scoped>
  /* Custom styles can be added here */
  </style>
  