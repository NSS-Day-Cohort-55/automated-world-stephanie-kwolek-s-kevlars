import {getCities} from "/scripts/ireland/cities/cityData.js"
import {formatData} from "/scripts/ireland/cities/formatCities.js"


export const cityRender = () =>{
    const contentElement = document.querySelector(".data-card-container");
    const cities = getCities();

    let renderCity = `<div class="data-cards">`

    for(const city of cities){
        renderCity += formatData(city)
    }
    renderCity += `</div>`

    contentElement.innerHTML += `${renderCity}`
}