import { formatSlideshow } from "./formatSlideshow.js";
import { getArr } from "./imageArr.js";

export const slideshowRender = () =>{
    const contentElement = document.querySelector(".slideshow-container");
    const arr = getArr();

    let renderArr = ""

    for(const image of arr){
        renderArr += formatSlideshow(image)
    }
   
    contentElement.innerHTML += `${renderArr}`
}

