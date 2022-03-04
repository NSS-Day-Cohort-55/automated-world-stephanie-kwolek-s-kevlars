const notableLandMarks = [
    {
        name: "Guinness Storehouse"
        , year: "2000"
        , description: "You simply cannot separate Guinness and Ireland. Established in 2000, the Guinness Storehouse is one of Ireland's most visited attactions."
        , website: "www.guinness-storehouse.com/en"
        , image: "/images/ireland-images/guinness-storehouse.webp"
    }
    ,
    {
        name: "King John's Castle"
        , year: "1200"
        , description: "Situated in Limerick's medieval district, King John's Castle was built over 800 years ago over the remains of a Viking settlement."
        , website: "https://www.kingjohnscastle.com/"
        , image: "/images/ireland-images/king-johns-castle.jpg"
    }
    ,
    {
        name: "Blarney Stone"
        , year: "Old"
        , description: "Information to be inserted later. Maybe."
        , website: "https://blarneycastle.ie/pages/kiss-the-blarney-stone"
        , image: "/images/ireland-images/blarney-ireland.webp"
    }
]

export const getLandMarks = () =>{
    return notableLandMarks;
}