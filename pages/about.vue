<template>
  <section class="container mx-auto p-4 md:p-8">
    <!-- Profile Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <!-- Profile Image -->
      <div class="flex-shrink-0 mb-4 md:mb-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex justify-center items-center rounded-lg overflow-hidden bg-gray-200">
        <img src="../assests/lec2.jpg" alt="Professor NWAICHI, Eucharia Oluchi" class="w-full h-full object-cover">
      </div>
      
      <!-- Biography -->
      <div class="md:ml-8 flex-1 text-center md:text-left">
        
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold">NWAICHI, Eucharia Oluchi</h2>
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
    <h4 class="text-xl sm:text-2xl font-semibold">Certification URL for Verified International Academic Qualifications:</h4>
    <a 
      href="https://t.cred.ly/ujDZXOg01r_mKmTClCtI7w,,$$$fyI82w8zIdOsTk6_8NRIRQtGeeUjP2CHdc1FiEJ1dGyRMgxBCdoSXj1kI7cUEhwz32p2Za0b4mMLLxhFbYFEXmferXCtGD4-yPxb6imywXk,?r=https%3A%2F%2Fwes.credly.com%2Fmember-badges%2F18039751&t=1558038296" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      View Certification
    </a>
  </div>
  
  <!-- Skills Section -->
  <div class="flex-1">
    <h4 class="text-xl sm:text-2xl font-semibold">SKILLS SET:</h4>
    <NuxtLink 
      to="/skills" 
      class="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      click to view
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
    <p class="text-gray-500"><strong>Year:</strong> Nov 2023 to Apr 2024</p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">Institute of Petroleum Studies Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Visiting Lecturer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Teaching Health, Safety and Environment (HSE)</p>
    <p class="text-gray-500"><strong>Year:</strong> January 2018 to date</p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900">University of Port Harcourt Nigeria</h3>
    <p class="text-gray-500"><strong>Position:</strong> Senior Lecturer</p>
    <p class="text-gray-500"><strong>Responsibilities:</strong> Supervising students, and conducting research in Biochemistry</p>
    <p class="text-gray-500"><strong>Year:</strong> Sept 2013 to date</p>
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



<!-- AWARDS-->
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-lg font-semibold text-indigo-600">Grants / Awards / Honors / Academies</h2>
        <p class="mt-2 text-4xl font-bold text-gray-900">Achievements at a Glance</p>
        <p class="mt-4 text-lg text-gray-600">A showcase of recognitions received on both international and national levels</p>
      </div>

     <!-- Grid layout for the two sections -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
  <!-- International Awards Section -->
  <div class="col-span-1">
    <div class="relative w-full h-64 mb-6">
      <img src="../assests/aw1.jpg" alt="International Awards" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg">
    </div>
    <h3 class="text-2xl font-semibold text-gray-800 mb-6">INTERNATIONAL AWARDS</h3>
    <div v-for="(group, index) in internationalGrouped" :key="index" class="rounded-lg bg-white p-6 shadow-lg mb-6">
      <ul class="space-y-4">
        <li v-for="(item, idx) in group" :key="idx" class="flex items-start space-x-2">
          <span class="text-indigo-600 font-bold">{{ idx + 1 + index * 4 }}.</span>
          <p class="text-lg text-gray-700">{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>

  <!-- National Awards Section -->
  <div class="col-span-1">
    <div class="relative w-full h-64 mb-6">
      <img src="../assests/aw2.jpg" alt="National Awards" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg">
    </div>
    <h3 class="text-2xl font-semibold text-gray-800 mb-6">NATIONAL AWARDS</h3>
    <div v-for="(group, index) in nationalGrouped" :key="index" class="rounded-lg bg-white p-6 shadow-lg mb-6">
      <ul class="space-y-4">
        <li v-for="(item, idx) in group" :key="idx" class="flex items-start space-x-2">
          <span class="text-indigo-600 font-bold">{{ idx + 1 + index * 4 + internationalAwards.length }}.</span>
          <p class="text-lg text-gray-700">{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  </section>
</template>

<script setup>
const internationalAwards = [
  "Co-Investigator. International Network for Advancing Science and Policy Limited, INASP/Association of Commonwealth Universities, ACU Ocean Country Partnership Programme, OCPP Scholarships training project. 2024.",
  "Fellow. Science by Women Foundation. Fundacion Mujeres por Africa. Spain. April 2023.",
  "Co-Investigator. UNESCO/OWSD grant to build capacity for Organization for Women in Science for the Developing World, OWSD Nigeria National Chapter themed 'Leadership for Organizational Growth'. November 2022.",
  "Winner, John Maddox Prize 2022 Edition. Sense about Science and Nature. London UK. October 2022.",
  "Winner, 2022 Africa Evidence Leadership Award on the Evidence Producers category. Africa Evidence Network (AEN). April 2022.",
  "ACU Gender Grant 2021. Association of Commonwealth Universities. March 2022.",
  "Emerging EIDM champion. Africa Centre for Evidence. 2021.",
  "Evidence Leader. African Academy of Sciences (AAS) and the African Institute for Development Policy (AFIDEP). 4 November 2020.",
  "Principal Investigator. Inclusion and Diversity Grant. Royal Society of Chemistry. August 2020.",
  "Principal Investigator. Seed Grant to Institutionalize Evidence-Informed Decision-Making (EIDM) within Governments in Africa. Evidence Leaders Africa project funded by toxicity evalua. Grant number is #2018-8189. January 2020.",
  "Holder, 10 undergraduate scholarships into British University in Egypt (BUE). 2018. Awarded by the Chairman, BUE Board of Directors.",
  "Affiliate Member, African Academy of Science (AAS). 2016 – 2020 cycle.",
  "International Fellow, Commonwealth International Academic Fellowship. Commonwealth Scholarship Commission, United Kingdom. April 2015.",
  "Holder, The Royal Society Grant – Commonwealth Science Conference Follow on Grants Scheme. The Royal Society, London United Kingdom. March 2015.",
  "Fellow, African Scientific Institute. 2013.",
  "Second place. Lublin Science Festival Lublin Poland. 15 – 20 September 2013.",
  "International Fellow. UNESCO-L’ORÉAL International Fellowships for Young Women in Life Sciences – 2013 cycle. 28th March 2013. Paris.",
  "Guest Investigator. Risk and benefits of application of exogenous organic matter to soil. Number: CZ.3.22/1.2.00/12.03445. Source of funding: Poland-Czech Republic Cross-Border Operational Programme 2007-2013.",
  "Co-Principal Investigator. CPN flood intervention. funded by UNICEF. April 2012.",
  "Phyto Scholar Award. International Phytotechnologies Society US. September 2011, Oregon US.",
  "Phyto Scholar Award. International Phytotechnologies Society US. September 2010, Parma Italy."
];

const nationalAwards = [
  "Research Icon. University of Port Harcourt recognition for research efforts that have grown the university locally and internationally. January 2023.",
  "Winner, Professor Kayode Adebowale National Young Scientists’ Prize for Women in Chemical Sciences. Nigerian Young Academy. 2022.",
  "Principal Investigator. Optimization of compost and locally available waste materials for remediation of petroleum hydrocarbon polluted soil. BW Offshore. January 2022.",
  "Hall of Fame honour. Faculty of Science University of Port Harcourt. 29th July 2016.",
  "2015 University of Port Harcourt Distinguished Merit Award for diligent and meritorious service to the University. June 2015.",
  "Teacher / student performance award by Students Union Government (SUG) University of Port Harcourt Chapter for significant contributions towards students’ growth and wellbeing. August 2014.",
  "Teacher / student performance award by National Association of Science Students, University of Port Harcourt Chapter for landmark contributions in the growth of the association. March 2014.",
  "Most student friendly lecturer award by National Association of Biochemistry Students, University of Port Harcourt Chapter. 2013.",
  "Scholar, Petroleum Technology Development Fund (PTDF), Local (Doctorate Degree) Scholarship Scheme. 2010.",
  "Female Star Swimming (25m) Prize from Graduate Students Association, University of Port Harcourt Nigeria, October 2007.",
  "Uyo Local Government Chairman Award for excellent contributions to the development of the local government in Akwa Ibom State, December 2002.",
  "State Governor’s award for Outstanding Corps member (NYSC) in Akwa Ibom State Nigeria, for outstanding contributions to State Development, December 2002.",
  "Dean of Faculty of Science Award for Best Graduating student in Biochemistry (1999/2000 session). 2001.",
  "Late Omogbai Memorial Subject prize for Best Graduating student in Biochemistry (1999/2000 session). 2001."
];

const groupByFour = (array) => {
  const groupedArray = [];
  for (let i = 0; i < array.length; i += 4) {
    groupedArray.push(array.slice(i, i + 4));
  }
  return groupedArray;
};

const internationalGrouped = groupByFour(internationalAwards);
const nationalGrouped = groupByFour(nationalAwards);
</script>
