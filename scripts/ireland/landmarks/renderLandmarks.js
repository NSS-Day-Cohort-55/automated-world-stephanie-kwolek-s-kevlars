import {getLandMarks} from "/scripts/ireland/landmarks/landmarkData.js"
import {formatLandmarks} from "/scripts/ireland/landmarks/formatLandmarks.js"

export const landMarkList = () =>{
    const contentElement = document.querySelector(".landmark-cards");
    const landMarks = getLandMarks();

    let renderLandMark = ""

    for(const site of landMarks){
        renderLandMark += formatLandmarks(site)
    }

    contentElement.innerHTML += `${renderLandMark}`
}