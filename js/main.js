// Sticky nav-bar js
$(function () {
  let stickyNavTop = $('nav').offset().top;
  console.log(stickyNavTop)

  //  function that decides weather the navigation bar should have "fixed" css position or not.
  function stickyNav() {
    let scrollTop = $(window).scrollTop();
    // The scrollTop() method sets or returns the vertical scrollbar position for the selected elements, so now it returns current vertical position from the top

    // if scrolled down more than the navigation, change element's position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  };

  stickyNav();
  // and run it again whenever scrolling is done
  $(window).scroll(function () {
    stickyNav();
  });
});



//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay:{
    delay:2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});


// counter-up
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay:10,
    time:1200
  });
});

