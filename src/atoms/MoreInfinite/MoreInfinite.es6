export default class MoreInfinite {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      container: ".row",
      button: ".js-more-infinite",
      loading: "a-btn--loading"
    };

    this.options = $.extend({}, defaults, options);

    this.container = this.$el.find(this.options.container);
    this.button = this.$el.find(this.options.button);

    this.$el.on("click", this.options.button, event => this.onClick(event));

  }

  onClick(event) {
    event.preventDefault();
    const url = this.options.url;
    const page = this.button.data("page");
    const data = {
      page
    }
    this.htmlTemplate = "";

    this.button.addClass(this.options.loading)

    this.getData(url, data, _response => {
      _response.items.map(data => {
        this.container.append(this.createBlog(data))
      })
      this.container.append(this.htmlTemplate)

      if (_response.totalPage == page) {
        this.button.hide()
      } else {
        this.button.data("page", page + 1);
        this.button.removeClass(this.options.loading)
      }

    });
  }

  createBlog(data) {
    const source = $("#blog-card-template").html();
    const template = Handlebars.compile(source);

    const context = {
      text: data.text,
      url: data.url,
      image: data.image,
      date: data.date
    };

    this.htmlTemplate += template(context);
  }

  getData(url, data, callback) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "JSON",
      data: data,
      success: response => {
        callback && callback(response);
      }
    });
  }
}
