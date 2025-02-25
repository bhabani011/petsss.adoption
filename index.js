// NAVBAR
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => 
    navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
    .querySelectorAll(".menu a")
    .forEach((link) => link.addEventListener("click", toggleMenu));
    
    function applyFilters() {
      const petType = document.getElementById('pet-type').value.toLowerCase();
      const gender = document.getElementById('gender').value.toLowerCase();
      const breed = document.getElementById('breed').value.toLowerCase();
      const age = document.getElementById('age').value;
      const vaccination = document.getElementById('vaccination').value.toLowerCase();
  
      // Perform filtering logic here based on the selected values.
      // ... (Your filtering code) ...
  
      // Example: Log the selected values to the console
      console.log("Pet Type:", petType);
      console.log("Gender:", gender);
      console.log("Breed:", breed);
      console.log("Age:", age);
      console.log("Vaccination:", vaccination);
  }


    document.addEventListener('DOMContentLoaded', () => {
        const adoptButtons = document.querySelectorAll('.pet-card button');
      
        adoptButtons.forEach(button => {
          button.addEventListener('click', () => {
            alert('Thank you for adopting!'); // Or redirect, etc.
          });
        });
      });

      