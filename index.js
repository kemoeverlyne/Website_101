 //Hacked counter
 var follower = document.getElementById('counter');
 var i = 1999893;
 var count = setInterval(function() {
     i++;
     follower.innerText = i;       
     if(follower.innerText == 20000000000) {
         clearInterval(count);
     }
 }, 60);
 
//Drop-down menu
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
 x.className += " responsive";
} else {
 x.className = "topnav";
}
}

//Slideshow testimonials
//Automatic slideshow
var slideIndex = 1;
showSlides();
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000);
}