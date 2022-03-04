const notableCities = [
  {
    name: "Tokyo",
    population: "14,000,000",
    description:
      "Tokyo is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu.",
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
      "Hiroshima  is the capital of Hiroshima Prefecture in Japan. As of June 1, 2019, the city had an estimated population of 1,199,391. The gross domestic product (GDP) in Greater Hiroshima, Hiroshima Urban Employment Area, was US$61.3 billion as of 2010. Kazumi Matsui has been the city's mayor since April 2011. Hiroshima was founded in 1598 as a castle town on the Ōta River delta.",
    image: "/images/japan-images/hiroshima.jpg",
  },
];

export const getCities = () => {
  return notableCities;
};
