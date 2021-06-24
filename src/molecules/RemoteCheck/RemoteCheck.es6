export default class RemoteCheck {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      "modal" : ".m-modal",
      "label": ".a-checkbox"
    };

    this.options = $.extend({}, defaults, options);
    this.modal = this.$el.closest(this.options.modal);
    this.fancyId = "#" + this.modal.attr('id');
    this.label = $("[data-fancyid='" + this.fancyId + "']").closest(this.options.label);
    this.checkbox = this.label.find('input');

    this.$el.on("click", (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();

    this.checkbox.prop('checked', true);
    this.checkbox.trigger('change');
    this.checkbox.parsley().destroy()
    $.fancybox.close();
  }
}
