export default class Slider extends Swiper {

  constructor(el, options) {
    const $el = el;
    const $slider = el.find(".m-slider__swiper");

    let defaults = {
      loop: false,
      on: {
        slideChangeTransitionEnd: () => $el.trigger("slideChangeTransitionEnd"),
        slideChange: () => $el.trigger("slideChange"),
        init: () => $el.trigger("init"),
        touchEnd: () => $el.trigger("touchEnd"),
        reachEnd: () => $el.trigger("reachEnd"),
        reachBeginning: () => $el.trigger("reachBeginning"),
      }
    };

    if (options.navigation) {
      options.nav = {
        nextEl: '> .m-slider__next',
        prevEl: '> .m-slider__prev',
        disabledClass: "a-btn-icon--disabled"
      }
    }

    if (options.pagination) {
      if (options.paginationDynamic) {
        options.pagination = {
          el: $el.find('.swiper-pagination'),
          dynamicBullets: true,
        }
      } else {
        options.pagination = {
          el: $el.find('.swiper-pagination'),
          type: 'bullets',
          clickable: true,
        }
      }
    }

    options = $.extend({}, defaults, options);

    el = $el;

    super($slider.get(0), options);

    this.$el = $el;
    this.options = options;

    if (options.nav) {
      this.$nextEl = this.$el.find(this.options.nav.nextEl);
      this.$prevEl = this.$el.find(this.options.nav.prevEl);

      this.$el
        .on("click", this.options.nav.nextEl, () => this.slideNext())
        .on("click", this.options.nav.prevEl, () => this.slidePrev())
        .on('slideChange', () => this.onSlideChange());

      if (!options.loop) {
        this.$prevEl.addClass(this.options.nav.disabledClass);
      }
    }

    if (options.autoplay) {
      $el
        .on("mouseenter", () => this.onMouseEnter())
        .on("mouseleave", () => this.onMouseLeave())
    }

    if (this.slides.length <= this.params.slidesPerView) {
      this.$el.addClass("m-slider--hidden-nav");
    }

    this.$el.on("click", "[data-location-href]", (e) => this.onClickItem(e));

  }

  onClickItem(e) {
    if (!$(e.target).is("a")) {
      const target = $(e.currentTarget);
      const data = target.data();
      if (data.locationHref) {
        window.location.href = data.locationHref;
      }
    }
  }

  getCount() {
    return this.slides.length - this.loopedSlides * 2;
  }

  onMouseEnter() {
    this.autoplay.stop();
  }

  onMouseLeave() {
    this.autoplay.start();
  }

  onSlideChange() {
    this.$prevEl.removeClass(this.options.nav.disabledClass);
    this.$nextEl.removeClass(this.options.nav.disabledClass);

    const activeItem = $(this.slides[this.activeIndex]);
    const animatedItems = activeItem.find("[data-animation]");

    $.each(animatedItems, (i, item) => {
      const className = $(item).data("animation");
      $(item).removeClass(className);
      setTimeout(() => {
        $(item).addClass(className);
      }, 1);
    });

    if (this.options.loop) {
      return;
    }

    if (this.isBeginning) {
      this.$prevEl.addClass(this.options.nav.disabledClass);
    }
    if (this.isEnd) {
      this.$nextEl.addClass(this.options.nav.disabledClass);
    }
  }

  slidePrev() {
    super.slidePrev();
    if (this.$prevEl) {
      this.$prevEl.removeClass(this.options.nav.disabledClass);
    }
    if (this.$nextEl) {
      this.$nextEl.removeClass(this.options.nav.disabledClass);
    }

    if (this.options.loop) {
      return;
    }

    if (this.isBeginning) {
      this.$prevEl.addClass(this.options.nav.disabledClass);
    }
  }

  slideNext() {
    super.slideNext();
    if (this.$prevEl) {
      this.$prevEl.removeClass(this.options.nav.disabledClass);
    }
    if (this.$nextEl) {
      this.$nextEl.removeClass(this.options.nav.disabledClass);
    }

    if (this.options.loop) {
      return;
    }

    if (this.isEnd) {
      this.$nextEl.addClass(this.options.nav.disabledClass);
    }


  }

}
