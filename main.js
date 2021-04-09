  //hamburger menu

  let mobileMenu = document.querySelector(".mobile-menu");
  let hamburger = document.querySelector(".hamburger");
  let xIcon = document.querySelector(".x-icon");
  let menuIcon = document.querySelector(".menu-icon"); 

//add event listener to button

  hamburger.addEventListener("click", toggleMenu);

//see if menu has class showMenu
  mobileMenu.classList.contains("showMenu");

// toggle menu in and out when clicking on the hamburger by adding/removing 'showMenu' class
function toggleMenu() {
    if (mobileMenu.classList.contains("showMenu")) {
      mobileMenu.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      mobileMenu.classList.add("showMenu");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

//make sure that menu links take you home/close menu
  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )