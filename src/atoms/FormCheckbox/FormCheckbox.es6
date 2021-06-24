export default class FormCheckbox {
  constructor(el, options) {
    this.$el = el;
    this.$options = options;

    const defaults = {
      openModal: "b[data-fancyId]",
      body: ".m-scroll-box__body",
      mobileBody: ".m-modal__body"
      //modal-user-agreement-mobile
    };

    this.options = $.extend({}, defaults, options);

    this.openModal = this.$el.find(this.options.openModal);

    this.$el.on("click", this.options.openModal, event => this.onClick(event));
  }

  onClick(event) {
    event.preventDefault();
    const modalId = $(event.target).data("fancyid");

    if (modalId == "#modal-user-agreement") {
      this.$body = $(modalId).find(this.options.body);
    }

    if (modalId == "#modal-contact") {
      this.$body = $(modalId).find(this.options.body);
    }

    $.fancybox.open({
      src: modalId,
      buttons: [],
      smallBtn: true,
      touch: false
    });
  }
}
