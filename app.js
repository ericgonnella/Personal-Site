var slider = document.getElementById("slider");
var pagination = document.getElementById("pagination");
var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = "block";

// Add event listeners to pagination buttons
for (var i = 0; i < pagination.children.length; i++) {
  pagination.children[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    currentSlide = this.innerHTML - 1;
    showSlide(currentSlide);
  });
}

// Show the slide based on the current slide number
function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
