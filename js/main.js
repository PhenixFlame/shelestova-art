let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

// slider 02

let slideIndextwo = 1;
showSlidestwo(slideIndextwo);

// Next/previous controls
function plusSlidestwo(n) {
  showSlidestwo(slideIndextwo += n);
}

// Thumbnail image controls
function currentSlidetwo(n) {
  showSlidestwo(slideIndextwo = n);
}

function showSlidestwo(n) {
  let x;
  let slidetwo = document.getElementsByClassName("mySlidesev");
  let dotstwo = document.getElementsByClassName("dottwo");
  if (n > slidetwo.length) {slideIndextwo = 1}
  if (n < 1) {slideIndextwo = slidetwo.length}
  for (x = 0; x < slidetwo.length; x++) {
    slidetwo[x].style.display = "none";
  }
  for (x = 0; x < dotstwo.length; x++) {
    dotstwo[x].className = dotstwo[x].className.replace(" active", "");
  }
  slidetwo[slideIndextwo-1].style.display = "block";
  dotstwo[slideIndextwo-1].className += " active";
}



// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewhell: true,
//   keyboard: true,

// })

