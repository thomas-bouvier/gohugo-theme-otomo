document.getElementById("themeColorButton").addEventListener("click", toggleColors);

let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");

initColors();
initAnimation();

function initAnimation() {
  if (localStorage.getItem("dark") === 'true') {
    moonMask.style.top = "-25px";
    moonMask.style.right = "-15px";
    moonOrSun.style.transform = "scale(0.5)"
    sunRays.style.transform = "scale(0.6)"
  } else {
    moonMask.style.top = "-8px";
    moonMask.style.right = "-5px";
    moonOrSun.style.transform = "scale(1)"
    sunRays.style.transform = "scale(0.1)"
  }
}

function initColors() {
  if (localStorage.getItem("dark") == null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem("dark", 'true');
    } else {
      localStorage.setItem("dark", 'false');
    }
  }

  if (localStorage.getItem("dark") === 'true') {
    makeDark();
  } else {
    makeLight();
  }
}

function toggleColors() {
  if (localStorage.getItem("dark") === 'false') {
    makeDark();

    moonMask.classList.add("mask-to-sun-animation");
    moonOrSun.classList.add("to-sun-animation");
    sunRays.classList.add("expand-rays");

    setTimeout(() => {
        sunRays.classList.remove("expand-rays");
    }, 500);
    setTimeout(() => {
        moonMask.classList.remove("mask-to-sun-animation");
        moonOrSun.classList.remove("to-sun-animation");
        initAnimation();
    }, 400);

    localStorage.setItem("dark", 'true');
  } else {
    makeLight();

    moonMask.classList.add("mask-to-moon-animation");
    moonOrSun.classList.add("to-moon-animation");
    sunRays.classList.add("contract-rays");


    setTimeout(() => {
        sunRays.classList.remove("contract-rays");
    }, 500);
    setTimeout(() => {
        moonMask.classList.remove("mask-to-moon-animation");
        moonOrSun.classList.remove("to-moon-animation");
        sunRays.classList.remove("contract-rays");
        initAnimation();
    }, 400);

    localStorage.setItem("dark", 'false');
  }
}

function makeDark() {
  document.documentElement.setAttribute('data-theme', 'dark');
}

function makeLight() {
  document.documentElement.setAttribute('data-theme', 'light');
}
