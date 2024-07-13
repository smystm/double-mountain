/* Begin::Owl-Js Setting */
$(document).ready(function () {
   $(".owl-carousel").owlCarousel()
})

var owl = $(".owl-carousel")
owl.owlCarousel({
   rtl: true,
   items: 4,
   loop: true,
   margin: 10,
   /* Change to [false] for Stop autoplaying boxs:  */
   autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   smartSpeed: 500,
   dots: true,
   lazyLoad: true,
   /* Responsive Box Carsouls: */
   responsive: {
      0: {
         items: 1,
      },
      640: {
         items: 2,
      },

      1024: {
         items: 3,
      },
      1280: {
         items: 4,
      },
   },
})
/* Button Next & Prev jQuery */
$(".owl-next").click(function () {
   owl.trigger("next.owl.carousel")
})
$(".owl-prev").click(function () {
   owl.trigger("prev.owl.carousel")
})

/* End::Owl-Js Setting */
/* Begin:: menu Responsive */
let closeBtn = document.querySelector(".close")
let menuBtn = document.querySelector(".menu-btn")
let panelMobile = document.querySelector(".panel-mobile")
let screenCover = document.querySelector(".menu-cover")
let menuStat = false

menuBtn.addEventListener("click", () => {
   panelMobile.style.right = "0"
   screenCover.style.height = "100%"
   menuStat = true
})

closeBtn.addEventListener("click", () => {
   panelMobile.style.right = "-280px"
   screenCover.style.height = "0"
})
/* End:: menu Responsive */
