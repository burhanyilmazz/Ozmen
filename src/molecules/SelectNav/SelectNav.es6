export default class SelectNav {
    constructor(el, options) {
      this.$el = el;
  
      const defaults = {
        select: ".a-select"
      };
  
      this.options = $.extend({}, defaults, options);
  
      this.$el.on("change", this.options.select, event => this.onChange(event))
    }
  
    onChange(event) {
      const url = $(event.target).val()
      window.location.href = url
    }
  }
  