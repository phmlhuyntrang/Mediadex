let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// function showSlides() {
//     var timer = setInterval(function() {
//         let slides = document.getElementsByClassName("slider")
//         newLeft = parseInt(slides.css('left')) - $('img').width();
        
//         if(count == $('img').length){
//             count = 0;
//             newLeft = 0;
//         }
        
//         $('#img_slider').animate({
//             left: newLeft
//         });
        
//         count++;
        
//     }, 1000);
    
// }
