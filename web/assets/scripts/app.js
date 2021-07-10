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

var Services = function Services(el, options) {
  (0, _classCallCheck2["default"])(this, Services);
  this.$el = el;
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
  var productCarouselImage = new Swiper(".o-services__image .m-slider__swiper", {
    slidesPerView: "auto",
    direction: "vertical",
    slideToClickedSlide: false,
    spaceBetween: 30,
    autoHeight: true,
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
        spaceBetween: 20,
        direction: "horizontal"
      }
    }
  });
};

exports["default"] = Services;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],33:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveC5lczYiLCJzcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhLmVzNiIsInNyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyLmVzNiIsInNyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbi5lczYiLCJzcmMvbW9sZWN1bGVzL0Nhcm91c2VsL0Nhcm91c2VsLmVzNiIsInNyYy9tb2xlY3VsZXMvTWFwL01hcC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsLmVzNiIsInNyYy9tb2xlY3VsZXMvUmVtb3RlQ2hlY2svUmVtb3RlQ2hlY2suZXM2Iiwic3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyLmVzNiIsInNyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdi5lczYiLCJzcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QuZXM2Iiwic3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyLmVzNiIsInNyYy9vcmdhbmlzbXMvUHJvZHVjdE5hdi9Qcm9kdWN0TmF2LmVzNiIsInNyYy9vcmdhbmlzbXMvU2VydmljZXMvU2VydmljZXMuZXM2Iiwic3JjL29yZ2FuaXNtcy9TaWRlYmFyL1NpZGViYXIuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFMLENBQWEsTUFBbEM7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxPQUFMLENBQWEsTUFBYixTQUE1QjtBQUNEO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImNvbnN0IHNocmlua0hlYWRlciA9IDUyMDtcbmNvbnN0ICR0cmFuc3BhcmVudCA9ICQoXCIuby1oZWFkZXItLXRyYW5zcGFyZW50XCIpO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2Nyb2xsKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG59XG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZSA9IGdldEN1cnJlbnRTY3JvbGwoKTtcbiAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICBpZiAoJHRyYW5zcGFyZW50Lmxlbmd0aCAmJiB3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgIHNocmlua0hlYWRlciA8PSBlID9cbiAgICAgICQoXCIuby1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJvLWhlYWRlci0tdHJhbnNwYXJlbnRcIikucmVtb3ZlQ2xhc3MoXCJvLWhlYWRlci0td2hpdGVcIikgOlxuICAgICAgJChcIi5vLWhlYWRlclwiKS5hZGRDbGFzcyhcIm8taGVhZGVyLS10cmFuc3BhcmVudFwiKS5hZGRDbGFzcyhcIm8taGVhZGVyLS13aGl0ZVwiKTtcbiAgfVxufSlcblxud2luZG93LlBhcnNsZXkuYWRkVmFsaWRhdG9yKCdtYXhGaWxlU2l6ZScsIHtcbiAgdmFsaWRhdGVTdHJpbmc6IGZ1bmN0aW9uIChfdmFsdWUsIG1heFNpemUsIHBhcnNsZXlJbnN0YW5jZSkge1xuICAgIGlmICghd2luZG93LkZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGZpbGVzID0gcGFyc2xleUluc3RhbmNlLiRlbGVtZW50WzBdLmZpbGVzO1xuICAgIHJldHVybiBmaWxlcy5sZW5ndGggIT0gMSB8fCBmaWxlc1swXS5zaXplIDw9IG1heFNpemUgKiAxMDI0O1xuICB9LFxuICByZXF1aXJlbWVudFR5cGU6ICdpbnRlZ2VyJyxcbiAgbWVzc2FnZXM6IHtcbiAgICB0cjogJ01heC4gZG9zeWEgYm95dXR1ICVzIEtiLiBvbGFtYWzEsWTEsXInXG4gIH1cbn0pO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBsYXguc2V0dXAoe1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICBzbWFsbDogMCxcbiAgICAgIGxhcmdlOiA3NjhcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlTGF4ID0gKCkgPT4ge1xuICAgIGxheC51cGRhdGUod2luZG93LnNjcm9sbFkpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUxheClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImxhenliZWZvcmV1bnZlaWxcIiwgdGhpcy5vcHRpb25zLnNwZWVjaEJ1dHRvbiwgZXZlbnQgPT4gdGhpcy5vbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpKTtcblxuICB9XG5cbiAgb25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSB7XG4gICAgY29uc3QgbGF6eUVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGxhenlFbGVtZW50LmF0dHIoIFwiZGF0YS1iYWNrZ3JvdW5kXCIgKTtcbiAgICBpZiAoIGJhY2tncm91bmQgKSB7XG4gICAgICBsYXp5RWxlbWVudC5jc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IExhenlMb2FkKCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL01vZGFsL01vZGFsJztcbmNsYXNzIE9uTG9hZE1vZGFsIHtcbiAgc3RhdGljIG9uTG9hZE1vZGFsKCkge1xuICAgIGNvbnN0IGhhc2ggPSAkKGxvY2F0aW9uKS5hdHRyKFwiaGFzaFwiKTtcblxuICAgIHN3aXRjaCAoaGFzaCkge1xuICAgICAgY2FzZSBcIiNlcnJvck1lc3NhZ2VcIjpcbiAgICAgICAgdGhpcy5tb2RhbFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCIjc3VjY2Vzc01lc3NhZ2VcIjpcbiAgICAgICAgdGhpcy5tb2RhbFR5cGUoXCJzdWNjZXNzXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbW9kYWxUeXBlKHR5cGUpIHtcbiAgICBpZiAoJChgI21vZGFsLXByZXNldC0ke3R5cGV9YCkubGVuZ3RoID4gMCkge1xuICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgc3JjOiBgI21vZGFsLXByZXNldC0ke3R5cGV9YCxcbiAgICAgICAgYmFzZUNsYXNzOiBgZmFuY3lib3gtLSR7dHlwZX0gbS1tb2RhbC0tYWxlcnRgLFxuICAgICAgICB0b3VjaDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT25Mb2FkTW9kYWwoKTtcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gT25Mb2FkTW9kYWwub25Mb2FkTW9kYWwoKSk7XG4iLCJpbXBvcnQgR2VuZXJhbCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbCc7XG5pbXBvcnQgTGF6eUxvYWQgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0xhenlMb2FkJztcbmltcG9ydCBPbkxvYWRNb2RhbCAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9PbkxvYWRNb2RhbCc7XG5cbmltcG9ydCBGb3JtQ2hlY2tib3ggICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveCc7XG5pbXBvcnQgRm9ybUZpbGVJbnB1dCAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dCc7XG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IENhcm91c2VsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwnO1xuaW1wb3J0IE1hcCAgICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTWFwL01hcCc7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgUmVtb3RlQ2hlY2sgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjayc7XG5pbXBvcnQgU2VhcmNoQmFyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyJztcbmltcG9ydCBTbGlkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXInO1xuaW1wb3J0IFNlbGVjdE5hdiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdic7XG5cbmltcG9ydCBTaWRlYmFyICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhcic7XG5pbXBvcnQgQ29udGFjdCAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IEhlYWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2VydmljZXMgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9TZXJ2aWNlcy9TZXJ2aWNlcyc7XG5pbXBvcnQgUHJvZHVjdE5hdiAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Qcm9kdWN0TmF2L1Byb2R1Y3ROYXYnO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcbiAgT25Mb2FkTW9kYWwsXG5cbiAgRm9ybUNoZWNrYm94LFxuICBGb3JtRmlsZUlucHV0LFxuICBGb3JtSW5wdXQsXG4gIEZvcm1UZXh0YXJlYSxcbiAgSGFtYnVyZ2VyLFxuXG4gIEFjY29yZGlvbixcbiAgQ2Fyb3VzZWwsXG4gIE1hcCxcbiAgTW9kYWwsXG4gIFJlbW90ZUNoZWNrLFxuICBTZWFyY2hCYXIsXG4gIFNsaWRlcixcbiAgU2VsZWN0TmF2LFxuICBcbiAgU2lkZWJhcixcbiAgQ29udGFjdCxcbiAgSGVhZGVyLFxuICBTZXJ2aWNlcyxcbiAgUHJvZHVjdE5hdixcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KCB0aGF0LCB0eXBlLCBkYXRhICkge1xuICBjb25zdCBvcHRpb25zID0gZGF0YSB8fCB7fTtcbiAgbGV0IENvbXBvbmVudCA9IENvbXBvbmVudHNbdHlwZV07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJCh0aGF0KSwgb3B0aW9ucyk7XG4gICAgdGhhdC5zZXRDb21wb25lbnQoIHR5cGUsIENvbXBvbmVudCk7XG4gICAgJCh0aGF0KS5kYXRhKGBjb21wb25lbnQke3R5cGV9YCwgQ29tcG9uZW50KS5yZW1vdmVBdHRyKFwiZGF0YS1jb21wb25lbnRcIikucmVtb3ZlRGF0YShcImNvbXBvbmVudFwiKTtcbiAgfVxufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHRoaXNbIHR5cGUgXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUsIENvbXBvbmVudCApIHtcbiAgdGhpc1t0eXBlXSA9IENvbXBvbmVudDtcbn1cblxud2luZG93LmluaXRpYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1jb21wb25lbnRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gJCggdGhpcyApLmRhdGEoJ2NvbXBvbmVudCcpO1xuICAgIGlmICggQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuICAgICAgZm9yKCB2YXIgaSBpbiBkYXRhICkge1xuICAgICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YVtpXS50eXBlLCBkYXRhW2ldICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLnR5cGUsIGRhdGEgKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEsICQoIHRoaXMgKS5kYXRhKCkgKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXRpYXRlQ29tcG9uZW50cygpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1DaGVja2JveCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb3Blbk1vZGFsOiBcImJbZGF0YS1mYW5jeUlkXVwiLFxuICAgICAgYm9keTogXCIubS1zY3JvbGwtYm94X19ib2R5XCIsXG4gICAgICBtb2JpbGVCb2R5OiBcIi5tLW1vZGFsX19ib2R5XCJcbiAgICAgIC8vbW9kYWwtdXNlci1hZ3JlZW1lbnQtbW9iaWxlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm9wZW5Nb2RhbCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5vcGVuTW9kYWwsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKFwiZmFuY3lpZFwiKTtcblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLXVzZXItYWdyZWVtZW50XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLWNvbnRhY3RcIikge1xuICAgICAgdGhpcy4kYm9keSA9ICQobW9kYWxJZCkuZmluZCh0aGlzLm9wdGlvbnMuYm9keSk7XG4gICAgfVxuXG4gICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgIHNyYzogbW9kYWxJZCxcbiAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgc21hbGxCdG46IHRydWUsXG4gICAgICB0b3VjaDogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpbGVJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiaW5wdXRcIixcbiAgICAgIHRleHQ6IFwiLmEtZmlsZS1pbnB1dF9fdGV4dCBzcGFuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICAgIHRoaXMuJHRleHQgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy50ZXh0KTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWU7XG4gICAgdGhpcy4kdGV4dC50ZXh0KGZpbGVOYW1lKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IGlucHV0XCIsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSk7XG5cbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0aGlzLiRzZWxlY3RvcikpIHtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGhpcy4kc2VsZWN0b3IuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVRleHRhcmVhIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IHRleHRhcmVhXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKVxuICAgIDtcbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyAgdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcblxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcblxuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogXCJhLWhhbWJ1cmdlci0tb3BlblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiaGFtYnVyZ2VyLmNsaWNrXCIpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiYWNjb3JkaW9uSGVhZHNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9faGVhZFwiLFxuICAgICAgXCJhY2NvcmRpb25Cb2RpZXNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9fYm9keVwiLFxuICAgICAgXCJhY3RpdmVDbGFzc1wiOiBcIm0tYWNjb3JkaW9uX19oZWFkLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY2NvcmRpb25IZWFkcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzKTtcbiAgICB0aGlzLmFjY29yZGlvbkJvZGllcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbmJvZGllcyk7XG4gICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcztcbiAgICB0aGlzLnNob3dPbmx5T25lID0gdGhpcy5vcHRpb25zLnNob3dPbmx5T25lO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY3VyclRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnNob3dPbmx5T25lKSB7XG4gICAgICBpZiAodGhpcy5jdXJyVGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkhlYWRzLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyVGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJhY2NvcmRpb24uY2hhbmdlXCIpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWwge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgZm9sbG93RmluZ2VyOiBmYWxzZSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIGxhenk6IHtcbiAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVyRGF0YSA9IHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCBzbGlkZXJEYXRhKTtcblxuICAgIHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpXG4gICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKGUsIGluZGV4KSA9PiB0aGlzLm9uU2xpZGVDaGFuZ2UoaW5kZXgpKVxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1jYXJvdXNlbF9fdGh1bWJzIGxpXCIpLm9uKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcblxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKS5kYXRhKFwiY29tcG9uZW50U2xpZGVyXCIpO1xuICAgIGNvbnN0IGJ1bGxldCA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpXG5cbiAgICBzbGlkZXIuc2xpZGVUbyhidWxsZXQgKyAxKVxuICB9XG5cbiAgb25TbGlkZUNoYW5nZShpbmRleCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgICBjb25zdCBidWxsZXRzID0gdGhpcy4kZWwuZmluZChcIi5hLWJ1bGxldHNcIikuZGF0YShcImNvbXBvbmVudEJ1bGxldHNcIik7XG4gICAgICBidWxsZXRzLnNldEFjdGl2ZShzbGlkZXIucmVhbEluZGV4KTtcblxuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9ICQoc2xpZGVyLnNsaWRlc1tzbGlkZXIuYWN0aXZlSW5kZXhdKTtcblxuICAgICAgYWN0aXZlSXRlbS50cmlnZ2VyKFwic2xpZGVyLmNoYW5nZVwiLCB0aGlzKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWwgPSBlbDtcbiAgICBlbCA9ICRlbDtcblxuICAgIHRoaXMuJGVsID0gJGVsO1xuXG4gICAgY29uc3Qgc3R5bGVzID0gW3tcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNlOWU5ZTlcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyOVxuICAgICAgfSwge1xuICAgICAgICBcIndlaWdodFwiOiAwLjJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMThcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZGVkZWRlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwic2F0dXJhdGlvblwiOiAzNlxuICAgICAgfSwge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDQwXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE5XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH0sIHtcbiAgICAgICAgXCJ3ZWlnaHRcIjogMS4yXG4gICAgICB9XVxuICAgIH1dO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICB6b29tOiAxNSxcbiAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0MS4wNDI4MDI3LCAyOC45ODI2MzI3KSxcbiAgICAgIHVybDogJy4uLy4uL2Fzc2V0cy9kYXRhL01hcC5qc29uJyxcbiAgICAgIHBpbjogb3B0aW9ucy5waW5tZWRpYSB8fCAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250ZW50L3Bpbi5wbmcnLFxuICAgIH07XG5cbiAgICBkZWZhdWx0c1snc3R5bGVzJ10gPSBzdHlsZXM7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgcGluU3RhdHVzID0gIXRoaXMub3B0aW9ucy5sYXQgJiYgIXRoaXMub3B0aW9ucy5sbmc7XG5cbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy4kZWxbMF0sIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocGluU3RhdHVzKSB7XG4gICAgICB0aGlzLm1hcERhdGFIYW5kbGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9uc1tcIm1hcmtlcnNcIl0gPSBbe1xuICAgICAgICBcImNvb3Jkc1wiOiB7XG4gICAgICAgICAgXCJsYXRcIjogdGhpcy5vcHRpb25zLmxhdCxcbiAgICAgICAgICBcImxuZ1wiOiB0aGlzLm9wdGlvbnMubG5nXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHRoaXMub3B0aW9ucy51cmwsXG4gICAgICAgIFwiY29udGVudFwiOiB0aGlzLm9wdGlvbnMuY29udGVudFxuICAgICAgfV1cbiAgICB9XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIHRoaXMubWFya2VyQ3JlYXRvcigpKTtcbiAgfVxuXG4gIG1hcEZvY3VzKHBsYWNlKSB7XG4gICAgY29uc3QgbmV3UGxhY2UgPSBwbGFjZS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhuZXdQbGFjZVswXSwgbmV3UGxhY2VbMV0pO1xuICAgIHRoaXMuYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgIHRoaXMuYm91bmRzLmV4dGVuZChwb3NpdGlvbik7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5ib3VuZHMpO1xuICAgIHRoaXMubWFwLnNldFpvb20oMTEpO1xuICB9XG5cbiAgbWFwRGF0YUhhbmRsZXIoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgIHVybDogdGhpcy5vcHRpb25zLnVybCA/IHRoaXMub3B0aW9ucy51cmwgOiB0aGlzLmRlZmF1bHRzLnVybCxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5vcHRpb25zW1wibWFya2Vyc1wiXSA9IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBtYXJrZXJDcmVhdG9yKCkge1xuICAgIGNvbnN0IG1hcmtlcnMgPSB0aGlzLm9wdGlvbnMubWFya2VycztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5hZGRNYXJrZXIobWFya2Vyc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgYWRkTWFya2VyKHByb3BzKSB7XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICBsYXQ6IE51bWJlcihwcm9wcy5jb29yZHMubGF0KSxcbiAgICAgICAgbG5nOiBOdW1iZXIocHJvcHMuY29vcmRzLmxuZylcbiAgICAgIH0sXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgaWNvbjogdGhpcy5vcHRpb25zLnBpbiA/IHRoaXMub3B0aW9ucy5waW4gOiB0aGlzLmRlZmF1bHRzLnBpbixcbiAgICB9KTtcblxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwibWFwLmNsaWNrXCIsIHByb3BzLmlkKTtcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvbkxvYWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uTG9hZCkge1xuICAgICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihlbC5nZXQoMCkpO1xuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZUNoZWNrIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcIm1vZGFsXCIgOiBcIi5tLW1vZGFsXCIsXG4gICAgICBcImxhYmVsXCI6IFwiLmEtY2hlY2tib3hcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWwgPSB0aGlzLiRlbC5jbG9zZXN0KHRoaXMub3B0aW9ucy5tb2RhbCk7XG4gICAgdGhpcy5mYW5jeUlkID0gXCIjXCIgKyB0aGlzLm1vZGFsLmF0dHIoJ2lkJyk7XG4gICAgdGhpcy5sYWJlbCA9ICQoXCJbZGF0YS1mYW5jeWlkPSdcIiArIHRoaXMuZmFuY3lJZCArIFwiJ11cIikuY2xvc2VzdCh0aGlzLm9wdGlvbnMubGFiZWwpO1xuICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLmxhYmVsLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgdGhpcy5jaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB0aGlzLmNoZWNrYm94LnBhcnNsZXkoKS5kZXN0cm95KClcbiAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHRvZ2dsZTogXCJtLXNlYXJjaC1iYXItLW9wZW5cIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtY2xvc2Utc2VhcmNoLWJhclwiLFxuICAgICAgfSxcbiAgICAgIGljb25zOiB7XG4gICAgICAgIHNlbGY6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICB0b2dnbGU6IFwiYS1idG4taWNvbi0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dDogXCI+IGlucHV0XCIsXG4gICAgICBmb3JtOiBcIi5tLWZvcm1cIlxuICAgIH07XG4gICAgXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmljb25zID0gJCh0aGlzLm9wdGlvbnMuaWNvbnMuc2VsZik7XG4gICAgdGhpcy4kZm9ybSA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmZvcm0pO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcbiAgICAgIC5vbihcImtleXByZXNzXCIsIHRoaXMub3B0aW9ucy5pbnB1dCwgZXZlbnQgPT4gdGhpcy5vbktleXByZXNzKGV2ZW50KSlcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC50b2dnbGUpXG4gICAgdGhpcy5pY29ucy50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuaWNvbnMudG9nZ2xlKVxuICB9XG5cbiAgb25LZXlwcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLiRmb3JtLnN1Ym1pdCgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3ROYXYge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLiRlbCA9IGVsO1xuICBcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBzZWxlY3Q6IFwiLmEtc2VsZWN0XCJcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgXG4gICAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0LCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICB9XG4gIFxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBjb25zdCB1cmwgPSAkKGV2ZW50LnRhcmdldCkudmFsKClcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgfVxuICB9XG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFN3aXBlciB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWwgPSBlbDtcbiAgICBjb25zdCAkc2xpZGVyID0gZWwuZmluZChcIi5tLXNsaWRlcl9fc3dpcGVyXCIpO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBvbjoge1xuICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6ICgpID0+ICAkZWwudHJpZ2dlcihcInNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZFwiKSxcbiAgICAgICAgc2xpZGVDaGFuZ2U6ICgpID0+ICAkZWwudHJpZ2dlcihcInNsaWRlQ2hhbmdlXCIpLFxuICAgICAgICBpbml0OiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJpbml0XCIpLFxuICAgICAgICB0b3VjaEVuZDogKCkgPT4gJGVsLnRyaWdnZXIoXCJ0b3VjaEVuZFwiKSxcbiAgICAgICAgcmVhY2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwicmVhY2hFbmRcIiksXG4gICAgICAgIHJlYWNoQmVnaW5uaW5nOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoQmVnaW5uaW5nXCIpLFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIG9wdGlvbnMubmF2aWdhdGlvbiApIHtcbiAgICAgIG9wdGlvbnMubmF2ID0ge1xuICAgICAgICBuZXh0RWw6ICc+IC5tLXNsaWRlcl9fbmV4dCcsXG4gICAgICAgIHByZXZFbDogJz4gLm0tc2xpZGVyX19wcmV2JyxcbiAgICAgICAgZGlzYWJsZWRDbGFzczogXCJhLWJ0bi1pY29uLS1kaXNhYmxlZFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLnBhZ2luYXRpb24gKSB7XG4gICAgICBvcHRpb25zLnBhZ2luYXRpb24gPSB7XG4gICAgICAgIGVsOiAkZWwuZmluZCgnLnN3aXBlci1wYWdpbmF0aW9uJyksXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgZWwgPSAkZWw7XG5cbiAgICBzdXBlcigkc2xpZGVyLmdldCgwKSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdiApIHtcbiAgICAgIHRoaXMuJG5leHRFbCA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy5uYXYubmV4dEVsICk7XG4gICAgICB0aGlzLiRwcmV2RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2LnByZXZFbCApO1xuXG4gICAgICB0aGlzLiRlbFxuICAgICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCwgKCkgPT4gdGhpcy5zbGlkZU5leHQoKSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwsICgpID0+IHRoaXMuc2xpZGVQcmV2KCkpXG4gICAgICAgIC5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB0aGlzLm9uU2xpZGVDaGFuZ2UoKSk7XG5cbiAgICAgIGlmICggIW9wdGlvbnMubG9vcCApIHtcbiAgICAgICAgdGhpcy4kcHJldkVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIG9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAkZWxcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm9uTW91c2VFbnRlcigpKVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpXG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLnNsaWRlcy5sZW5ndGggPD0gdGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldyApIHtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKFwibS1zbGlkZXItLWhpZGRlbi1uYXZcIik7XG4gICAgfVxuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCBcIltkYXRhLWxvY2F0aW9uLWhyZWZdXCIsIChlKSA9PiB0aGlzLm9uQ2xpY2tJdGVtKGUpKTtcblxuICB9XG5cbiAgb25DbGlja0l0ZW0oZSkge1xuICAgIGlmICggISQoIGUudGFyZ2V0ICkuaXMoXCJhXCIpICkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gJCggZS5jdXJyZW50VGFyZ2V0ICk7XG4gICAgICBjb25zdCBkYXRhID0gdGFyZ2V0LmRhdGEoKTtcbiAgICAgIGlmICggZGF0YS5sb2NhdGlvbkhyZWYgKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5sb2NhdGlvbkhyZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aCAtIHRoaXMubG9vcGVkU2xpZGVzICogMjtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICB0aGlzLmF1dG9wbGF5LnN0b3AoKTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLmF1dG9wbGF5LnN0YXJ0KCk7XG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKCkge1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSAkKHRoaXMuc2xpZGVzWyB0aGlzLmFjdGl2ZUluZGV4IF0pO1xuICAgIGNvbnN0IGFuaW1hdGVkSXRlbXMgPSBhY3RpdmVJdGVtLmZpbmQoXCJbZGF0YS1hbmltYXRpb25dXCIpO1xuXG4gICAgJC5lYWNoKGFuaW1hdGVkSXRlbXMsIChpLCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSAkKGl0ZW0pLmRhdGEoXCJhbmltYXRpb25cIik7XG4gICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAkKGl0ZW0pLmFkZENsYXNzKCBjbGFzc05hbWUgKTsgfSwgMSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICAgIGlmICggdGhpcy5pc0VuZCApIHtcbiAgICAgIHRoaXMuJG5leHRFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVQcmV2KCkge1xuICAgIHN1cGVyLnNsaWRlUHJldigpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzQmVnaW5uaW5nICkge1xuICAgICAgdGhpcy4kcHJldkVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gIH1cblxuICBzbGlkZU5leHQoKSB7XG4gICAgc3VwZXIuc2xpZGVOZXh0KCk7XG4gICAgdGhpcy4kcHJldkVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB0aGlzLiRuZXh0RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cblxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbWFwOiBcIiNtYXBcIixcbiAgICAgIHRhYjogXCIubS10YWItZGVmYXVsdFwiLFxuICAgICAgdGFiSXRlbTogXCIubS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJtYXAuY2xpY2tcIiwgKGV2ZW50LCBpZCkgPT4gdGhpcy5vbkNsaWNrTWFwKGV2ZW50LCBpZCkpXG4gICAgICAub24oXCJ0YWIuc2hvd1wiLCAoZXZlbnQsIGluZGV4KSA9PiB0aGlzLm9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25Jbml0TWFwKClcbiAgICB9LCAyMDApXG4gIH1cblxuICBvbkluaXRNYXAoKSB7XG4gICAgY29uc3QgY29vcmQgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy50YWJJdGVtKS5maW5kKFwiPiBhXCIpLmRhdGEoXCJjb29yZFwiKVxuICAgIGNvbnN0IG1hcCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm1hcCkuZGF0YShcImNvbXBvbmVudE1hcFwiKTtcbiAgICBtYXAubWFwRm9jdXMoY29vcmQpXG4gIH1cblxuICBvbkNoYW5nZVRhYihldmVudCwgaW5kZXgpIHtcbiAgICB0aGlzLm9uSW5pdE1hcCgpXG4gIH1cblxuICBvbkNsaWNrTWFwKGV2ZW50LCBpZCkge1xuICAgIHRoaXMuJHRhYnMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy50YWIpXG4gICAgY29uc3QgdGFicyA9IHRoaXMuJHRhYnMuZGF0YShcImNvbXBvbmVudFRhYkRlZmF1bHRcIik7XG4gICAgY29uc3QgdGFiID0gdGhpcy4kdGFicy5maW5kKGBhW2hyZWY9XCIjJHtpZH1cIl1gKS5wYXJlbnQoKTtcblxuICAgIHRhYnMuc2V0QWN0aXZlKHRhYi5pbmRleCgpKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIixcbiAgICAgIG5hdjoge1xuICAgICAgICBzZWxmOiBcIi5tLW5hdlwiLFxuICAgICAgICB0b2dnbGU6IFwibS1uYXYtLW9wZW5cIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm0tbmF2LS1hY3RpdmVcIixcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaC1oZWFkZXJcIixcbiAgICAgICAgY2xhc3M6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGhhbWJ1cmdlciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmhhbWJ1cmdlcik7XG4gICAgdGhpcy4kbmF2ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubmF2LnNlbGYpO1xuICAgIHRoaXMuJHNlYXJjaEJhciA9ICQodGhpcy5vcHRpb25zLnNlYXJjaC5zZWxmKTtcbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYuaXRlbSwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrRHJvcGRvd24oZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tTZWFyY2goZXZlbnQpKVxuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImhhbWJ1cmdlci5jbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGlja0hhbWJ1cmdlcihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2hhZG93LCAoKSA9PiB0aGlzLmNsb3NlQWxsKCkpXG5cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICB9XG5cbiAgb25DbGlja0Ryb3Bkb3duKGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKCR0YXJnZXQubmV4dChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRwYXJlbnQgPSAkdGFyZ2V0LnBhcmVudCgpO1xuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLm5hdi5pdGVtKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBvbkNsaWNrU2VhcmNoKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGhpcy4kc2VhcmNoQmFyLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgdGhpcy4kbmF2LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJyk7XG5cbiAgICBpZiAodGhpcy4kc2VhcmNoQmFyLmhhc0NsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpKXtcbiAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy4kbmF2LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKTtcbiAgICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKTtcblxuICAgICAgaWYgKHRoaXMuJG5hdi5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSkpe1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3ROYXYge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG1haW46IFwiLm8tcHJvZHVjdC1uYXYtbWFpbl9faWNvbnMgYVwiLFxuICAgICAgbWFpbkFjdGl2ZTogXCIuby1wcm9kdWN0LW5hdi1tYWluX19pY29ucyBhLmFjdGl2ZVwiLFxuICAgICAgbGlzdDogXCIuby1wcm9kdWN0LW5hdl9fbGlzdCBhXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG4gICAgdGhpcy4kbWFpbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm1haW4pO1xuICAgIHRoaXMuJGFjdGl2ZSA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm1haW5BY3RpdmUpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrIG1vdXNlZW50ZXJcIiwgdGhpcy5vcHRpb25zLm1haW4sIGV2ZW50ID0+IHRoaXMub25DbGlja01haW4oZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2sgbW91c2VlbnRlclwiLCB0aGlzLm9wdGlvbnMubGlzdCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGlzdChldmVudCkpXG4gICAgO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJvLXByb2R1Y3QtbmF2LS1vcGVuXCIpO1xuICAgIHRoaXMuJHNoYWRvdy5yZW1vdmVDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcblx0XHR0aGlzLiRtYWluLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG5cdFx0dGhpcy4kYWN0aXZlLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gIH1cblxuICBvbkNsaWNrTWFpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgJGhhc2ggPSAkKCR0YXJnZXQuYXR0cihcImhyZWZcIikpO1xuICAgIGNvbnN0ICRzdWJIYXNoID0gJCgkaGFzaC5hdHRyKCdocmVmJykpO1xuXG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJvLXByb2R1Y3QtbmF2LS1vcGVuXCIpO1xuICAgICR0YXJnZXQuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkaGFzaC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRzdWJIYXNoLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcblxuICAgIHRoaXMuJHNoYWRvdy5hZGRDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcbiAgfVxuXG4gIG9uQ2xpY2tMaXN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkcGFyZW50ID0gJChgYVtocmVmJD0nJHskdGFyZ2V0LmF0dHIoXCJpZFwiKX0nXWApO1xuICAgIGNvbnN0ICRzdWJIYXNoID0gJCgkdGFyZ2V0LmF0dHIoJ2hyZWYnKSk7XG5cbiAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgJHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRwYXJlbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkc3ViSGFzaC5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XG5cbiAgICB0aGlzLiRzaGFkb3cuYWRkQ2xhc3MoJ2Etc2hhZG93LS1vcGVuJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZpY2VzIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLiRlbCA9IGVsO1xuICBcbiAgICAgIGNvbnN0IHByb2R1Y3RDYXJvdXNlbFRleHQgPSBuZXcgU3dpcGVyKFwiLm8tc2VydmljZXNfX3RleHQgLm0tc2xpZGVyX19zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgIGxhenk6IHtcbiAgICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiBcIi5vLXNlcnZpY2VzIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCBwcm9kdWN0Q2Fyb3VzZWxJbWFnZSA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19faW1hZ2UgLm0tc2xpZGVyX19zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbGF6eToge1xuICAgICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICBzd2lwZXI6IHByb2R1Y3RDYXJvdXNlbFRleHRcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIG5leHRFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX25leHRcIixcbiAgICAgICAgICBwcmV2RWw6IFwiLm8tc2VydmljZXMgLm0tc2xpZGVyX19wcmV2XCJcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICA5OTA6IHtcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgIH1cbiAgXG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgdG9nZ2xlOiBcIm8tc2lkZWJhci0tb3BlblwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm8tc2lkZWJhcl9fbmF2XCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJvLXNpZGViYXJfX25hdi0tYWN0aXZlXCIsXG4gICAgICAgIGxpbms6IFwiLm8tc2lkZWJhcl9fbmF2LS1saW5rXCJcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tOYXYoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB0aGlzLndpbmRvd1Jlc2l6ZSgpKVxuXG4gIH1cblxuICB3aW5kb3dSZXNpemUoKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgICAgdGhpcy5jbG9zZUFsbCgpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gIH1cblxuICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKCR0YXJnZXQubmV4dChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRwYXJlbnQgPSAkdGFyZ2V0LnBhcmVudCgpO1xuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLm5hdi5pdGVtKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPiA3NjgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgfVxuICB9XG59XG4iXX0=
