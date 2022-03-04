const notableCities = [
  {
    name: "REYKJAVÍK",
    population: "122,853",
    description:
      "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. ",
    image: "../../../images/iceland-images/city-one.webp",
  },
  {
    name: "HAFNARFJÖRÐUR",
    population: "29,971",
    description:
      "Hafnarfjörður takes its name (meaning harbour fjord) from the area's excellent natural harbour. The town is first named in the medieval Landnámabók, and the earliest reports of voyages to Hafnarfjörður date from the end of the 14th century. Englishmen began trading in Hafnarfjörður in the 15th century, but German merchants followed in their wake and eventually drove the English out.",
    image: "../../../images/iceland-images/city-2.webp",
  },
  {
    name: "AKUREYRI",
    population: "18,191",
    description:
      "Nicknamed the Capital of North Iceland, Akureyri is an important port and fishing centre. The area where Akureyri is located was settled in the 9th century, but did not receive a municipal charter until 1786.[2] Allied units were based in the town during World War II.",
    image: "../../../images/iceland-images/city-3.jpg",
  },
];

export const getCities = () => {
  return notableCities;
};
