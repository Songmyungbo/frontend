// $('.myslider').slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

$('.myslider').slick({
  dots: true,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 1000,
  // 마우스를 오버했을때 오토플레이 멈춤
  pauseOnHover: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $('.gototop').addClass('active')
  } else {
    $('.gototop').removeClass('active')
  }
})
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('active')
  } else {
    $('header').removeClass('active')
  }
})
