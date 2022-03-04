import { getCities } from "/scripts/france/cities/franceCities.js";
import {formatData} from "/scripts/france/cities/formatCities.js"


export const cityRender = () =>{
    const contentElement = document.querySelector(".data-card-container");
    const cities = getCities();

    let renderCity = `<div class="data-cards"><h2>Top ${cities.length} cities to visit</h2>`

    for(const city of cities){
        renderCity += formatData(city)
    }
    renderCity += `</div>`

    contentElement.innerHTML += `${renderCity}`
}