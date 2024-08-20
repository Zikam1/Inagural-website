<template>
  <div class="py-20 px-4 bg-gray-100 min-h-screen">
    
    <div class="max-w-5xl mx-auto">
      <nuxt-link 
          to="/publications" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
          </nuxt-link>
      <h2 class="text-4xl font-bold text-center mb-12">Development for the course of Women in Science:</h2>
      <div class="space-y-12">
        <div v-for="lecture in lectures" :key="lecture.id" class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">{{ lecture.title }}</h3>
          <p class="text-gray-600 mb-4">{{ lecture.description }}</p>
          <a :href="lecture.link" class="text-blue-600 hover:underline">Read More</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
const lectures = [
  {
    id: 1,
    title: 'Science Education for Development',
    description: 'An exploration of science education’s role in societal development.',
    link: 'https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-science-education-veritable-tool',
  },
  {
    id: 2,
    title: 'Innovative Waste Management',
    description: 'Discussing sustainable solutions for waste management in developing regions.',
    link: 'https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-waste-management-and-its-utilization',
  },
  // Add more lectures as needed
  {
  "id": 1,
  "title": "Advancing Women in Science and STEM",
  "description": "Since becoming the First President of the OWSD University of Port Harcourt Branch in July 2019, she has significantly contributed to advancing women in science. Under her leadership, the branch was inaugurated on the International Day for Women and Girls in Science and recognized globally. She instituted monthly 'scientific exhortations' to build capacity for STEM women, with numerous impactful lectures from both local and international speakers.",
  "link": "https://owsd.net/resources/news-events/new-branch-launched-university-port-harcourt-owsd-nigeria-national-chapter",
  },
    {
      "id": 1,
      "title": "Science Education: A Veritable Tool for Development",
      "description": "Exploring how science education contributes to societal development.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-science-education-veritable-tool"
    },
    {
      "id": 2,
      "title": "Waste Management and Its Utilization",
      "description": "Discussing sustainable solutions for waste management in developing regions.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-waste-management-and-its-utilization"
    },
    {
      "id": 3,
      "title": "Taking Research Outcomes to Target Beneficiaries: Research Uptake, Meaning, and Benefits",
      "description": "Examining strategies for ensuring research outcomes reach their intended beneficiaries.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-taking-research-outcomes-target"
    },
    {
      "id": 4,
      "title": "Understanding and Utilizing Research Collaborations to Enhance Performance and Visibility of Women Scientists",
      "description": "How research collaborations can improve the performance and visibility of women scientists.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-understanding-and-utilizing-research"
    },
    {
      "id": 5,
      "title": "Archiving: A Useful Tool for Science and Scientists",
      "description": "The importance of archiving in scientific research and for scientists.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-archiving-useful-tool-science-and"
    },
    {
      "id": 6,
      "title": "Wearing Our Gender Lens in Research Design and Development",
      "description": "Incorporating gender perspectives in research design and development.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-wearing-our-gender-lens-research-design"
    },
    {
      "id": 7,
      "title": "Imposter Syndrome with Women in Science",
      "description": "Addressing imposter syndrome among women in science.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-imposter-syndrome-women-science-rachel"
    },
    {
      "id": 8,
      "title": "Chemical Safety and Chemical Security Awareness",
      "description": "Raising awareness about chemical safety and security.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-chemical-safety-and-chemical-security"
    },
    {
      "id": 9,
      "title": "The Beauty of Research Data in an Information-Driven World",
      "description": "Understanding the role of research data in today's information-driven world.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-beauty-research-data-information-driven"
    },
    {
      "id": 10,
      "title": "Women in Academia: Developing Self-Confidence and Assertiveness",
      "description": "Strategies for women in academia to build self-confidence and assertiveness.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-developing-self-confidence-and"
    },
    {
      "id": 11,
      "title": "Women in Startups and Entrepreneurship",
      "description": "Exploring opportunities and challenges for women in startups and entrepreneurship.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-women-startups-and-entrepreneurship"
    },
    {
      "id": 12,
      "title": "The Urgent Need to Scale Enlightened Feminine Leadership for Conscious Evolution",
      "description": "Advocating for the scaling of enlightened feminine leadership for societal progress.",
      "link": ""
    },
    {
      "id": 13,
      "title": "Significance of Nutritional Etiquettes to Women's Health",
      "description": "How nutritional habits impact women's health.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-significance-nutritional-etiquette"
    },
    {
      "id": 14,
      "title": "Antimalarial Drug Resistance and Vulnerable Groups",
      "description": "Addressing antimalarial drug resistance and its effects on vulnerable groups.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-antimalarial-drug-resistance-highlights"
    },
    {
      "id": 15,
      "title": "Evidence-Based Research for Women in Science",
      "description": "Promoting evidence-based research practices among women in science.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-evidence-based-research-women-science"
    },
    {
      "id": 16,
      "title": "The Ornamental Fishery Sector and Its Value-Chain: A Vital Sector for Economic Development in Nigeria",
      "description": "Exploring the economic potential of the ornamental fishery sector in Nigeria.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-ornamental-fishery-sector-and-its-value"
    },
    {
      "id": 17,
      "title": "Science Advising: The Woman is a Great Player",
      "description": "The role of women in science advising.",
      "link": ""
    },
    {
      "id": 18,
      "title": "Indicators in Science Career Leverage",
      "description": "Identifying key indicators for leveraging a career in science.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-indicators-science-career-leverage"
    },
    {
      "id": 19,
      "title": "Chemical Leaching by Plastics: Why You Should Care",
      "description": "Understanding the impact of chemical leaching from plastics.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-chemical-leaching-plastics-why-you"
    },
    {
      "id": 20,
      "title": "The Secret to Being an Influencer as a Science Leader",
      "description": "How to become an influential science leader.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-secret-being-influencer-science-leader"
    },
    {
      "id": 21,
      "title": "Ethics in Science through the Lens of COVID-19 Pandemic",
      "description": "Examining ethical considerations in science during the COVID-19 pandemic.",
      "link": "https://owsd.net/resources/news-events/owsd-nigeria-national-chapter-presents-ethics-science-through-lens-covid-19"
    },
    {
      "id": 22,
      "title": "Body Burdens: Endocrine Disruptors in Cosmetics",
      "description": "Investigating the impact of endocrine disruptors in cosmetics.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-body-burdens-endocrine-disrupting-chemicals"
    },
    {
      "id": 23,
      "title": "Time and Resources Optimization for Career Advancement for Women Scientists from Resource-Poor Settings",
      "description": "Strategies for optimizing time and resources to advance careers for women scientists in resource-poor settings.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-time-and-resources-optimization-career"
    },
    {
      "id": 24,
      "title": "Cloud Computing: A Paradigm Shift in Academic Research",
      "description": "The transformative impact of cloud computing on academic research.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-cloud-computing-paradigm-shift-academic"
    },
    {
      "id": 25,
      "title": "Early Introduction of Coding and Robotics: Key to Eliciting Girl-Child Interest in Tech-Fields",
      "description": "How early exposure to coding and robotics can spark interest in tech fields among girls.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-early-introduction-coding-and-robotics-key"
    },
    {
      "id": 26,
      "title": "Vaccine Hesitance: Make Informed Decisions",
      "description": "Addressing vaccine hesitance and the importance of informed decisions.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-vaccine-hesitance-make-informed-decisions"
    },
    {
      "id": 27,
      "title": "Digital Native – Digital Immigrant Continuum: The Place of Women in STEMM",
      "description": "Exploring the digital divide and its impact on women in STEMM.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-native-%E2%80%93-digital-immigrant-continuum-place"
    },
    {
      "id": 28,
      "title": "Leveraging Tech for Enhancing Grant Writing Skills, Research, and Publications",
      "description": "Using technology to improve grant writing skills and research publications.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-leveraging-tech-enhancing-grant-writing"
    },
    {
      "id": 29,
      "title": "Rutin in Health Promotion for Sustainable Development",
      "description": "The role of rutin in health promotion and sustainable development.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-rutin-health-promotion-sustainable"
    },
    {
      "id": 30,
      "title": "Re-Thinking Agenda 2063: Leveraging STEM Women Empowerment for Food Security in a Post-COVID-19 Pandemic Era",
      "description": "Leveraging the empowerment of STEM women to address food security challenges in the post-COVID-19 era.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-re-thinking-agenda-2063-leveraging-stem"
    },
    {
      "id": 31,
      "title": "Trichomoniasis in Women",
      "description": "Addressing the issue of trichomoniasis among women.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-trichomoniasis-women"
    },
    {
      "id": 32,
      "title": "Researchers and Stress Management for Successful Living",
      "description": "Strategies for managing stress and achieving success as a researcher.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-researchers-and-stress-management-successful"
    },
    {
      "id": 33,
      "title": "Women Scientists and the United Nations Sustainable Development Goals (UNSDGs): Thinking Globally and Acting Locally",
      "description": "The role of women scientists in advancing the UN Sustainable Development Goals.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-women-scientists-and-united-nations"
    },
    {
      "id": 34,
      "title": "Understanding Your Data Type: A Key to Right Inference",
      "description": "The importance of understanding data types for accurate research inferences.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-understanding-your-data-type-key-right"
    },
    {
      "id": 35,
      "title": "STEM Women: Co-Creating Our Collective Future",
      "description": "Empowering STEM women to shape a collective future.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-stem-women-co-creating-our-collective-future"
    },
    {
      "id": 36,
      "title": "Maternal Health Care: Improving the Workforce",
      "description": "Enhancing maternal health care to support workforce improvement.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-maternal-health-care-improving-workforce"
    },
    {
      "id": 37,
      "title": "The Ancestor Who Speaks is the Earth: Pumzi and the Invitation to Listen",
      "description": "Exploring the themes of Pumzi and the importance of listening to the earth.",
      "link": "http://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-ancestor-who-speaks-earth-pumzi-and"
    },
    {
      "id": 38,
      "title": "Leveraging AI Technology for Effective Early Diagnosis: Heart Issues",
      "description": "Using AI technology for early diagnosis of heart issues.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-leveraging-ai-technology-effective-early"
    },
    {
      "id": 39,
      "title": "Women at Greater Risk of Alzheimer’s: Way Forward",
      "description": "Addressing the increased risk of Alzheimer’s in women and potential solutions.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-women-greater-risk-alzheimer%E2%80%99s-way-forward"
    },
    {
      "id": 40,
      "title": "Accessing Library Information Services in Public Health Emergencies",
      "description": "The importance of library information services during public health emergencies.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-accessing-library-information-services"
    },
    {
      "id": 41,
      "title": "The Human Gut Microbiome: Role in Health and Development",
      "description": "Understanding the role of the human gut microbiome in health and development.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-human-gut-microbiome-role-health-and"
    },
    {
      "id": 42,
      "title": "Impact of Neglected Tropical Diseases (NTDs) on Women and Girls",
      "description": "Examining how neglected tropical diseases affect women and girls.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-impact-neglected-tropical-diseases-ntds"
    },
    {
      "id": 43,
      "title": "Understanding Manuscript Organization",
      "description": "Guidelines for organizing research manuscripts effectively.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-understanding-manuscript-organization"
    },
    {
      "id": 44,
      "title": "Establishing and Maintaining a Digital Footprint as a Modern Scholar",
      "description": "The importance of a digital footprint for modern scholars.",
      "link": "https://www.youtube.com/watch?v=XbjuQmIrL3g"
    },
    {
      "id": 45,
      "title": "Bisphenol A: Friend or Foe",
      "description": "Debating the safety and risks of Bisphenol A.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-bisphenola-friend-or-foe"
    },
    {
      "id": 46,
      "title": "Leveraging Digital Technology for Inclusion of Women at the Workplace",
      "description": "Using digital technology to enhance workplace inclusion for women.",
      "link": ""
    },
    {
      "id": 47,
      "title": "Unlocking the Power of Mnemonics: Remembering the First 56 Elements",
      "description": "Techniques for memorizing the first 56 elements of the periodic table using mnemonics.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-unlocking-power-mnemonics-remembering-first"
    },
    {
      "id": 48,
      "title": "Enhancing Critical Thinking in STEM Education Using Active Learning Techniques",
      "description": "Methods to improve critical thinking in STEM education through active learning.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-enhancing-critical-thinking-stem-education"
    },
    {
      "id": 49,
      "title": "Prolonged Exposure to Electromagnetic Radiation from Communication Devices: Potential Harm",
      "description": "Investigating the potential harm of prolonged exposure to electromagnetic radiation.",
      "link": "https://owsd.net/news/news-events/owsd-nigeria-national-chapter-presents-prolonged-exposure-electromagnetic-radiation"
    }
  ]
;


</script>
