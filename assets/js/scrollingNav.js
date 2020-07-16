const nav = document.querySelector(".nav-container");

const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const showShadows = "show-shadows";

let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log(currentScroll);

  if (currentScroll == 0) {
    nav.classList.remove(scrollUp);
    nav.classList.remove(showShadows);
    return;
  }

  if (currentScroll > 65) {
    nav.classList.add(showShadows);
  } else {
    nav.classList.remove(showShadows);
  }
   
  if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
    // down
    nav.classList.remove(scrollUp);
    nav.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
    // up
    nav.classList.remove(scrollDown);
    nav.classList.add(scrollUp);
  }

  lastScroll = currentScroll;
});
