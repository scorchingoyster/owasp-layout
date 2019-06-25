// toggle mobile menu through CSS class toggle
function toggleMenu() {
  var x = document.getElementById("menu-toggle");
  var y = document.getElementById("overlay");
  if (x.classList.contains("hide-el")) {
    x.className = "mobile-menu";
    y.className = "";
  } else {
    x.className = "mobile-menu hide-el";
    y.className = "hide-el";
  }
}
