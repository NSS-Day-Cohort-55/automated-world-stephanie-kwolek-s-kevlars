import {getCities} from "/scripts/ireland/cities/cityData.js"
import {formatData} from "/scripts/ireland/formatCities.js"


export const cityList = () =>{
    const contentElement = document.querySelector(".city-cards");
    const cities = getCities();

    let renderCity = ""

    for(const city of cities){
        renderCity += formatData(city)
    }

    contentElement.innerHTML += `${renderCity}`
}