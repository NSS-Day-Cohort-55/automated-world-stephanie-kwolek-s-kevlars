import { getCities } from "/scripts/japan/cities/cityData.js";
import { formatData } from "/scripts/japan/cities/formatCities.js";

export const cityRender = () => {
  const contentElement = document.querySelector(".data-card-container");
  const cities = getCities();

  let renderCity = `<div class="data-cards">`;

  for (const city of cities) {
    renderCity += formatData(city);
  }
  renderCity += `</div>`;

  contentElement.innerHTML += `${renderCity}`;
};
