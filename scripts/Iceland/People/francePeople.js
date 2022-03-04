const notableCitizens = [
    {
        name: "Marie Curie"
        , occupation: "Scientist"
        , description: "Originally from Poland, Marie Curie was the first woman to be awarded the Nobel Prize and the first to win the award more than once. Curie dedicated her life to researching radioactive materials and is credited with the discovery of radium and polonium, as well as coining the term 'radioactive'."
        , website: "https://www.superprof.com/blog/french-historical-figures/#Chapter_7-marie-curie-1867-1934"
        , image: "/images/france-images/marie.jpeg"
    }
    ,
    {
        name: "Napoleon Bonaparte"
        , occupation: "Military/Political Leader"
        , description: "Eventually rising to the position of Emperor of France, Napoleon Bonaparte started out as a member of the French military during the Revolution."
        , website: "https://www.superprof.com/blog/french-historical-figures/#Chapter_5-napoleon-bonaparte-1769-1821"
        , image: "/images/france-images/napoleon.jpg"
    }
    ,
    {
        name: "Claude Monet"
        , occupation: "Artist"
        , description: "Claude Monet was a French artist and the founder of French impressionist painting. He spent many years documenting the French countryside and developed his own way of painting that led to him becoming one of the most famous French artists."
        , website: "https://www.superprof.com/blog/french-historical-figures/#Chapter_11-claude-monet-1840-1926"
        , image: "/images/france-images/monet.jpg"
    }
]

export const getPeople = () =>{
    return notableCitizens;
}