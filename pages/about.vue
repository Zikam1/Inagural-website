<template>
     <header class="relative text-center py-16 bg-gray-100 overflow-hidden">
  <!-- Subtle Geometric Overlay -->
  <div class="absolute inset-0 flex justify-center items-center opacity-20">
    <div class="w-2/3 h-2/3 bg-blue-400 rounded-full transform scale-110"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-gray-900">
    <h1 class="text-4xl font-bold mb-2">NWAICHI, Eucharia Oluchi</h1>
    <p class="text-lg text-gray-700">Scholar | Researcher | Educator</p>
  </div>
</header>
  <section class="container mx-auto p-4 md:p-8">
    
    <!-- Profile Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start">
      
      <!-- Profile Image -->
      <div class="flex-shrink-0 mb-4 md:mb-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex justify-center items-center rounded-lg overflow-hidden bg-gray-200">
        
        <img src="../assests/lec55.jpg" alt="Professor NWAICHI, Eucharia Oluchi" class="w-full h-full object-cover">
      </div>
      
      <!-- Biography -->
      <div class="md:ml-8 flex-1 text-center md:text-left">
        
        <!-- <h2 class="text-xl sm:text-2xl md:text-3xl font-bold">NWAICHI, Eucharia Oluchi</h2> -->
        <p class="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700">
          A well-traveled academic with 13+ years of teaching and research experience and poised with strong
          initiatives, interpersonal and organizational skills to increase students’ performance...
        </p>

        <div class="mt-4 sm:mt-8">
          <h3 class="text-xl sm:text-2xl font-semibold">Academic Background</h3>
          <ul class="list-disc list-inside mt-2 sm:mt-6 text-gray-700">
            <li><strong>PhD Biochemistry (Environment and Toxicology)</strong> - University Of Port Harcourt Nigeria, Dec. 2006 – April 2010</li>
            <li><strong>MSc Biochemistry (Environment and Toxicology)</strong> - University Of Port Harcourt Nigeria, June 2003 - Feb 2006</li>
            <li><strong>BSc (Biochemistry), Second-Class Upper</strong> - University Of Port Harcourt Nigeria, Dec 1996 - Dec 2000</li>
          </ul>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8">
  <!-- Certification Section -->
  <div class="flex-1">
    <h4 class="text-xl sm:text-2xl font-semibold">Skill Sets:</h4>
    <NuxtLink 
      to="/skills" 
      class="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Click to View
    </NuxtLink>
  </div>
</div>

        <!-- Full-Width Image -->
        <div class="mt-8 sm:mt-16">
          <img src="../assests/PIB.jpg" alt="Unique Banner Image" class="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg">
        </div>

        <!-- Work Experience -->
        <div class="mt-8 sm:mt-16">
          <h3 class="text-xl sm:text-2xl  text-center  font-bold">WORK EXPERIENCE</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">          
  <!-- Card 1 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">CypherCrescent Ltd</h3>
    <p class="text-gray-500"><strong>Position:</strong> Consultant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Driving corporate communication and strategy</p>
    <p class="text-gray-500"><strong>Year:</strong> Nov 2023 to Date</p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Institute of Petroleum Studies Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Visiting Lecturer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Teaching Health, Safety and Environment (HSE)</p>
    <p class="text-gray-500"><strong>Year:</strong> Jan 2018 to Date</p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">University of Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Senior Lecturer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Supervising students, and conducting research in Biochemistry</p>
    <p class="text-gray-500"><strong>Year:</strong> Sept 2013 to Date</p>
  </div>

  <!-- Card 4 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Ministry of Environment, Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Consultant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Advising on environmental policies and sustainable practices</p>
    <p class="text-gray-500"><strong>Year:</strong> Jul 2010 to Aug 2013</p>
  </div>

  <!-- Card 5 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Nigeria LNG Limited</h3>
    <p class="text-gray-500"><strong>Position:</strong> Health and Safety Officer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Implementing HSE protocols and safety training</p>
    <p class="text-gray-500"><strong>Year:</strong> Mar 2007 to Jun 2010</p>
  </div>

  <!-- Card 6 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">University of Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Lecturer II</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Lecturing Biochemistry and supervising undergraduate projects</p>
    <p class="text-gray-500"><strong>Year:</strong> Sept 2005 to Mar 2007</p>
  </div>

  <!-- Card 7 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Shell Petroleum Development Company</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Analyst</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Conducting environmental impact assessments</p>
    <p class="text-gray-500"><strong>Year:</strong> Jan 2003 to Aug 2005</p>
  </div>

  <!-- Card 8 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Chevron Nigeria Limited</h3>
    <p class="text-gray-500"><strong>Position:</strong> Research Assistant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Assisting in environmental research projects</p>
    <p class="text-gray-500"><strong>Year:</strong> Jun 2000 to Dec 2002</p>
  </div>

  <!-- Card 9 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">University of Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Graduate Assistant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Assisting in lectures and research in the Department of Biochemistry</p>
    <p class="text-gray-500"><strong>Year:</strong> Mar 2000 to May 2000</p>
  </div>

  <!-- Card 10 -->
  
</div>
  <div class="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-4">
  <!-- Card 1 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Rivers State Ministry of Environment</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Consultant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Providing consultancy on environmental policies</p>
    <p class="text-gray-500"><strong>Year:</strong> Jan 1998 to Feb 2000</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Environmental Consultancy Associates</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Analyst</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Analyzing environmental data for project development</p>
    <p class="text-gray-500"><strong>Year:</strong> Apr 1995 to Feb 2000</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">University of Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Research Assistant</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Supporting biochemistry research projects</p>
    <p class="text-gray-500"><strong>Year:</strong> Sept 1994 to Mar 1995</p>
  </div>

  <!-- Row 2 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Shell Nigeria Exploration and Production Company</h3>
    <p class="text-gray-500"><strong>Position:</strong> Trainee Analyst</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Training in environmental impact analysis</p>
    <p class="text-gray-500"><strong>Year:</strong> Jun 1993 to Aug 1994</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Chevron Nigeria Limited</h3>
    <p class="text-gray-500"><strong>Position:</strong> Project Supervisor</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Supervising environmental assessment projects</p>
    <p class="text-gray-500"><strong>Year:</strong> Jan 1992 to May 1993</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Rivers State Environmental Protection Agency (RSEPA)</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Officer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Monitoring and enforcing environmental regulations</p>
    <p class="text-gray-500"><strong>Year:</strong> Feb 1990 to Dec 1991</p>
  </div>

  <!-- Row 3 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Mobil Producing Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Assistant Environmental Analyst</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Supporting environmental analysis and reporting</p>
    <p class="text-gray-500"><strong>Year:</strong> Jul 1987 to Jan 1990</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Port Harcourt Refining Company (PHRC)</h3>
    <p class="text-gray-500"><strong>Position:</strong> Environmental Technician</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Conducting fieldwork for environmental studies</p>
    <p class="text-gray-500"><strong>Year:</strong> Oct 1985 to Jun 1987</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Nigerian National Petroleum Corporation (NNPC)</h3>
    <p class="text-gray-500"><strong>Position:</strong> Junior Environmental Scientist</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Assisting in environmental data collection</p>
    <p class="text-gray-500"><strong>Year:</strong> Apr 1983 to Sept 1985</p>
  </div>

  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Petroleum Training Institute (PTI), Effurun</h3>
    <p class="text-gray-500"><strong>Position:</strong> Intern Environmental Scientist</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Conducting lab and field tests</p>
    <p class="text-gray-500"><strong>Year:</strong> Jan 1982 to Mar 1983</p>
  </div>
</div>
          
        </div>
      </div>
    </div>
  </section>


</template>

<script setup>

</script>
