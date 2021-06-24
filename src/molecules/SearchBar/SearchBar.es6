export default class SearchBar {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      search: {
        toggle: "m-search-bar--open",
        trigger: ".m-search-bar__close",
      },
      icons: {
        self: ".js-search",
        toggle: "a-btn-icon--active"
      },
      input: "> input",
      form: ".m-form"
    };
    
    this.options = $.extend({}, defaults, options);
    
    this.icons = $(this.options.icons.self);
    this.$form = this.$el.find(this.options.form);

    this.$el
      .on("click", this.options.search.trigger, event => this.onClick(event))
      .on("keypress", this.options.input, event => this.onKeypress(event))
  }

  onClick(event) {
    event.preventDefault()
    this.$el.toggleClass(this.options.search.toggle)
    this.icons.toggleClass(this.options.icons.toggle)
  }

  onKeypress(event) {
    if (event.keyCode == 13) {
      this.$form.submit()
    }
  }
}
