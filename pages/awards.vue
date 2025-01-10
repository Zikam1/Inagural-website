<template>
    <!-- AWARDS-->
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-lg font-semibold text-indigo-600">Grants / Awards / Honors / Academies</h2>
        <p class="mt-2 text-4xl font-bold text-gray-900">Achievements at a Glance</p>
        <p class="mt-4 text-lg text-gray-600">A showcase of recognitions received on both international and national levels</p>
      </div>

      <div class="py-6 ">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gallery Items -->
          <div class="relative">
            <img 
              src="../assests/lec39.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Receiving the prestigious John Maddox Prize in London</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec40.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Receiving the prestigious John Maddox Prize in London</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec41.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Celeberating John Maddox Prize with some Nigerian in the Uk an delegates from the Nigerian High Commission, London</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec53.jpg" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Receiving Award in 2022 as the Winner, Evidence Leader (Producer Category) in South Africa</div>
          </div>
          <div class="relative">
            <img 
              src="../assests/lec20.JPG" 
              alt="With fellow Visiting Faculty, Prof. Vinita and her daughter, Noni at Amherst USA" 
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 text-gray-800 text-center font-bold">Received Award from College of Health, Sciences, Rivers State University </div>
          </div>
         <div class="bg-white  shadow-lg rounded-lg overflow-hidden">
            <a href="https://youtu.be/T1fe2BimbBU" target="_blank">
              <img src="../assests/pr.jpg" alt="All Nigeria Universities Debate Championship" class="w-full"/>
            </a>
            <div class="text-center mt-2 p-4">
              <h3 class="text-xl font-semibold mb-2">Professorial Thanksgiving in honour of Prof. Eucharia Oluchi Nwaichi, report by NTA PortHarcourt </h3>
              <p class="text-gray-700 mb-4">.</p>
              <a href="https://www.youtube.com/watch?v=zh6-aOnMq6g" target="_blank" class="text-blue-500 hover:underline">Watch Video</a>
            </div>
          </div>

  </div>
        
    </div>
</div>

<section class="py-24 bg-gray-50">
  <div class="container mx-auto max-w-5xl px-4 md:px-8">
    <!-- Centralized Title -->
    <div class="mb-12">
      <h2 class="text-4xl font-semibold text-gray-800 text-center">
        Centre for Environmental Restoration (CEER)
      </h2>
    </div>

    <div class="flex flex-col items-center gap-12">
      <!-- Text Section -->
      <div class="md:w-3/4">
        <p class="text-lg text-gray-600 mb-4 font-bold">
          I contributed to developing the framework for the Centre for Environmental Restoration (CEER) under HYPREP of the Federal Ministry of Environment. 
        </p>
        <p class="text-lg text-gray-600 mb-6">
          This involved drafting sustainable remediation guidelines, proposing innovative restoration strategies, engaging stakeholders, and designing evaluation metrics. It's aimed to address hydrocarbon pollution, restore ecosystems, and promote environmental sustainability in impacted communities.
        </p>
      </div>

      <!-- Image Section -->
      <div class="flex flex-wrap justify-center gap-4">
        <img src="../assests/dfdd.jpg" alt="Award Image 1" class="rounded-lg shadow-lg w-2/5 sm:w-1/3 md:w-2/4 lg:w-2/4">
      
        
      </div>
    </div>
  </div>
</section>



  

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
   "Winner, John Maddox Prize 2022 Edition. Sense about Science and Nature. London UK. October 2022.",
  "Co-Investigator. International Network for Advancing Science and Policy Limited, INASP/Association of Commonwealth Universities, ACU Ocean Country Partnership Programme, OCPP Scholarships training project. 2024.",
  "Fellow. Science by Women Foundation. Fundacion Mujeres por Africa. Spain. April 2023.",
  "Co-Investigator. UNESCO/OWSD grant to build capacity for Organization for Women in Science for the Developing World, OWSD Nigeria National Chapter themed 'Leadership for Organizational Growth'. November 2022.",
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
