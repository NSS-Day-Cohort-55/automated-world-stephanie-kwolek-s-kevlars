import {getPeople} from "/scripts/ireland/people/peopleData.js"
import {formatPeople} from "/scripts/ireland/people/formatPeople.js"

export const peopleRender = () =>{
    const contentElement = document.querySelector(".data-card-container");
    const people = getPeople();

    let renderPeople = `<div class="data-cards">`

    for(const person of people){
        renderPeople += formatPeople(person)
    }
    renderPeople += `</div>`
    contentElement.innerHTML += `${renderPeople}`
}