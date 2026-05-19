
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});







const navDropdowns = document.querySelectorAll(".nav-dropdown");

navDropdowns.forEach(function(dropdown) {
  dropdown.addEventListener("mouseenter", function() {
    if (window.innerWidth > 700) {
      dropdown.setAttribute("open", "");
    }
  });

  dropdown.addEventListener("mouseleave", function() {
    if (window.innerWidth > 700) {
      dropdown.removeAttribute("open");
    }
  });

  dropdown.addEventListener("focusin", function() {
    if (window.innerWidth > 700) {
      dropdown.setAttribute("open", "");
    }
  });

  dropdown.addEventListener("focusout", function(event) {
    if (window.innerWidth > 700 && !dropdown.contains(event.relatedTarget)) {
      dropdown.removeAttribute("open");
    }
  });
});


const fade = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
     if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

fade.forEach(function(element) {
  observer.observe(element);
});



