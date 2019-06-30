// element hiding CSS utility class
var el = "hide-el";

// toggle mobile menu through CSS class toggle
function toggleMenu() {
  var x = document.getElementById("menu-toggle");
  var y = document.getElementById("overlay");
  if (x.classList.contains(el)) {
    x.classList.remove(el);
    y.classList.remove(el);
  } else {
    x.classList.add(el);
    y.classList.add(el);
  }
}

// tab switcher
function switchTab(event, tabName) {
  event.preventDefault();

  var i, tab, tab_link;

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].classList.add(el);
  }

  document.getElementById(tabName).classList.remove(el);

}