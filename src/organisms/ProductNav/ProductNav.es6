export default class ProductNav {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      main: ".o-product-nav-main__icons a",
      mainActive: ".o-product-nav-main__icons a.active",
      list: ".o-product-nav__list a",
      shadow: ".a-shadow"
    };

    this.options = $.extend({}, defaults, options);

    this.$shadow = $(this.options.shadow);
    this.$main = this.$el.find(this.options.main);
    this.$active = this.$el.find(this.options.mainActive);

    this.$el
      .on("click", this.options.main, event => this.onClickMain(event));

    $(document)
      .on("click", this.options.shadow, () => this.closeAll())

  }

  closeAll() {
    this.$el.removeClass("o-product-nav--open");
    this.$shadow.removeClass('a-shadow--open');
		this.$main.removeClass("active")
		this.$active.addClass("active")
  }

  onClickMain(event) {
    event.preventDefault();
    const $target = $(event.currentTarget);
    const $hash = $($target.attr("href"));
    const $subHash = $($hash.attr('href'));

    this.$el.addClass("o-product-nav--open");
    $target.addClass("active").siblings().removeClass("active");
    $hash.addClass("active").siblings().removeClass("active");
    $subHash.show().siblings().hide();

    this.$shadow.addClass('a-shadow--open');
  }
}
