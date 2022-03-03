import {getLandMarks} from "/scripts/ireland/landmarks/landmarkData.js"
import {formatLandmarks} from "/scripts/ireland/landmarks/formatLandmarks.js"

export const landmarkRender = () =>{
    const contentElement = document.querySelector(".data-card-container");
    const landMarks = getLandMarks();

    let renderLandmark = `<div class="data-cards">`

    for(const site of landMarks){
        renderLandmark += formatLandmarks(site)
    }
    renderLandmark += `</div>`
    contentElement.innerHTML += `${renderLandmark}`
}