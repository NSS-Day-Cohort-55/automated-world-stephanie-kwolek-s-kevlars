const notableCitizens = [
  {
    name: "Liam Neeson",
    occupation: "Actor",
    description:
      "If you are looking for ransom, he can tell you that he doesn’t have money. What he does have are a very particular set of skills, skills that he has acquired over a very long career, skills that make him a nightmare for people like you. ",
    website: "https://www.imdb.com/name/nm0000553/",
    image: "/images/ireland-images/liam_neeson.jpg",
  },
  {
    name: "Colin Farrell",
    occupation: "Actor",
    description:
      "Starring in movies such as “In Bruges” and “Total Recall”, Colin Farrell was born in Castleknock, a suburb of Dublin.",
    website: "https://www.imdb.com/name/nm0268199/",
    image: "/images/ireland-images/colin_farrell.jpg",
  },
  {
    name: "Cillian Murphy",
    occupation: "Actor",
    description:
      "Born in Cork, you might’ve seen Cillian Murphy in a variety of different movies and shows such as “Peaky Blinders” and “The Dark Knight”.",
    website: "https://www.imdb.com/name/nm0614165/",
    image: "/images/ireland-images/cillian_murphy.jpg",
  },
];

export const getPeople = () => {
  return notableCitizens;
};
