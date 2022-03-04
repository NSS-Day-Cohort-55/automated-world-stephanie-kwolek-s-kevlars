const notableCities = [
  {
    name: "Tokyo",
    population: "14,000,000",
    description:
      "Tokyo is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an estimated population of 14.04 million.",
    image: "/images/japan-images/tokyo.jpg",
  },
  {
    name: "Kyoto",
    population: "1,450,000",
    description:
      "Kyoto, officially Kyoto City, is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area along with Osaka and Kobe. ",
    image: "/images/japan-images/kyoto.jpg",
  },
  {
    name: "Hiroshima",
    population: "1,200,000",
    description:
      "Hiroshima  is the capital of Hiroshima Prefecture in Japan. As of June 1, 2019, the city had an estimated population of 1,199,391. The gross domestic product (GDP) in Greater Hiroshima, Hiroshima Urban Employment Area, was US$61.3 billion as of 2010. Kazumi Matsui has been the city's mayor since April 2011. Hiroshima was founded in 1598 as a castle town on the Ōta River delta. Following the Meiji Restoration in 1868, Hiroshima rapidly transformed into a major urban center and industrial hub. In 1889, Hiroshima officially gained city status. The city was a center of military activities during the imperial era, playing significant roles such as in the First Sino-Japanese War, the Russo-Japanese War, and the two world wars.Hiroshima was the first city targeted by a nuclear weapon. This occurred on August 6, 1945, at 8:15 a.m., when the United States Army Air Forces (USAAF) dropped the atomic bomb (Little Boy) on the city. Most of the city was destroyed, and by the end of the year between 90,000 and 166,000 had died as a result of the blast and its effects. The Hiroshima Peace Memorial (a UNESCO World Heritage Site) serves as a memorial of the bombing. ",
    image: "/images/japan-images/hiroshima.jpg",
  },
];

export const getCities = () => {
  return notableCities;
};
