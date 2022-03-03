export const formatSlideshow = (imgString) => {
    return `
    <div class="slideshow">
        <div class="numberText">1 / 3</div>
        <img src=${imgString}>
        <div class="slide-text">Text</div>
    </div>`
}

const blahBlah = (arr) =>{
    let aString = "";
    for(let i = 0; i<arr.length; i++){
        aString += arr[i];
    }
    return aString;
}
