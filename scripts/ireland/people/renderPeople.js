import {getPeople} from "/scripts/ireland/people/peopleData.js"
import {formatPeople} from "/scripts/ireland/people/formatPeople.js"

export const peopleList = () =>{
    const contentElement = document.querySelector(".people-cards");
    const people = getPeople();

    let renderPeople = ""

    for(const person of people){
        renderPeople += formatPeople(person)
    }

    contentElement.innerHTML += `${renderPeople}`
}