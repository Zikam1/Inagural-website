<template>
  <section class="container mx-auto p-4 md:p-8">
    <!-- Profile Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <!-- Profile Image -->
      <div class="flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 flex justify-center items-center">
        <img src="../assests/lec2.jpg" alt="Professor NWAICHI, Eucharia Oluchi" class="rounded-full w-full h-full object-cover">
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

        <div class="mt-4 sm:mt-8">
          <h4 class="text-xl sm:text-2xl font-semibold">Certification URL for Verified International Academic Qualifications:</h4>
          <a 
            href="https://t.cred.ly/ujDZXOg01r_mKmTClCtI7w,,$$$fyI82w8zIdOsTk6_8NRIRQtGeeUjP2CHdc1FiEJ1dGyRMgxBCdoSXj1kI7cUEhwz32p2Za0b4mMLLxhFbYFEXmferXCtGD4-yPxb6imywXk,?r=https%3A%2F%2Fwes.credly.com%2Fmember-badges%2F18039751&t=1558038296" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-8 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View Certification
          </a>
        </div>

        <!-- Full-Width Image -->
        <div class="mt-8 sm:mt-16">
          <img src="../assests/PIB.jpg" alt="Unique Banner Image" class="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg">
        </div>

        <!-- Work Experience -->
        <div class="mt-8 sm:mt-16">
          <h3 class="text-xl sm:text-2xl font-semibold">Work Experience</h3>
          <div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESTABLISHMENT</th>
        <th class="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">POSITION</th>
        <th class="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RESPONSIBILITIES</th>
        <th class="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YEAR</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <!-- Row 1 -->
      <tr>
        <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">CypherCrescent Ltd</td>
        <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Consultant</td>
        <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Driving corporate communication and strategy</td>
        <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Nov 2023 to Apr 2024</td>
      </tr>
                <!-- Row 2 -->
                <tr>
                  <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Institute of Petroleum Studies Port Harcourt Nigeria</td>
                  <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Visiting Lecturer</td>
                  <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Teaching Health, Safety and Environment (HSE)</td>
                  <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">January 2018 to date</td>
                </tr>
                <!-- Add additional rows as needed -->
                <!-- The remaining rows will follow a similar pattern to those above -->
                <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">CypherCrescent Ltd</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Consultant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Driving corporate communication and strategy</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Nov 2023 to Apr 2024</td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Institute of Petroleum Studies Port Harcourt Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Visiting Lecturer</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Teaching Health, Safety and Environment (HSE)</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">January 2018 to date</td>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">University of Port Harcourt Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Senior Lecturer</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Supervising students, and conducting research in Biochemistry</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Sept 2013 to date</td>
  </tr>
  <!-- Row 4 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Ministry of Environment, Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Consultant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Advising on environmental policies and sustainable practices</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jul 2010 to Aug 2013</td>
  </tr>
  <!-- Row 5 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Nigeria LNG Limited</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Health and Safety Officer</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Implementing HSE protocols and safety training</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Mar 2007 to Jun 2010</td>
  </tr>
  <!-- Row 6 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">University of Port Harcourt Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Lecturer II</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Lecturing Biochemistry and supervising undergraduate projects</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Sept 2005 to Mar 2007</td>
  </tr>
  <!-- Row 7 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Shell Petroleum Development Company</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Analyst</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Conducting environmental impact assessments</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jan 2003 to Aug 2005</td>
  </tr>
  <!-- Row 8 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Chevron Nigeria Limited</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Research Assistant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Assisting in environmental research projects</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jun 2000 to Dec 2002</td>
  </tr>
  <!-- Row 9 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">University of Port Harcourt Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Graduate Assistant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Assisting in lectures and research in the Department of Biochemistry</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Mar 2000 to May 2000</td>
  </tr>
  <!-- Row 10 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Rivers State Ministry of Environment</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Consultant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Providing consultancy on environmental policies</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jan 1998 to Feb 2000</td>
  </tr>
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Niger Delta Development Commission (NDDC)</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Consultant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Advising on environmental protection strategies</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Mar 2000 to Jan 2002</td>
  </tr>
  <!-- Row 12 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Environmental Consultancy Associates</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Analyst</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Analyzing environmental data for project development</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Apr 1995 to Feb 2000</td>
  </tr>
  <!-- Row 13 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">University of Port Harcourt Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Research Assistant</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Supporting biochemistry research projects</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Sept 1994 to Mar 1995</td>
  </tr>
  <!-- Row 14 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Shell Nigeria Exploration and Production Company</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Trainee Analyst</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Training in environmental impact analysis</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jun 1993 to Aug 1994</td>
  </tr>
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Chevron Nigeria Limited</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Project Supervisor</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Supervising environmental assessment projects</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jan 1992 to May 1993</td>
  </tr>
  <!-- Row 16 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Rivers State Environmental Protection Agency (RSEPA)</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Officer</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Monitoring and enforcing environmental regulations</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Feb 1990 to Dec 1991</td>
  </tr>
  <!-- Row 17 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Mobil Producing Nigeria</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Assistant Environmental Analyst</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Supporting environmental analysis and reporting</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jul 1987 to Jan 1990</td>
  </tr>
  <!-- Row 18 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Port Harcourt Refining Company (PHRC)</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Environmental Technician</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Conducting fieldwork for environmental studies</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Oct 1985 to Jun 1987</td>
  </tr>
  <!-- Row 19 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Nigerian National Petroleum Corporation (NNPC)</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Junior Environmental Scientist</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Assisting in environmental data collection</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Apr 1983 to Sept 1985</td>
  </tr>
  <!-- Row 20 -->
  <tr>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm font-medium text-gray-900 truncate" style="max-width: 120px;">Petroleum Training Institute (PTI), Effurun</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 100px;">Intern Environmental Scientist</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500 truncate" style="max-width: 200px;">Conducting lab and field tests</td>
    <td class="px-4 sm:px-6 py-2 sm:py-4 text-sm text-gray-500">Jan 1982 to Mar 1983</td>
  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
