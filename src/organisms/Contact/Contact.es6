export default class Contact {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      map: "#map",
      tab: ".m-tab-default",
      tabItem: ".m-tab-default__item--active"
    };

    this.options = $.extend({}, defaults, options);

    $(document)
      .on("map.click", (event, id) => this.onClickMap(event, id))
      .on("tab.show", (event, index) => this.onChangeTab(event, index))

    setTimeout(() => {
      this.onInitMap()
    }, 200)
  }

  onInitMap() {
    const coord = this.$el.find(this.options.tabItem).find("> a").data("coord")
    const map = this.$el.find(this.options.map).data("componentMap");
    map.mapFocus(coord)
  }

  onChangeTab(event, index) {
    this.onInitMap()
  }

  onClickMap(event, id) {
    this.$tabs = this.$el.find(this.options.tab)
    const tabs = this.$tabs.data("componentTabDefault");
    const tab = this.$tabs.find(`a[href="#${id}"]`).parent();

    tabs.setActive(tab.index())
  }
}
