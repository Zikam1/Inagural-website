<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <nuxt-link 
          to="/publications" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
          </nuxt-link>
    <h2 class="text-3xl font-bold mb-6">Paper Presentations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(presentation, index) in presentations"
        :key="index"
        class="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          {{ presentation.title }}
        </h3>
        <p class="text-gray-600 mb-2">
          <strong>Role:</strong> {{ presentation.role }}
        </p>
        <p class="text-gray-600 mb-2">
          <strong>Event:</strong> {{ presentation.event }}
        </p>
        <p class="text-gray-600 mb-2">
          <strong>Location:</strong> {{ presentation.location }}
        </p>
        <p class="text-gray-600">
          <strong>Date:</strong> {{ presentation.date }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const presentations = [
  {
    title: 'From Ambition to Achievement: Charting your Path to Success in Research Endeavor',
    role: 'Invited Lecture',
    event: '5th Webinar Series for Nigeria Bioinformatics and Genomics Network',
    location: 'Virtual',
    date: '11 April 2024',
  },
  {
    title: 'Evaluating Particulate Matter Levels and Their Impact on Residents in Choba and Mgbuoba Areas of Rivers State: Implications for Environmental Health, Climate Change, and Pollution',
    role: 'Paper Presenter',
    event: '15th Annual Conference of the Consortium of Universities for Global Health, CUGH 2024',
    location: 'Los Angeles, USA',
    date: '7 – 10 March 2024',
  },
  {
    title: 'Community-based innovative approach of deriving a functional compost for remediation of crude oil contaminated soil',
    role: 'Paper Presenter',
    event: '6th Biennial Conference for Organization for Women in Science for the Developing World (OWSD) Nigeria',
    location: 'Port Harcourt Nigeria',
    date: '2 - 6 July 2023',
  },
  {
    title: 'Sustainable utilization of poultry manure in decontamination of crude oil polluted area',
    role: 'Paper Presenter',
    event: '6th Biennial Conference for Organization for Women in Science for the Developing World (OWSD) Nigeria',
    location: 'Port Harcourt Nigeria',
    date: '2 - 6 July 2023',
  },
  {
    title: 'Rethinking Strategic Planning: Strength in Collaborations and Evidence gathering',
    role: 'Invited Speaker/Resource Person',
    event: 'Nigeria Natural Medicine Development Agency, NNMDA Strategic Planning Retreat',
    location: 'Ibadan Business School, Ibadan Oyo State',
    date: '29 Nov – 1 Dec 2022',
  },
  {
    title: 'Collaboration and linkages for Environmental Sustainability in actualising the Energy Transition Agenda',
    role: 'Panellist',
    event: '4th Nigerian Institution of Environmental Engineers (NIEE) Port Harcourt Chapter Conference',
    location: 'Port Harcourt, Nigeria',
    date: '22nd November, 2022',
  },
  {
    title: 'Mitigating climate change impact for a sustainable agricultural production',
    role: 'Paper Presenter',
    event: 'U.S.-Africa Frontiers of Science, Engineering, and Medicine Symposium',
    location: 'Nairobi, Kenya',
    date: 'October 12-14, 2022',
  },
  {
    title: 'Transferable academic skills for science policy communication',
    role: 'Invited Speaker',
    event: 'Developing science policy communication skills: A strategic tool for early career researchers',
    location: 'INASP Zoom Platform',
    date: '25th August 2021',
  },
  {
    title: 'Ethics of doing Research',
    role: 'Invited Speaker',
    event: 'Nigerian Applied Microbiologists (NAM) Network Masterclass',
    location: 'Virtual',
    date: '25 June 2022',
  },
  {
    title: 'Environmental exposures and implications',
    role: 'Plenary Speaker',
    event: 'Forum of Nigerian Toxicologists (FONTOX) Web Conference',
    location: 'Virtual',
    date: '27 – 28 April 2022',
  },
  {
    title: 'Healing the Niger Delta Soils',
    role: 'Invited Speaker',
    event: 'Science Café',
    location: 'Virtual',
    date: '5 March 2022',
  },
  {
    title: 'Optimizing agrowaste substrates for bioremediation of hydrocarbons',
    role: 'Presenter',
    event: 'Organization for Women in Science for the Developing World (OWSD) International Conference and General Assembly',
    location: 'Virtual',
    date: '16 November 2021',
  },
  {
    title: 'Improving confidence and Promoting Mentorship among Chemistry Professionals in selected institutions in the Niger Delta',
    role: 'Invited Speaker',
    event: 'The Royal Society of Chemistry Inclusion and Diversity Forum 2021: Why belonging and inequalities in race and ethnicity matter',
    location: 'Virtual',
    date: '8 December 2021',
  },
  {
    title: 'Generation Equality: Bringing Together the Next Generation of Women and Visionaries of the Beijing Platform for Action event celebrating National Women’s Day in South Africa',
    role: 'Invited Speaker',
    event: 'Gender Equality and anti-Discrimination office: Unit for Institutional Change and Social Justice',
    location: 'Virtual',
    date: '9th of August 2021',
  },
  {
    title: 'Developing Guidelines for Evidence Use in Nigeria Natural Medicine Development Agency (NNMDA): Achievements and Lessons',
    role: 'Invited Speaker',
    event: 'Experiences of Researchers in Institutionalising Evidence-Informed Decision-Making (EIDM) in Government Agencies in Africa Webinar',
    location: 'Virtual',
    date: '5 August 2021',
  },
  {
    title: 'Nelson Mandela Day 2021',
    role: 'Chief Guest',
    event: 'Organised virtually by Youth United Council of India',
    location: 'Virtual',
    date: '18 July 2021',
  },
  {
    title: 'Establishing an order in a chaotic society',
    role: 'Invited Speaker',
    event: '5th Green and Sustainable Chemistry Conference',
    location: 'Bonn, Germany',
    date: '10 - 13 May 2020',
  },
  {
    title: 'Developing Guidelines for Evidence Use in Nigeria Natural Medicine Development Agency',
    role: 'Invited Speaker',
    event: 'Evidence Leaders Africa (ELA) Virtual Conference by AFIDEP in partnership with AAS',
    location: 'Virtual',
    date: '4 November 2020',
  },
  {
    title: 'Addressing disputes of everyday environmental abuse in the course of chemistry research, patronage, abuse and policies',
    role: 'Speaker',
    event: 'Evidence Leaders Africa (ELA) Virtual Conference by AFIDEP in partnership with AAS',
    location: 'Virtual',
    date: '4 November 2020',
  },
  {
    title: 'Role of Technology in Improving Teaching and Collaborative Research across the West African Sub-region',
    role: 'Guest Speaker',
    event: '2nd Webinar Series organised by West African Society for Pharmacology',
    location: 'Virtual',
    date: '22 September 2020',
  },
  {
    title: 'Impact of 2012 and 2018 Floods on livelihoods in the Niger Delta',
    role: 'Invited Speaker',
    event: 'Stakeholders meeting on Disaster (Flood) Management by National Emergency Management Agency (NEMA) in collaboration with Nigeria Red Cross',
    location: 'Port Harcourt',
    date: '18 September 2020',
  },
  {
    title: 'Optimized Production of Bioremediation Agent for Application in the Eco-Recovery of Oil Spill site',
    role: 'Presenter',
    event: 'Society of Petroleum Engineers (SPE) Nigeria Annual International Conference and Exhibition',
    location: 'Lagos, Nigeria',
    date: '10–12 August 2020',
  },
  {
    title: 'Child Abuse & Maltreatment: The thin line between Discipline and abuse',
    role: 'Panelist',
    event: 'An interactive Session. Senior Secondary School For Science Etiti Alumni',
    location: 'Virtual',
    date: '3rd August 2020',
  },
  {
    title: 'Diversity challenges in the laboratory: a critical variable for Africa’s growth',
    role: 'Guest Speaker',
    event: '3rd Webinar Series organised by Next Einstein Forum (NEF)',
    location: 'Virtual',
    date: '25 June 2020',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6682217716729843712/'
  },
  {
    title: '5th Green & Sustainable Chemistry Conference',
    role: 'Invited Speaker',
    event: '5th Green & Sustainable Chemistry Conference',
    location: 'Dresden, Germany',
    date: '10-13 May 2020',
    link: 'https://www.elsevier.com/events/conferences/green-and-sustainable-chemistry-conference/programme/speaker'
  },
  {
    title: 'Waking the science in young female scientists',
    role: 'Organizer/ Speaker',
    event: 'University of Port Harcourt. 3rd Seminar Series',
    location: 'Port Harcourt, Nigeria',
    date: '14 November 2019'
  },
  {
    title: 'Igniting the Flame of Science using communication tool',
    role: 'Speaker',
    event: 'Next Einstein Forum (NEF) Africa Science Week',
    location: 'Kitse, Zambia',
    date: '14 October 2019'
  },
  {
    title: 'Science Education: a veritable tool for Development of the South-Eastern Nigeria',
    role: 'Speaker',
    event: 'Senior Secondary School for Science, S4 Etiti, Alumni Association’s Biennial Economic Summit, Science Prize & Igbo Language Promotion Award',
    location: 'Newton Hotel Ltd. Owerri Nigeria',
    date: '21 September 2019'
  },
  {
    title: 'The Power of Attitude: The Character Strength of a Goal - getter',
    role: 'Special Guest Speaker',
    event: 'Annual Female Gender – based Conference of the National Association of Political and Administrative Studies Students UNIPORT Chapter',
    location: 'Port Harcourt Nigeria',
    date: '13 September 2019'
  },
  {
    title: 'Mutual aid agreements & partnerships in emergency management',
    role: 'Invited Speaker',
    event: 'Stakeholder Coordination Meeting organized by National Emergency Management Agency',
    location: 'Port Harcourt',
    date: '5 September 2019'
  },
  {
    title: 'Workplace Safety: A Case Study OF Institute of Petroleum Studies',
    role: 'Invited Speaker',
    event: 'Safety Seminar for Staff members at Institute of Petroleum Studies, University of Port Harcourt',
    location: 'Port Harcourt',
    date: '21 June 2019'
  },
  {
    title: 'Fingerprinting of complex microbial populations by analysis of PCR-amplified genes coding for 16S rRNA',
    role: 'Platform Speaker',
    event: 'Genomics and Human Health in Africa Conference',
    location: 'Khartoum, Sudan',
    date: '2 - 7 December 2018'
  },
  {
    title: 'Leaving traces of Professional output among West African Researchers',
    role: 'Platform Speaker',
    event: 'West African Research and Innovation Management Association, WARIMA 12th International Conference and Workshop',
    location: 'Ibadan, Nigeria',
    date: '25 - 30 November 2018'
  },
  {
    title: 'PAHs Content and Potential Risks on Exposure to Dusts from Classroom Window Corners of Selected Public Primary Schools in Port Harcourt Metropolis Nigeria',
    role: 'Platform Speaker',
    event: '3rd South-South Zonal Annual Conference of Nigerian Society of Biochemistry and Molecular Biology (NSBMB)',
    location: 'University of Port Harcourt',
    date: '12 – 14 September 2018'
  },
  {
    title: 'Investigation into the Prolonged Intake of Sugar-Free Carbonated Soft Drinks on Selected Biochemical indices of Male Wistar rats',
    role: 'Platform Speaker',
    event: '3rd South-South Zonal Annual Conference of Nigerian Society of Biochemistry and Molecular Biology (NSBMB)',
    location: 'University of Port Harcourt',
    date: '12 – 14 September 2018'
  },
  {
    title: 'Nanotoxicological indices at exposure for Vigna subterranea',
    role: 'Platform Speaker',
    event: '256th American Chemical Society National Meeting',
    location: 'Boston, MA',
    date: '19 - 23 August 2018',
    link: 'https://plan.core-apps.com/acsboston18/abstract/1bafa814-be66-402c-b60d-2bb88012161f'
  },
  {
    title: 'Interdisciplinary research towards tackling the SDGs in Africa',
    role: 'Presenter',
    event: 'The African Academy of Science',
    location: 'Pembroke College, University of Oxford, UK',
    date: '5 - 8 August 2018'
  },
  {
    title: 'Networking and Online presence for Global Scholars',
    role: 'Guest Lecturer',
    event: 'Parasitology & Public Health Society of Nigeria (PPSN) South South meeting',
    location: 'Port Harcourt',
    date: '3 August 2018'
  },
  {
    title: 'Agenda for Career Development',
    role: 'Organizer/ Resource Person',
    event: 'Centre for Gas Refining',
    location: 'University of Port Harcourt',
    date: '25 July 2018'
  },
  {
    title: 'Safety at Institute of Petroleum Studies Workplace',
    role: 'Invited Speaker',
    event: 'Safety Seminar for Staff members at Institute of Petroleum Studies, University of Port Harcourt',
    location: 'Port Harcourt',
    date: '27 March 2018'
  },
  {
    title: 'Patronage of chemical safety and security among chemistry professionals',
    role: 'Presenter',
    event: 'ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY',
    location: 'Washington, DC, USA',
    date: 'March 2018'
  },
  {
    title: 'Capacity Development Workshop',
    role: 'Resource Person and Workshop Facilitator',
    event: 'Modibbo Adama University of Technology (MAUTECH), Yola',
    location: 'Engineering Lecture Theatre',
    date: '13 December 2017'
  },
  {
    title: 'Nanoscience and technology for Agriculture',
    role: 'Speaker',
    event: 'Polymer Institute of Nigeria 28th Annual Technical Conference',
    location: 'Port Harcourt',
    date: '25 – 28 October 2017'
  },
  {
    title: 'Science and Peace: an essential nutrient for adolescents',
    role: 'Invited Lecturer',
    event: 'Protect Our Future Peace Camp organised by Centre for Social Transformation and Human Development (CHDST)',
    location: 'Our Lady of Lourdes Secondary School Ozuoba Rivers state Nigeria',
    date: '9 August 2017'
  },
  {
    title: 'Conducting International Research',
    role: 'Invited Lecturer',
    event: 'University 2017 Management Retreat',
    location: 'Federal University of Petroleum Research Effurun Delta state, Nigeria',
    date: '31 July 2017'
  },
  {
    title: 'University Idea, Localism and Indigeneity',
    role: 'Resource Person',
    event: 'Leadership Training. Academic Staff Union of Universities',
    location: 'Rivers state University, Rivers state Nigeria',
    date: '30 June 2017'
  },
  {
    title: 'University Idea, Localism and Indigeneity',
    role: 'Resource Person',
    event: 'Leadership Training. Academic Staff Union of Universities',
    location: 'Niger Delta University Wilberforce Island, Bayelsa state Nigeria',
    date: '22 June 2017'
  },
  {
    title: 'University Idea, Localism and Indigeneity',
    role: 'Resource Person',
    event: 'Leadership Training. Academic Staff Union of Universities',
    location: 'University of Port Harcourt, Amatu Braide Hall',
    date: '16 June 2017'
  },
  {
    title: 'Science Leadership and Logistics',
    role: 'Invited Trainer/ Facilitator',
    event: 'Global Chemists’ Code of Ethics (GCCE) and Science & Technology Leadership',
    location: 'Sofitel, Nairobi Kenya',
    date: '15 May 2017'
  },
  {
    title: 'Science Communication',
    role: 'Invited Trainer/ Facilitator',
    event: 'Global Chemists’ Code of Ethics (GCCE) and Science & Technology Leadership',
    location: 'Sofitel, Nairobi Kenya',
    date: '16 May 2017'
  },
  {
    title: 'Global Chemists’ Code of Ethics (GCCE) & Chemical Safety and Security',
    role: 'Trainer',
    event: 'A step-down training for Academics, Technologists, Graduate students, Policy makers and Industry partners, sponsored by American Chemical Society',
    location: 'Centre for Oil and Gas Refining auditorium, University of Port Harcourt',
    date: '15 March 2017'
  },
  {
    title: 'Safety in Construction and Allied Workplaces',
    role: 'Organiser/ Facilitator',
    event: 'A two-day National Workshop on Occupational Health and Safety in Nigeria',
    location: 'Federal Ministry of Labour and Employment in partnership with Global Network Monitoring and Development Initiatives and World Safety Organization (WSO)',
    date: '1 - 2 March 2017'
  },
  {
    title: 'Challenges of Human Diversity in the Laboratory and the Implications in the National Development',
    role: 'Invited Lecturer',
    event: 'University of Ilorin',
    location: 'Ilorin Kwara state Nigeria',
    date: '16 - 17 January 2017'
  },
  {
    title: 'Diversity challenges in the laboratory: A critical variable for Africa’s growth',
    role: 'Speaker',
    event: '10th WARIMA International Conference and Workshops',
    location: 'MRC Unit, The Gambia',
    date: '11 - 16 December 2016'
  },
  {
    title: 'Research Centres of Excellence: Our Journey So Far!!!!',
    role: 'Lead Speaker',
    event: '2016 Nigerian Higher Education Summit: Exploiting Diversity, Differentiation and Quality Assurance in Revitalizing the Nigerian Higher Education System',
    location: 'NAF Conference Centre, Jahi, Abuja, Nigeria',
    date: '21 - 23 November 2016'
  },
  {
    title: 'Influence of Aqueous Extract of Acalypha wikiesiana on some selected Biochemical indices of albino Wistar rats',
    role: 'Presenter',
    event: '35th Annual Nigerian Society of Biochemistry and Molecular Biology (NSBMB) Conference',
    location: 'Covenant University, Ota',
    date: '1 – 4 November 2016'
  },
  {
    title: 'The use of Wonderful kola, African walnut and Guinea plum as Diet Supplements in the Management of Hyperlipidemia in male Wistar rats',
    role: 'Presenter',
    event: '35th Annual Nigerian Society of Biochemistry and Molecular Biology (NSBMB) Conference',
    location: 'Covenant University, Ota',
    date: '1 – 4 November 2016'
  },
  {
    title: 'Bachelors in Biochemistry and Chemistry Technology: WHAT NEXT?',
    role: 'Keynote Speaker',
    event: 'Association of Biochemistry Chemistry Technolgy Students Summit',
    location: 'Ofrima Hall, Port Harcourt Nigeria',
    date: '7 October 2016'
  },
  {
    title: 'Comparison of thermal and microwave remediation for a Nigerian oil polluted soil and implications of phytoremediation for photosynthetic efficiency',
    role: 'Speaker',
    event: 'ENVR 765. American Chemical Society 252nd National meeting and Symposia, Division of Environmental Chemistry',
    location: 'Philadelphia, PA, USA',
    date: '21 - 25 August 2016'
  },
  {
    title: 'Interdependence of soil and agricultural practice in a two –year phytoremediation in situ experiment',
    role: 'Speaker',
    event: 'European Geosciences Union General Assembly 2016',
    location: 'Vienna Austria',
    date: '17 – 22 April 2016',
    link: 'http://meetingorganizer.copernicus.org/EGU2016/EGU2016-172.pdf'
  },
  {
    title: 'Superoxide dismutase, catalase and peroxidase activities during Vigna subterranea exposure to Ag Nanoparticles',
    role: 'Speaker',
    event: '5th Young Environmental Scientists meeting',
    location: 'Gainesville FL USA',
    date: '28 February – 2 March 2016'
  },
  {
    title: 'Biological estimation of Soil Organic matter: a relationship with cellulose breakdown and CO2 release',
    role: 'Speaker',
    event: '2nd International Workshop SOMpatic',
    location: 'Rauischholzhausen, Germany',
    date: '8 – 10 December 2015',
    link: 'http://meetingorganizer.copernicus.org/EGU2016/EGU2016-172.pdf'
  },
  {
    title: 'Characterization and phytoremediation of crude oil contaminated wetland',
    role: 'Speaker',
    event: '21st Conference on Environmental Indicators',
    location: 'University of Windsor',
    date: '2 – 5 August 2015',
    link: 'https://journalofenvironmentalindicators.com/abstract/characterization-and-phytoremediation-of-crude-oil-contaminated-wetland/'
  },
  {
    title: 'Levels of selected heavy metals in dumpsites from printing press, paint industry and auto mechanic workshop in rivers state Nigeria',
    role: 'Speaker',
    event: 'West African Society of Toxicology (WASOT) 4th International Conference',
    location: 'Port Harcourt, Rivers state Nigeria',
    date: '3 – 6 February 2015'
  },
  {
    title: 'Communication: A mandatory tool for Research Builders and Consumers',
    role: 'Speaker',
    event: 'West African Research and Innovations Management Association, WARIMA 8th International Conference and Workshop',
    location: 'Ilara-Mokin Ondo state Nigeria',
    date: '24 – 26 November 2014'
  },
  {
    title: "Students in Leadership: A Virtue or Vague in the Grassroots Delivery of Dividends of Democracy",
    event: "NOREL 2014 ‘NEWBREED OF RESOURCEFUL LEADERS’. Students’ Union National Congress",
    date: "September 4, 2014",
    location: "Ebitimi Banigo Hall, Port Harcourt, Nigeria"
  },
  {
    title: "Conditioners and Significance in t-RFLP Profile of the Assemblage of Prokaryotic Microorganisms in Crude Oil Polluted Agricultural Soils",
    event: "American Chemical Society 248th National Meeting and Symposia, Division of Agricultural and Food Chemistry",
    date: "August 10-14, 2014",
    location: "San Francisco, CA, USA"
  },
  {
    title: "Plant-Soil Interactions as Promoter for Increased Soil Function, Structure, and Diversity in a Crude Oil Polluted Agricultural Field",
    event: "20th World Congress of Soil Science (20WCSS)",
    date: "June 8-13, 2014",
    location: "Jeju International Convention Center, Jeju, South Korea"
  },
  {
    title: "Enhanced Phytoremediation of Crude Oil-Polluted Soil by Four Common Native Plants: Effect of Inorganic and Organic Fertilizer Amendments",
    event: "2014 International Conference. UNESCO Chair in Technologies for Development: What is Essential?",
    date: "June 4-6, 2014",
    location: "EPFL Lausanne, Switzerland"
  },
  {
    title: "In situ Remediation of Arsenic- and Copper-Contaminated Soil by Hevea brasillensis",
    event: "American Chemical Society 247th National Meeting and Symposia, Division of Environmental Chemistry",
    date: "March 16-20, 2014",
    location: "Dallas, TX, USA"
  },
  {
    title: "Effect of Heat Treatment and Fermentation on the Phytochemistry of an Aqueous Extract of Buccholzia coriacea",
    event: "American Chemical Society 247th National Meeting and Symposia, Division of Agricultural and Food Chemistry",
    date: "March 16-20, 2014",
    location: "Dallas, TX, USA"
  },
  {
    title: "Effective Scientific Communication in Productive Research",
    event: "West African Research and Innovations Management Association, WARIMA 8th International Conference and Workshop",
    date: "March 2-7, 2014",
    location: "Jos Plateau State, Nigeria"
  },
  {
    title: "Remediation of Oil-Contaminated Wetland by Hevea brasillensis",
    event: "The 21st International Symposium on Environmental Biogeochemistry. ‘Global Challenges in Environmental Biogeochemistry’",
    date: "October 13-18, 2013",
    location: "Wuhan, China"
  },
  {
    title: "Phenol Removal from Refinery Effluent using Hevea brasillensis",
    event: "10th International Phytotechnologies Conference",
    date: "October 1-4, 2013",
    location: "Syracuse, New York, USA"
  },
  {
    title: "Remediation of Cd and Lead-Contaminated Wetland by Hevea brasillensis",
    event: "10th International Phytotechnologies Conference",
    date: "October 1-4, 2013",
    location: "Syracuse, New York, USA"
  },
  {
    title: "Removal of Some Heavy Metals in Oil-Related Effluent by Hevea brasillensis",
    event: "Nigerian Society of Biochemistry and Molecular Biology 32nd Annual Conference. Biochemistry and Molecular Biology: Tools for Achieving MDGs",
    date: "November 14-17, 2012",
    location: "Calabar, Nigeria"
  },
  {
    title: "Effects of Soil Clean-up using Lemon Grass on the Interaction of Selected Soil Minerals with Organic Pollutants: Management Implications",
    event: "Eurosoil 2012 – Soil Science For The Benefit Of Mankind and Environment. 4th International Congress of the European Confederation of Soil Science Societies (ECSSS)",
    date: "July 2-6, 2012",
    location: "Bari, Italy"
  },
  {
    title: "Soil Management Practice and Influences on Phytoremediation of Oil Contaminated Soil",
    event: "Urban Environmental Pollution Conference – Creating Healthy, Liveable Cities",
    date: "June 17-20, 2012",
    location: "Amsterdam, The Netherlands"
  },
  {
    title: "Assessment of Groundwater Samples from Selected Niger Delta Communities in Nigeria",
    event: "New Life Sciences: Linking Science To Society. Bio Vision Alexandria 2012 International Biennial Conference",
    date: "April 22-25, 2012",
    location: "Bibliotheca Alexandrina, Alexandria, Egypt"
  },
  {
    title: "Effects of Selected Spices on Biochemical Profile of Mammals",
    event: "Nigerian Society of Biochemistry and Molecular Biology 31st Annual Conference. The Challenges of Globalisation and Climate Change",
    date: "October 31 – November 3, 2011",
    location: "University of Nigeria Nsukka"
  },
  {
    title: "Comparative Analysis on Borehole-Water Samples in Gokana, Ogale and Trans-Amadi in Rivers State",
    event: "Nigerian Society of Biochemistry and Molecular Biology 31st Annual Conference. The Challenges of Globalisation and Climate Change",
    date: "October 31 – November 3, 2011",
    location: "University of Nigeria Nsukka"
  },
  {
    title: "Distribution of Some Metals at Green Remediation of a Crude Oil Contaminated Soil",
    event: "Nigerian Society of Biochemistry and Molecular Biology 31st Annual Conference. The Challenges of Globalisation and Climate Change",
    date: "October 31 – November 3, 2011",
    location: "University of Nigeria Nsukka"
  },
  {
    title: "Biodegradation of BTEX with Tomatoes (Lypersicon esculentum) and Bambara Beans (Vigna subterranea) in Petroleum Hydrocarbon-Contaminated Soils",
    event: "International Phytotechnology Society Conference in Portland, Oregon, USA: Putting Plants to Work Where We Live, Labor, Breathe, and Play",
    date: "September 13-16, 2011",
    location: "Portland, Oregon, USA"
  },
  {
    title: "Interaction of Selected Minerals with Organic Pollutants: Effects of Phyto-assisted Bioremediation Using Vigna subterranea",
    event: "Soil Interfaces in a Changing World. ISMOM 2011",
    date: "June 26 – July 1, 2011",
    location: "Montpellier, France"
  },
  {
    title: "Toxicological Evaluation of Feed Formulated from Raw Materials from Contaminated Site in the Niger Delta",
    event: "College Research Day",
    date: "January 2011",
    location: "Port Harcourt, Nigeria"
  },
  {
    title: "Centrosema pubescens Benth and Mucuna pruriens var. pruriens in Copper Uptake and Translocation – Phytoremediation",
    event: "7th International Conference on Phytotechnologies",
    date: "September 26-29, 2010",
    location: "Parma, Italy"
  },
  {
    title: "Phytoremediation of Crude Oil Contaminated Soil - A Nigerian Niger Delta Case Study",
    event: "Third World Organization of Women in Science, TWOWS Africa Regional Conference",
    date: "November 16-20, 2009",
    location: "ECOWAS Commission, 101 Yakubu Gowon Crescent, Asokoro, Abuja, Nigeria"
  },
  {
    title: "Geotechnology and Phytoremediation: A Utensil for Economic Growth",
    event: "10th International Symposium on Environmental Geotechnology and Sustainable Development (ISEG 2009) organized by International Society for Environmental Geotechnology",
    date: "September 7-11, 2009",
    location: "TFH Georg Agricola Bochum, Nordrhein-Westfalen, Germany"
  }
];
</script>

<style scoped>
/* Custom styles for better spacing */
</style>
