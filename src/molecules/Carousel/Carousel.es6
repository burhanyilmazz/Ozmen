export default class Carousel {

  constructor(el, options) {
    this.$el = el;

    const defaults = {
      loop: true,
      grabCursor: false,
      followFinger: false,
      preloadImages: false,
      navigation: true,
      lazy: {
        loadPrevNext: true
      }
    };

    const slider = this.$el.find(".m-slider");
    const sliderData = slider.data("component");

    this.options = $.extend({}, defaults, options, sliderData);

    slider.data("component", this.options);

    this.$el.find(".m-slider")
      .on('slideChange', (e, index) => this.onSlideChange(index))
    this.$el.find(".m-carousel__thumbs li").on('click', (event) => this.onClick(event))

  }

  onClick(event) {
    event.preventDefault();
    const slider = this.$el.find(".m-slider").data("componentSlider");
    const bullet = $(event.target).parent().index()

    slider.slideTo(bullet + 1)
  }

  onSlideChange(index) {
    try {
      const slider = this.$el.find(".m-slider").data("componentSlider");
      const bullets = this.$el.find(".a-bullets").data("componentBullets");
      bullets.setActive(slider.realIndex);

      const activeItem = $(slider.slides[slider.activeIndex]);

      activeItem.trigger("slider.change", this);

    } catch (e) {

    }

  }

}
