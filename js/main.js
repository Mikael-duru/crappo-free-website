const menuSlide = document.querySelector("#slider");
const openMenu = document.querySelector("#menu-open");
const closeMenu = document.querySelector("#menu-close");
const scrollBtn = document.querySelector("#to-top");

// Menu Toggle Logic
// Slides-In Nav Menu from the right
openMenu.addEventListener('click', () => {
  menuSlide.classList.toggle("active");
  // openMenu.classList.toggle("fa-times");
});

// Slides-Out Nav Menu to the right
closeMenu.addEventListener('click', () => {
  menuSlide.classList.remove("active");
  // openMenu.classList.toggle("active");
});


// Scroll page to the top
// Function that shows the scroll button
const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollBtn.style.visibility = "visible";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.visibility = "hidden";
    scrollBtn.style.opacity = "0";
  }
};

window.addEventListener("scroll", scrollFunc);

// Runs the scroll-to-top function
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});


// Initializing Animation on Scroll (AOS)
AOS.init({
  duration: 2000,
  easing: "ease",
});