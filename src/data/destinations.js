// src/data/destinations.js
// Static dataset for Thailand tourist destinations (provided by ChatGPT).
// Use this file directly in your app when you don't want to call external APIs.

const destinations = [
  {
    id: "grand-palace",
    name: "วัดพระศรีรัตนศาสดาราม (พระบรมมหาราชวัง)",
    name_en: "The Grand Palace & Wat Phra Kaew",
    short_description: "Historic royal palace complex and Thailand’s most sacred Buddhist temple (Temple of the Emerald Buddha).",
    long_description: "The Grand Palace in Bangkok is a sprawling complex of buildings which served as the official residence of the Kings of Siam (and later Thailand) since 1782. Within the palace precinct is Wat Phra Kaew (Temple of the Emerald Buddha), home to a highly revered Buddha image carved from a single jade (or jadeite) stone. The complex combines traditional Thai architecture, intricate murals, gilded spires and ceremonial halls.",
    coordinates: { lat: 13.7500, lon: 100.4913 },
    address: "Na Phra Lan Rd, Phra Nakhon, Bangkok 10200, Thailand",
    website: "https://en.wikipedia.org/wiki/Grand_Palace",
    image: "https://source.unsplash.com/featured/?grand-palace,bangkok,temple",
    categories: ["historic", "temple", "cultural"],
    opening_hours: "08:30–15:30 (check locally; dress code required)",
    entry_fee: "Paid (varies; includes admission to museum areas)",
    tips: "Dress respectfully (no shorts/sleeveless). Arrive early to avoid crowds and heat."
  },

  {
    id: "wat-pho",
    name: "วัดโพธิ์ (วัดพระเชตุพนวิมลมังคลาราม)",
    name_en: "Wat Pho (Temple of the Reclining Buddha)",
    short_description: "Home to the giant reclining Buddha and a center for traditional Thai massage.",
    long_description: "Wat Pho is one of Bangkok’s oldest temples famous for its enormous reclining Buddha statue covered in gold leaf. The temple compound also houses a renowned school of traditional Thai massage and displays exquisite murals, chedis (stupas) and inscriptions.",
    coordinates: { lat: 13.7467, lon: 100.4930 },
    address: "2 Sanamchai Road, Grand Palace Subdistrict, Bangkok 10200, Thailand",
    website: "https://en.wikipedia.org/wiki/Wat_Pho",
    image: "https://source.unsplash.com/featured/?wat-pho,reclining-buddha",
    categories: ["temple", "cultural"],
    opening_hours: "08:00–18:30",
    entry_fee: "Paid (small entrance fee)",
    tips: "Combine visit with Grand Palace (nearby). Respect the sacred areas; photography inside has rules."
  },

  {
    id: "wat-arun",
    name: "วัดอรุณราชวรารามราชวรมหาวิหาร",
    name_en: "Wat Arun (Temple of Dawn)",
    short_description: "Iconic riverside temple with a tall prang (spire) decorated with porcelain.",
    long_description: "Wat Arun sits on the Thonburi bank of the Chao Phraya River and is best known for its central prang decorated with colorful Chinese porcelain. Climbing the steep steps gives fantastic views across the river and to Bangkok’s skyline at sunrise or sunset.",
    coordinates: { lat: 13.7437, lon: 100.4889 },
    address: "158 Wang Doem Rd, Wat Arun, Bangkok Yai, Bangkok 10600, Thailand",
    website: "https://en.wikipedia.org/wiki/Wat_Arun",
    image: "https://source.unsplash.com/featured/?wat-arun,thailand,temple",
    categories: ["temple", "scenic"],
    opening_hours: "08:00–18:30",
    entry_fee: "Paid (small fee)",
    tips: "Best seen at sunrise/sunset. Take a river ferry from Tha Tien pier for photos."
  },

  {
    id: "chatuchak",
    name: "ตลาดนัดจตุจักร",
    name_en: "Chatuchak Weekend Market",
    short_description: "One of the world’s largest weekend markets — shop everything from clothes to antiques.",
    long_description: "Chatuchak is a sprawling market in Bangkok with thousands of stalls organized by sections. Shoppers can find handicrafts, vintage items, souvenirs, plants, food and more. It’s lively, crowded and a great place to sample street food.",
    coordinates: { lat: 13.8006, lon: 100.5536 },
    address: "Kamphaeng Phet 2 Road, Chatuchak, Bangkok, Thailand",
    website: "https://en.wikipedia.org/wiki/Chatuchak_Weekend_Market",
    image: "https://source.unsplash.com/featured/?chatuchak,market,bangkok",
    categories: ["market", "shopping", "food"],
    opening_hours: "Sat–Sun (mainly) — mornings to late afternoon",
    entry_fee: "Free",
    tips: "Wear comfortable shoes, carry cash, and haggle politely. Visit early to avoid midday heat."
  },

  {
    id: "ayutthaya",
    name: "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
    name_en: "Ayutthaya Historical Park",
    short_description: "UNESCO World Heritage site with impressive ruins of the ancient Siamese capital.",
    long_description: "Ayutthaya, north of Bangkok, was the second capital of the Siamese Kingdom and contains the ruins of grand temples, palaces and statues. The park’s temples such as Wat Mahathat and Wat Phra Si Sanphet reveal the grandeur of the old kingdom.",
    coordinates: { lat: 14.3556, lon: 100.5644 },
    address: "Ayutthaya District, Phra Nakhon Si Ayutthaya, Thailand",
    website: "https://en.wikipedia.org/wiki/Ayutthaya_Historical_Park",
    image: "https://source.unsplash.com/featured/?ayutthaya,ruins,temple",
    categories: ["historic", "ruins", "UNESCO"],
    opening_hours: "Daily, daylight hours",
    entry_fee: "Some temples charge a small fee",
    tips: "Rent a bicycle or hire a tuk-tuk to explore the island ruins. Bring sun protection."
  },

  {
    id: "phi-phi",
    name: "เกาะพีพี",
    name_en: "Phi Phi Islands",
    short_description: "Famous tropical islands with clear water, snorkeling and dramatic limestone cliffs.",
    long_description: "The Phi Phi archipelago in the Andaman Sea is known for its turquoise bays, white sand beaches and vibrant underwater life. Maya Bay (on Phi Phi Leh) became globally popular after a film, and the islands are popular for day trips, snorkeling and diving.",
    coordinates: { lat: 7.7407, lon: 98.7786 },
    address: "Phi Phi Islands, Krabi Province, Thailand",
    website: "https://en.wikipedia.org/wiki/Phi_Phi_Islands",
    image: "https://source.unsplash.com/featured/?phi-phi,island,beach",
    categories: ["island", "beach", "snorkeling"],
    opening_hours: "Accessible by ferry/boat year-round (weather permitting)",
    entry_fee: "Boat/ferry fare applies",
    tips: "Avoid peak season crowds; check boat schedules and marine park rules for Maya Bay (subject to closures)."
  },

  {
    id: "doi-suthep",
    name: "วัดพระธาตุดอยสุเทพ",
    name_en: "Wat Phra That Doi Suthep",
    short_description: "Iconic temple atop Doi Suthep hill overlooking Chiang Mai.",
    long_description: "Doi Suthep is a sacred mountain shrine with a golden chedi that houses relics. The temple complex offers panoramic views of Chiang Mai, elaborate carvings, steep naga stairs and a peaceful atmosphere ideal for sunrise visits.",
    coordinates: { lat: 18.8060, lon: 98.9215 },
    address: "Mueang, Chiang Mai, Chiang Mai Province 50200, Thailand",
    website: "https://en.wikipedia.org/wiki/Wat_Phra_That_Doi_Suthep",
    image: "https://source.unsplash.com/featured/?doi-suthep,chiang-mai,temple",
    categories: ["temple", "scenic", "mountain"],
    opening_hours: "Daily 06:00–18:00 (approx.)",
    entry_fee: "Small donation/entrance fee for foreigners at temple complex",
    tips: "Bring modest clothing; mornings are cooler and less crowded."
  },

  {
    id: "sukhothai",
    name: "อุทยานประวัติศาสตร์สุโขทัย",
    name_en: "Sukhothai Historical Park",
    short_description: "Ancient capital park with restored temples and large Buddha statues.",
    long_description: "Sukhothai was the first capital of Siam and its historical park contains impressive ruins, lotus ponds and Buddha images reflecting early Thai art and architecture. The site is tranquil and great for cycling around the park.",
    coordinates: { lat: 17.0146, lon: 99.8237 },
    address: "Sukhothai, Sukhothai Province, Thailand",
    website: "https://en.wikipedia.org/wiki/Sukhothai_Historical_Park",
    image: "https://source.unsplash.com/featured/?sukhothai,temple,history",
    categories: ["historic", "ruins", "UNESCO"],
    opening_hours: "Daily during daylight hours",
    entry_fee: "Some zones charge admission",
    tips: "Rent a bicycle to cover more sites; bring water and sunscreen."
  },

  {
    id: "damnoen-saduak",
    name: "ตลาดน้ำดำเนินสะดวก",
    name_en: "Damnoen Saduak Floating Market",
    short_description: "Traditional floating market with vendors selling from boats — popular for photos and local snacks.",
    long_description: "Located southwest of Bangkok, Damnoen Saduak is a lively floating market where boat sellers offer fruits, food and souvenirs. It’s colorful and touristy — early morning visits are best for authentic scenes and cooler temperatures.",
    coordinates: { lat: 13.5123, lon: 99.9590 },
    address: "Damnoen Saduak, Ratchaburi Province, Thailand",
    website: "https://en.wikipedia.org/wiki/Damnoen_Saduak_Floating_Market",
    image: "https://source.unsplash.com/featured/?floating-market,damnoen-saduak",
    categories: ["market", "cultural", "photo"],
    opening_hours: "Early morning (peak 06:00–09:00)",
    entry_fee: "Free to enter; boat ride fees apply",
    tips: "Go early, hire a long-tail boat for better photos, and be ready to bargain for souvenirs."
  },

  {
    id: "erawan",
    name: "อุทยานแห่งชาติเขาแหลม/เอราวัณ",
    name_en: "Erawan National Park (Seven-tiered Waterfalls)",
    short_description: "Famous national park with multi-tier waterfalls and emerald pools ideal for swimming.",
    long_description: "Erawan National Park in Kanchanaburi is known for its spectacular seven-tier Erawan Falls with clear emerald pools at each level. Visitors can hike between tiers, swim in permitted pools and enjoy jungle scenery and wildlife.",
    coordinates: { lat: 14.2206, lon: 99.1239 },
    address: "Erawan National Park, Kanchanaburi, Thailand",
    website: "https://en.wikipedia.org/wiki/Erawan_National_Park_(Thailand)",
    image: "https://source.unsplash.com/featured/?erawan,waterfall,thailand",
    categories: ["nature", "waterfall", "hiking"],
    opening_hours: "Daily; opening hours vary by season",
    entry_fee: "Park entrance fee (small)",
    tips: "Wear non-slip shoes for waterfall trails; avoid wet seasons when trails can be slippery."
  },

  {
    id: "similan",
    name: "หมู่เกาะสิมิลัน",
    name_en: "Similan Islands",
    short_description: "World-class diving and snorkeling destination with crystal-clear water and vibrant reefs.",
    long_description: "The Similan Islands in the Andaman Sea are renowned for underwater visibility, dramatic rock formations, and diverse marine life. Diving operators run day trips and liveaboard safaris from Khao Lak and Phuket during the diving season.",
    coordinates: { lat: 8.5715, lon: 97.6528 },
    address: "Similan Islands, Phang Nga Province, Thailand",
    website: "https://en.wikipedia.org/wiki/Similan_Islands",
    image: "https://source.unsplash.com/featured/?similan,islands,diving",
    categories: ["island", "diving", "marine"],
    opening_hours: "Seasonal (normally open Nov–Apr; check local restrictions)",
    entry_fee: "Park fee for marine park areas",
    tips: "Book diving trips in advance; observe marine park rules to protect coral."
  }
]

export default destinations
