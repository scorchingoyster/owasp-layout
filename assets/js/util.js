$(document).ready(function() {

  // element hiding CSS utility classes
  // use hideEl for hiding elements from only the SIGHTED USERS
  // use removeEl for hiding elements from EVERYONE
  var hideEl = "hide-el";
  var removeEl = "remove-el";

  // close announcement banner
  $("#close-banner").click(function() {
    $(this).closest("#banner").remove();
  });

  // toggle mobile menu display
  $(".menu-toggler").click(function() {
    $(".mobile-menu").toggleClass(hideEl);
    $("#overlay").toggleClass(removeEl);
  });

  // load and select sub-menu navigation
  $(".sub-nav li:first-child>a").addClass("current");

  $(".tab-link").click(function(e) {
    e.preventDefault();
    $(".tab-link").removeClass("current");
    $("#"+this.id).addClass("current");
    $(".sub-nav").siblings(".tab").addClass(removeEl);
    $("section#" + (this.id.replace("-link",""))).toggleClass(removeEl);
  });

  // show dropdown
  $(".top-nav > ul a").hover(function() {
    $(this).siblings(".dropdown-menu").toggleClass(hideEl);
  });

  // browser version checker and notifier
  // source: https://browser-update.org
  var $buoop = {required:{e:-2,f:-3,o:-3,s:-1,c:-3},insecure:true,unsupported:true,api:2019.06 }; 
  function $buo_f(){ 
   var e = document.createElement("script"); 
   e.src = "//browser-update.org/update.min.js"; 
   document.body.appendChild(e);
  };
  try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
  catch(e){window.attachEvent("onload", $buo_f)}

});