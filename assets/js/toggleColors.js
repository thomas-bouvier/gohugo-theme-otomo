// The theme is applied before the first paint in head.html (explicit choice in
// localStorage, otherwise the live OS preference). This script handles clicks:
// it flips data-theme and persists the explicit choice. The button label is
// swapped with CSS, so no DOM update is needed here.
document.getElementById("themeColorButton").addEventListener("click", function () {
  var dark = document.documentElement.getAttribute("data-theme") === "dark";
  var theme = dark ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// Follow OS-level theme changes live, unless the user picked a theme explicitly.
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function (e) {
    if (localStorage.getItem("theme") !== null) {
      return;
    }
    document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
  });
}
