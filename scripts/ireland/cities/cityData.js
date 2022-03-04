const notableCities = [
    {
        name: "Dublin"
        , population: "550,000"
        , description: "Dublin is the capitol of Ireland and also it's largest city. Situated at the mouth of the River Liffey, the city of Dublin is rich with history."
        , image: "/images/ireland-images/dublin.jpg"
    }
    ,
    {
        name: "Limerick"
        , population: "94,000"
        , description: "Limerick is a beautiful city situated directly on the River Shannon. Idyllic and full of history, Limerick has a thriving cultural scene."
        , image : "/images/ireland-images/limerick.jpg"
    }
    ,
    {
        name: "Cork"
        , population: "210,000"
        , description: "Cork is the second largest city in Ireland. blah blah blah to be added later."
        , image : "/images/ireland-images/cork.jpg"
    }

]

export const getCities = () =>{
    return notableCities;
}