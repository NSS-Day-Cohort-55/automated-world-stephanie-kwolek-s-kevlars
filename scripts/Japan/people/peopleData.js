const notableCitizens = [
  {
    name: "Hayao Miyazaki",
    occupation: "Animation Director",
    description:
      "Hayao Miyazaki , A co-founder of Studio Ghibli, has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.",
    website: "https://www.studioghibli.com.au/",
    image: "/images/japan-images/hayao-miyazaki.jpg",
  },
  {
    name: "Hajime Isayama",
    occupation: "Manga Author/Artist",
    description:
      " Hajime Isayama ,born August 29, 1986, is a Japanese manga artist. His first series, Attack on Titan (2009-2021), became one of the best-selling manga series of all time with 100 million copies in circulation as of December 2019.",
    website: "https://twitter.com/hajime_isayama?lang=en",
    image: "/images/japan-images/hajime-isayama.jpg",
  },
  {
    name: "Akira Toriyama",
    occupation: "Manga Author/Artist",
    description:
      "Akira Toriyama first achieved mainstream recognition for his highly successful manga series Dr. Slump, before going on to create Dragon Ball (his best-known work) and acting as a character designer for several popular video games such as the Dragon Quest series and Chrono Trigger.",
    website: "N/A",
    image: "/images/japan-images/akira-toriyama.jpg",
  },
];

export const getPeople = () => {
  return notableCitizens;
};
