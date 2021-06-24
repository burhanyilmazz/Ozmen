export default class LeftNav {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      anchor: {
        self: ".m-left-nav__top--anchor",
        active: "m-left-nav--active"
      },
      select: ".a-select"
    };

    this.options = $.extend({}, defaults, options);

    this.$el
      .on("click", this.options.anchor.self, event => this.onClickNav(event))
      .on("change", this.options.select, event => this.onChange(event))

    $(document).on("scroll", event => this.onScroll(event));
  }

  onClickNav(event) {
    event.preventDefault();
    const $target = $(event.currentTarget);
    const $hash = $($target.find("a").attr("href"))
    $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active)

    $('html, body').animate({
      scrollTop: $hash.offset().top - 50
    }, 500);
  }

  onChange(event) {
    const url = $(event.target).val()
    window.location.href = url
  }

  onScroll(event) {
    const scrollPos = $(document).scrollTop();

    if (!$(this.options.anchor.self).length) {
      return
    }

    if (scrollPos < 100) {
      $(this.options.anchor.self).eq(0).addClass(this.options.anchor.active);
      return
    }

    $(this.options.anchor.self).find("a").each((index, item) => {
      const currLink = $(item);
      const refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 500 > scrollPos) {
        $(this.options.anchor.self).removeClass(this.options.anchor.active);
        currLink.parent().addClass(this.options.anchor.active);
      } else {
        currLink.parent().removeClass(this.options.anchor.active);
      }
    });
  }
}
