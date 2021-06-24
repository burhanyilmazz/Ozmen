export default class Modal {
  static Types = {
    ERROR: "error",
    SUCCESS: "success",
    WARNING: "warning",
    INFO: "info"
  };

  static template = `
    {{#if isError}}
      {{#if errorCode }}
        <div class="m-modal m-modal--alert m-modal--{{type}}" ga-error-code={{errorCode}} id={{id}}>
      {{else}}
        <div class="m-modal m-modal--alert m-modal--{{type}}" ga-error-code="NA" id={{id}}>
      {{/if}}
    {{else}}
      <div class="m-modal m-modal--alert m-modal--{{type}}" id={{id}}>
    {{/if}}
      <div class="m-modal__body">
        {{#if icon}}<i class="a-icon a-icon--modal icon-circle-{{icon}}"></i>{{/if}}
        {{#if title}}<h4>{{title}}</h4>{{/if}}
        {{#if body}}<p>{{{body}}}</p>{{/if}}
      </div>
      <div class="m-modal__foot">
        {{#if button}}<a class="a-btn a-btn--full {{buttonClass}}" data-fancybox-close href="javascript:;">Kapat</a>{{/if}}
      </div>
    </div>
  `;

  constructor(el, options) {
    this.$el = el;

    const defaults = {
      onLoad: false
    };

    this.options = $.extend({}, defaults, options);

    if ( this.options.onLoad ) {
      return $.fancybox.open( el.get(0) );
    }

  }

  static error(error = {}) {
    var template = Handlebars.compile(Modal.template);
    var html = template({
      type: Modal.Types.ERROR,
      icon: "error",
      ...error,
      isError : true
    });

    return $.fancybox.open(html);
  }

  static success(success = {}) {
    var template = Handlebars.compile(Modal.template);
    var html = template({
      type: Modal.Types.SUCCESS,
      icon: "success",
      ...success
    });

    return $.fancybox.open(html);
  }

  static info(info = {}) {
    var template = Handlebars.compile(Modal.template);
    var html = template({
      type: Modal.Types.INFO,
      icon: "info",
      ...info
    });

    return $.fancybox.open(html);
  }

  static warning(warning = {}) {
    var template = Handlebars.compile(Modal.template);
    var html = template({
      type: Modal.Types.WARNING,
      icon: "warning",
      ...warning
    });

    return $.fancybox.open(html);
  }

}
