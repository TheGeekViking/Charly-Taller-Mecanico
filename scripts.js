
// Navbar scripting

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Whatsapp scripting

$(function () {
  $('#myDiv').floatingWhatsApp({
    phone: '+5215574656784',
    showPopup: 'true',
    popupMessage: "This is my first Software",
    headerTitle: "Charly",
    message: "Hola",
    position: 'right'
  });
});

// owl carousel scripting

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1200,
      autoplayHoverPause:true
  });
});


// Smooth Scrolling script

