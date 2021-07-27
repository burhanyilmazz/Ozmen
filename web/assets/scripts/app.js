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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveC5lczYiLCJzcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhLmVzNiIsInNyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyLmVzNiIsInNyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbi5lczYiLCJzcmMvbW9sZWN1bGVzL0Nhcm91c2VsL0Nhcm91c2VsLmVzNiIsInNyYy9tb2xlY3VsZXMvTWFwL01hcC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsLmVzNiIsInNyYy9tb2xlY3VsZXMvUmVtb3RlQ2hlY2svUmVtb3RlQ2hlY2suZXM2Iiwic3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyLmVzNiIsInNyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdi5lczYiLCJzcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QuZXM2Iiwic3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyLmVzNiIsInNyYy9vcmdhbmlzbXMvUHJvZHVjdE5hdi9Qcm9kdWN0TmF2LmVzNiIsInNyYy9vcmdhbmlzbXMvU2VydmljZXMvU2VydmljZXMuZXM2Iiwic3JjL29yZ2FuaXNtcy9TaWRlYmFyL1NpZGViYXIuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxDQUFhLE1BQWxDO0FBQ0EsYUFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssT0FBTCxDQUFhLE1BQWIsU0FBNUI7QUFDRDtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJjb25zdCBzaHJpbmtIZWFkZXIgPSA1MjA7XG5jb25zdCAkdHJhbnNwYXJlbnQgPSAkKFwiLm8taGVhZGVyLS10cmFuc3BhcmVudFwiKTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcm9sbCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xufVxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGUgPSBnZXRDdXJyZW50U2Nyb2xsKCk7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgaWYgKCR0cmFuc3BhcmVudC5sZW5ndGggJiYgd2luZG93V2lkdGggPCA3NjkpIHtcbiAgICBzaHJpbmtIZWFkZXIgPD0gZSA/XG4gICAgICAkKFwiLm8taGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiby1oZWFkZXItLXRyYW5zcGFyZW50XCIpLnJlbW92ZUNsYXNzKFwiby1oZWFkZXItLXdoaXRlXCIpIDpcbiAgICAgICQoXCIuby1oZWFkZXJcIikuYWRkQ2xhc3MoXCJvLWhlYWRlci0tdHJhbnNwYXJlbnRcIikuYWRkQ2xhc3MoXCJvLWhlYWRlci0td2hpdGVcIik7XG4gIH1cbn0pXG5cbndpbmRvdy5QYXJzbGV5LmFkZFZhbGlkYXRvcignbWF4RmlsZVNpemUnLCB7XG4gIHZhbGlkYXRlU3RyaW5nOiBmdW5jdGlvbiAoX3ZhbHVlLCBtYXhTaXplLCBwYXJzbGV5SW5zdGFuY2UpIHtcbiAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBmaWxlcyA9IHBhcnNsZXlJbnN0YW5jZS4kZWxlbWVudFswXS5maWxlcztcbiAgICByZXR1cm4gZmlsZXMubGVuZ3RoICE9IDEgfHwgZmlsZXNbMF0uc2l6ZSA8PSBtYXhTaXplICogMTAyNDtcbiAgfSxcbiAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gIG1lc3NhZ2VzOiB7XG4gICAgdHI6ICdNYXguIGRvc3lhIGJveXV0dSAlcyBLYi4gb2xhbWFsxLFkxLFyJ1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgbGF4LnNldHVwKHtcbiAgICBicmVha3BvaW50czoge1xuICAgICAgc21hbGw6IDAsXG4gICAgICBsYXJnZTogNzY4XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZUxheCA9ICgpID0+IHtcbiAgICBsYXgudXBkYXRlKHdpbmRvdy5zY3JvbGxZKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudCkub24oXCJsYXp5YmVmb3JldW52ZWlsXCIsIHRoaXMub3B0aW9ucy5zcGVlY2hCdXR0b24sIGV2ZW50ID0+IHRoaXMub25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSk7XG5cbiAgfVxuXG4gIG9uTGF6eUJlZm9yZVVudmVpbChldmVudCkge1xuICAgIGNvbnN0IGxhenlFbGVtZW50ID0gJChldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBsYXp5RWxlbWVudC5hdHRyKCBcImRhdGEtYmFja2dyb3VuZFwiICk7XG4gICAgaWYgKCBiYWNrZ3JvdW5kICkge1xuICAgICAgbGF6eUVsZW1lbnQuY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBMYXp5TG9hZCgpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5jbGFzcyBPbkxvYWRNb2RhbCB7XG4gIHN0YXRpYyBvbkxvYWRNb2RhbCgpIHtcbiAgICBjb25zdCBoYXNoID0gJChsb2NhdGlvbikuYXR0cihcImhhc2hcIik7XG5cbiAgICBzd2l0Y2ggKGhhc2gpIHtcbiAgICAgIGNhc2UgXCIjZXJyb3JNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiI3N1Y2Nlc3NNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1vZGFsVHlwZSh0eXBlKSB7XG4gICAgaWYgKCQoYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWApLmxlbmd0aCA+IDApIHtcbiAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgIHNyYzogYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWAsXG4gICAgICAgIGJhc2VDbGFzczogYGZhbmN5Ym94LS0ke3R5cGV9IG0tbW9kYWwtLWFsZXJ0YCxcbiAgICAgICAgdG91Y2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE9uTG9hZE1vZGFsKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IE9uTG9hZE1vZGFsLm9uTG9hZE1vZGFsKCkpO1xuIiwiaW1wb3J0IEdlbmVyYWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwnO1xuaW1wb3J0IExhenlMb2FkICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZCc7XG5pbXBvcnQgT25Mb2FkTW9kYWwgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwnO1xuXG5pbXBvcnQgRm9ybUNoZWNrYm94ICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3gnO1xuaW1wb3J0IEZvcm1GaWxlSW5wdXQgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtRmlsZUlucHV0L0Zvcm1GaWxlSW5wdXQnO1xuaW1wb3J0IEZvcm1JbnB1dCAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0JztcbmltcG9ydCBGb3JtVGV4dGFyZWEgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYSc7XG5pbXBvcnQgSGFtYnVyZ2VyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXInO1xuXG5pbXBvcnQgQWNjb3JkaW9uICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9BY2NvcmRpb24vQWNjb3JkaW9uJztcbmltcG9ydCBDYXJvdXNlbCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0Nhcm91c2VsL0Nhcm91c2VsJztcbmltcG9ydCBNYXAgICAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL01hcC9NYXAnO1xuaW1wb3J0IE1vZGFsICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuaW1wb3J0IFJlbW90ZUNoZWNrICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvUmVtb3RlQ2hlY2svUmVtb3RlQ2hlY2snO1xuaW1wb3J0IFNlYXJjaEJhciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQgU2xpZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TbGlkZXIvU2xpZGVyJztcbmltcG9ydCBTZWxlY3ROYXYgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NlbGVjdE5hdi9TZWxlY3ROYXYnO1xuXG5pbXBvcnQgU2lkZWJhciAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9TaWRlYmFyL1NpZGViYXInO1xuaW1wb3J0IENvbnRhY3QgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvQ29udGFjdC9Db250YWN0JztcbmltcG9ydCBIZWFkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IFNlcnZpY2VzICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvU2VydmljZXMvU2VydmljZXMnO1xuaW1wb3J0IFByb2R1Y3ROYXYgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvUHJvZHVjdE5hdi9Qcm9kdWN0TmF2JztcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgTGF6eUxvYWQsXG4gIE9uTG9hZE1vZGFsLFxuXG4gIEZvcm1DaGVja2JveCxcbiAgRm9ybUZpbGVJbnB1dCxcbiAgRm9ybUlucHV0LFxuICBGb3JtVGV4dGFyZWEsXG4gIEhhbWJ1cmdlcixcblxuICBBY2NvcmRpb24sXG4gIENhcm91c2VsLFxuICBNYXAsXG4gIE1vZGFsLFxuICBSZW1vdGVDaGVjayxcbiAgU2VhcmNoQmFyLFxuICBTbGlkZXIsXG4gIFNlbGVjdE5hdixcbiAgXG4gIFNpZGViYXIsXG4gIENvbnRhY3QsXG4gIEhlYWRlcixcbiAgU2VydmljZXMsXG4gIFByb2R1Y3ROYXYsXG59O1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudCggdGhhdCwgdHlwZSwgZGF0YSApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IGRhdGEgfHwge307XG4gIGxldCBDb21wb25lbnQgPSBDb21wb25lbnRzW3R5cGVdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICBDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCQodGhhdCksIG9wdGlvbnMpO1xuICAgIHRoYXQuc2V0Q29tcG9uZW50KCB0eXBlLCBDb21wb25lbnQpO1xuICAgICQodGhhdCkuZGF0YShgY29tcG9uZW50JHt0eXBlfWAsIENvbXBvbmVudCkucmVtb3ZlQXR0cihcImRhdGEtY29tcG9uZW50XCIpLnJlbW92ZURhdGEoXCJjb21wb25lbnRcIik7XG4gIH1cbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICBjb25zdCBDb21wb25lbnQgPSB0aGlzWyB0eXBlIF07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBDb21wb25lbnQgKSB7XG4gIHRoaXNbdHlwZV0gPSBDb21wb25lbnQ7XG59XG5cbndpbmRvdy5pbml0aWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtY29tcG9uZW50XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoIHRoaXMgKS5kYXRhKCdjb21wb25lbnQnKTtcbiAgICBpZiAoIEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcbiAgICAgIGZvciggdmFyIGkgaW4gZGF0YSApIHtcbiAgICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGFbaV0udHlwZSwgZGF0YVtpXSApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YS50eXBlLCBkYXRhICk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLCAkKCB0aGlzICkuZGF0YSgpICk7XG4gICAgfVxuXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0aWF0ZUNvbXBvbmVudHMoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ2hlY2tib3gge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9wZW5Nb2RhbDogXCJiW2RhdGEtZmFuY3lJZF1cIixcbiAgICAgIGJvZHk6IFwiLm0tc2Nyb2xsLWJveF9fYm9keVwiLFxuICAgICAgbW9iaWxlQm9keTogXCIubS1tb2RhbF9fYm9keVwiXG4gICAgICAvL21vZGFsLXVzZXItYWdyZWVtZW50LW1vYmlsZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5vcGVuTW9kYWwpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMub3Blbk1vZGFsLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YShcImZhbmN5aWRcIik7XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC11c2VyLWFncmVlbWVudFwiKSB7XG4gICAgICB0aGlzLiRib2R5ID0gJChtb2RhbElkKS5maW5kKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICB9XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC1jb250YWN0XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICBzcmM6IG1vZGFsSWQsXG4gICAgICBidXR0b25zOiBbXSxcbiAgICAgIHNtYWxsQnRuOiB0cnVlLFxuICAgICAgdG91Y2g6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWxlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcImlucHV0XCIsXG4gICAgICB0ZXh0OiBcIi5hLWZpbGUtaW5wdXRfX3RleHQgc3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICB0aGlzLiR0ZXh0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGV4dCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lO1xuICAgIHRoaXMuJHRleHQudGV4dChmaWxlTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuXG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGhpcy4kc2VsZWN0b3IpKSB7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0YXJlYSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiB0ZXh0YXJlYVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gIHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG5cbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG5cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6IFwiYS1oYW1idXJnZXItLW9wZW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImhhbWJ1cmdlci5jbGlja1wiKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImFjY29yZGlvbkhlYWRzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2hlYWRcIixcbiAgICAgIFwiYWNjb3JkaW9uQm9kaWVzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2JvZHlcIixcbiAgICAgIFwiYWN0aXZlQ2xhc3NcIjogXCJtLWFjY29yZGlvbl9faGVhZC0tYWN0aXZlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcyk7XG4gICAgdGhpcy5hY2NvcmRpb25Cb2RpZXMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25ib2RpZXMpO1xuICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3M7XG4gICAgdGhpcy5zaG93T25seU9uZSA9IHRoaXMub3B0aW9ucy5zaG93T25seU9uZTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmN1cnJUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zaG93T25seU9uZSkge1xuICAgICAgaWYgKHRoaXMuY3VyclRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25IZWFkcy5yZW1vdmVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyclRhcmdldC50b2dnbGVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiYWNjb3JkaW9uLmNoYW5nZVwiKTtcbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgICAgIGZvbGxvd0ZpbmdlcjogZmFsc2UsXG4gICAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICBsYXp5OiB7XG4gICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpO1xuICAgIGNvbnN0IHNsaWRlckRhdGEgPSBzbGlkZXIuZGF0YShcImNvbXBvbmVudFwiKTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucywgc2xpZGVyRGF0YSk7XG5cbiAgICBzbGlkZXIuZGF0YShcImNvbXBvbmVudFwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKVxuICAgICAgLm9uKCdzbGlkZUNoYW5nZScsIChlLCBpbmRleCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKGluZGV4KSlcbiAgICB0aGlzLiRlbC5maW5kKFwiLm0tY2Fyb3VzZWxfX3RodW1icyBsaVwiKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpXG5cbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIikuZGF0YShcImNvbXBvbmVudFNsaWRlclwiKTtcbiAgICBjb25zdCBidWxsZXQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50KCkuaW5kZXgoKVxuXG4gICAgc2xpZGVyLnNsaWRlVG8oYnVsbGV0ICsgMSlcbiAgfVxuXG4gIG9uU2xpZGVDaGFuZ2UoaW5kZXgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKS5kYXRhKFwiY29tcG9uZW50U2xpZGVyXCIpO1xuICAgICAgY29uc3QgYnVsbGV0cyA9IHRoaXMuJGVsLmZpbmQoXCIuYS1idWxsZXRzXCIpLmRhdGEoXCJjb21wb25lbnRCdWxsZXRzXCIpO1xuICAgICAgYnVsbGV0cy5zZXRBY3RpdmUoc2xpZGVyLnJlYWxJbmRleCk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSAkKHNsaWRlci5zbGlkZXNbc2xpZGVyLmFjdGl2ZUluZGV4XSk7XG5cbiAgICAgIGFjdGl2ZUl0ZW0udHJpZ2dlcihcInNsaWRlci5jaGFuZ2VcIiwgdGhpcyk7XG5cbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgZWwgPSAkZWw7XG5cbiAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IFt7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZTllOWU5XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjlcbiAgICAgIH0sIHtcbiAgICAgICAgXCJ3ZWlnaHRcIjogMC4yXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE4XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2RlZGVkZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInNhdHVyYXRpb25cIjogMzZcbiAgICAgIH0sIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiA0MFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDEuMlxuICAgICAgfV1cbiAgICB9XTtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgem9vbTogMTUsXG4gICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDEuMDQyODAyNywgMjguOTgyNjMyNyksXG4gICAgICB1cmw6ICcuLi8uLi9hc3NldHMvZGF0YS9NYXAuanNvbicsXG4gICAgICBwaW46IG9wdGlvbnMucGlubWVkaWEgfHwgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGVudC9waW4ucG5nJyxcbiAgICB9O1xuXG4gICAgZGVmYXVsdHNbJ3N0eWxlcyddID0gc3R5bGVzO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHBpblN0YXR1cyA9ICF0aGlzLm9wdGlvbnMubGF0ICYmICF0aGlzLm9wdGlvbnMubG5nO1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuJGVsWzBdLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKHBpblN0YXR1cykge1xuICAgICAgdGhpcy5tYXBEYXRhSGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gW3tcbiAgICAgICAgXCJjb29yZHNcIjoge1xuICAgICAgICAgIFwibGF0XCI6IHRoaXMub3B0aW9ucy5sYXQsXG4gICAgICAgICAgXCJsbmdcIjogdGhpcy5vcHRpb25zLmxuZ1xuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiB0aGlzLm9wdGlvbnMudXJsLFxuICAgICAgICBcImNvbnRlbnRcIjogdGhpcy5vcHRpb25zLmNvbnRlbnRcbiAgICAgIH1dXG4gICAgfVxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCB0aGlzLm1hcmtlckNyZWF0b3IoKSk7XG4gIH1cblxuICBtYXBGb2N1cyhwbGFjZSkge1xuICAgIGNvbnN0IG5ld1BsYWNlID0gcGxhY2Uuc3BsaXQoJywnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3UGxhY2VbMF0sIG5ld1BsYWNlWzFdKTtcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICB0aGlzLmJvdW5kcy5leHRlbmQocG9zaXRpb24pO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICB0aGlzLm1hcC5zZXRab29tKDExKTtcbiAgfVxuXG4gIG1hcERhdGFIYW5kbGVyKCkge1xuICAgICQuYWpheCh7XG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwgPyB0aGlzLm9wdGlvbnMudXJsIDogdGhpcy5kZWZhdWx0cy51cmwsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tcIm1hcmtlcnNcIl0gPSBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFya2VyQ3JlYXRvcigpIHtcbiAgICBjb25zdCBtYXJrZXJzID0gdGhpcy5vcHRpb25zLm1hcmtlcnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1hcmtlcihwcm9wcykge1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGF0OiBOdW1iZXIocHJvcHMuY29vcmRzLmxhdCksXG4gICAgICAgIGxuZzogTnVtYmVyKHByb3BzLmNvb3Jkcy5sbmcpXG4gICAgICB9LFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGljb246IHRoaXMub3B0aW9ucy5waW4gPyB0aGlzLm9wdGlvbnMucGluIDogdGhpcy5kZWZhdWx0cy5waW4sXG4gICAgfSk7XG5cbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcIm1hcC5jbGlja1wiLCBwcm9wcy5pZCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb25Mb2FkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oZWwuZ2V0KDApKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGVDaGVjayB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJtb2RhbFwiIDogXCIubS1tb2RhbFwiLFxuICAgICAgXCJsYWJlbFwiOiBcIi5hLWNoZWNrYm94XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFsID0gdGhpcy4kZWwuY2xvc2VzdCh0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgIHRoaXMuZmFuY3lJZCA9IFwiI1wiICsgdGhpcy5tb2RhbC5hdHRyKCdpZCcpO1xuICAgIHRoaXMubGFiZWwgPSAkKFwiW2RhdGEtZmFuY3lpZD0nXCIgKyB0aGlzLmZhbmN5SWQgKyBcIiddXCIpLmNsb3Nlc3QodGhpcy5vcHRpb25zLmxhYmVsKTtcbiAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5sYWJlbC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIHRoaXMuY2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgdGhpcy5jaGVja2JveC5wYXJzbGV5KCkuZGVzdHJveSgpXG4gICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICB0b2dnbGU6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLWNsb3NlLXNlYXJjaC1iYXJcIixcbiAgICAgIH0sXG4gICAgICBpY29uczoge1xuICAgICAgICBzZWxmOiBcIi5qcy1zZWFyY2hcIixcbiAgICAgICAgdG9nZ2xlOiBcImEtYnRuLWljb24tLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IFwiPiBpbnB1dFwiLFxuICAgICAgZm9ybTogXCIubS1mb3JtXCJcbiAgICB9O1xuICAgIFxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5pY29ucyA9ICQodGhpcy5vcHRpb25zLmljb25zLnNlbGYpO1xuICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5mb3JtKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpXG4gICAgICAub24oXCJrZXlwcmVzc1wiLCB0aGlzLm9wdGlvbnMuaW5wdXQsIGV2ZW50ID0+IHRoaXMub25LZXlwcmVzcyhldmVudCkpXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2gudG9nZ2xlKVxuICAgIHRoaXMuaWNvbnMudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmljb25zLnRvZ2dsZSlcbiAgfVxuXG4gIG9uS2V5cHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy4kZm9ybS5zdWJtaXQoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TmF2IHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0OiBcIi5hLXNlbGVjdFwiXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIFxuICAgICAgdGhpcy4kZWwub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgfVxuICBcbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgY29uc3QgdXJsID0gJChldmVudC50YXJnZXQpLnZhbCgpXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgIH1cbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBTd2lwZXIge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgY29uc3QgJHNsaWRlciA9IGVsLmZpbmQoXCIubS1zbGlkZXJfX3N3aXBlclwiKTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmRcIiksXG4gICAgICAgIHNsaWRlQ2hhbmdlOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVwiKSxcbiAgICAgICAgaW5pdDogKCkgPT4gICRlbC50cmlnZ2VyKFwiaW5pdFwiKSxcbiAgICAgICAgdG91Y2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwidG91Y2hFbmRcIiksXG4gICAgICAgIHJlYWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoRW5kXCIpLFxuICAgICAgICByZWFjaEJlZ2lubmluZzogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEJlZ2lubmluZ1wiKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdmlnYXRpb24gKSB7XG4gICAgICBvcHRpb25zLm5hdiA9IHtcbiAgICAgICAgbmV4dEVsOiAnPiAubS1zbGlkZXJfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICc+IC5tLXNsaWRlcl9fcHJldicsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6IFwiYS1idG4taWNvbi0tZGlzYWJsZWRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5wYWdpbmF0aW9uICkge1xuICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uID0ge1xuICAgICAgICBlbDogJGVsLmZpbmQoJy5zd2lwZXItcGFnaW5hdGlvbicpLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGVsID0gJGVsO1xuXG4gICAgc3VwZXIoJHNsaWRlci5nZXQoMCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICggb3B0aW9ucy5uYXYgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCApO1xuICAgICAgdGhpcy4kcHJldkVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwgKTtcblxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwsICgpID0+IHRoaXMuc2xpZGVOZXh0KCkpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYucHJldkVsLCAoKSA9PiB0aGlzLnNsaWRlUHJldigpKVxuICAgICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKCkpO1xuXG4gICAgICBpZiAoICFvcHRpb25zLmxvb3AgKSB7XG4gICAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgJGVsXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbk1vdXNlRW50ZXIoKSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKVxuICAgIH1cblxuICAgIGlmICggdGhpcy5zbGlkZXMubGVuZ3RoIDw9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcgKSB7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm0tc2xpZGVyLS1oaWRkZW4tbmF2XCIpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1sb2NhdGlvbi1ocmVmXVwiLCAoZSkgPT4gdGhpcy5vbkNsaWNrSXRlbShlKSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2tJdGVtKGUpIHtcbiAgICBpZiAoICEkKCBlLnRhcmdldCApLmlzKFwiYVwiKSApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoIGUuY3VycmVudFRhcmdldCApO1xuICAgICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhKCk7XG4gICAgICBpZiAoIGRhdGEubG9jYXRpb25IcmVmICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEubG9jYXRpb25IcmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcyAqIDI7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgpIHtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gJCh0aGlzLnNsaWRlc1sgdGhpcy5hY3RpdmVJbmRleCBdKTtcbiAgICBjb25zdCBhbmltYXRlZEl0ZW1zID0gYWN0aXZlSXRlbS5maW5kKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcblxuICAgICQuZWFjaChhbmltYXRlZEl0ZW1zLCAoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChpdGVtKS5kYXRhKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChpdGVtKS5hZGRDbGFzcyggY2xhc3NOYW1lICk7IH0sIDEpO1xuICAgIH0pO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlUHJldigpIHtcbiAgICBzdXBlci5zbGlkZVByZXYoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVOZXh0KCkge1xuICAgIHN1cGVyLnNsaWRlTmV4dCgpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3Qge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG1hcDogXCIjbWFwXCIsXG4gICAgICB0YWI6IFwiLm0tdGFiLWRlZmF1bHRcIixcbiAgICAgIHRhYkl0ZW06IFwiLm0tdGFiLWRlZmF1bHRfX2l0ZW0tLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwibWFwLmNsaWNrXCIsIChldmVudCwgaWQpID0+IHRoaXMub25DbGlja01hcChldmVudCwgaWQpKVxuICAgICAgLm9uKFwidGFiLnNob3dcIiwgKGV2ZW50LCBpbmRleCkgPT4gdGhpcy5vbkNoYW5nZVRhYihldmVudCwgaW5kZXgpKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uSW5pdE1hcCgpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgb25Jbml0TWFwKCkge1xuICAgIGNvbnN0IGNvb3JkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGFiSXRlbSkuZmluZChcIj4gYVwiKS5kYXRhKFwiY29vcmRcIilcbiAgICBjb25zdCBtYXAgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYXApLmRhdGEoXCJjb21wb25lbnRNYXBcIik7XG4gICAgbWFwLm1hcEZvY3VzKGNvb3JkKVxuICB9XG5cbiAgb25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSB7XG4gICAgdGhpcy5vbkluaXRNYXAoKVxuICB9XG5cbiAgb25DbGlja01hcChldmVudCwgaWQpIHtcbiAgICB0aGlzLiR0YWJzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGFiKVxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLiR0YWJzLmRhdGEoXCJjb21wb25lbnRUYWJEZWZhdWx0XCIpO1xuICAgIGNvbnN0IHRhYiA9IHRoaXMuJHRhYnMuZmluZChgYVtocmVmPVwiIyR7aWR9XCJdYCkucGFyZW50KCk7XG5cbiAgICB0YWJzLnNldEFjdGl2ZSh0YWIuaW5kZXgoKSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJtLW5hdi0tYWN0aXZlXCIsXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1zZWFyY2gtaGVhZGVyXCIsXG4gICAgICAgIGNsYXNzOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lml0ZW0sIGV2ZW50ID0+IHRoaXMub25DbGlja0Ryb3Bkb3duKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wZG93bihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmICgkdGFyZ2V0Lm5leHQoXCJ1bFwiKS5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkcGFyZW50ID0gJHRhcmdldC5wYXJlbnQoKTtcblxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKSkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5uYXYuaXRlbSkucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJG5hdi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuJHNlYXJjaEJhci5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKSl7XG4gICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcyk7XG5cbiAgICAgIGlmICh0aGlzLiRuYXYuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpKXtcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TmF2IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYWluOiBcIi5vLXByb2R1Y3QtbmF2LW1haW5fX2ljb25zIGFcIixcbiAgICAgIG1haW5BY3RpdmU6IFwiLm8tcHJvZHVjdC1uYXYtbWFpbl9faWNvbnMgYS5hY3RpdmVcIixcbiAgICAgIGxpc3Q6IFwiLm8tcHJvZHVjdC1uYXZfX2xpc3QgYVwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuICAgIHRoaXMuJG1haW4gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYWluKTtcbiAgICB0aGlzLiRhY3RpdmUgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYWluQWN0aXZlKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGljayBtb3VzZWVudGVyXCIsIHRoaXMub3B0aW9ucy5tYWluLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tNYWluKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrIG1vdXNlZW50ZXJcIiwgdGhpcy5vcHRpb25zLmxpc3QsIGV2ZW50ID0+IHRoaXMub25DbGlja0xpc3QoZXZlbnQpKVxuICAgIDtcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2hhZG93LCAoKSA9PiB0aGlzLmNsb3NlQWxsKCkpXG5cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKFwiby1wcm9kdWN0LW5hdi0tb3BlblwiKTtcbiAgICB0aGlzLiRzaGFkb3cucmVtb3ZlQ2xhc3MoJ2Etc2hhZG93LS1vcGVuJyk7XG5cdFx0dGhpcy4kbWFpbi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuXHRcdHRoaXMuJGFjdGl2ZS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICB9XG5cbiAgb25DbGlja01haW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0ICRoYXNoID0gJCgkdGFyZ2V0LmF0dHIoXCJocmVmXCIpKTtcbiAgICBjb25zdCAkc3ViSGFzaCA9ICQoJGhhc2guYXR0cignaHJlZicpKTtcblxuICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiby1wcm9kdWN0LW5hdi0tb3BlblwiKTtcbiAgICAkdGFyZ2V0LmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGhhc2guYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkc3ViSGFzaC5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XG5cbiAgICB0aGlzLiRzaGFkb3cuYWRkQ2xhc3MoJ2Etc2hhZG93LS1vcGVuJyk7XG4gIH1cblxuICBvbkNsaWNrTGlzdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgJHBhcmVudCA9ICQoYGFbaHJlZiQ9JyR7JHRhcmdldC5hdHRyKFwiaWRcIil9J11gKTtcbiAgICBjb25zdCAkc3ViSGFzaCA9ICQoJHRhcmdldC5hdHRyKCdocmVmJykpO1xuXG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJvLXByb2R1Y3QtbmF2LS1vcGVuXCIpO1xuICAgICR0YXJnZXQuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkcGFyZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJHN1Ykhhc2guc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xuXG4gICAgdGhpcy4kc2hhZG93LmFkZENsYXNzKCdhLXNoYWRvdy0tb3BlbicpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlcyB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBwcm9kdWN0Q2Fyb3VzZWxUZXh0ID0gbmV3IFN3aXBlcihcIi5vLXNlcnZpY2VzX190ZXh0IC5tLXNsaWRlcl9fc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogXCIuby1zZXJ2aWNlcyAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcHJvZHVjdENhcm91c2VsSW1hZ2UgPSBuZXcgU3dpcGVyKFwiLm8tc2VydmljZXNfX2ltYWdlIC5tLXNsaWRlcl9fc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRodW1iczoge1xuICAgICAgICAgIHN3aXBlcjogcHJvZHVjdENhcm91c2VsVGV4dFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBcIi5vLXNlcnZpY2VzIC5tLXNsaWRlcl9fbmV4dFwiLFxuICAgICAgICAgIHByZXZFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX3ByZXZcIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDk5MDoge1xuICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgIH1cbiAgXG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgdG9nZ2xlOiBcIm8tc2lkZWJhci0tb3BlblwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm8tc2lkZWJhcl9fbmF2XCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJvLXNpZGViYXJfX25hdi0tYWN0aXZlXCIsXG4gICAgICAgIGxpbms6IFwiLm8tc2lkZWJhcl9fbmF2LS1saW5rXCJcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tOYXYoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB0aGlzLndpbmRvd1Jlc2l6ZSgpKVxuXG4gIH1cblxuICB3aW5kb3dSZXNpemUoKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgICAgdGhpcy5jbG9zZUFsbCgpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gIH1cblxuICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKCR0YXJnZXQubmV4dChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRwYXJlbnQgPSAkdGFyZ2V0LnBhcmVudCgpO1xuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLm5hdi5pdGVtKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPiA3NjgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgfVxuICB9XG59XG4iXX0=
