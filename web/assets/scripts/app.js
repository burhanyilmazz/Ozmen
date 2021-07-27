(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
var superPropBase = require("./superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./superPropBase.js":10}],5:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":9}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":1,"@babel/runtime/helpers/typeof":11}],9:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],10:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./getPrototypeOf.js":5}],11:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
"use strict";

var shrinkHeader = 520;
var $transparent = $(".o-header--transparent");

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

$(window).scroll(function () {
  var e = getCurrentScroll();
  var windowWidth = $(window).width();

  if ($transparent.length && windowWidth < 769) {
    shrinkHeader <= e ? $(".o-header").removeClass("o-header--transparent").removeClass("o-header--white") : $(".o-header").addClass("o-header--transparent").addClass("o-header--white");
  }
});
window.Parsley.addValidator('maxFileSize', {
  validateString: function validateString(_value, maxSize, parsleyInstance) {
    if (!window.FormData) {
      return true;
    }

    var files = parsleyInstance.$element[0].files;
    return files.length != 1 || files[0].size <= maxSize * 1024;
  },
  requirementType: 'integer',
  messages: {
    tr: 'Max. dosya boyutu %s Kb. olamalıdır'
  }
});

window.onload = function () {
  lax.setup({
    breakpoints: {
      small: 0,
      large: 768
    }
  });

  var updateLax = function updateLax() {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

},{}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LazyLoad = /*#__PURE__*/function () {
  function LazyLoad(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, LazyLoad);
    this.$el = el;
    var defaults = {};
    this.options = $.extend({}, defaults, options);
    $(document).on("lazybeforeunveil", this.options.speechButton, function (event) {
      return _this.onLazyBeforeUnveil(event);
    });
  }

  (0, _createClass2["default"])(LazyLoad, [{
    key: "onLazyBeforeUnveil",
    value: function onLazyBeforeUnveil(event) {
      var lazyElement = $(event.target);
      var background = lazyElement.attr("data-background");

      if (background) {
        lazyElement.css({
          backgroundImage: "url(".concat(background, ")")
        });
      }
    }
  }]);
  return LazyLoad;
}();

exports["default"] = LazyLoad;
new LazyLoad();

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Modal = _interopRequireDefault(require("../../molecules/Modal/Modal"));

var OnLoadModal = /*#__PURE__*/function () {
  function OnLoadModal() {
    (0, _classCallCheck2["default"])(this, OnLoadModal);
  }

  (0, _createClass2["default"])(OnLoadModal, null, [{
    key: "onLoadModal",
    value: function onLoadModal() {
      var hash = $(location).attr("hash");

      switch (hash) {
        case "#errorMessage":
          this.modalType("error");
          break;

        case "#successMessage":
          this.modalType("success");
          break;
      }
    }
  }, {
    key: "modalType",
    value: function modalType(type) {
      if ($("#modal-preset-".concat(type)).length > 0) {
        $.fancybox.open({
          src: "#modal-preset-".concat(type),
          baseClass: "fancybox--".concat(type, " m-modal--alert"),
          touch: false
        });
      }
    }
  }]);
  return OnLoadModal;
}();

var _default = new OnLoadModal();

exports["default"] = _default;
$(document).ready(function () {
  return OnLoadModal.onLoadModal();
});

},{"../../molecules/Modal/Modal":24,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _General = _interopRequireDefault(require("../../../src/assets/scripts/General"));

var _LazyLoad = _interopRequireDefault(require("../../../src/assets/scripts/LazyLoad"));

var _OnLoadModal = _interopRequireDefault(require("../../../src/assets/scripts/OnLoadModal"));

var _FormCheckbox = _interopRequireDefault(require("../../../src/atoms/FormCheckbox/FormCheckbox"));

var _FormFileInput = _interopRequireDefault(require("../../../src/atoms/FormFileInput/FormFileInput"));

var _FormInput = _interopRequireDefault(require("../../../src/atoms/FormInput/FormInput"));

var _FormTextarea = _interopRequireDefault(require("../../../src/atoms/FormTextarea/FormTextarea"));

var _Hamburger = _interopRequireDefault(require("../../../src/atoms/Hamburger/Hamburger"));

var _Accordion = _interopRequireDefault(require("../../../src/molecules/Accordion/Accordion"));

var _Carousel = _interopRequireDefault(require("../../../src/molecules/Carousel/Carousel"));

var _Map = _interopRequireDefault(require("../../../src/molecules/Map/Map"));

var _Modal = _interopRequireDefault(require("../../../src/molecules/Modal/Modal"));

var _RemoteCheck = _interopRequireDefault(require("../../../src/molecules/RemoteCheck/RemoteCheck"));

var _SearchBar = _interopRequireDefault(require("../../../src/molecules/SearchBar/SearchBar"));

var _Slider = _interopRequireDefault(require("../../../src/molecules/Slider/Slider"));

var _SelectNav = _interopRequireDefault(require("../../../src/molecules/SelectNav/SelectNav"));

var _Sidebar = _interopRequireDefault(require("../../../src/organisms/Sidebar/Sidebar"));

var _Contact = _interopRequireDefault(require("../../../src/organisms/Contact/Contact"));

var _Header = _interopRequireDefault(require("../../../src/organisms/Header/Header"));

var _Services = _interopRequireDefault(require("../../../src/organisms/Services/Services"));

var _ProductNav = _interopRequireDefault(require("../../../src/organisms/ProductNav/ProductNav"));

var Components = {
  LazyLoad: _LazyLoad["default"],
  OnLoadModal: _OnLoadModal["default"],
  FormCheckbox: _FormCheckbox["default"],
  FormFileInput: _FormFileInput["default"],
  FormInput: _FormInput["default"],
  FormTextarea: _FormTextarea["default"],
  Hamburger: _Hamburger["default"],
  Accordion: _Accordion["default"],
  Carousel: _Carousel["default"],
  Map: _Map["default"],
  Modal: _Modal["default"],
  RemoteCheck: _RemoteCheck["default"],
  SearchBar: _SearchBar["default"],
  Slider: _Slider["default"],
  SelectNav: _SelectNav["default"],
  Sidebar: _Sidebar["default"],
  Contact: _Contact["default"],
  Header: _Header["default"],
  Services: _Services["default"],
  ProductNav: _ProductNav["default"]
};

function buildComponent(that, type, data) {
  var options = data || {};
  var Component = Components[type];

  if (Component) {
    Component = new Component($(that), options);
    that.setComponent(type, Component);
    $(that).data("component".concat(type), Component).removeAttr("data-component").removeData("component");
  }
}

HTMLElement.prototype.getComponent = function (type) {
  var Component = this[type];

  if (Component) {
    return Component;
  }

  return undefined;
};

HTMLElement.prototype.setComponent = function (type, Component) {
  this[type] = Component;
};

window.initiateComponents = function () {
  $('[data-component]').each(function () {
    var data = $(this).data('component');

    if (Array.isArray(data)) {
      for (var i in data) {
        buildComponent(this, data[i].type, data[i]);
      }
    } else if ((0, _typeof2["default"])(data) == "object") {
      buildComponent(this, data.type, data);
    } else if (typeof data == "string") {
      buildComponent(this, data, $(this).data());
    }
  });
};

$(document).ready(function () {
  return initiateComponents();
});

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/assets/scripts/OnLoadModal":14,"../../../src/atoms/FormCheckbox/FormCheckbox":16,"../../../src/atoms/FormFileInput/FormFileInput":17,"../../../src/atoms/FormInput/FormInput":18,"../../../src/atoms/FormTextarea/FormTextarea":19,"../../../src/atoms/Hamburger/Hamburger":20,"../../../src/molecules/Accordion/Accordion":21,"../../../src/molecules/Carousel/Carousel":22,"../../../src/molecules/Map/Map":23,"../../../src/molecules/Modal/Modal":24,"../../../src/molecules/RemoteCheck/RemoteCheck":25,"../../../src/molecules/SearchBar/SearchBar":26,"../../../src/molecules/SelectNav/SelectNav":27,"../../../src/molecules/Slider/Slider":28,"../../../src/organisms/Contact/Contact":29,"../../../src/organisms/Header/Header":30,"../../../src/organisms/ProductNav/ProductNav":31,"../../../src/organisms/Services/Services":32,"../../../src/organisms/Sidebar/Sidebar":33,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormCheckbox = /*#__PURE__*/function () {
  function FormCheckbox(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormCheckbox);
    this.$el = el;
    this.$options = options;
    var defaults = {
      openModal: "b[data-fancyId]",
      body: ".m-scroll-box__body",
      mobileBody: ".m-modal__body" //modal-user-agreement-mobile

    };
    this.options = $.extend({}, defaults, options);
    this.openModal = this.$el.find(this.options.openModal);
    this.$el.on("click", this.options.openModal, function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(FormCheckbox, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      var modalId = $(event.target).data("fancyid");

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
  }]);
  return FormCheckbox;
}();

exports["default"] = FormCheckbox;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormFileInput = /*#__PURE__*/function () {
  function FormFileInput(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormFileInput);
    this.$el = el;
    var defaults = {
      selector: "input",
      text: ".a-file-input__text span"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$text = this.$el.find(this.options.text);
    this.$el.on("change", this.options.selector, function (event) {
      return _this.onChange(event);
    });
  }

  (0, _createClass2["default"])(FormFileInput, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var fileName = event.target.files[0].name;
      this.$text.text(fileName);
    }
  }]);
  return FormFileInput;
}();

exports["default"] = FormFileInput;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormInput = /*#__PURE__*/function () {
  function FormInput(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormInput);
    this.$el = el;
    var defaults = {
      selector: "> input"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onToggleShrink(event);
    }).on("input change", this.options.selector, function (event) {
      return _this.onChange(event);
    });

    if (this.isFilled(this.$selector)) {
      this.$selector.attr("data-dirty", true);
      this.$selector.data("dirty-important", true);
    }
  }

  (0, _createClass2["default"])(FormInput, [{
    key: "onToggleShrink",
    value: function onToggleShrink(event) {
      event.preventDefault();
      var target = $(event.target);

      if (this.isFilled(target)) {
        return;
      }

      if (target.data("dirty-important")) {
        target.attr("data-dirty", true);
        target.data("dirty-important", true);
      } else {
        target.attr("data-dirty", target.attr("data-dirty") === true);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var target = $(event.target);
      target.attr("data-dirty", target.data("dirty-important") ? true : this.isFilled(target));
      target.attr("value", target.val());
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    }
  }, {
    key: "isFilled",
    value: function isFilled(el) {
      return el && this.hasValue(el.val()) && el.val() !== "";
    }
  }]);
  return FormInput;
}();

exports["default"] = FormInput;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormTextarea = /*#__PURE__*/function () {
  function FormTextarea(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormTextarea);
    this.$el = el;
    var defaults = {
      selector: "> textarea"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onToggleShrink(event);
    }).on("input change", this.options.selector, function (event) {
      return _this.onChange(event);
    });
  }

  (0, _createClass2["default"])(FormTextarea, [{
    key: "onToggleShrink",
    value: function onToggleShrink(event) {
      event.preventDefault();
      var target = $(event.target);

      if (this.isFilled(target)) {
        return;
      }

      if (target.data("dirty-important")) {
        target.attr("data-dirty", true);
        target.data("dirty-important", true);
      } else {
        target.attr("data-dirty", target.attr("data-dirty") === true);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var target = $(event.target);
      target.attr("data-dirty", target.data("dirty-important") ? true : this.isFilled(target));
      target.attr("value", target.val());
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    }
  }, {
    key: "isFilled",
    value: function isFilled(el) {
      return el && this.hasValue(el.val()) && el.val() !== "";
    }
  }]);
  return FormTextarea;
}();

exports["default"] = FormTextarea;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Hamburger = /*#__PURE__*/function () {
  function Hamburger(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Hamburger);
    this.$el = el;
    var defaults = {
      className: "a-hamburger--open"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(Hamburger, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      this.$el.toggleClass(this.options.className);
      this.$el.trigger("hamburger.click");
    }
  }]);
  return Hamburger;
}();

exports["default"] = Hamburger;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Accordion = /*#__PURE__*/function () {
  function Accordion(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Accordion);
    this.$el = el;
    var defaults = {
      "accordionHeads": "> .m-accordion__container .m-accordion__head",
      "accordionBodies": "> .m-accordion__container .m-accordion__body",
      "activeClass": "m-accordion__head--active"
    };
    this.options = $.extend({}, defaults, options);
    this.accordionHeads = this.$el.find(this.options.accordionHeads);
    this.accordionBodies = this.$el.find(this.options.accordionbodies);
    this.activeClass = this.options.activeClass;
    this.showOnlyOne = this.options.showOnlyOne;
    this.$el.on("click", this.options.accordionHeads, function (e) {
      return _this.onClick(e);
    });
  }

  (0, _createClass2["default"])(Accordion, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      this.currTarget = $(e.currentTarget);

      if (this.showOnlyOne) {
        if (this.currTarget.hasClass(this.options.activeClass)) {
          this.currTarget.removeClass(this.options.activeClass);
        } else {
          this.accordionHeads.removeClass(this.activeClass);
          this.currTarget.addClass(this.options.activeClass);
        }
      } else {
        this.currTarget.toggleClass(this.activeClass);
      }

      this.$el.trigger("accordion.change");
    }
  }]);
  return Accordion;
}();

exports["default"] = Accordion;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Carousel = /*#__PURE__*/function () {
  function Carousel(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Carousel);
    this.$el = el;
    var defaults = {
      loop: true,
      grabCursor: false,
      followFinger: false,
      preloadImages: false,
      navigation: true,
      lazy: {
        loadPrevNext: true
      }
    };
    var slider = this.$el.find(".m-slider");
    var sliderData = slider.data("component");
    this.options = $.extend({}, defaults, options, sliderData);
    slider.data("component", this.options);
    this.$el.find(".m-slider").on('slideChange', function (e, index) {
      return _this.onSlideChange(index);
    });
    this.$el.find(".m-carousel__thumbs li").on('click', function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(Carousel, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      var slider = this.$el.find(".m-slider").data("componentSlider");
      var bullet = $(event.target).parent().index();
      slider.slideTo(bullet + 1);
    }
  }, {
    key: "onSlideChange",
    value: function onSlideChange(index) {
      try {
        var slider = this.$el.find(".m-slider").data("componentSlider");
        var bullets = this.$el.find(".a-bullets").data("componentBullets");
        bullets.setActive(slider.realIndex);
        var activeItem = $(slider.slides[slider.activeIndex]);
        activeItem.trigger("slider.change", this);
      } catch (e) {}
    }
  }]);
  return Carousel;
}();

exports["default"] = Carousel;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Map = /*#__PURE__*/function () {
  function Map(el, options) {
    (0, _classCallCheck2["default"])(this, Map);
    var $el = el;
    el = $el;
    this.$el = $el;
    var styles = [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e9e9e9"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#333333"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f2f2f2"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }];
    var defaults = {
      zoom: 15,
      center: new google.maps.LatLng(41.0428027, 28.9826327),
      url: '../../assets/data/Map.json',
      pin: options.pinmedia || '../../assets/images/content/pin.png'
    };
    defaults['styles'] = styles;
    this.options = $.extend({}, defaults, options);
    var pinStatus = !this.options.lat && !this.options.lng;
    this.map = new google.maps.Map(this.$el[0], this.options);

    if (pinStatus) {
      this.mapDataHandler();
    } else {
      this.options["markers"] = [{
        "coords": {
          "lat": this.options.lat,
          "lng": this.options.lng
        },
        "url": this.options.url,
        "content": this.options.content
      }];
    }

    google.maps.event.addDomListener(window, 'load', this.markerCreator());
  }

  (0, _createClass2["default"])(Map, [{
    key: "mapFocus",
    value: function mapFocus(place) {
      var newPlace = place.split(',');
      var position = new google.maps.LatLng(newPlace[0], newPlace[1]);
      this.bounds = new google.maps.LatLngBounds();
      this.bounds.extend(position);
      this.map.fitBounds(this.bounds);
      this.map.setZoom(11);
    }
  }, {
    key: "mapDataHandler",
    value: function mapDataHandler() {
      var _this = this;

      $.ajax({
        async: false,
        url: this.options.url ? this.options.url : this.defaults.url,
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        success: function success(data) {
          _this.options["markers"] = data;
        }
      });
    }
  }, {
    key: "markerCreator",
    value: function markerCreator() {
      var markers = this.options.markers;

      for (var i = 0; i < markers.length; i++) {
        this.addMarker(markers[i]);
      }
    }
  }, {
    key: "addMarker",
    value: function addMarker(props) {
      var marker = new google.maps.Marker({
        position: {
          lat: Number(props.coords.lat),
          lng: Number(props.coords.lng)
        },
        map: this.map,
        icon: this.options.pin ? this.options.pin : this.defaults.pin
      });
      marker.addListener('click', function () {
        $(document).trigger("map.click", props.id);
      });
    }
  }]);
  return Map;
}();

exports["default"] = Map;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Modal = function Modal(el, options) {
  (0, _classCallCheck2["default"])(this, Modal);
  this.$el = el;
  var defaults = {
    onLoad: false
  };
  this.options = $.extend({}, defaults, options);

  if (this.options.onLoad) {
    return $.fancybox.open(el.get(0));
  }
};

exports["default"] = Modal;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RemoteCheck = /*#__PURE__*/function () {
  function RemoteCheck(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, RemoteCheck);
    this.$el = el;
    var defaults = {
      "modal": ".m-modal",
      "label": ".a-checkbox"
    };
    this.options = $.extend({}, defaults, options);
    this.modal = this.$el.closest(this.options.modal);
    this.fancyId = "#" + this.modal.attr('id');
    this.label = $("[data-fancyid='" + this.fancyId + "']").closest(this.options.label);
    this.checkbox = this.label.find('input');
    this.$el.on("click", function (e) {
      return _this.onClick(e);
    });
  }

  (0, _createClass2["default"])(RemoteCheck, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      this.checkbox.prop('checked', true);
      this.checkbox.trigger('change');
      this.checkbox.parsley().destroy();
      $.fancybox.close();
    }
  }]);
  return RemoteCheck;
}();

exports["default"] = RemoteCheck;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SearchBar = /*#__PURE__*/function () {
  function SearchBar(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, SearchBar);
    this.$el = el;
    var defaults = {
      search: {
        toggle: "m-search-bar--open",
        trigger: ".js-close-search-bar"
      },
      icons: {
        self: ".js-search",
        toggle: "a-btn-icon--active"
      },
      input: "> input",
      form: ".m-form"
    };
    this.options = $.extend({}, defaults, options);
    this.icons = $(this.options.icons.self);
    this.$form = this.$el.find(this.options.form);
    this.$el.on("click", this.options.search.trigger, function (event) {
      return _this.onClick(event);
    }).on("keypress", this.options.input, function (event) {
      return _this.onKeypress(event);
    });
  }

  (0, _createClass2["default"])(SearchBar, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      this.$el.toggleClass(this.options.search.toggle);
      this.icons.toggleClass(this.options.icons.toggle);
    }
  }, {
    key: "onKeypress",
    value: function onKeypress(event) {
      if (event.keyCode == 13) {
        this.$form.submit();
      }
    }
  }]);
  return SearchBar;
}();

exports["default"] = SearchBar;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SelectNav = /*#__PURE__*/function () {
  function SelectNav(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, SelectNav);
    this.$el = el;
    var defaults = {
      select: ".a-select"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("change", this.options.select, function (event) {
      return _this.onChange(event);
    });
  }

  (0, _createClass2["default"])(SelectNav, [{
    key: "onChange",
    value: function onChange(event) {
      var url = $(event.target).val();
      window.location.href = url;
    }
  }]);
  return SelectNav;
}();

exports["default"] = SelectNav;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Slider = /*#__PURE__*/function (_Swiper) {
  (0, _inherits2["default"])(Slider, _Swiper);

  var _super = _createSuper(Slider);

  function Slider(el, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    var $el = el;
    var $slider = el.find(".m-slider__swiper");
    var defaults = {
      loop: false,
      on: {
        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
          return $el.trigger("slideChangeTransitionEnd");
        },
        slideChange: function slideChange() {
          return $el.trigger("slideChange");
        },
        init: function init() {
          return $el.trigger("init");
        },
        touchEnd: function touchEnd() {
          return $el.trigger("touchEnd");
        },
        reachEnd: function reachEnd() {
          return $el.trigger("reachEnd");
        },
        reachBeginning: function reachBeginning() {
          return $el.trigger("reachBeginning");
        }
      }
    };

    if (options.navigation) {
      options.nav = {
        nextEl: '> .m-slider__next',
        prevEl: '> .m-slider__prev',
        disabledClass: "a-btn-icon--disabled"
      };
    }

    if (options.pagination) {
      options.pagination = {
        el: $el.find('.swiper-pagination'),
        type: 'bullets',
        clickable: true
      };
    }

    options = $.extend({}, defaults, options);
    el = $el;
    _this = _super.call(this, $slider.get(0), options);
    _this.$el = $el;
    _this.options = options;

    if (options.nav) {
      _this.$nextEl = _this.$el.find(_this.options.nav.nextEl);
      _this.$prevEl = _this.$el.find(_this.options.nav.prevEl);

      _this.$el.on("click", _this.options.nav.nextEl, function () {
        return _this.slideNext();
      }).on("click", _this.options.nav.prevEl, function () {
        return _this.slidePrev();
      }).on('slideChange', function () {
        return _this.onSlideChange();
      });

      if (!options.loop) {
        _this.$prevEl.addClass(_this.options.nav.disabledClass);
      }
    }

    if (options.autoplay) {
      $el.on("mouseenter", function () {
        return _this.onMouseEnter();
      }).on("mouseleave", function () {
        return _this.onMouseLeave();
      });
    }

    if (_this.slides.length <= _this.params.slidesPerView) {
      _this.$el.addClass("m-slider--hidden-nav");
    }

    _this.$el.on("click", "[data-location-href]", function (e) {
      return _this.onClickItem(e);
    });

    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "onClickItem",
    value: function onClickItem(e) {
      if (!$(e.target).is("a")) {
        var target = $(e.currentTarget);
        var data = target.data();

        if (data.locationHref) {
          window.location.href = data.locationHref;
        }
      }
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.slides.length - this.loopedSlides * 2;
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this.autoplay.stop();
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.autoplay.start();
    }
  }, {
    key: "onSlideChange",
    value: function onSlideChange() {
      this.$prevEl.removeClass(this.options.nav.disabledClass);
      this.$nextEl.removeClass(this.options.nav.disabledClass);
      var activeItem = $(this.slides[this.activeIndex]);
      var animatedItems = activeItem.find("[data-animation]");
      $.each(animatedItems, function (i, item) {
        var className = $(item).data("animation");
        $(item).removeClass(className);
        setTimeout(function () {
          $(item).addClass(className);
        }, 1);
      });

      if (this.options.loop) {
        return;
      }

      if (this.isBeginning) {
        this.$prevEl.addClass(this.options.nav.disabledClass);
      }

      if (this.isEnd) {
        this.$nextEl.addClass(this.options.nav.disabledClass);
      }
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Slider.prototype), "slidePrev", this).call(this);
      this.$prevEl.removeClass(this.options.nav.disabledClass);
      this.$nextEl.removeClass(this.options.nav.disabledClass);

      if (this.options.loop) {
        return;
      }

      if (this.isBeginning) {
        this.$prevEl.addClass(this.options.nav.disabledClass);
      }
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Slider.prototype), "slideNext", this).call(this);
      this.$prevEl.removeClass(this.options.nav.disabledClass);
      this.$nextEl.removeClass(this.options.nav.disabledClass);

      if (this.options.loop) {
        return;
      }

      if (this.isEnd) {
        this.$nextEl.addClass(this.options.nav.disabledClass);
      }
    }
  }]);
  return Slider;
}(Swiper);

exports["default"] = Slider;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/get":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Contact = /*#__PURE__*/function () {
  function Contact(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Contact);
    this.$el = el;
    var defaults = {
      map: "#map",
      tab: ".m-tab-default",
      tabItem: ".m-tab-default__item--active"
    };
    this.options = $.extend({}, defaults, options);
    $(document).on("map.click", function (event, id) {
      return _this.onClickMap(event, id);
    }).on("tab.show", function (event, index) {
      return _this.onChangeTab(event, index);
    });
    setTimeout(function () {
      _this.onInitMap();
    }, 200);
  }

  (0, _createClass2["default"])(Contact, [{
    key: "onInitMap",
    value: function onInitMap() {
      var coord = this.$el.find(this.options.tabItem).find("> a").data("coord");
      var map = this.$el.find(this.options.map).data("componentMap");
      map.mapFocus(coord);
    }
  }, {
    key: "onChangeTab",
    value: function onChangeTab(event, index) {
      this.onInitMap();
    }
  }, {
    key: "onClickMap",
    value: function onClickMap(event, id) {
      this.$tabs = this.$el.find(this.options.tab);
      var tabs = this.$tabs.data("componentTabDefault");
      var tab = this.$tabs.find("a[href=\"#".concat(id, "\"]")).parent();
      tabs.setActive(tab.index());
    }
  }]);
  return Contact;
}();

exports["default"] = Contact;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Header = /*#__PURE__*/function () {
  function Header(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Header);
    this.$el = el;
    var defaults = {
      hamburger: ".a-hamburger",
      shadow: ".a-shadow",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        item: "nav > ul > li span",
        active: "m-nav--active"
      },
      search: {
        self: ".m-search-bar",
        trigger: ".js-search-header",
        "class": "m-search-bar--open"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$searchBar = $(this.options.search.self);
    this.$shadow = $(this.options.shadow);
    this.$el.on("click", this.options.nav.item, function (event) {
      return _this.onClickDropdown(event);
    }).on("click", this.options.search.trigger, function (event) {
      return _this.onClickSearch(event);
    });
    $(document).on("hamburger.click", function (event) {
      return _this.onClickHamburger(event);
    }).on("click", this.options.shadow, function () {
      return _this.closeAll();
    });
  }

  (0, _createClass2["default"])(Header, [{
    key: "closeAll",
    value: function closeAll() {
      this.$el.removeClass(this.options.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
      this.$searchBar.removeClass(this.options.search["class"]);
      $("html").removeClass('disable-scroll');
    }
  }, {
    key: "onClickDropdown",
    value: function onClickDropdown(event) {
      var $target = $(event.currentTarget);

      if ($target.next("ul").length) {
        event.preventDefault();
        var $parent = $target.parent();

        if (!$parent.hasClass(this.options.nav.active)) {
          $(this.options.nav.item).parent().removeClass(this.options.nav.active);
          $parent.addClass(this.options.nav.active);
        } else {
          $parent.removeClass(this.options.nav.active);
        }
      }
    }
  }, {
    key: "onClickSearch",
    value: function onClickSearch(event) {
      event.preventDefault();
      this.$searchBar.toggleClass(this.options.search["class"]);
      this.$nav.removeClass(this.options.nav.toggle);
      this.$hamburger.removeClass('a-hamburger--open');

      if (this.$searchBar.hasClass(this.options.search["class"])) {
        $("html").addClass('disable-scroll');
        this.$el.addClass('o-header--opened');
      } else {
        $("html").removeClass('disable-scroll');
        this.$el.removeClass('o-header--opened');
      }
    }
  }, {
    key: "onClickHamburger",
    value: function onClickHamburger(event) {
      var windowWidth = $(window).width();

      if (windowWidth < 769) {
        event.preventDefault();
        this.$nav.toggleClass(this.options.nav.toggle);
        this.$searchBar.removeClass(this.options.search["class"]);

        if (this.$nav.hasClass(this.options.nav.toggle)) {
          $("html").addClass('disable-scroll');
          this.$el.addClass('o-header--opened');
        } else {
          $("html").removeClass('disable-scroll');
          this.$el.removeClass('o-header--opened');
        }
      }
    }
  }]);
  return Header;
}();

exports["default"] = Header;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ProductNav = /*#__PURE__*/function () {
  function ProductNav(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, ProductNav);
    this.$el = el;
    var defaults = {
      main: ".o-product-nav-main__icons a",
      mainActive: ".o-product-nav-main__icons a.active",
      list: ".o-product-nav__list a",
      shadow: ".a-shadow"
    };
    this.options = $.extend({}, defaults, options);
    this.$shadow = $(this.options.shadow);
    this.$main = this.$el.find(this.options.main);
    this.$active = this.$el.find(this.options.mainActive);
    this.$el.on("click mouseenter", this.options.main, function (event) {
      return _this.onClickMain(event);
    }).on("click mouseenter", this.options.list, function (event) {
      return _this.onClickList(event);
    });
    $(document).on("click", this.options.shadow, function () {
      return _this.closeAll();
    });
  }

  (0, _createClass2["default"])(ProductNav, [{
    key: "closeAll",
    value: function closeAll() {
      this.$el.removeClass("o-product-nav--open");
      this.$shadow.removeClass('a-shadow--open');
      this.$main.removeClass("active");
      this.$active.addClass("active");
    }
  }, {
    key: "onClickMain",
    value: function onClickMain(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $hash = $($target.attr("href"));
      var $subHash = $($hash.attr('href'));
      this.$el.addClass("o-product-nav--open");
      $target.addClass("active").siblings().removeClass("active");
      $hash.addClass("active").siblings().removeClass("active");
      $subHash.show().siblings().hide();
      this.$shadow.addClass('a-shadow--open');
    }
  }, {
    key: "onClickList",
    value: function onClickList(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $parent = $("a[href$='".concat($target.attr("id"), "']"));
      var $subHash = $($target.attr('href'));
      this.$el.addClass("o-product-nav--open");
      $target.addClass("active").siblings().removeClass("active");
      $parent.addClass("active").siblings().removeClass("active");
      $subHash.show().siblings().hide();
      this.$shadow.addClass('a-shadow--open');
    }
  }]);
  return ProductNav;
}();

exports["default"] = ProductNav;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Services = /*#__PURE__*/function () {
  function Services(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Services);
    this.$el = el;
    var defaults = {
      pagination: ".o-services__image .swiper-pagination-bullet"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", this.options.pagination, function (event) {
      return _this.onClick(event);
    });
    var productCarouselText = new Swiper(".o-services__text .m-slider__swiper", {
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: false,
      allowTouchMove: false,
      lazy: {
        loadPrevNext: true
      },
      pagination: {
        el: ".o-services .swiper-pagination",
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      }
    });
    this.productCarouselImage = new Swiper(".o-services__image .m-slider__swiper", {
      slidesPerView: "auto",
      direction: "vertical",
      slideToClickedSlide: false,
      spaceBetween: 30,
      autoHeight: false,
      centeredSlides: true,
      loop: true,
      lazy: {
        loadPrevNext: true
      },
      thumbs: {
        swiper: productCarouselText
      },
      navigation: {
        nextEl: ".o-services .m-slider__next",
        prevEl: ".o-services .m-slider__prev"
      },
      breakpoints: {
        990: {
          autoHeight: true,
          spaceBetween: 20,
          direction: "horizontal"
        }
      }
    });
  }

  (0, _createClass2["default"])(Services, [{
    key: "onClick",
    value: function onClick(event) {
      var $target = $(event.currentTarget);
      this.productCarouselImage.slideTo($target.index(), 100);
    }
  }]);
  return Services;
}();

exports["default"] = Services;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Sidebar);
    this.$el = el;
    var defaults = {
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
        "class": "m-search-bar--open"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$shadow = $(this.options.shadow);
    this.$searchBar = $(this.options.search.self);
    this.$el.on("click", this.options.nav.item, function (event) {
      return _this.onClickNav(event);
    }).on("click", this.options.nav.link, function (event) {
      return _this.onClickLink(event);
    }).on("click", this.options.search.trigger, function (event) {
      return _this.onClickSearch(event);
    });
    $(document).on("hamburger.click", function (event) {
      return _this.onClickHamburger(event);
    }).on("click", this.options.shadow, function () {
      return _this.closeAll();
    });
    $(window).resize(function () {
      return _this.windowResize();
    });
  }

  (0, _createClass2["default"])(Sidebar, [{
    key: "windowResize",
    value: function windowResize() {
      var windowWidth = $(window).width();

      if (windowWidth < 769) {
        this.closeAll();
      }
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      this.$el.removeClass(this.options.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
      this.$searchBar.removeClass(this.options.search["class"]);
    }
  }, {
    key: "onClickNav",
    value: function onClickNav(event) {
      var $target = $(event.currentTarget);

      if ($target.next("ul").length) {
        event.preventDefault();
        var $parent = $target.parent();

        if (!$parent.hasClass(this.options.nav.active)) {
          $(this.options.nav.item).parent().removeClass(this.options.nav.active);
          $parent.addClass(this.options.nav.active);
        } else {
          $parent.removeClass(this.options.nav.active);
        }
      }
    }
  }, {
    key: "onClickLink",
    value: function onClickLink(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var url = $target.find("a").attr("href");
      window.location.href = url;
    }
  }, {
    key: "onClickSearch",
    value: function onClickSearch(event) {
      event.preventDefault();
      this.$searchBar.toggleClass(this.options.search["class"]);
      this.$el.removeClass(this.options.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
    }
  }, {
    key: "onClickHamburger",
    value: function onClickHamburger(event) {
      var windowWidth = $(window).width();

      if (windowWidth > 768) {
        event.preventDefault();
        this.$el.toggleClass(this.options.toggle);
        this.$searchBar.removeClass(this.options.search["class"]);
      }
    }
  }]);
  return Sidebar;
}();

exports["default"] = Sidebar;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveC5lczYiLCJzcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhLmVzNiIsInNyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyLmVzNiIsInNyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbi5lczYiLCJzcmMvbW9sZWN1bGVzL0Nhcm91c2VsL0Nhcm91c2VsLmVzNiIsInNyYy9tb2xlY3VsZXMvTWFwL01hcC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsLmVzNiIsInNyYy9tb2xlY3VsZXMvUmVtb3RlQ2hlY2svUmVtb3RlQ2hlY2suZXM2Iiwic3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyLmVzNiIsInNyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdi5lczYiLCJzcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QuZXM2Iiwic3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyLmVzNiIsInNyYy9vcmdhbmlzbXMvUHJvZHVjdE5hdi9Qcm9kdWN0TmF2LmVzNiIsInNyYy9vcmdhbmlzbXMvU2VydmljZXMvU2VydmljZXMuZXM2Iiwic3JjL29yZ2FuaXNtcy9TaWRlYmFyL1NpZGViYXIuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TUFBQSxNQUFNLENBQUMsUUFBUCxDQUFnQixJQUFoQixHQUF1QixHQUF2QjtBQUNEOzs7V0FFRCx1QkFBYyxLQUFkLEVBQXFCO0FBQ25CLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxPQUFMLENBQWEsTUFBYixTQUE1QjtBQUNBLFdBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQWEsTUFBbEM7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsbUJBQTVCO0FBQ0Q7OztXQUVELDBCQUFpQixLQUFqQixFQUF3QjtBQUN0QixVQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsS0FBVixFQUFwQjs7QUFFQSxVQUFJLFdBQVcsR0FBRyxHQUFsQixFQUF1QjtBQUNyQixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsYUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxNQUFsQztBQUNBLGFBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLE9BQUwsQ0FBYSxNQUFiLFNBQTVCO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiY29uc3Qgc2hyaW5rSGVhZGVyID0gNTIwO1xuY29uc3QgJHRyYW5zcGFyZW50ID0gJChcIi5vLWhlYWRlci0tdHJhbnNwYXJlbnRcIik7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JvbGwoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbn1cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICBjb25zdCBlID0gZ2V0Q3VycmVudFNjcm9sbCgpO1xuICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gIGlmICgkdHJhbnNwYXJlbnQubGVuZ3RoICYmIHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgc2hyaW5rSGVhZGVyIDw9IGUgP1xuICAgICAgJChcIi5vLWhlYWRlclwiKS5yZW1vdmVDbGFzcyhcIm8taGVhZGVyLS10cmFuc3BhcmVudFwiKS5yZW1vdmVDbGFzcyhcIm8taGVhZGVyLS13aGl0ZVwiKSA6XG4gICAgICAkKFwiLm8taGVhZGVyXCIpLmFkZENsYXNzKFwiby1oZWFkZXItLXRyYW5zcGFyZW50XCIpLmFkZENsYXNzKFwiby1oZWFkZXItLXdoaXRlXCIpO1xuICB9XG59KVxuXG53aW5kb3cuUGFyc2xleS5hZGRWYWxpZGF0b3IoJ21heEZpbGVTaXplJywge1xuICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gKF92YWx1ZSwgbWF4U2l6ZSwgcGFyc2xleUluc3RhbmNlKSB7XG4gICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBwYXJzbGV5SW5zdGFuY2UuJGVsZW1lbnRbMF0uZmlsZXM7XG4gICAgcmV0dXJuIGZpbGVzLmxlbmd0aCAhPSAxIHx8IGZpbGVzWzBdLnNpemUgPD0gbWF4U2l6ZSAqIDEwMjQ7XG4gIH0sXG4gIHJlcXVpcmVtZW50VHlwZTogJ2ludGVnZXInLFxuICBtZXNzYWdlczoge1xuICAgIHRyOiAnTWF4LiBkb3N5YSBib3l1dHUgJXMgS2IuIG9sYW1hbMSxZMSxcidcbiAgfVxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxheC5zZXR1cCh7XG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIHNtYWxsOiAwLFxuICAgICAgbGFyZ2U6IDc2OFxuICAgIH1cbiAgfSlcblxuICBjb25zdCB1cGRhdGVMYXggPSAoKSA9PiB7XG4gICAgbGF4LnVwZGF0ZSh3aW5kb3cuc2Nyb2xsWSlcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUxheClcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwibGF6eWJlZm9yZXVudmVpbFwiLCB0aGlzLm9wdGlvbnMuc3BlZWNoQnV0dG9uLCBldmVudCA9PiB0aGlzLm9uTGF6eUJlZm9yZVVudmVpbChldmVudCkpO1xuXG4gIH1cblxuICBvbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpIHtcbiAgICBjb25zdCBsYXp5RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbGF6eUVsZW1lbnQuYXR0ciggXCJkYXRhLWJhY2tncm91bmRcIiApO1xuICAgIGlmICggYmFja2dyb3VuZCApIHtcbiAgICAgIGxhenlFbGVtZW50LmNzcyh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTGF6eUxvYWQoKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuY2xhc3MgT25Mb2FkTW9kYWwge1xuICBzdGF0aWMgb25Mb2FkTW9kYWwoKSB7XG4gICAgY29uc3QgaGFzaCA9ICQobG9jYXRpb24pLmF0dHIoXCJoYXNoXCIpO1xuXG4gICAgc3dpdGNoIChoYXNoKSB7XG4gICAgICBjYXNlIFwiI2Vycm9yTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcImVycm9yXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIiNzdWNjZXNzTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcInN1Y2Nlc3NcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtb2RhbFR5cGUodHlwZSkge1xuICAgIGlmICgkKGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gKS5sZW5ndGggPiAwKSB7XG4gICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICBzcmM6IGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gLFxuICAgICAgICBiYXNlQ2xhc3M6IGBmYW5jeWJveC0tJHt0eXBlfSBtLW1vZGFsLS1hbGVydGAsXG4gICAgICAgIHRvdWNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPbkxvYWRNb2RhbCgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBPbkxvYWRNb2RhbC5vbkxvYWRNb2RhbCgpKTtcbiIsImltcG9ydCBHZW5lcmFsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsJztcbmltcG9ydCBMYXp5TG9hZCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQnO1xuaW1wb3J0IE9uTG9hZE1vZGFsICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsJztcblxuaW1wb3J0IEZvcm1DaGVja2JveCAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtQ2hlY2tib3gvRm9ybUNoZWNrYm94JztcbmltcG9ydCBGb3JtRmlsZUlucHV0ICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0JztcbmltcG9ydCBGb3JtSW5wdXQgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dCc7XG5pbXBvcnQgRm9ybVRleHRhcmVhICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEnO1xuaW1wb3J0IEhhbWJ1cmdlciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyJztcblxuaW1wb3J0IEFjY29yZGlvbiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbCc7XG5pbXBvcnQgTWFwICAgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9NYXAvTWFwJztcbmltcG9ydCBNb2RhbCAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsJztcbmltcG9ydCBSZW1vdGVDaGVjayAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1JlbW90ZUNoZWNrL1JlbW90ZUNoZWNrJztcbmltcG9ydCBTZWFyY2hCYXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IFNsaWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2xpZGVyL1NsaWRlcic7XG5pbXBvcnQgU2VsZWN0TmF2ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TZWxlY3ROYXYvU2VsZWN0TmF2JztcblxuaW1wb3J0IFNpZGViYXIgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBDb250YWN0ICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0NvbnRhY3QvQ29udGFjdCc7XG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBTZXJ2aWNlcyAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NlcnZpY2VzL1NlcnZpY2VzJztcbmltcG9ydCBQcm9kdWN0TmF2ICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1Byb2R1Y3ROYXYvUHJvZHVjdE5hdic7XG5cbmNvbnN0IENvbXBvbmVudHMgPSB7XG4gIExhenlMb2FkLFxuICBPbkxvYWRNb2RhbCxcblxuICBGb3JtQ2hlY2tib3gsXG4gIEZvcm1GaWxlSW5wdXQsXG4gIEZvcm1JbnB1dCxcbiAgRm9ybVRleHRhcmVhLFxuICBIYW1idXJnZXIsXG5cbiAgQWNjb3JkaW9uLFxuICBDYXJvdXNlbCxcbiAgTWFwLFxuICBNb2RhbCxcbiAgUmVtb3RlQ2hlY2ssXG4gIFNlYXJjaEJhcixcbiAgU2xpZGVyLFxuICBTZWxlY3ROYXYsXG4gIFxuICBTaWRlYmFyLFxuICBDb250YWN0LFxuICBIZWFkZXIsXG4gIFNlcnZpY2VzLFxuICBQcm9kdWN0TmF2LFxufTtcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoIHRoYXQsIHR5cGUsIGRhdGEgKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBkYXRhIHx8IHt9O1xuICBsZXQgQ29tcG9uZW50ID0gQ29tcG9uZW50c1t0eXBlXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgkKHRoYXQpLCBvcHRpb25zKTtcbiAgICB0aGF0LnNldENvbXBvbmVudCggdHlwZSwgQ29tcG9uZW50KTtcbiAgICAkKHRoYXQpLmRhdGEoYGNvbXBvbmVudCR7dHlwZX1gLCBDb21wb25lbnQpLnJlbW92ZUF0dHIoXCJkYXRhLWNvbXBvbmVudFwiKS5yZW1vdmVEYXRhKFwiY29tcG9uZW50XCIpO1xuICB9XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGhpc1sgdHlwZSBdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSwgQ29tcG9uZW50ICkge1xuICB0aGlzW3R5cGVdID0gQ29tcG9uZW50O1xufVxuXG53aW5kb3cuaW5pdGlhdGVDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gICQoJ1tkYXRhLWNvbXBvbmVudF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCB0aGlzICkuZGF0YSgnY29tcG9uZW50Jyk7XG4gICAgaWYgKCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG4gICAgICBmb3IoIHZhciBpIGluIGRhdGEgKSB7XG4gICAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEudHlwZSwgZGF0YSApO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YSwgJCggdGhpcyApLmRhdGEoKSApO1xuICAgIH1cblxuICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdGlhdGVDb21wb25lbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNoZWNrYm94IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvcGVuTW9kYWw6IFwiYltkYXRhLWZhbmN5SWRdXCIsXG4gICAgICBib2R5OiBcIi5tLXNjcm9sbC1ib3hfX2JvZHlcIixcbiAgICAgIG1vYmlsZUJvZHk6IFwiLm0tbW9kYWxfX2JvZHlcIlxuICAgICAgLy9tb2RhbC11c2VyLWFncmVlbWVudC1tb2JpbGVcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMub3Blbk1vZGFsKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm9wZW5Nb2RhbCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJChldmVudC50YXJnZXQpLmRhdGEoXCJmYW5jeWlkXCIpO1xuXG4gICAgaWYgKG1vZGFsSWQgPT0gXCIjbW9kYWwtdXNlci1hZ3JlZW1lbnRcIikge1xuICAgICAgdGhpcy4kYm9keSA9ICQobW9kYWxJZCkuZmluZCh0aGlzLm9wdGlvbnMuYm9keSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGFsSWQgPT0gXCIjbW9kYWwtY29udGFjdFwiKSB7XG4gICAgICB0aGlzLiRib2R5ID0gJChtb2RhbElkKS5maW5kKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICB9XG5cbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgc3JjOiBtb2RhbElkLFxuICAgICAgYnV0dG9uczogW10sXG4gICAgICBzbWFsbEJ0bjogdHJ1ZSxcbiAgICAgIHRvdWNoOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmlsZUlucHV0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCJpbnB1dFwiLFxuICAgICAgdGV4dDogXCIuYS1maWxlLWlucHV0X190ZXh0IHNwYW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgdGhpcy4kdGV4dCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRleHQpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICB0aGlzLiR0ZXh0LnRleHQoZmlsZU5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/IHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gdGV4dGFyZWFcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/ICB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuXG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBcImEtaGFtYnVyZ2VyLS1vcGVuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJoYW1idXJnZXIuY2xpY2tcIik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJhY2NvcmRpb25IZWFkc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19oZWFkXCIsXG4gICAgICBcImFjY29yZGlvbkJvZGllc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19ib2R5XCIsXG4gICAgICBcImFjdGl2ZUNsYXNzXCI6IFwibS1hY2NvcmRpb25fX2hlYWQtLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmFjY29yZGlvbkhlYWRzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMpO1xuICAgIHRoaXMuYWNjb3JkaW9uQm9kaWVzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uYm9kaWVzKTtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gdGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzO1xuICAgIHRoaXMuc2hvd09ubHlPbmUgPSB0aGlzLm9wdGlvbnMuc2hvd09ubHlPbmU7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jdXJyVGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuc2hvd09ubHlPbmUpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJUYXJnZXQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKSkge1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMucmVtb3ZlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJUYXJnZXQudG9nZ2xlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImFjY29yZGlvbi5jaGFuZ2VcIik7XG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICBmb2xsb3dGaW5nZXI6IGZhbHNlLFxuICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIik7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHNsaWRlckRhdGEpO1xuXG4gICAgc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIilcbiAgICAgIC5vbignc2xpZGVDaGFuZ2UnLCAoZSwgaW5kZXgpID0+IHRoaXMub25TbGlkZUNoYW5nZShpbmRleCkpXG4gICAgdGhpcy4kZWwuZmluZChcIi5tLWNhcm91c2VsX190aHVtYnMgbGlcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgY29uc3QgYnVsbGV0ID0gJChldmVudC50YXJnZXQpLnBhcmVudCgpLmluZGV4KClcblxuICAgIHNsaWRlci5zbGlkZVRvKGJ1bGxldCArIDEpXG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKGluZGV4KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIikuZGF0YShcImNvbXBvbmVudFNsaWRlclwiKTtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLiRlbC5maW5kKFwiLmEtYnVsbGV0c1wiKS5kYXRhKFwiY29tcG9uZW50QnVsbGV0c1wiKTtcbiAgICAgIGJ1bGxldHMuc2V0QWN0aXZlKHNsaWRlci5yZWFsSW5kZXgpO1xuXG4gICAgICBjb25zdCBhY3RpdmVJdGVtID0gJChzbGlkZXIuc2xpZGVzW3NsaWRlci5hY3RpdmVJbmRleF0pO1xuXG4gICAgICBhY3RpdmVJdGVtLnRyaWdnZXIoXCJzbGlkZXIuY2hhbmdlXCIsIHRoaXMpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGVsID0gJGVsO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICBjb25zdCBzdHlsZXMgPSBbe1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2U5ZTllOVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDI5XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDAuMlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkZWRlZGVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgfSwge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDM2XG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfSwge1xuICAgICAgICBcIndlaWdodFwiOiAxLjJcbiAgICAgIH1dXG4gICAgfV07XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHpvb206IDE1LFxuICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQxLjA0MjgwMjcsIDI4Ljk4MjYzMjcpLFxuICAgICAgdXJsOiAnLi4vLi4vYXNzZXRzL2RhdGEvTWFwLmpzb24nLFxuICAgICAgcGluOiBvcHRpb25zLnBpbm1lZGlhIHx8ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvcGluLnBuZycsXG4gICAgfTtcblxuICAgIGRlZmF1bHRzWydzdHlsZXMnXSA9IHN0eWxlcztcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBwaW5TdGF0dXMgPSAhdGhpcy5vcHRpb25zLmxhdCAmJiAhdGhpcy5vcHRpb25zLmxuZztcblxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLiRlbFswXSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChwaW5TdGF0dXMpIHtcbiAgICAgIHRoaXMubWFwRGF0YUhhbmRsZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zW1wibWFya2Vyc1wiXSA9IFt7XG4gICAgICAgIFwiY29vcmRzXCI6IHtcbiAgICAgICAgICBcImxhdFwiOiB0aGlzLm9wdGlvbnMubGF0LFxuICAgICAgICAgIFwibG5nXCI6IHRoaXMub3B0aW9ucy5sbmdcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjogdGhpcy5vcHRpb25zLnVybCxcbiAgICAgICAgXCJjb250ZW50XCI6IHRoaXMub3B0aW9ucy5jb250ZW50XG4gICAgICB9XVxuICAgIH1cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgdGhpcy5tYXJrZXJDcmVhdG9yKCkpO1xuICB9XG5cbiAgbWFwRm9jdXMocGxhY2UpIHtcbiAgICBjb25zdCBuZXdQbGFjZSA9IHBsYWNlLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld1BsYWNlWzBdLCBuZXdQbGFjZVsxXSk7XG4gICAgdGhpcy5ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgdGhpcy5ib3VuZHMuZXh0ZW5kKHBvc2l0aW9uKTtcblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSgxMSk7XG4gIH1cblxuICBtYXBEYXRhSGFuZGxlcigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsID8gdGhpcy5vcHRpb25zLnVybCA6IHRoaXMuZGVmYXVsdHMudXJsLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcmtlckNyZWF0b3IoKSB7XG4gICAgY29uc3QgbWFya2VycyA9IHRoaXMub3B0aW9ucy5tYXJrZXJzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXJrZXJzW2ldKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXJrZXIocHJvcHMpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxhdDogTnVtYmVyKHByb3BzLmNvb3Jkcy5sYXQpLFxuICAgICAgICBsbmc6IE51bWJlcihwcm9wcy5jb29yZHMubG5nKVxuICAgICAgfSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICBpY29uOiB0aGlzLm9wdGlvbnMucGluID8gdGhpcy5vcHRpb25zLnBpbiA6IHRoaXMuZGVmYXVsdHMucGluLFxuICAgIH0pO1xuXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJtYXAuY2xpY2tcIiwgcHJvcHMuaWQpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9uTG9hZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMub25Mb2FkKSB7XG4gICAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGVsLmdldCgwKSk7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RlQ2hlY2sge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwibW9kYWxcIiA6IFwiLm0tbW9kYWxcIixcbiAgICAgIFwibGFiZWxcIjogXCIuYS1jaGVja2JveFwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5tb2RhbCA9IHRoaXMuJGVsLmNsb3Nlc3QodGhpcy5vcHRpb25zLm1vZGFsKTtcbiAgICB0aGlzLmZhbmN5SWQgPSBcIiNcIiArIHRoaXMubW9kYWwuYXR0cignaWQnKTtcbiAgICB0aGlzLmxhYmVsID0gJChcIltkYXRhLWZhbmN5aWQ9J1wiICsgdGhpcy5mYW5jeUlkICsgXCInXVwiKS5jbG9zZXN0KHRoaXMub3B0aW9ucy5sYWJlbCk7XG4gICAgdGhpcy5jaGVja2JveCA9IHRoaXMubGFiZWwuZmluZCgnaW5wdXQnKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICB0aGlzLmNoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIHRoaXMuY2hlY2tib3gucGFyc2xleSgpLmRlc3Ryb3koKVxuICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgdG9nZ2xlOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1jbG9zZS1zZWFyY2gtYmFyXCIsXG4gICAgICB9LFxuICAgICAgaWNvbnM6IHtcbiAgICAgICAgc2VsZjogXCIuanMtc2VhcmNoXCIsXG4gICAgICAgIHRvZ2dsZTogXCJhLWJ0bi1pY29uLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGlucHV0OiBcIj4gaW5wdXRcIixcbiAgICAgIGZvcm06IFwiLm0tZm9ybVwiXG4gICAgfTtcbiAgICBcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuaWNvbnMgPSAkKHRoaXMub3B0aW9ucy5pY29ucy5zZWxmKTtcbiAgICB0aGlzLiRmb3JtID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuZm9ybSk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuICAgICAgLm9uKFwia2V5cHJlc3NcIiwgdGhpcy5vcHRpb25zLmlucHV0LCBldmVudCA9PiB0aGlzLm9uS2V5cHJlc3MoZXZlbnQpKVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLnRvZ2dsZSlcbiAgICB0aGlzLmljb25zLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5pY29ucy50b2dnbGUpXG4gIH1cblxuICBvbktleXByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIHRoaXMuJGZvcm0uc3VibWl0KClcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE5hdiB7XG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gIFxuICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICBcbiAgICAgIHRoaXMuJGVsLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKVxuICAgIH1cbiAgXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHVybCA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICB9XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgU3dpcGVyIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGNvbnN0ICRzbGlkZXIgPSBlbC5maW5kKFwiLm0tc2xpZGVyX19zd2lwZXJcIik7XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogKCkgPT4gICRlbC50cmlnZ2VyKFwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kXCIpLFxuICAgICAgICBzbGlkZUNoYW5nZTogKCkgPT4gICRlbC50cmlnZ2VyKFwic2xpZGVDaGFuZ2VcIiksXG4gICAgICAgIGluaXQ6ICgpID0+ICAkZWwudHJpZ2dlcihcImluaXRcIiksXG4gICAgICAgIHRvdWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInRvdWNoRW5kXCIpLFxuICAgICAgICByZWFjaEVuZDogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEVuZFwiKSxcbiAgICAgICAgcmVhY2hCZWdpbm5pbmc6ICgpID0+ICRlbC50cmlnZ2VyKFwicmVhY2hCZWdpbm5pbmdcIiksXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICggb3B0aW9ucy5uYXZpZ2F0aW9uICkge1xuICAgICAgb3B0aW9ucy5uYXYgPSB7XG4gICAgICAgIG5leHRFbDogJz4gLm0tc2xpZGVyX19uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnPiAubS1zbGlkZXJfX3ByZXYnLFxuICAgICAgICBkaXNhYmxlZENsYXNzOiBcImEtYnRuLWljb24tLWRpc2FibGVkXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIG9wdGlvbnMucGFnaW5hdGlvbiApIHtcbiAgICAgIG9wdGlvbnMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgZWw6ICRlbC5maW5kKCcuc3dpcGVyLXBhZ2luYXRpb24nKSxcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBlbCA9ICRlbDtcblxuICAgIHN1cGVyKCRzbGlkZXIuZ2V0KDApLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIG9wdGlvbnMubmF2ICkge1xuICAgICAgdGhpcy4kbmV4dEVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwgKTtcbiAgICAgIHRoaXMuJHByZXZFbCA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy5uYXYucHJldkVsICk7XG5cbiAgICAgIHRoaXMuJGVsXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYubmV4dEVsLCAoKSA9PiB0aGlzLnNsaWRlTmV4dCgpKVxuICAgICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2LnByZXZFbCwgKCkgPT4gdGhpcy5zbGlkZVByZXYoKSlcbiAgICAgICAgLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHRoaXMub25TbGlkZUNoYW5nZSgpKTtcblxuICAgICAgaWYgKCAhb3B0aW9ucy5sb29wICkge1xuICAgICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICRlbFxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMub25Nb3VzZUVudGVyKCkpXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSlcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuc2xpZGVzLmxlbmd0aCA8PSB0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICkge1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJtLXNsaWRlci0taGlkZGVuLW5hdlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIFwiW2RhdGEtbG9jYXRpb24taHJlZl1cIiwgKGUpID0+IHRoaXMub25DbGlja0l0ZW0oZSkpO1xuXG4gIH1cblxuICBvbkNsaWNrSXRlbShlKSB7XG4gICAgaWYgKCAhJCggZS50YXJnZXQgKS5pcyhcImFcIikgKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAkKCBlLmN1cnJlbnRUYXJnZXQgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB0YXJnZXQuZGF0YSgpO1xuICAgICAgaWYgKCBkYXRhLmxvY2F0aW9uSHJlZiApIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLmxvY2F0aW9uSHJlZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5sb29wZWRTbGlkZXMgKiAyO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuYXV0b3BsYXkuc3RhcnQoKTtcbiAgfVxuXG4gIG9uU2xpZGVDaGFuZ2UoKSB7XG4gICAgdGhpcy4kcHJldkVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB0aGlzLiRuZXh0RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9ICQodGhpcy5zbGlkZXNbIHRoaXMuYWN0aXZlSW5kZXggXSk7XG4gICAgY29uc3QgYW5pbWF0ZWRJdGVtcyA9IGFjdGl2ZUl0ZW0uZmluZChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG5cbiAgICAkLmVhY2goYW5pbWF0ZWRJdGVtcywgKGksIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9ICQoaXRlbSkuZGF0YShcImFuaW1hdGlvblwiKTtcbiAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQoaXRlbSkuYWRkQ2xhc3MoIGNsYXNzTmFtZSApOyB9LCAxKTtcbiAgICB9KTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzQmVnaW5uaW5nICkge1xuICAgICAgdGhpcy4kcHJldkVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gIH1cblxuICBzbGlkZVByZXYoKSB7XG4gICAgc3VwZXIuc2xpZGVQcmV2KCk7XG4gICAgdGhpcy4kcHJldkVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB0aGlzLiRuZXh0RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlTmV4dCgpIHtcbiAgICBzdXBlci5zbGlkZU5leHQoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0VuZCApIHtcbiAgICAgIHRoaXMuJG5leHRFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuXG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYXA6IFwiI21hcFwiLFxuICAgICAgdGFiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICB0YWJJdGVtOiBcIi5tLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcIm1hcC5jbGlja1wiLCAoZXZlbnQsIGlkKSA9PiB0aGlzLm9uQ2xpY2tNYXAoZXZlbnQsIGlkKSlcbiAgICAgIC5vbihcInRhYi5zaG93XCIsIChldmVudCwgaW5kZXgpID0+IHRoaXMub25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkluaXRNYXAoKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uSW5pdE1hcCgpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYkl0ZW0pLmZpbmQoXCI+IGFcIikuZGF0YShcImNvb3JkXCIpXG4gICAgY29uc3QgbWFwID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFwKS5kYXRhKFwiY29tcG9uZW50TWFwXCIpO1xuICAgIG1hcC5tYXBGb2N1cyhjb29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkge1xuICAgIHRoaXMub25Jbml0TWFwKClcbiAgfVxuXG4gIG9uQ2xpY2tNYXAoZXZlbnQsIGlkKSB7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYilcbiAgICBjb25zdCB0YWJzID0gdGhpcy4kdGFicy5kYXRhKFwiY29tcG9uZW50VGFiRGVmYXVsdFwiKTtcbiAgICBjb25zdCB0YWIgPSB0aGlzLiR0YWJzLmZpbmQoYGFbaHJlZj1cIiMke2lkfVwiXWApLnBhcmVudCgpO1xuXG4gICAgdGFicy5zZXRBY3RpdmUodGFiLmluZGV4KCkpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm0tbmF2XCIsXG4gICAgICAgIHRvZ2dsZTogXCJtLW5hdi0tb3BlblwiLFxuICAgICAgICBpdGVtOiBcIm5hdiA+IHVsID4gbGkgc3BhblwiLFxuICAgICAgICBhY3RpdmU6IFwibS1uYXYtLWFjdGl2ZVwiLFxuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBzZWxmOiBcIi5tLXNlYXJjaC1iYXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoLWhlYWRlclwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tEcm9wZG93bihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gIH1cblxuICBvbkNsaWNrRHJvcGRvd24oZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoJHRhcmdldC5uZXh0KFwidWxcIikubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJHBhcmVudCA9ICR0YXJnZXQucGFyZW50KCk7XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMubmF2Lml0ZW0pLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0aGlzLiRzZWFyY2hCYXIudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB0aGlzLiRuYXYucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLiRzZWFyY2hCYXIuaGFzQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcykpe1xuICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSl7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE5hdiB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbWFpbjogXCIuby1wcm9kdWN0LW5hdi1tYWluX19pY29ucyBhXCIsXG4gICAgICBtYWluQWN0aXZlOiBcIi5vLXByb2R1Y3QtbmF2LW1haW5fX2ljb25zIGEuYWN0aXZlXCIsXG4gICAgICBsaXN0OiBcIi5vLXByb2R1Y3QtbmF2X19saXN0IGFcIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcbiAgICB0aGlzLiRtYWluID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFpbik7XG4gICAgdGhpcy4kYWN0aXZlID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFpbkFjdGl2ZSk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2sgbW91c2VlbnRlclwiLCB0aGlzLm9wdGlvbnMubWFpbiwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTWFpbihldmVudCkpXG4gICAgICAub24oXCJjbGljayBtb3VzZWVudGVyXCIsIHRoaXMub3B0aW9ucy5saXN0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaXN0KGV2ZW50KSlcbiAgICA7XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgdGhpcy4kc2hhZG93LnJlbW92ZUNsYXNzKCdhLXNoYWRvdy0tb3BlbicpO1xuXHRcdHRoaXMuJG1haW4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcblx0XHR0aGlzLiRhY3RpdmUuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgfVxuXG4gIG9uQ2xpY2tNYWluKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkaGFzaCA9ICQoJHRhcmdldC5hdHRyKFwiaHJlZlwiKSk7XG4gICAgY29uc3QgJHN1Ykhhc2ggPSAkKCRoYXNoLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgJHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRoYXNoLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJHN1Ykhhc2guc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xuXG4gICAgdGhpcy4kc2hhZG93LmFkZENsYXNzKCdhLXNoYWRvdy0tb3BlbicpO1xuICB9XG5cbiAgb25DbGlja0xpc3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0ICRwYXJlbnQgPSAkKGBhW2hyZWYkPSckeyR0YXJnZXQuYXR0cihcImlkXCIpfSddYCk7XG4gICAgY29uc3QgJHN1Ykhhc2ggPSAkKCR0YXJnZXQuYXR0cignaHJlZicpKTtcblxuICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiby1wcm9kdWN0LW5hdi0tb3BlblwiKTtcbiAgICAkdGFyZ2V0LmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJHBhcmVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRzdWJIYXNoLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcblxuICAgIHRoaXMuJHNoYWRvdy5hZGRDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZXMge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgcGFnaW5hdGlvbjogXCIuby1zZXJ2aWNlc19faW1hZ2UgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMucGFnaW5hdGlvbiwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG5cbiAgICBjb25zdCBwcm9kdWN0Q2Fyb3VzZWxUZXh0ID0gbmV3IFN3aXBlcihcIi5vLXNlcnZpY2VzX190ZXh0IC5tLXNsaWRlcl9fc3dpcGVyXCIsIHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICBsYXp5OiB7XG4gICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLm8tc2VydmljZXMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9kdWN0Q2Fyb3VzZWxJbWFnZSA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19faW1hZ2UgLm0tc2xpZGVyX19zd2lwZXJcIiwge1xuICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiBwcm9kdWN0Q2Fyb3VzZWxUZXh0XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLm8tc2VydmljZXMgLm0tc2xpZGVyX19uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX3ByZXZcIlxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDk5MDoge1xuICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aGlzLnByb2R1Y3RDYXJvdXNlbEltYWdlLnNsaWRlVG8oJHRhcmdldC5pbmRleCgpLCAxMDApXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgdG9nZ2xlOiBcIm8tc2lkZWJhci0tb3BlblwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm8tc2lkZWJhcl9fbmF2XCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJvLXNpZGViYXJfX25hdi0tYWN0aXZlXCIsXG4gICAgICAgIGxpbms6IFwiLm8tc2lkZWJhcl9fbmF2LS1saW5rXCJcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tOYXYoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB0aGlzLndpbmRvd1Jlc2l6ZSgpKVxuXG4gIH1cblxuICB3aW5kb3dSZXNpemUoKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgICAgdGhpcy5jbG9zZUFsbCgpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gIH1cblxuICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKCR0YXJnZXQubmV4dChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRwYXJlbnQgPSAkdGFyZ2V0LnBhcmVudCgpO1xuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLm5hdi5pdGVtKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPiA3NjgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgfVxuICB9XG59XG4iXX0=
