const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = function(){
navLinks.classList.toggle("active");
}