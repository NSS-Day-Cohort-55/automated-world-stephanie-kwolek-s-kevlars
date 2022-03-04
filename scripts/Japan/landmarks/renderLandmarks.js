import { getLandMarks } from "/scripts/japan/landmarks/landmarkData.js";
import { formatLandmarks } from "/scripts/japan/landmarks/formatLandmarks.js";

export const landmarkRender = () => {
  const contentElement = document.querySelector(".data-card-container");
  const landMarks = getLandMarks();

  let renderLandmark = `<div class="data-cards"><h2>${landMarks.length} landmarks you can't miss</h2>`;

  for (const site of landMarks) {
    renderLandmark += formatLandmarks(site);
  }
  renderLandmark += `</div>`;
  contentElement.innerHTML += `${renderLandmark}`;
};
