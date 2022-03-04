const notableLandMarks = [
  {
    name: "Tokyo Tower",
    year: "1958",
    description:
      "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan, built in 1958. At 332.9 meters (1,092 ft), it is the second-tallest structure in Japan.",
    website: "https://www.tokyotower.co.jp/en/",
    image: "/images/japan-images/Tokyo-Tower.jpg",
  },
  {
    name: "Kinkaku-ji",
    year: "1937, 1955 (reconstruction)",
    description:
      " Kinkaku-Ji is a Zen Buddhist temple in Kyoto, Japan. It is one of the most popular buildings in Kyoto, attracting many visitors annually.",
    website: "https://www.shokoku-ji.jp/en/kinkakuji/",
    image: "/images/japan-images/kinkaku-ji.jpg",
  },
  {
    name: "Mount Fuji",
    year: "100,000+ years old (estimated)",
    description:
      "Mount Fuji located on the island of Honshū, is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft).",
    website: "https://www.city.himeji.lg.jp/castle/index.html",
    image: "/images/japan-images/mtfuji.jpg",
  },
];

export const getLandMarks = () => {
  return notableLandMarks;
};
