const notableCities = [
    {
        name: "Dublin"
        , population: "550,000"
        , description: "Dublin is the capitol of Ireland and also it's largest city. Situated at the mouth of the River Liffey, the city of Dublin is rich with history."
    }
    ,
    {
        name: "Limerick"
        , population: "94,000"
        , description: "Limerick is a beautiful city situated directly on the River Shannon. Idyllic and full of history, Limerick has a thriving cultural scene."
    }
    ,
    {
        name: "Cork"
        , population: "210,000"
        , description: "Cork is the second largest city in Ireland. blah blah blah to be added later."
    }
]
const notableLandMarks = [
    {
        name: "Guinness Storehouse"
        , year: "2000"
        , description: "You simply cannot separate Guinness and Ireland. Established in 2000, the Guinness Storehouse is one of Ireland's most visited attactions."
        , website: "www.guinness-storehouse.com/en"
    }
    ,
    {
        name: "King John's Castle"
        , year: "1200"
        , description: "Situated in Limerick's medieval district, King John's Castle was built over 800 years ago over the remains of a Viking settlement."
        , website: "https://www.kingjohnscastle.com/"
    }
    ,
    {
        name: "Blarney Stone"
        , year: "Old"
        , description: "Information to be inserted later. Maybe."
        , website: "https://blarneycastle.ie/pages/kiss-the-blarney-stone"
    }
]
const notableCitizens = [
    {
        name: ""
        , occupation: ""
        , description: ""
        , website: ""
    }
    ,
    {
        name: ""
        , occupation: ""
        , description: ""
        , website: ""
    }
    ,
    {
        name: ""
        , occupation: ""
        , description: ""
        , website: ""
    }
]

export const getCities = () =>{
    return notableCities;
}

export const getLandMarks = () =>{
    return notableLandMarks;
}

export const getPeople = () =>{
    return notableCitizens;
}