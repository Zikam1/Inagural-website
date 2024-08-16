<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6"> List of Publications</h1>
      <div class="flex justify-between items-center mb-6">
        <button 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          @click="router.goBack()"
        >
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
        </button>
        <nuxt-link 
          to="/listbook" 
          class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
         Book Chapter
        </nuxt-link>
        <nuxt-link 
          to="/" 
          class="inline-flex items-center ml-4 text-blue-600 hover:text-blue-800 transition-colors">
          <span class="mr-2">Next</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(publication, index) in publications" :key="index" class="p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">{{ publication.title }}</h2>
          <p class="text-sm text-gray-600 mb-2">{{ publication.authors }} ({{ publication.year }})</p>
          <p class="mb-2">{{ publication.journal }}</p>
          <p v-if="publication.doi" class="text-blue-600 hover:underline">
            DOI: <a :href="`https://doi.org/${publication.doi}`">{{ publication.doi }}</a>
          </p>
          <p v-if="publication.url" class="text-blue-600 hover:underline">
            URL: <a :href="publication.url">{{ publication.url }}</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const publications = [
    {
      title: "The Book of Proceedings from the 6th Biennial International Conference for the Organization for Women in Science for the Developing World Nigeria (OWSD 2023)",
      authors: "Nwaichi, E. O. and Nduka, F. O.",
      year: 2023,
      journal: "Atlantis Springer Nature. Vol 37, Pp 1 - 357",
      url: "https://doi.org/10.2991/978-94-6463-306-1",
    },
    {
      title: "Triclisia subcordata Oliv aqueous extract can influence Reproductive Hormones and Haematological Profiles of Mifepristone Threatened Pregnancy in Wistar Rats",
      authors: "Okpara, F. N., Nwaichi E. O. and Belonwu, D.C.",
      year: 2023,
      journal: "In: The Book of Proceedings from the 6th Biennial International Conference for the Organization for Women in Science for the Developing World Nigeria (OWSD 2023). Nwaichi & Nduka Ed. Atlantis Springer Nature. Vol 37, Pp 99 - 136",
    },
    {
      title: "A community-based innovative approach of deriving a functional compost for remediation of crude oil contaminated soil",
      authors: "Ahmed I.B., Nwaichi E.O. and Ejikeme U.1.",
      year: 2023,
      journal: "In: The Book of Proceedings from the 6th Biennial International Conference for the Organization for Women in Science for the Developing World Nigeria (OWSD 2023). Nwaichi & Nduka Ed. Atlantis Springer Nature. Vol 37, Pp 4 - 25",
    },
    {
      title: "Modernity in Health and Disease Diagnosis: The Account from STEM Women",
      authors: "Nwaichi, E. O.",
      year: 2023,
      journal: "Sustainable Development Goals Series. Springer Cham. Pp. 1-148",
      url: "https://link.springer.com/book/10.1007/978-3-031-34963-8",
    },
    {
      title: "Integrated Quality and Environmental Management",
      authors: "Elegbede, I.O., Ojewole, A.E., Ipole, E., Nwaichi, E. O., Iduseri, E. O., and Oluwatayo, M.R.",
      year: 2023,
      journal: "In: Idowu, S., Schmidpeter, R., Capaldi, N., Zu, L., Del Baldo, M., Abreu, R. (eds) Encyclopedia of Sustainable Management. Springer, Cham.",
      url: "https://link.springer.com/referenceworkentry/10.1007/978-3-031-25984-5_316",
    },
    {
      title: "Science Education: A Veritable Tool for Development",
      authors: "Nwaichi, E. O., Ugwoha, E. O. and Ogu, R. N.",
      year: 2021,
      journal: "In: Science by Women: Stories From Careers in STEM. Springer Nature. Pp 5-29",
    },
    {
      title: "Science by Women: Stories From Careers in STEM",
      authors: "Nwaichi, E. O.",
      year: 2021,
      journal: "Springer Nature. Pp 1-182",
      doi: "978-3-030-83031-1",
      url: "https://link.springer.com/book/10.1007/978-3-030-83032-8",
    },
    {
      title: "Guidelines for Evidence Use in Policymaking",
      authors: "Nwaichi, E. O. and Etatuvie, S. O.",
      year: 2022,
      journal: "Nigeria Natural Medicine Development Agency. Federal Ministry of Science and Technology. Celwill Publishers. ISBN 978-978-59126-9-3. 2nd Ed. December 2020. Pp 1-130",
    },
    {
      title: "Responsible conduct of Chemical Sciences Research and challenges in Nigeria and West Africa",
      authors: "Nwaichi, E. O.",
      year: 2018,
      journal: "In: Responsible Conduct and Ethical Practice in Chemical Sciences Research, Safety, Security, Education, and Risk Management: The Catalytic Role of the Professional/Learned Society. American Chemical Society (ACS) Books. ACS Symposium Series, Vol. 1288. Chapter 16, pp 223-237",
      doi: "10.1021/bk-2018-1288.ch016",
      url: "https://pubs.acs.org/doi/full/10.1021/bk-2018-1288.ch016",
    },
    {
      title: "Cellular Energetics: Production and Flow of Energy",
      authors: "Patrick-Iwuanyanwu, K. C. and Nwaichi, E. O.",
      year: 2015,
      journal: "In: Biology – Enquiry into Life Systems. Edited by Obute, G. C., Hart, A. I. and Ibiene, A. A. 1st Ed. pp172 – 200",
    },
    {
      title: "Environmental Impacts and Prospects of Petroleum Production: A Case Study of the Niger Delta",
      authors: "Nwaichi, E. O.",
      year: 2014,
      journal: "Nova Science Publishers, Inc. NY USA. Chapter 7. In: Advances in Environmental Research. Vol. 35, pp.173-188",
    },
    {
      title: "A Compendium of Analytical methods",
      authors: "Nwaichi, E. O.",
      year: 2002,
      journal: "Afaide & Co publishers. 4 Abak road, Uyo Akwa Ibom State Nigeria",
    },
  ]

  const router = useRouter()
  </script>
  