export default class Sidebar {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      hamburger: ".a-hamburger",
      toggle: "o-sidebar--open",
      shadow: ".a-shadow",
      nav: {
        self: ".o-sidebar__nav",
        item: "nav > ul > li span",
        active: "o-sidebar__nav--active",
        link: ".o-sidebar__nav--link"
      },
      search: {
        self: ".m-search-bar",
        trigger: ".js-search",
        class: "m-search-bar--open"
      }
    };

    this.options = $.extend({}, defaults, options);

    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$shadow = $(this.options.shadow);
    this.$searchBar = $(this.options.search.self);

    this.$el
      .on("click", this.options.nav.item, event => this.onClickNav(event))
      .on("click", this.options.nav.link, event => this.onClickLink(event))
      .on("click", this.options.search.trigger, event => this.onClickSearch(event))

    $(document)
      .on("hamburger.click", (event) => this.onClickHamburger(event))
      .on("click", this.options.shadow, () => this.closeAll())

    $(window).resize(() => this.windowResize())

  }

  windowResize() {
    const windowWidth = $(window).width();

    if (windowWidth < 769) {
      this.closeAll()
    }
  }

  closeAll() {
    this.$el.removeClass(this.options.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
    this.$searchBar.removeClass(this.options.search.class)
  }

  onClickNav(event) {
    const $target = $(event.currentTarget);
    if ($target.next("ul").length) {
      event.preventDefault();
      const $parent = $target.parent();

      if (!$parent.hasClass(this.options.nav.active)) {
        $(this.options.nav.item).parent().removeClass(this.options.nav.active)
        $parent.addClass(this.options.nav.active)
      } else {
        $parent.removeClass(this.options.nav.active)
      }
    }
  }

  onClickLink(event) {
    event.preventDefault();
    const $target = $(event.currentTarget)
    const url = $target.find("a").attr("href");

    window.location.href = url;
  }

  onClickSearch(event) {
    event.preventDefault()

    this.$searchBar.toggleClass(this.options.search.class)
    this.$el.removeClass(this.options.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
  }

  onClickHamburger(event) {
    const windowWidth = $(window).width();

    if (windowWidth > 768) {
      event.preventDefault()
      this.$el.toggleClass(this.options.toggle);
      this.$searchBar.removeClass(this.options.search.class)
    }
  }
}
