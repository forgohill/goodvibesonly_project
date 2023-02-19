$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    sldesToScroll: 1,
    speed: 500,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    paseOnDotsHover: true,
    draggabale: true,
    swipe: true,
    touchTrashhold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidePerRow: 1,
    vertcal: false,
    vertcalSwiping: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          swipe: false,
          autoplay: false,
          rows: 1,
        }
      }
    ],
  });
});
