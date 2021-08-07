export default class Services {

  constructor(el, options) {
    this.$el = el;

    const defaults = {
      pagination: ".o-services__image .swiper-pagination-bullet",
    };

    this.options = $.extend({}, defaults, options);

    this.$el.on("click", this.options.pagination, event => this.onClick(event));

    const productCarouselText = new Swiper(".o-services__text .m-slider__swiper", {
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: false,
      allowTouchMove: false,
      autoHeight: true,
      lazy: {
        loadPrevNext: true
      },
      pagination: {
        el: ".o-services .swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      }
    });

    this.productCarouselImage = new Swiper(".o-services__image .m-slider__swiper", {
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

  onClick(event) {
    const $target = $(event.currentTarget);
    this.productCarouselImage.slideTo($target.index(), 100)
  }

}
