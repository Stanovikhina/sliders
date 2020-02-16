$('.first-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});

var swiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.swiper-pagination',
    },
});

new Glide('.glide').mount()


var pictures = new Pictures('.pictures-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });