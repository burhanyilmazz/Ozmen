export default class Services {

    constructor(el, options) {
      this.$el = el;
  
      const productCarouselText = new Swiper(".o-services__text .m-slider__swiper", {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false,
        allowTouchMove: false,
        lazy: {
          loadPrevNext: true
        },
        pagination: {
          el: ".o-services .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }
      });
  
      const productCarouselImage = new Swiper(".o-services__image .m-slider__swiper", {
        slidesPerView: "auto",
        direction: "vertical",
        slideToClickedSlide: false,
        spaceBetween: 30,
        autoHeight: false,
        centeredSlides: true,
        loop: true,
        lazy: {
          loadPrevNext: true
        },
        thumbs: {
          swiper: productCarouselText
        },
        navigation: {
          nextEl: ".o-services .m-slider__next",
          prevEl: ".o-services .m-slider__prev"
        },
        breakpoints: {
          990: {
            autoHeight: true,
            spaceBetween: 20,
            direction: "horizontal",
          }
        }
      });
  
    }
  
  }
  