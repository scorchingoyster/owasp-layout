function toggleMenu() {
  var x = document.getElementById("menu-toggle");
  if (x.classList.contains("hide-el")) {
    x.className = "mobile-menu";
  } else {
    x.className = "mobile-menu hide-el";
  }
  var t = document.getElementById("menu-icon");
  if (t.classList.contains("fa-bars")) {
    t.className = "fa fa-times";
  } else {
    t.className = "fa fa-bars";
  }
}
