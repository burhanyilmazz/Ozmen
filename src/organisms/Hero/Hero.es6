export default class Hero {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      leaf1: ".o-hero__leaf--leaf-1",
      leaf2: ".o-hero__leaf--leaf-2",
      leaf3: ".o-hero__leaf--leaf-3",
      pill: ".o-hero-product__pill",
      pill2: ".o-hero-product__pill-2",
    };

    this.options = $.extend({}, defaults, options);

    this.$leaf1 = this.$el.find(this.options.leaf1);
    this.$leaf2 = this.$el.find(this.options.leaf2);
    this.$leaf3 = this.$el.find(this.options.leaf3);
    this.$pill = this.$el.find(this.options.pill);
    this.$pill2 = this.$el.find(this.options.pill2);

    this.moved(80, 95, 100, this.$leaf1);
    this.moved(-70, -92, 150, this.$leaf2);
    this.moved(-60, 74, 200, this.$leaf3);
    this.moved(50, 80, 50, this.$pill);
    this.moved(-64, -100, 50, this.$pill2);
  }


  moved(x, y, duration, el) {
    el.animate({
      textIndent: 0
    }, {
      step: (now, fx) => {
        this.$el.mousemove((e) => {
          const amountMovedX = (e.pageX * -1 / x);
          const amountMovedY = (e.pageY * -1 / y);
          el.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
          });
        });
      },
      duration
    }, 'easeOutCubic');
  }
}
