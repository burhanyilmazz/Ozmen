export default class Autocomplete {

  constructor(el, options) {
    this.$el = el;

    if ( !options.url ) {
      throw new Error("Sorgunun gönderileceği url bilgisi zorunludur.");
    }

    const resultTemplateHTML = this.$el.find(".m-search__result-template").html();
    const resultTemplate = Handlebars.compile( resultTemplateHTML );

    const defaults = {
      filter: false,
      minLength: 1,
      maxItem: 5,
      dynamic: true,
      cancelButton: false,
      template: (query, item) => resultTemplate( item ),
      callback: {
        onLayoutBuiltBefore: (node, query, result, resultHtmlList) => this.onLayoutBuiltBefore(node, query, result, resultHtmlList),
      },
      selector: {
        container: "m-search",
        result: "m-search__suggestions",
        list: "typeahead__list",
        group: "m-search__group",
        item: "m-search__item",
        empty: "typeahead__empty",
        display: "typeahead__display",
        query: "typeahead__query",
        filter: "typeahead__filter",
        filterButton: "typeahead__filter-button",
        dropdown: "typeahead__dropdown",
        dropdownItem: "typeahead__dropdown-item",
        labelContainer: "typeahead__label-container",
        label: "typeahead__label",
        button: "m-search__search",
        backdrop: "typeahead__backdrop",
        hint: "typeahead__hint",
        cancelButton: ".m-search__cancel"
      },
      source: {
        results: {
          display: ["title", "mainCategory", "subCategory", "position"],
          href: "{{url}}",
          ajax: function (query) {
            return {
              type: "GET",
              url: options.url,
              headers : {
                'X-Tcell-Ajax' : 'true'
              },
              data: {
                qx: "{{query}}"
              },
              callback: {
                done: function (data) {
                  return data;
                }
              }
            }
          }
        }
      }
    };


    this.options = $.extend({}, defaults, options);

    this.input = this.$el.find( "input" );
    this.cancel = this.$el.find( this.options.selector.cancelButton );
    this.list = this.$el.find(this.options.selector.list);
    
    if (this.input.attr("id") == "mapSearch") {
      this.options.callback["onClickAfter"] = (node, a, item, event) => {
        event.preventDefault();
        $('#map').data('componentMap').mapFocus(item.position);
      }
    }

    this.module = this.input.typeahead( this.options );

    this.$el.on("click", this.options.selector.cancelButton, event => this.onCancel(event));

    const allResultTemplateHTML = this.$el.find(".m-search__all-result-template").html();
    this.allResultTemplate = Handlebars.compile( allResultTemplateHTML );

  }

  onCancel(event) {
    event.preventDefault();
    //this.module.input.resetInput();
    this.input.val('');
    this.list.empty();
    this.$el.removeClass('result');
  }

  onLayoutBuiltBefore(node, query, result, resultHtmlList) {
    const html = this.allResultTemplate({ query });

    if(resultHtmlList != null) {
      return resultHtmlList.append($( html ));
    }

  }

}
