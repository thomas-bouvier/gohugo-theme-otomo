document.getElementById("themeColorButton").addEventListener("click", toggleColors);

let bodyElement = document.getElementsByTagName("BODY")[0];
let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");

initColors();
initAnimation();

function initAnimation() {
  if (localStorage.getItem("isLight") === 'true') {
    moonMask.style.top = "-8px";
    moonMask.style.right = "-5px";
    moonOrSun.style.transform = "scale(1)"
    sunRays.style.transform = "scale(0.1)"
  } else {
    moonMask.style.top = "-25px";
    moonMask.style.right = "-15px";
    moonOrSun.style.transform = "scale(0.5)"
    sunRays.style.transform = "scale(0.6)"
  }
}

function initColors() {
  if (localStorage.getItem("isLight") === null) {
    localStorage.setItem("isLight", 'true');
  }

  if (localStorage.getItem("isLight") === 'false') {
    makeDark();
  } else {
    makeLight();
  }
}

function toggleColors() {
  if (localStorage.getItem("isLight") === 'true'){
    makeDark();

    moonMask.classList.add("mask-to-sun-animation");
    moonOrSun.classList.add("to-sun-animation");
    sunRays.classList.add("expand-rays");

    setTimeout(function(){
        sunRays.classList.remove("expand-rays");
    }, 500);
    setTimeout(function(){
        moonMask.classList.remove("mask-to-sun-animation");
        moonOrSun.classList.remove("to-sun-animation");
        initAnimation();
    }, 400);

    localStorage.setItem("isLight", 'false');
  } else{
    makeLight();

    moonMask.classList.add("mask-to-moon-animation");
    moonOrSun.classList.add("to-moon-animation");
    sunRays.classList.add("contract-rays");


    setTimeout(function(){
        sunRays.classList.remove("contract-rays");
    }, 500);
    setTimeout(function(){
        moonMask.classList.remove("mask-to-moon-animation");
        moonOrSun.classList.remove("to-moon-animation");
        sunRays.classList.remove("contract-rays");
        initAnimation();
    }, 400);

    localStorage.setItem("isLight", 'true');
  }
}

function makeDark() {
  bodyElement.style.setProperty('--primary', "#fff");
  bodyElement.style.setProperty('--secondary', "#bcbdbe");
  bodyElement.style.setProperty('--background-color', "#191b1e");
}

function makeLight() {
  bodyElement.style.setProperty('--primary', "");
  bodyElement.style.setProperty('--secondary', "");
  bodyElement.style.setProperty('--background-color', "");
}
