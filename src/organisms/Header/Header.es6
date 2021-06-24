export default class Header {
  constructor(el, options) {
    this.$el = el;


    const defaults = {
      hamburger: ".a-hamburger",
      shadow: ".a-shadow",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        dropdown: ".m-nav--dropdown",
        dropdownOpen: "m-nav--dropdown-open",
        child: ".m-nav--dropdown-child",
        childOpen: "m-nav--dropdown-child-open",
        link: ".m-nav--dropdown-child-link"
      },
      search: {
        self: ".m-search-bar--header",
        trigger: ".js-search-header",
        class: "m-search-bar--open"
      }
    };

    this.options = $.extend({}, defaults, options);

    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$searchBar = $(this.options.search.self);
    this.$shadow = $(this.options.shadow);

    this.$el
      .on("click", this.options.nav.dropdown, event => this.onClickDropdown(event))
      .on("click", this.options.nav.child, event => this.onClickChild(event))
      .on("click", this.options.nav.link, event => this.onClickLink(event))
      .on("click", this.options.search.trigger, event => this.onClickSearch(event))

    $(document)
      .on("hamburger.click", (event) => this.onClickHamburger(event))
      .on("click", this.options.shadow, () => this.closeAll())

  }

  closeAll() {
    this.$el.removeClass(this.options.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
    this.$searchBar.removeClass(this.options.search.class)
    $("html").removeClass('disable-scroll');
  }

  onClickDropdown(event) {
    event.preventDefault();
    const $target = $(event.currentTarget)
    $target.toggleClass(this.options.nav.dropdownOpen)
  }

  onClickChild(event) {
    event.preventDefault();
    event.stopPropagation()
    const $target = $(event.currentTarget)

    if ($target.hasClass(this.options.nav.childOpen)) {
      $target.removeClass(this.options.nav.childOpen)
    } else {
      $target.addClass(this.options.nav.childOpen).siblings().removeClass(this.options.nav.childOpen)
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
    this.$nav.removeClass(this.options.nav.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
    this.$searchBar.hasClass(this.options.search.class) ? $("html").addClass('disable-scroll') : $("html").removeClass('disable-scroll')
  }

  onClickHamburger(event) {
    const windowWidth = $(window).width();

    if (windowWidth < 769) {
      event.preventDefault()
      this.$nav.toggleClass(this.options.nav.toggle);
      this.$searchBar.removeClass(this.options.search.class)
      this.$nav.hasClass(this.options.nav.toggle) ? $("html").addClass('disable-scroll') : $("html").removeClass('disable-scroll')
    }
  }
}
