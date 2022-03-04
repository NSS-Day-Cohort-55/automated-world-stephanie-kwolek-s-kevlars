import { getPeople } from "/scripts/japan/people/peopleData.js";
import { formatPeople } from "/scripts/japan/people/formatPeople.js";

export const peopleRender = () => {
  const contentElement = document.querySelector(".data-card-container");
  const people = getPeople();

  let renderPeople = `<div class="data-cards"><h2>${people.length} people you might have heard of</h2>`;

  for (const person of people) {
    renderPeople += formatPeople(person);
  }
  renderPeople += `</div>`;
  contentElement.innerHTML += `${renderPeople}`;
};
