function toggleMenu() {
  var x = document.getElementById("menu-toggle");
  if (x.classList.contains("hide-el")) {
    x.className = "mobile-menu";
  } else {
    x.className = "mobile-menu hide-el";
  }
}
