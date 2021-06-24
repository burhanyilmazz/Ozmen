export default class FormFileInput {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      selector: "input",
      text: "span"
    };

    this.options = $.extend({}, defaults, options);

    this.$selector = this.$el.find(this.options.selector);
    this.$text = this.$el.find(this.options.text);

    this.$el.on("change", this.options.selector, event => this.onChange(event));
  }



  onChange(event) {
    event.preventDefault();
    const fileName = event.target.files[0].name;
    this.$text.text(fileName);
  }
}
