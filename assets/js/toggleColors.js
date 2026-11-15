// The theme is applied before the first paint in head.html (localStorage,
// falling back to the OS preference). This script only handles clicks: it
// flips data-theme and persists the choice. The button label is swapped
// with CSS, so no DOM update is needed here.
document.getElementById("themeColorButton").addEventListener("click", function () {
  var dark = document.documentElement.getAttribute("data-theme") === "dark";

  document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
  localStorage.setItem("dark", dark ? "false" : "true");
});
