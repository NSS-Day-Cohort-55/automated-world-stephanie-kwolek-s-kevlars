import { cityRender } from "/scripts/Iceland/cities/RenderCities.js";
import { landmarkRender } from "/scripts/Iceland/landmarks/RenderLandmarks.js";
import { peopleRender } from "/scripts/Iceland/people/RenderPeople.js";
import { slideshowRender } from "/scripts/Iceland/slideshow/slideshowRender.js";

cityRender();
landmarkRender();
peopleRender();
slideshowRender();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
