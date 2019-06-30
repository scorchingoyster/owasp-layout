// element hiding CSS utility class
var el = "hide-el";

// toggle mobile menu through toggling the class above
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

  // hide all tab content by default
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].classList.add(el);
  }

  tab_link = document.getElementsByClassName("tab_link");
  for (i = 0; i < tab_link.length; i++) {
    tab_link[i].classList.remove("current");
  }
  
  document.getElementById(tabName).classList.remove(el);
  event.currentTarget.classList.add("current");

}

// simulate click behavior to show first tab by default
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("tab_default").click();
});