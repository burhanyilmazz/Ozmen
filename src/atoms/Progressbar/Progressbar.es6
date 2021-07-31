export default class Progressbar {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      bar: ".a-progressbar__bar span"
    };

    this.options = $.extend({}, defaults, options);

    this.$bar = this.$el.find(this.options.bar);

		this.start = true;

    this.onInit();
  }

  onInit() {
    var waypoints = this.$el.waypoint({
      handler: (direction) => {
        if (direction == "down" && this.start) {
          this.$bar.animate({
            width: this.$bar.data("percent")
          });
					this.start = false;
        }
      },
      offset: '100%'
    })
  }

}
