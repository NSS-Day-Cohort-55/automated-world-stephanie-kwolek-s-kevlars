import {getCities} from "/scripts/ireland/cities/cityData.js"
import {formatData} from "/scripts/ireland/cities/irelandFormatCities.js"


export const cityList = () =>{
    const contentElement = document.querySelector(".city-cards");
    const cities = getCities();

    let renderCity = ""

    for(const city of cities){
        renderCity += formatData(city)
    }

    contentElement.innerHTML += `${renderCity}`
}



// export const peopleList = () =>{
//     const contentElement = document.querySelector("");
//     const people = getPeople();

//     let renderPeople = ""

//     for(const person of people){
//         renderPeople += ""
//     }

//     contentElement.innerHTML += `${renderPeople}`
// }