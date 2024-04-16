// mobile nav
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector("nav ul");
      
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  });


// nav

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("nav");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        navbar.style.backgroundColor = "#bfcdff"; // Ganti dengan warna solid yang diinginkan
      } else {
        navbar.style.backgroundColor = "rgba(182, 203, 217, 0.3)";
      }
    });
  });
  
      