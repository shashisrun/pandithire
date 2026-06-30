export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration: string;
  startingPrice: string;
  category: string;
  samagriIncluded: boolean;
  relatedServices: string[];
}

export const services: Service[] = [
  {
    title: "Griha Pravesh Puja",
    slug: "griha-pravesh-puja",
    shortDescription: "Book experienced pandits for Griha Pravesh Puja at your new home.",
    description:
      "Griha Pravesh Puja is performed before entering a new home to seek divine blessings, peace, prosperity, and positive energy. This sacred ritual purifies the home and invokes the blessings of Lord Ganesha and Vastu Purush.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["vastu-shanti-puja", "ganesh-puja", "havan-puja"],
  },
  {
    title: "Satyanarayan Puja",
    slug: "satyanarayan-puja",
    shortDescription: "Pandit booking for Satyanarayan Puja at home.",
    description:
      "Satyanarayan Puja is performed to seek blessings of Lord Vishnu for peace, prosperity, and happiness. It is commonly performed on special occasions such as housewarming, marriage anniversaries, and after fulfilling a vow.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["havan-puja", "ganesh-puja", "lakshmi-puja"],
  },
  {
    title: "Wedding Pandit",
    slug: "wedding-pandit",
    shortDescription: "Experienced pandits for all wedding rituals and ceremonies.",
    description:
      "Book knowledgeable pandits for Hindu wedding ceremonies including Varmala, Kanyadaan, Pheras, Sindoor Daan, and all other wedding rituals. Our pandits ensure all ceremonies are performed as per Vedic traditions.",
    duration: "Full day as per rituals",
    startingPrice: "Price on call",
    category: "Wedding",
    samagriIncluded: false,
    relatedServices: ["engagement-puja", "havan-puja", "ganesh-puja"],
  },
  {
    title: "Engagement Puja",
    slug: "engagement-puja",
    shortDescription: "Pandit for engagement and ring ceremony rituals.",
    description:
      "Engagement Puja is performed to seek blessings for the upcoming marriage. The ceremony includes Ganapathi Puja, Punyaha Vachanam, and exchange of rings in a traditional manner.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Wedding",
    samagriIncluded: false,
    relatedServices: ["wedding-pandit", "ganesh-puja", "havan-puja"],
  },
  {
    title: "Rudrabhishek Puja",
    slug: "rudrabhishek-puja",
    shortDescription: "Book pandit for Rudrabhishek Puja at home.",
    description:
      "Rudrabhishek Puja is a powerful Vedic ritual dedicated to Lord Shiva. It is performed for removing negative energies, health issues, and bringing peace and prosperity. The ritual involves chanting of Rudram and offering sacred items to Shivling.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["maha-mrityunjaya-jaap", "havan-puja", "navgraha-shanti-puja"],
  },
  {
    title: "Maha Mrityunjaya Jaap",
    slug: "maha-mrityunjaya-jaap",
    shortDescription: "Powerful Maha Mrityunjaya Jaap for health and protection.",
    description:
      "Maha Mrityunjaya Jaap is a sacred chanting dedicated to Lord Shiva for long life, good health, and protection from untimely death. It is highly beneficial for those facing health issues or seeking divine protection.",
    duration: "2 to 4 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["rudrabhishek-puja", "havan-puja", "navgraha-shanti-puja"],
  },
  {
    title: "Naamkaran Puja",
    slug: "naamkaran-puja",
    shortDescription: "Pandit for Naamkaran naming ceremony at home.",
    description:
      "Naamkaran Puja is the naming ceremony performed for a newborn baby. It is one of the important samskaras in Hindu tradition where the baby receives their official name with Vedic rituals and blessings.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Samskara",
    samagriIncluded: false,
    relatedServices: ["ganesh-puja", "havan-puja", "annaprashan-puja"],
  },
  {
    title: "Mundan Puja",
    slug: "mundan-puja",
    shortDescription: "Mundan ceremony pandit booking for babies and children.",
    description:
      "Mundan Puja is the first hair removal ceremony for children. It is one of the important Hindu samskaras performed to cleanse the child of past life, promote healthy hair growth, and invoke blessings for a bright future.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Samskara",
    samagriIncluded: false,
    relatedServices: ["naamkaran-puja", "ganesh-puja", "havan-puja"],
  },
  {
    title: "Annaprashan Puja",
    slug: "annaprashan-puja",
    shortDescription: "Pandit booking for Annaprashan first rice ceremony.",
    description:
      "Annaprashan Puja is the first rice-feeding ceremony for a baby. This samskara marks the beginning of solid food intake and is performed with Vedic rituals to bless the child with good health and nourishment.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Samskara",
    samagriIncluded: false,
    relatedServices: ["naamkaran-puja", "mundan-puja", "ganesh-puja"],
  },
  {
    title: "Havan Puja",
    slug: "havan-puja",
    shortDescription: "Book pandit for Havan and Yagna at home.",
    description:
      "Havan Puja is a sacred fire ritual performed to invoke divine blessings, purify the environment, and bring peace and prosperity. It can be performed for various occasions including housewarming, birthdays, and religious ceremonies.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["satyanarayan-puja", "ganesh-puja", "griha-pravesh-puja"],
  },
  {
    title: "Ganesh Puja",
    slug: "ganesh-puja",
    shortDescription: "Pandit for Ganesh Puja before any auspicious event.",
    description:
      "Ganesh Puja is performed at the beginning of any auspicious ceremony to remove obstacles and seek blessings of Lord Ganesha. It is the first puja performed before weddings, housewarming, or any new venture.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["havan-puja", "satyanarayan-puja", "griha-pravesh-puja"],
  },
  {
    title: "Lakshmi Puja",
    slug: "lakshmi-puja",
    shortDescription: "Lakshmi Puja for wealth, prosperity, and financial well-being.",
    description:
      "Lakshmi Puja is dedicated to Goddess Lakshmi for wealth, prosperity, and abundance. It is commonly performed during Diwali, on Fridays, and during special occasions to seek financial well-being and material prosperity.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["satyanarayan-puja", "ganesh-puja", "havan-puja"],
  },
  {
    title: "Saraswati Puja",
    slug: "saraswati-puja",
    shortDescription: "Saraswati Puja for education, knowledge, and wisdom.",
    description:
      "Saraswati Puja is dedicated to Goddess Saraswati, the deity of knowledge, education, music, and arts. It is performed to seek blessings for academic success, learning, and creative pursuits.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["ganesh-puja", "havan-puja", "lakshmi-puja"],
  },
  {
    title: "Durga Puja",
    slug: "durga-puja",
    shortDescription: "Pandit for Durga Puja and Durga Saptashati Path.",
    description:
      "Durga Puja is dedicated to Goddess Durga for strength, protection from negative forces, and victory over obstacles. It is performed during Navratri and on special occasions to invoke the blessings of the divine mother.",
    duration: "2 to 4 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["lakshmi-puja", "saraswati-puja", "ganesh-puja"],
  },
  {
    title: "Navgraha Shanti Puja",
    slug: "navgraha-shanti-puja",
    shortDescription: "Navgraha Shanti Puja for planetary peace and harmony.",
    description:
      "Navgraha Shanti Puja is performed to pacify the nine planets and reduce the negative effects of planetary positions. It is recommended for those facing challenges in career, health, or personal life according to their horoscope.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["havan-puja", "rudrabhishek-puja", "maha-mrityunjaya-jaap"],
  },
  {
    title: "Bhoomi Pujan",
    slug: "bhoomi-pujan",
    shortDescription: "Bhoomi Pujan before starting building construction.",
    description:
      "Bhoomi Pujan is performed before starting the construction of a building or house. It seeks blessings of Mother Earth and Vastu Purush for a safe and successful construction project. It is an important pre-construction ritual.",
    duration: "1 to 2 hours",
    startingPrice: "Price on call",
    category: "Home Puja",
    samagriIncluded: false,
    relatedServices: ["griha-pravesh-puja", "vastu-shanti-puja", "ganesh-puja"],
  },
  {
    title: "Vastu Shanti Puja",
    slug: "vastu-shanti-puja",
    shortDescription: "Vastu Shanti Puja for removing Vastu dosh from home or office.",
    description:
      "Vastu Shanti Puja is performed to remove Vastu dosh and bring harmony to the home or office. It helps balance the five elements, brings positive energy, and removes obstacles related to property and living spaces.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["griha-pravesh-puja", "bhoomi-pujan", "navgraha-shanti-puja"],
  },
  {
    title: "Pitru Dosh Puja",
    slug: "pitru-dosh-puja",
    shortDescription: "Pitru Dosh Nivaran Puja for ancestral blessings.",
    description:
      "Pitru Dosh Puja is performed to seek blessings from ancestors and reduce the effects of Pitru Dosh in the horoscope. It helps remove obstacles in family life, career, and brings peace to departed souls.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["kaal-sarp-dosh-puja", "navgraha-shanti-puja", "havan-puja"],
  },
  {
    title: "Kaal Sarp Dosh Puja",
    slug: "kaal-sarp-dosh-puja",
    shortDescription: "Kaal Sarp Dosh Nivaran Puja for removing obstacles.",
    description:
      "Kaal Sarp Dosh Puja is performed to reduce the effects of Kaal Sarp Dosh in the horoscope. This dosh forms when all planets are placed between Rahu and Ketu and can cause delays, struggles, and obstacles in life.",
    duration: "2 to 3 hours",
    startingPrice: "Price on call",
    category: "Special Puja",
    samagriIncluded: false,
    relatedServices: ["pitru-dosh-puja", "navgraha-shanti-puja", "rudrabhishek-puja"],
  },
  {
    title: "Janam Kundali",
    slug: "janam-kundali",
    shortDescription: "Janam Kundali creation and detailed analysis.",
    description:
      "Get your Janam Kundali created by experienced pandits and astrologers. Includes detailed analysis of planetary positions, houses, dashas, and predictions. Understanding your birth chart helps in making better life decisions.",
    duration: "By appointment",
    startingPrice: "Price on call",
    category: "Astrology",
    samagriIncluded: false,
    relatedServices: ["marriage-matching", "navgraha-shanti-puja"],
  },
  {
    title: "Marriage Matching",
    slug: "marriage-matching",
    shortDescription: "Kundali matching for marriage compatibility analysis.",
    description:
      "Kundali matching is the Vedic astrology system of matching horoscopes of prospective bride and groom. Our experienced pandits analyze gun milan, mangal dosh, and overall compatibility using Ashtakoot and Dashakoot methods.",
    duration: "By appointment",
    startingPrice: "Price on call",
    category: "Astrology",
    samagriIncluded: false,
    relatedServices: ["janam-kundali", "wedding-pandit"],
  },
  {
    title: "Festival Puja",
    slug: "festival-puja",
    shortDescription: "Pandit booking for festival pujas and celebrations.",
    description:
      "Book pandits for all major Hindu festival pujas including Diwali Lakshmi Puja, Holika Dahan, Makar Sankranti, Raksha Bandhan, Krishna Janmashtami, Ram Navami, Shivratri, and other religious festivals at home or community events.",
    duration: "Depends on festival",
    startingPrice: "Price on call",
    category: "Festival",
    samagriIncluded: false,
    relatedServices: ["lakshmi-puja", "ganesh-puja", "satyanarayan-puja"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getRelatedServices = (slugs: string[]): Service[] => {
  return services.filter((s) => slugs.includes(s.slug));
};

export const popularServices = services.slice(0, 8);
