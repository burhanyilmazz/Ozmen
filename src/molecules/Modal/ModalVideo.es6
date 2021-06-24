import Modal from "./Modal";
export default class ModalVideo extends Modal {
  constructor(el, options) {
    super(el, options);
    this.$el = el;

    const defaults = {
      templateSource: "#modal-video-html",
      modalTarget: "#modal-video"
    };

    this.options = $.extend({}, defaults, options);

    this.$el.on("click", event => this.onClick(event));

    this.templateSource = $(this.options.templateSource);
    this.modalTarget = $(this.options.modalTarget);

    //this.modalId;
    this.modalUrl;
    this.modalTitle;
    this.modalDesc;
    this.modalBtnName;
    this.modalBtnHref;
    this.modalBtnClose;

    //this.fancybox = this.modalTarget.fancybox({});
  }

  onClick(event) {
    event.preventDefault();
    const $target = $(event.target).hasClass("a-btn-icon") ? $(event.target) : $(event.currentTarget);

    //this.modalId = $(event.target).data("src");
    this.modalUrl = $target.data("url");
    this.modalTitle = $target.data("title");
    this.modalDesc = $target.data("desc");
    this.modalBtnName = $target.data("button");
    this.modalBtnHref = $target.data("btnhref");
    this.modalBtnClose = $target.data("btnclose");

    let videoModalHtml = "",
      source,
      template,
      context;

    source = this.templateSource.html();
    template = Handlebars.compile(source);

    context = {
      src: this.modalUrl,
      //id: this.modalId,
      title: this.modalTitle,
      desc: this.modalDesc,
      button: this.modalBtnName,
      href: this.modalBtnHref,
      btnClose: this.modalBtnClose
    };
    videoModalHtml += template(context);

    this.modalTarget.empty().append(videoModalHtml);

    $.fancybox.open(this.modalTarget);
  }
}
