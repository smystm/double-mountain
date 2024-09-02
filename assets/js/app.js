try {
   /* Begin::Video Player */
   let playBtn = document.querySelector("#play-video")
   let exVideo = document.querySelector(".ex-video")

   playBtn.addEventListener("click", () => {
      exVideo.play()
      playBtn.style.display = "none"
      exVideo.controls = true
   })
   /* End::Video Player */
} catch (error) {
   console.log("Made Front Of This Site By SmyHT & MoryJan")
}

try {
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
} catch (error) {
   console.log("Made Front Of This Site By SmyHT & MoryJan")
}

try {
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
} catch (error) {
   console.log("Made Front Of This Site By SmyHT & MoryJan")
}

try {
   /* Begin::Form Input */
   const form = document.querySelector("form")
   const inputs = form.querySelectorAll("input")
   const KEYBOARDS = {
      backspace: 8,
      arrowLeft: 37,
      arrowRight: 39,
   }

   function handleInput(e) {
      const input = e.target
      const nextInput = input.nextElementSibling
      if (nextInput && input.value) {
         nextInput.focus()
         if (nextInput.value) {
            nextInput.select()
         }
      }
   }

   function handlePaste(e) {
      e.preventDefault()
      const paste = e.clipboardData.getData("text")
      inputs.forEach((input, i) => {
         input.value = paste[i] || ""
      })
   }

   function handleBackspace(e) {
      const input = e.target
      if (input.value) {
         input.value = ""
         return
      }

      input.previousElementSibling.focus()
   }

   function handleArrowLeft(e) {
      const previousInput = e.target.previousElementSibling
      if (!previousInput) return
      previousInput.focus()
   }

   function handleArrowRight(e) {
      const nextInput = e.target.nextElementSibling
      if (!nextInput) return
      nextInput.focus()
   }

   form.addEventListener("input", handleInput)
   inputs[0].addEventListener("paste", handlePaste)

   inputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
         setTimeout(() => {
            e.target.select()
         }, 0)
      })

      input.addEventListener("keydown", (e) => {
         switch (e.keyCode) {
            case KEYBOARDS.backspace:
               handleBackspace(e)
               break
            case KEYBOARDS.arrowLeft:
               handleArrowLeft(e)
               break
            case KEYBOARDS.arrowRight:
               handleArrowRight(e)
               break
            default:
         }
      })
   })
   /* End::Form Input */
} catch (error) {
   console.log("Made Front Of This Site By SmyHT & MoryJan")
}
