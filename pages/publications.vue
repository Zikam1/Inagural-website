<template>
  <div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <button class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors @click="currentTab = 'publications'>Publications</button>
    <nuxt-link to="/Listbook" class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">List of Publications - Books Chapter</nuxt-link>
    <nuxt-link to="/paperpresent" class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">Paper Presentations</nuxt-link>
    <nuxt-link to="/workshop" class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">WorkShop</nuxt-link>
    <nuxt-link to="/professional-info" class="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">professional-info</nuxt-link>  
    <nuxt-link 
          to="/" 
          class="inline-flex items-center ml-4 text-blue-600 hover:text-blue-800 transition-colors">
          <span class="mr-2">Next</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

<script setup>
const publications = [
  {
    title: "Evaluation of Research Progress and Trends on Cement Retarders Application in Oilwells: A Bibliometric Analysis of Literature and Stakeholders",
    authors: "Nwaichi, P. I., Ridzuan N., Nwaichi E. O., Gbonhinbor, J. R. and Agi A.",
    year: 2024,
    journal: "SPE International. OnePetro",
    doi: "10.2118/221589-MS",
  },
  {
    title: "Recent Advances and Prospects on Retarder Application in Oilwell Cement: A Review",
    authors: "Nwaichi, P. I., Ridzuan N., Nwaichi E. O., Umunnawuike C., Agi A.",
    year: 2024,
    journal: "Geoenergy Science and Engineering. Elsevier Publisher",
    url: "https://doi.org/10.1016/j.geoen.2024.213103",
  },
  {
    title: "Nephrotoxicity and Oxidative Stress Response of Wistar Rats fed with Plant Extracts from Bioremediated Crude Oil Impacted Soil",
    authors: "Olua, V., Wegwu, M.O., Nwaichi, E.O., Riyadh S. A. and Samar F. M.",
    year: 2024,
    journal: "European Chemical Bulletin, 14(13):42 – 50",
    doi: "10.53555/ecb/2024.13.04.07",
  },
  {
    title: "Effect of Clarifiers in Beer Brewing on the Lipid Profile of Consumers",
    authors: "Nwaichi E.O., Agbagwa, J. T. and Onyeike, E. N.",
    year: 2024,
    journal: "Asian Journal of Emerging Research, 6 (1): 1-12",
    url: "https://doi.org/10.17311/ajer.2024.01.12",
  },
  {
    title: "Effect of heat-stable biocatalytic remediation cocktail (HBRC) on selected heavy metals present in crude oil-polluted soil",
    authors: "Akpoji B. S., Essien E. B. and Nwaichi E.O.",
    year: 2024,
    journal: "Scientia Africana. 22 (3), 23-38",
  },
  {
    title: "Improving safety performance in the Nigerian oil and gas construction industry through human factor engineering",
    authors: "Thomas, D. O., Nwaichi E.O. and Chinemerem Patricks, C.",
    year: 2024,
    journal: "Open Research Africa",
    url: "https://doi.org/10.12688/openresafrica.14411.1",
  },
  {
    title: "Bibliometric Analysis of Publications on “Hazards and Health Effects Associated with Welding” From 2010 – 2023",
    authors: "Ayodeji-Fapohunda G.N., Ugwoha E. and Nwaichi E. O.",
    year: 2023,
    journal: "Chemical Science International Journal, 32 (6):137-150",
  },
  {
    title: "Nutrition as A Therapeutic Intervention for Metal Toxicity",
    authors: "Ayodeji-Fapohunda G.N., Ugwoha E. and Nwaichi E. O.",
    year: 2023,
    journal: "Current Journal of Applied Science and Technology. 42 (46), 72-84",
  },
  {
    title: "Mitigating Recordable Incidents in Nigeria's Oil & Gas Construction Industry: A Human Factor Engineering (HFE)",
    authors: "Thomas, D. O., Nwaichi E.O. and Chinemerem Patricks, C.",
    year: 2023,
    journal: "Journal of Scientific Research & Reports. 29 (11), 1-13",
  },
  {
    title: "Framework for Fire Safety Management of Hotels in Nigeria: A Structural Equation Modeling Approach",
    authors: "Nwaichi P.I., Ali, M. W., Aule, T. T., Aja, A. A., and Nwaichi E.O.",
    year: 2023,
    journal: "International Journal of Built Environment and Sustainability, 10 (2), 39-51",
  },
  {
    title: "Enzyme Activities in Tissues of Nile Tilapia (Oreochromis niloticus), Mullet Fish (Liza falcipinus) and Crab (Callinectes amnicola) from Oil Impacted Abuloma and Woji Jetties, Rivers State Nigeria",
    authors: "George, M. S., Nwaichi E.O. and Monago-Ighorode, C.C.",
    year: 2023,
    journal: "International Journal of Biochemistry Research & Review, 32 (1), 1-8",
    url: "https://doi.org/10.9734/ijbcrr/2023/v32i179232",
  },
  {
    title: "Cost reduction strategies in the remediation of petroleum hydrocarbon contaminated soil",
    authors: "Ahmed I.B., Nwaichi E.O*, Ejikeme U.1, Ugbebor J.N., and Arokoyu S.B.",
    year: 2022,
    journal: "Open Research Africa, 5(21), 1-17",
  },
  {
    title: "Selenium abates manganese–induced striatal and hippocampal toxicity via abrogation of neurobehavioral deficits, biometal accumulation, oxidative stress, inflammation, and caspase‑3 activation in rats",
    authors: "Nkpaa, K. W., Nkpaa, B. B., Amadi, B. A., Ogbolosingha, A. J., Wopara, I., Belonwu, D. C., Patrick‑Iwuanyanwu, K. C., Nwaichi, E. O., Wegwu, M. O. and Orisakwe, O. E.",
    year: 2021,
    journal: "Psychopharmacology, 239, 399–412",
  },
  {
    title: "Selenium abates manganese–induced striatal and hippocampal toxicity via abrogation of neurobehavioral deficits, biometal accumulation, oxidative stress, inflammation, and caspase‑3 activation in rats",
    authors: "Nkpaa, K. W., Nkpaa, B. B., Amadi, B. A., Ogbolosingha, A. J., Wopara, I., Belonwu, D. C., Patrick‑Iwuanyanwu, K. C., Nwaichi, E. O., Wegwu, M. O. and Orisakwe, O. E.",
    year: 2021,
    journal: "Psychopharmacology, 239, 399–412",
  },
  {
    title: "Hepatotoxicity of farm produce from recently remediated crude oil polluted site amended using formulated agrowastes",
    authors: "Olua, V., Wegwu, M. O. and Nwaichi, E.O.",
    year: 2021,
    journal: "International Journal of Innovative Science and Research Technology, 6(10), 353-358"
  },
  {
    title: "Has the National policy on environmental pollution control in Nigeria been neglected in the Niger Delta region? An update",
    authors: "Nwaichi, E.O. and Osuoha, J. O.",
    year: 2021,
    journal: "Environment, Development and Sustainability. 24, 12494–12517",
    doi: "10.1007/s10668-021-01973-1"
  },
  {
    title: "Proximate Analysis and Phytochemical Screening of Triclisia subcordata Oliv Leaf",
    authors: "Okpara, F. N., Nwaichi E. O. and Akaninwor, J. O.",
    year: 2021,
    journal: "International Journal of Biochemistry Research & Review, 30(8), 1-9"
  },
  {
    title: "Finding a Balance between Mood and Energy Level in a Rotational Work System",
    authors: "Okeke, U., Nwaichi, E. O. and Stanley, P. C.",
    year: 2021,
    journal: "Journal of Complementary and Alternative Medical Research, 16 (4), 113-120"
  },
  {
    title: "Toxicological Evaluation of Telfaria occidentalis and Talinum triangulare Grown in Freshly Recovered Petroleum-Polluted Soil",
    authors: "Olua, V., Nwaichi, E.O. and Wegwu, M. O.",
    year: 2021,
    journal: "European Journal of Applied Sciences. 9(5). 262-271"
  },
  {
    title: "Heavy Metals and Polycyclic Aromatic Hydrocarbons in Commonly Consumed Crayfish in Nigeria and Health Risk Implications",
    authors: "Nwaichi, E.O., Ibiama, B. G. and Akaninwor, J. O.",
    year: 2021,
    journal: "European Journal of Nutrition & Food Safety, 13(6), 44-57"
  },
  {
    title: "Rotational Work and Negative Impact on Mental Wellness: A Study on Sleep and Endurance among Oil and Gas Workers",
    authors: "Okeke, U., Nwaichi, E.O. and Stanley, P. C.",
    year: 2021,
    journal: "Journal of Scientific Research and Reports, 27(9), 41-48"
  },
  {
    title: "Occupational Health and Safety Management System and Organizational Performance in Selected Industries in Cross River State, Nigeria",
    authors: "Okeke, U. K., Nwaichi, E.O. and Ugbebor, J. N.",
    year: 2021,
    journal: "Journal of Engineering Research and Reports, 20(7): 1-11"
  },
  {
    title: "Attenuation of petroleum hydrocarbon fractions using rhizobacterial isolates possessing alkB, C23O, and nahR genes for degradation of n-alkane and aromatics",
    authors: "Agbaji, J. E., Nwaichi, E. O. and Abu, G. O.",
    year: 2021,
    journal: "Journal of Environmental Science and Health, Part A. 56(6), 635-645",
    url: "https://europepmc.org/article/med/34019473"
  },
  {
    title: "Evaluation of Safety Performance of Nigerian Construction Industry - A Case Study of the Niger Delta Region",
    authors: "Ugwu, T. P., Nwaichi, E.O. and Patricks-Ekedede, C.",
    year: 2021,
    journal: "Journal of Scientific Research & Reports. 27(2): 94-103"
  },
  {
    title: "Phytoremediation Of Crude Oil Impacted Soil Using Purple Nutsedge",
    authors: "Nwaichi, E.O., Chukwukere, C.O.; Abosi, P.J. and Onukwuru, G.I.",
    year: 2021,
    journal: "Journal of Applied Science and Environmental Management, 25: 475-479"
  },
  {
    title: "Toxicological Assessment of Crops Grown in Soils Amended with Municipal Solid Waste Ash",
    authors: "Ibrahim, G. D., Nwaichi, E.O. and Abu, G. O.",
    year: 2021,
    journal: "Journal of Scientific Research & Reports. 27(1): 12-20"
  },
  {
    title: "Achieving Carbon Footprint Reduction: the Use of Technology as a Learning Tool for Making Life-Style Changes among Secondary School Students in Imo State",
    authors: "Okeke, U. K. and Nwaichi, E. O.",
    year: 2020,
    journal: "Journal of the Nigerian Academy of Education. 16 (2), 180 – 193"
  },
  {
    title: "Occupational Health and Safety Management in Selected Stone Quarries in Akamkpa, Cross River State, Nigeria",
    authors: "Ekong, A. E., Ezeokoro, C., Nwaichi, E. O., Obele, R. E.",
    year: 2020,
    journal: "Current Journal of Applied Science and Technology. 39(34): 107-122"
  },
  {
    title: "Ambient particulate matter levels and health profile in residents of Choba and Mgbuoba areas of Rivers state: a cross-sectional study",
    authors: "Nwaichi, E. O., Uzodike, S. E., Amadi, B. A., and Ugwoha, E. O.",
    year: 2020,
    journal: "Journal of the Air & Waste Management Association. 71(12), 1472-1482"
  },
  {
    title: "Optimized Production of Bioremediation Agent for Application in the Eco-Recovery of Oil Spill site",
    authors: "Agbaji, J. E., Nwaichi, E. O. and Abu, G. O.",
    year: 2020,
    journal: "Society of Petroleum Engineers (SPE). OnePetro",
    url: "https://doi.org/10.2118/203654-MS"
  },
  {
    title: "Institutionalizing an Evidence-Based Practice in a Selected Government Agency in Nigeria",
    authors: "Nwaichi, E.O., Chidebe, I., Osuoha, J. O., Chimezie, E., Mbaoji, C., Ifeanyi-Obi, C. C., Ugwoha, E. O., Odogwu, B., Okengwu, U., Olua, V., Oghenekaro, L. U., Agbagwa, O. E., Frank-Peterside, N., Ozah, M. A., Raphael, C. U., Ugiomoh, I., Nwoha, P. A., Akpoji, B. A.",
    year: 2020,
    journal: "bioRxiv",
    doi: "10.1101/2020.12.21.423750"
  },
  {
    title: "Heavy Metals Contents of Municipal Solid Waste Dumpsites in Potiskum, Yobe state Nigeria",
    authors: "Ibrahim, G. D., Nwaichi, E.O. and Abu, G. O.",
    year: 2020,
    journal: "Journal of Environmental Protection, 11, 709-717"
  },
  {
    title: "Enzymatic technologies as green and sustainable techniques for remediation of oil-contaminated environment: state of the art",
    authors: "Osuoha, J.O. and Nwaichi, E.O.",
    year: 2020,
    journal: "International Journal of Environmental Science and Technology. 18(5), 1299-1322",
    doi: "10.1007/s13762-020-02876-w"
  },
  {
    title: "Water Quality and Hydrocarbon Contaminant Level in Soil and Fishes Around Abuloma Jetty, Port Harcourt, Nigeria",
    authors: "Nwaichi, E. O., Uwakwe, A.A. and George, M.S.",
    year: 2020,
    journal: "Journal of Environmental Science and Technology, 13, 106-117"
  },
  {
    title: "Profile of Polycyclic Aromatic Hydrocarbons in Soil Environment around Selected Auto-Technicians’ Workshop in ObioAkpor, Rivers State Nigeria",
    authors: "Daniel, U. I., Utuh, I. A. and Nwaichi, E. O.",
    year: 2020,
    journal: "Journal of Environmental Protection, 11, 399-407"
  },
  {
    title: "Optimization of bioremediation-cocktail for application in the eco-recovery of crude oil polluted soil",
    authors: "Agbaji, J. E., Nwaichi, E. O. and Abu, G. O.",
    year: 2020,
    journal: "AAS Open Research, 3, 7"
  },
  {
    title: "Production and optimization of extracellular lipase expressed by Aspergillus flavus isolated from petroleum-contaminated soil",
    authors: "Osuoha, J. O., Nwaichi, E. O., Egwim, E. C. and Abbey, B. W.",
    year: 2019,
    journal: "International Journal of Biochemistry and Physiology. 5(2): 1-9"
  },
  {
    title: "Soil Heavy Metals Remediation Using Mariscus alternifolius, Fimbristylis ferruginea, Schwenkia americana and Spermacoce ocymoides",
    authors: "Chukwuma, C. C., Ibude, J. A., Nwaichi, E. O. and Monanu, M. O.",
    year: 2019,
    journal: "Singapore Journal of Scientific Research, 9, 77-85"
  },
  {
    title: "Possible Anti-Malaria Potential of Nwagbakelu Formulation and its Effect on Selected Liver Function Indices of Albino Mice",
    authors: "Nwaichi, E. O., Osuoha, J. O. and Blessing O. O.",
    year: 2019,
    journal: "Scientia Africana. 18 (3), 1-6"
  },
  {
    title: "Evaluation of Research Progress and Trends on Cement Retarders Application in Oilwells: A Bibliometric Analysis of Literature and Stakeholders",
    authors: "Nwaichi, P. I., Ridzuan N., Nwaichi E. O., Gbonhinbor, J. R. and Agi A.",
    year: 2024,
    journal: "SPE International. OnePetro",
    doi: "10.2118/221589-MS",
  },
  {
    title: "Hepatotoxicity of farm produce from recently remediated crude oil polluted site amended using formulated agrowastes",
    authors: "Olua, V., Wegwu, M. O. and Nwaichi, E.O.",
    year: 2021,
    journal: "International Journal of Innovative Science and Research Technology, 6(10), 353-358"
  },
  {
    title: "Has the National policy on environmental pollution control in Nigeria been neglected in the Niger Delta region? An update",
    authors: "Nwaichi, E.O. and Osuoha, J. O.",
    year: 2021,
    journal: "Environment, Development and Sustainability. 24, 12494–12517",
    doi: "10.1007/s10668-021-01973-1"
  },
  {
    title: "Proximate Analysis and Phytochemical Screening of Triclisia subcordata Oliv Leaf",
    authors: "Okpara, F. N., Nwaichi E. O. and Akaninwor, J. O.",
    year: 2021,
    journal: "International Journal of Biochemistry Research & Review, 30(8), 1-9"
  },
  {
    title: "Finding a Balance between Mood and Energy Level in a Rotational Work System",
    authors: "Okeke, U., Nwaichi, E. O. and Stanley, P. C.",
    year: 2021,
    journal: "Journal of Complementary and Alternative Medical Research, 16 (4), 113-120"
  },
  {
    title: "Toxicological Evaluation of Telfaria occidentalis and Talinum triangulare Grown in Freshly Recovered Petroleum-Polluted Soil",
    authors: "Olua, V., Nwaichi, E.O. and Wegwu, M. O.",
    year: 2021,
    journal: "European Journal of Applied Sciences. 9(5). 262-271"
  },
  {
    title: "Heavy Metals and Polycyclic Aromatic Hydrocarbons in Commonly Consumed Crayfish in Nigeria and Health Risk Implications",
    authors: "Nwaichi, E.O., Ibiama, B. G. Akaninwor, J. O.",
    year: 2021,
    journal: "European Journal of Nutrition & Food Safety, 13(6), 44-57"
  },
  {
    title: "Rotational Work and Negative Impact on Mental Wellness: A Study on Sleep and Endurance among Oil and Gas Workers",
    authors: "Okeke, U., Nwaichi, E.O. and Stanley, P. C.",
    year: 2021,
    journal: "Journal of Scientific Research and Reports, 27(9), 41-48"
  },
  {
    title: "Occupational Health and Safety Management System and Organizational Performance in Selected Industries in Cross River State, Nigeria",
    authors: "Okeke, U. K., Nwaichi, E.O. and Ugbebor, J. N.",
    year: 2021,
    journal: "Journal of Engineering Research and Reports, 20(7): 1-11"
  },
  {
    title: "Attenuation of petroleum hydrocarbon fractions using rhizobacterial isolates possessing alkB, C23O, and nahR genes for degradation of n-alkane and aromatics",
    authors: "Agbaji, J. E., Nwaichi, E. O. and Abu, G. O.",
    year: 2021,
    journal: "Journal of Environmental Science and Health, Part A. 56(6), 635-645",
    doi: "10.1080/10934529.2021.1903891"
  },
  {
    title: "Evaluation of Safety Performance of Nigerian Construction Industry - A Case Study of the Niger Delta Region",
    authors: "Ugwu, T. P., Nwaichi, E.O. and Patricks-Ekedede, C.",
    year: 2021,
    journal: "Journal of Scientific Research & Reports. 27(2): 94-103"
  },
  {
    title: "Phytoremediation Of Crude Oil Impacted Soil Using Purple Nutsedge",
    authors: "Nwaichi, E.O., Chukwukere, C.O.; Abosi, P.J. and Onukwuru, G.I.",
    year: 2021,
    journal: "Journal of Applied Science and Environmental Management, 25: 475-479"
  },
  {
    title: "Toxicological Assessment of Crops Grown in Soils Amended with Municipal Solid Waste Ash",
    authors: "Ibrahim, G. D., Nwaichi, E.O. and Abu, G. O.",
    year: 2021,
    journal: "Journal of Scientific Research & Reports. 27(1): 12-20"
  },
  {
    title: "Achieving Carbon Footprint Reduction: the Use of Technology as a Learning Tool for Making Life-Style Changes among Secondary School Students in Imo State",
    authors: "Okeke, U. K. and Nwaichi, E. O.",
    year: 2020,
    journal: "Journal of the Nigerian Academy of Education. 16 (2), 180 – 193"
  },
  {
    title: "Occupational Health and Safety Management in Selected Stone Quarries in Akamkpa, Cross River State, Nigeria",
    authors: "Ekong, A. E., Ezeokoro, C., Nwaichi, E. O., Obele, R. E.",
    year: 2020,
    journal: "Current Journal of Applied Science and Technology. 39(34): 107-122"
  },
  {
    title: "Ambient particulate matter levels and health profile in residents of Choba and Mgbuoba areas of Rivers state: a cross-sectional study",
    authors: "Nwaichi, E. O., Uzodike, S. E., Amadi, B. A., and Ugwoha, E. O.",
    year: 2020,
    journal: "Journal of the Air & Waste Management Association. 71(12), 1472-1482"
  },
  {
    title: "Optimized Production of Bioremediation Agent for Application in the Eco-Recovery of Oil Spill site",
    authors: "Agbaji, J. E., Nwaichi, E. O. and Abu, G. O.",
    year: 2020,
    journal: "Society of Petroleum Engineers (SPE). OnePetro",
    url: "https://doi.org/10.2118/203654-MS"
  },
  {
    title: "Institutionalizing an Evidence-Based Practice in a Selected Government Agency in Nigeria",
    authors: "Nwaichi, E.O., Chidebe, I. Osuoha, J. O. Chimezie, E. Mbaoji, C. Ifeanyi-Obi, C. C. Ugwoha, E. O. Odogwu, B. Okengwu, U. Olua, V. Oghenekaro, L. U. Agbagwa, O. E. Frank-Peterside, N. Ozah, M. A. Raphael, C. Ugiomoh, I. Nwoha, P. A. Akpoji, B. A.",
    year: 2020,
    journal: "bioRxiv",
    doi: "10.1101/2020.12.21.423750"
  },
  {
    title: "Heavy Metals Contents of Municipal Solid Waste Dumpsites in Potiskum, Yobe state Nigeria",
    authors: "Ibrahim, G. D., Nwaichi, E.O. and Ugwu, M. O.",
    year: 2020,
    journal: "International Journal of Chemical Sciences & Engineering. 10(4), 1-10"
  },
  {
    title: "Catechol-2,3-Dioxygenase and Crude Oil Biodegradation Screening of Rhizo-Bacterial Endophytes from Bodo-Gokana, Rivers State",
    authors: "Agbaji, J. E., Abu, G. O. and Nwaichi, E. O.",
    year: 2019,
    journal: "Current Journal of Applied Science and Technology, 38(6), 1-12"
  },
  {
    title: "Physico-chemical Alterations and Hydrocarbon Characteristics of Kom-Kom Oil Spill Soils",
    authors: "Onyejekwe, I. M., Osuji, L. C. and Nwaichi, E. O.",
    year: 2019,
    journal: "Journal of Scientific Research & Reports, 25(2): 1-8"
  },
  {
    title: "Physicochemical Characterization of a Liquid Effluent from a Refinery",
    authors: "Osuoha, J. O. and Nwaichi, E. O.",
    year: 2019,
    journal: "Journal of Applied Science and Environmental Management, 23(10), 1779-1782"
  },
  {
    title: "Accumulation of Heavy Metal in the Seeds of Zea mays L. from Crude Oil Impacted Soils in Kom-Kom, Rivers State, Nigeria",
    authors: "Onyejekwe, I. M., Osuji, L. C. and Nwaichi, E. O.",
    year: 2019,
    journal: "Journal of Scientific Research & Reports, 25(3-4), 1-8"
  },
  {
    title: "Influence of Daucus carota on the Hepatic and Renal Biomarkers of Dichlorvos-Exposed Albino Rats",
    authors: "Nwaichi, E. O., Essien, E.B. and Ibe, U.C.",
    year: 2019,
    journal: "EC Pharmacology and Toxicology, 7.10 (2019): 1067-1075"
  },
  {
    title: "Production and Characterization of Tyrosinase Enzyme for Enhanced Treatment of Organic Pollutants in Petroleum Refinery Effluent",
    authors: "Osuoha, J. O., Abbey, B. W., Egwim, E. C. and Nwaichi, E. O.",
    year: 2019,
    journal: "OnePetro. Society of Petroleum Engineers",
    doi: "10.2118/198791-MS",
    url: "https://www.onepetro.org/conference-paper/SPE-198791-MS"
  },
  {
    title: "Protective and Curative Effects of Beta vulgaris on Dimethyl 2,2-Dichlorovinyl Phosphate-Exposed Albino Rats",
    authors: "Nwaichi, E. O., Essien, E.B. and Ibe, U.C.",
    year: 2019,
    journal: "AAS Open Research, 2:26-40"
  },
  {
    title: "Chemical Composition of Tetracarpidium conophorum (African Walnut) Seeds Grown in Nigeria",
    authors: "Osuoha, J. O. and Nwaichi, E. O.",
    year: 2019,
    journal: "Academia Journal of Scientific Research, 7(2), 147-154"
  },
  {
    title: "Igbo Proverbs in Praise of Soil",
    authors: "Nwaichi, E. O.",
    year: 2019,
    journal: "Advances in Literary Study, 7 (2), 21-31"
  },
  {
    title: "Investigation into the Prolonged Intake of Sugar-Free Carbonated Soft Drinks on Selected Biochemical Indices of Male Wistar Rats",
    authors: "Uzobor, P. U., Nwaichi, E. O. and Anacletus, F. C.",
    year: 2018,
    journal: "Journal of Biochemistry and Physiology, 1(2), 1-6"
  },
  {
    title: "Impact of Prolonged Intake of Sugar-Free Carbonated Soft Drinks on Reproductive Outcomes of Male Wistar Rats",
    authors: "Anacletus, F. C., Uzobor, P. U. and Nwaichi, E. O.",
    year: 2018,
    journal: "IOSR Journal of Pharmacy and Biological Sciences, 13 (3), 7-11"
  },
  {
    title: "Heavy Metals Contents and Health Risk Assessment of Classroom Corner Dusts in Selected Public Primary Schools in Rivers State, Nigeria",
    authors: "Olua, V., Patrick-Iwuanyanwu, K. C. and Nwaichi, E. O.",
    year: 2018,
    journal: "Journal of Environment Pollution and Human Health, 6(4), 138-147"
  },
  {
    title: "Community Level Physiological Profiling in a First Generation Phytoremediation Experiment",
    authors: "Nwaichi, E. O. and Owuala, F. N.",
    year: 2018,
    journal: "Indian Journal of Experimental Biology, 56, 550-557"
  },
  {
    title: "Essential Oil and Fatty Acid Constituents of Buccholzia coriacea (Wonderful Kola) Seeds Harvested in Nigeria",
    authors: "Nwaichi E. O. and Osuoha, J. O.",
    year: 2018,
    journal: "Biochemistry & Physiology, 7(2), 1-5"
  },
  {
    title: "Biological Soil Quality Indicators and Conditioners in a Plant-Assisted Remediation of Crude Oil Polluted Farmland",
    authors: "Nwaichi, E. O. and Chuku, L. C.",
    year: 2018,
    journal: "Journal of Environmental Protection, 8, 1622-1635"
  },
  {
    title: "Polycyclic Aromatic Hydrocarbons (PAHs) and Some Trace Metals in Yam, Cassava, Orange and Papaya from Two Oil and Gas Flaring Impacted Communities in Southern Nigeria",
    authors: "Nwaichi, E. O., Agbam, P., Iwu, P. I.",
    year: 2018,
    journal: "Journal of Applied Science and Environmental Management, 21(6), 1057-1062"
  },
  {
    title: "Proximate and Antinutrient Profile of Selected Nigerian Soup Thickeners",
    authors: "Nwaichi, E. O., Abbey, B. W. and Mgbudom-Okah, C.J.",
    year: 2017,
    journal: "Academic Staff Union of Universities (ASUU) Journal of Science, 3(2), 29-46"
  },
  {
    title: "Sequestration of PAHs in a Phytoremediation Using Indian Mustard and Bambara Plants",
    authors: "Nwaichi, E. O. and Colin, S. E.",
    year: 2017,
    journal: "Journal of Biotechnology Research, 3(5), 31-41"
  },
  {
    title: "Nutraceutical Potential of Tetracarpidium conophorum and Buccholzia coriacea in Diet-Induced Hyperlipidemia",
    authors: "Nwaichi E. O., Osuoha, J. O. and Monanu, M.O.",
    year: 2017,
    journal: "Journal of Chemical Health Risks, 7(3), 157-170"
  },
  {
    title: "Influence of Indigenous Knowledge in Building Strong Science and Engineering Research Policy in Africa",
    authors: "Nwaichi, E. O. and Briggs, T.A.",
    year: 2016,
    journal: "Science Policy Africa, Newsletter of the African Academy of Sciences, 20(4), 10-11"
  },
  {
    title: "Plant Response on Exposure to Ag Nanoparticles: A Study with Vigna subterranea",
    authors: "Nwaichi, E. O. and Anosike, E. O.",
    year: 2016,
    journal: "Biochemistry & Analytical Biochemistry, 5(4), 299"
  },
  {
    title: "Effect of Solanum lycopersicum Fruit Extract on Cancerous Cells of Albino Wistar Rats",
    authors: "Nwaichi, E. O. and Omembu, E.",
    year: 2016,
    journal: "International Journal of Biotechnology and Allied Fields, 4(10), 354-375"
  },
  {
    title: "Polycylclic Aromatic Hydrocarbons and Selected Heavy Metals in Some Oil Polluted Sites in Delta State Nigeria",
    authors: "Nwaichi, E. O., Chuku, L. C. and Ighoavwogan, E.",
    year: 2016,
    journal: "Journal of Environmental Protection, 7, 1389-1410",
  },
  {
    title: "Biochemical indices in ecology: a catalyst in environmental study",
    authors: "Nwaichi, E. O. and Essien, E. B.",
    year: 2016,
    journal: "Biochemistry & Analytical Biochemistry, 5(1), 238",
  },
  {
    title: "Assessment of PAHs levels in some fish and seafood from different coastal waters in the Niger Delta",
    authors: "Nwaichi, E. O. and Ntorgbo, S. A.",
    year: 2016,
    journal: "Toxicology Reports, 3, 167-172",
    url: "https://www.sciencedirect.com/science/article/pii/S2214750016300051",
  },
  { title: "Heavy metals Contaminated Environments and the Road Map with Phytoremediation",
    authors: "Nwaichi, E. O. and Parkash, O.",
    year: 2016,
    journal: "Journal of Environmental Protection, 7, 41-51",
  },
  { title: "Communication: a mandatory tool for Research Builders and Consumers",
    authors: "Nwaichi, E. O. and Abbey, B. W.",
    year: 2015,
    journal: "West African Journal of Research and Innovation Management, 1(2), 192-200",
  },
  { title: "Evaluation of Effect of Cannabis Smoking on the Hematological Properties of Selected Adult Male Students Smokers",
    authors: "Nwaichi, E. O. and Omorodion, F. O.",
    year: 2015,
    journal: "International Journal of Anatomy & Applied Physiology, 1(1): 1-5",
  },
  { title: "Essentials of scientific communication in a productive research",
    authors: "Nwaichi, E. O. and Abbey, B. W.",
    year: 2015,
    journal: "Journal of Scientific Research and Reports, 7(7): 525-531",
  },
  { title: "Antioxidants and phytochemical profile of various extracts from Buccholzia Coriacea",
    authors: "Nwaichi, E. O. and Olua, V.",
    year: 2015,
    journal: "Indian Journal of Applied Research, 5(6): 415-420",
  },
  { title: "Enhanced phytoremediation of crude oil-polluted soil by four plant species: effect of inorganic and organic bioaugumentation",
    authors: "Nwaichi, E. O., Frac, M., Nwoha, P. A. and Eragbor, P.",
    year: 2015,
    journal: "International Journal of Phytoremediation, 17(12): 1253-1261",
    url: "https://pubmed.ncbi.nlm.nih.gov/26090948/",
  },
  { title: "Evaluation of soil microbial communities as influenced by crude oil pollution",
    authors: "Nwaichi, E. O. and Frac, M.",
    year: 2015,
    journal: "African Journal of Biotechnology, 14(19): 1632-1639",
  },
  { title: "Profile of Ascorbic Acid, Beta-Carotene and Lycopene in Guava, Tomatoes, Honey and Red Wine",
    authors: "Nwaichi, E. O., Chuku, L.C. and Oyibo, N.J.",
    year: 2015,
    journal: "International Journal of Current Microbiology and Applied Sciences, 4(2): 39-43",
  },
  { title: "Conditioners and significance in t-RFLP Profile of the assemblage of prokaryotic microorganisms in a Niger Deltaic Crude Oil polluted soil",
    authors: "Nwaichi, E. O., Frac, M., Peters, D. E. and Akpomiemie, B. O.",
    year: 2014,
    journal: "African Journal of Biotechnology, 13(44): 4220-4225",
  },
  { title: "Distribution of selected carcinogenic hydrocarbon and heavy metals in an oil-polluted agriculture zone",
    authors: "Nwaichi, E. O., Wegwu, M. O. and Nwosu, U.L.",
    year: 2014,
    journal: "Environmental Monitoring and Assessment, 186(12): 8697-8706",
    url: "http://www.springerlink.com/openurl.asp?genre=article&id=doi:10.1007/s10661-014-4037-6",
  },
  { title: "Soil Microbial Functional and Fungal Diversity as Influenced by Municipal Sewage Sludge Accumulation",
    authors: "Frąc, M., Oszust, K., Lipiec, J., Jezierska-Tys, S. and Nwaichi, E. O.",
    year: 2014,
    journal: "International Journal of Environmental Research and Public Health, 11: 8891-8908",
    doi: "10.3390/ijerph1100908891",
  },
  { title: "Evaluation of the effect of processing on the observed profile of ripe and unripe Plantain",
    authors: "Nwaichi, E. O., Peters, D.E. and Onome, E.",
    year: 2014,
    journal: "Scientia Agriculturae, 1(1): 15-18",
  },
  { title: "Impact assessment of tanker explosion in a Nigerian Niger Delta community, Okogbe",
    authors: "Nwaichi, E. O., Ochuko, A. and Akelemor, K.",
    year: 2013,
    journal: "International Journal of Pure & Applied Bioscience, 1(5): 1-5",
  },
  { title: "Distribution of some Heavy Metals in selected Seafood and Shell from Abonnema water in rivers in State Nigeria",
    authors: "Nwaichi, E. O., Belonwu, D. C. and Nkomadu, C. J.",
    year: 2013,
    journal: "International Journal of Pure & Applied Bioscience, 1(4): 63-66",
  },
  { title: "Characterization of Warri Refinery Effluent and its Recipient Medium",
    authors: "Nwaichi, E. O., Essien, E. B. and Ugbeyide, E.",
    year: 2013,
    journal: "International Journal of Pure & Applied Bioscience, 1(4): 22-27",
  },
  { title: "Remediation of Oil- Contaminated wetland by Hevea brasillensis",
    authors: "Nwaichi, E. O., Chuku, L. C. and Nwoha, P. A.",
    year: 2013,
    journal: "International Journal of Pure & Applied Bioscience, 1(4): 12-17",
  },
  { title: "Effects of Athrospira platensis, Monodora myristica and Helianthus annuus on the Rate of Polymerization, Sickle Cell Reversion and Oxygen affinity of Sickle Cell Hemoglobin",
    authors: "Nwaichi E. O., Monago, C.C. and Amaraegbulem, P. I.",
    year: 2013,
    journal: "Journal of Pharmaceutical and Scientific Innovation, 2(4): 5–8",
  },
  { title: "Effect of Heat Treatment on the Antioxidant Properties of Tetrapleura tetraptera, Xylopia aethiopica and Piper guineense",
    authors: "Nwaichi E. O.",
    year: 2013,
    journal: "Science Progress, 96(3): 252-261",
    url: "https://journals.sagepub.com/doi/10.3184/003685013X13769205039109",
  },
  { title: "Effects of Water Quality on the Growth and Yield of Tomato and Cucumber under Open Field Cultivation",
    authors: "Nwaichi E. O. and Essien E. B.",
    year: 2013,
    journal: "Journal of Agricultural Science and Technology, 3(2): 43–48",
  },
  
]
</script>

<style scoped>
a {
  word-break: break-all;
}
</style>
