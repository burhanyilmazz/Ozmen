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

  var $historyImg = $(".p-history-block-1__img");

  if ($historyImg.length) {
    var st = $(this).scrollTop();
    $historyImg.css({
      bottom: st * 0.2
    });
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

},{"../../molecules/Modal/Modal":25,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],15:[function(require,module,exports){
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

var _Progressbar = _interopRequireDefault(require("../../../src/atoms/Progressbar/Progressbar"));

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
  Progressbar: _Progressbar["default"],
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

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/assets/scripts/OnLoadModal":14,"../../../src/atoms/FormCheckbox/FormCheckbox":16,"../../../src/atoms/FormFileInput/FormFileInput":17,"../../../src/atoms/FormInput/FormInput":18,"../../../src/atoms/FormTextarea/FormTextarea":19,"../../../src/atoms/Hamburger/Hamburger":20,"../../../src/atoms/Progressbar/Progressbar":21,"../../../src/molecules/Accordion/Accordion":22,"../../../src/molecules/Carousel/Carousel":23,"../../../src/molecules/Map/Map":24,"../../../src/molecules/Modal/Modal":25,"../../../src/molecules/RemoteCheck/RemoteCheck":26,"../../../src/molecules/SearchBar/SearchBar":27,"../../../src/molecules/SelectNav/SelectNav":28,"../../../src/molecules/Slider/Slider":29,"../../../src/organisms/Contact/Contact":30,"../../../src/organisms/Header/Header":31,"../../../src/organisms/ProductNav/ProductNav":32,"../../../src/organisms/Services/Services":33,"../../../src/organisms/Sidebar/Sidebar":34,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],16:[function(require,module,exports){
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

var Progressbar = /*#__PURE__*/function () {
  function Progressbar(el, options) {
    (0, _classCallCheck2["default"])(this, Progressbar);
    this.$el = el;
    var defaults = {
      bar: ".a-progressbar__bar span"
    };
    this.options = $.extend({}, defaults, options);
    this.$bar = this.$el.find(this.options.bar);
    this.start = true;
    this.onInit();
  }

  (0, _createClass2["default"])(Progressbar, [{
    key: "onInit",
    value: function onInit() {
      var _this = this;

      var waypoints = this.$el.waypoint({
        handler: function handler(direction) {
          if (direction == "down" && _this.start) {
            _this.$bar.animate({
              width: _this.$bar.data("percent")
            });

            _this.start = false;
          }
        },
        offset: '100%'
      });
    }
  }]);
  return Progressbar;
}();

exports["default"] = Progressbar;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],22:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],24:[function(require,module,exports){
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
      zoom: 11,
      center: new google.maps.LatLng(37.1539307, 37.2792745),
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],25:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],26:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],27:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],28:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],29:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/get":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}],30:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],31:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],32:[function(require,module,exports){
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
    $(document).on("click mouseenter", this.options.shadow, function () {
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],33:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],34:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveC5lczYiLCJzcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0LmVzNiIsInNyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhLmVzNiIsInNyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyLmVzNiIsInNyYy9hdG9tcy9Qcm9ncmVzc2Jhci9Qcm9ncmVzc2Jhci5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbC5lczYiLCJzcmMvbW9sZWN1bGVzL01hcC9NYXAuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL1JlbW90ZUNoZWNrL1JlbW90ZUNoZWNrLmVzNiIsInNyYy9tb2xlY3VsZXMvU2VhcmNoQmFyL1NlYXJjaEJhci5lczYiLCJzcmMvbW9sZWN1bGVzL1NlbGVjdE5hdi9TZWxlY3ROYXYuZXM2Iiwic3JjL21vbGVjdWxlcy9TbGlkZXIvU2xpZGVyLmVzNiIsInNyYy9vcmdhbmlzbXMvQ29udGFjdC9Db250YWN0LmVzNiIsInNyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlci5lczYiLCJzcmMvb3JnYW5pc21zL1Byb2R1Y3ROYXYvUHJvZHVjdE5hdi5lczYiLCJzcmMvb3JnYW5pc21zL1NlcnZpY2VzL1NlcnZpY2VzLmVzNiIsInNyYy9vcmdhbmlzbXMvU2lkZWJhci9TaWRlYmFyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckJBLElBQU0sWUFBWSxHQUFHLEdBQXJCO0FBQ0EsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQXRCOztBQUVBLFNBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsU0FBTyxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF0RDtBQUNEOztBQUNELENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVk7QUFDM0IsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLEVBQTFCO0FBQ0EsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEtBQVYsRUFBcEI7O0FBRUEsTUFBSSxZQUFZLENBQUMsTUFBYixJ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Q0FBakI7QUFDQSxVQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBUixDQUFhLEdBQWIsRUFBa0IsSUFBbEIsQ0FBdUIsTUFBdkIsQ0FBWjtBQUVBLE1BQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkI7QUFDRDs7O1dBRUQsdUJBQWMsS0FBZCxFQUFxQjtBQUNuQixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBRUEsV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssT0FBTCxDQUFhLE1BQWIsU0FBNUI7QUFDQSxXQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxDQUFhLE1BQWxDO0FBQ0EsV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLG1CQUE1QjtBQUNEOzs7V0FFRCwwQkFBaUIsS0FBakIsRUFBd0I7QUFDdEIsVUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEtBQVYsRUFBcEI7O0FBRUEsVUFBSSxXQUFXLEdBQUcsR0FBbEIsRUFBdUI7QUFDckIsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLGFBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQWEsTUFBbEM7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxPQUFMLENBQWEsTUFBYixTQUE1QjtBQUNEO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImNvbnN0IHNocmlua0hlYWRlciA9IDUyMDtcbmNvbnN0ICR0cmFuc3BhcmVudCA9ICQoXCIuby1oZWFkZXItLXRyYW5zcGFyZW50XCIpO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2Nyb2xsKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG59XG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZSA9IGdldEN1cnJlbnRTY3JvbGwoKTtcbiAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICBpZiAoJHRyYW5zcGFyZW50Lmxlbmd0aCAmJiB3aW5kb3dXaWR0aCA8IDc2OSkge1xuICAgIHNocmlua0hlYWRlciA8PSBlID9cbiAgICAgICQoXCIuby1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJvLWhlYWRlci0tdHJhbnNwYXJlbnRcIikucmVtb3ZlQ2xhc3MoXCJvLWhlYWRlci0td2hpdGVcIikgOlxuICAgICAgJChcIi5vLWhlYWRlclwiKS5hZGRDbGFzcyhcIm8taGVhZGVyLS10cmFuc3BhcmVudFwiKS5hZGRDbGFzcyhcIm8taGVhZGVyLS13aGl0ZVwiKTtcbiAgfVxuXG4gIGNvbnN0ICRoaXN0b3J5SW1nID0gJChcIi5wLWhpc3RvcnktYmxvY2stMV9faW1nXCIpO1xuICBpZiAoJGhpc3RvcnlJbWcubGVuZ3RoKSB7XG4gICAgY29uc3Qgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgICRoaXN0b3J5SW1nLmNzcyh7XG4gICAgICBib3R0b206IHN0ICogMC4yXG4gICAgfSk7XG4gIH1cbn0pXG5cbndpbmRvdy5QYXJzbGV5LmFkZFZhbGlkYXRvcignbWF4RmlsZVNpemUnLCB7XG4gIHZhbGlkYXRlU3RyaW5nOiBmdW5jdGlvbiAoX3ZhbHVlLCBtYXhTaXplLCBwYXJzbGV5SW5zdGFuY2UpIHtcbiAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBmaWxlcyA9IHBhcnNsZXlJbnN0YW5jZS4kZWxlbWVudFswXS5maWxlcztcbiAgICByZXR1cm4gZmlsZXMubGVuZ3RoICE9IDEgfHwgZmlsZXNbMF0uc2l6ZSA8PSBtYXhTaXplICogMTAyNDtcbiAgfSxcbiAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gIG1lc3NhZ2VzOiB7XG4gICAgdHI6ICdNYXguIGRvc3lhIGJveXV0dSAlcyBLYi4gb2xhbWFsxLFkxLFyJ1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgbGF4LnNldHVwKHtcbiAgICBicmVha3BvaW50czoge1xuICAgICAgc21hbGw6IDAsXG4gICAgICBsYXJnZTogNzY4XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZUxheCA9ICgpID0+IHtcbiAgICBsYXgudXBkYXRlKHdpbmRvdy5zY3JvbGxZKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudCkub24oXCJsYXp5YmVmb3JldW52ZWlsXCIsIHRoaXMub3B0aW9ucy5zcGVlY2hCdXR0b24sIGV2ZW50ID0+IHRoaXMub25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSk7XG5cbiAgfVxuXG4gIG9uTGF6eUJlZm9yZVVudmVpbChldmVudCkge1xuICAgIGNvbnN0IGxhenlFbGVtZW50ID0gJChldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBsYXp5RWxlbWVudC5hdHRyKCBcImRhdGEtYmFja2dyb3VuZFwiICk7XG4gICAgaWYgKCBiYWNrZ3JvdW5kICkge1xuICAgICAgbGF6eUVsZW1lbnQuY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBMYXp5TG9hZCgpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5jbGFzcyBPbkxvYWRNb2RhbCB7XG4gIHN0YXRpYyBvbkxvYWRNb2RhbCgpIHtcbiAgICBjb25zdCBoYXNoID0gJChsb2NhdGlvbikuYXR0cihcImhhc2hcIik7XG5cbiAgICBzd2l0Y2ggKGhhc2gpIHtcbiAgICAgIGNhc2UgXCIjZXJyb3JNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiI3N1Y2Nlc3NNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1vZGFsVHlwZSh0eXBlKSB7XG4gICAgaWYgKCQoYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWApLmxlbmd0aCA+IDApIHtcbiAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgIHNyYzogYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWAsXG4gICAgICAgIGJhc2VDbGFzczogYGZhbmN5Ym94LS0ke3R5cGV9IG0tbW9kYWwtLWFsZXJ0YCxcbiAgICAgICAgdG91Y2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE9uTG9hZE1vZGFsKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IE9uTG9hZE1vZGFsLm9uTG9hZE1vZGFsKCkpO1xuIiwiaW1wb3J0IEdlbmVyYWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwnO1xuaW1wb3J0IExhenlMb2FkICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZCc7XG5pbXBvcnQgT25Mb2FkTW9kYWwgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwnO1xuXG5pbXBvcnQgRm9ybUNoZWNrYm94ICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3gnO1xuaW1wb3J0IEZvcm1GaWxlSW5wdXQgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtRmlsZUlucHV0L0Zvcm1GaWxlSW5wdXQnO1xuaW1wb3J0IEZvcm1JbnB1dCAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0JztcbmltcG9ydCBGb3JtVGV4dGFyZWEgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYSc7XG5pbXBvcnQgSGFtYnVyZ2VyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXInO1xuaW1wb3J0IFByb2dyZXNzYmFyICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Qcm9ncmVzc2Jhci9Qcm9ncmVzc2Jhcic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IENhcm91c2VsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwnO1xuaW1wb3J0IE1hcCAgICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTWFwL01hcCc7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgUmVtb3RlQ2hlY2sgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjayc7XG5pbXBvcnQgU2VhcmNoQmFyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyJztcbmltcG9ydCBTbGlkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXInO1xuaW1wb3J0IFNlbGVjdE5hdiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdic7XG5cbmltcG9ydCBTaWRlYmFyICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhcic7XG5pbXBvcnQgQ29udGFjdCAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IEhlYWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2VydmljZXMgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9TZXJ2aWNlcy9TZXJ2aWNlcyc7XG5pbXBvcnQgUHJvZHVjdE5hdiAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Qcm9kdWN0TmF2L1Byb2R1Y3ROYXYnO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcbiAgT25Mb2FkTW9kYWwsXG5cbiAgRm9ybUNoZWNrYm94LFxuICBGb3JtRmlsZUlucHV0LFxuICBGb3JtSW5wdXQsXG4gIEZvcm1UZXh0YXJlYSxcbiAgSGFtYnVyZ2VyLFxuICBQcm9ncmVzc2JhcixcblxuICBBY2NvcmRpb24sXG4gIENhcm91c2VsLFxuICBNYXAsXG4gIE1vZGFsLFxuICBSZW1vdGVDaGVjayxcbiAgU2VhcmNoQmFyLFxuICBTbGlkZXIsXG4gIFNlbGVjdE5hdixcbiAgXG4gIFNpZGViYXIsXG4gIENvbnRhY3QsXG4gIEhlYWRlcixcbiAgU2VydmljZXMsXG4gIFByb2R1Y3ROYXYsXG59O1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudCggdGhhdCwgdHlwZSwgZGF0YSApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IGRhdGEgfHwge307XG4gIGxldCBDb21wb25lbnQgPSBDb21wb25lbnRzW3R5cGVdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICBDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCQodGhhdCksIG9wdGlvbnMpO1xuICAgIHRoYXQuc2V0Q29tcG9uZW50KCB0eXBlLCBDb21wb25lbnQpO1xuICAgICQodGhhdCkuZGF0YShgY29tcG9uZW50JHt0eXBlfWAsIENvbXBvbmVudCkucmVtb3ZlQXR0cihcImRhdGEtY29tcG9uZW50XCIpLnJlbW92ZURhdGEoXCJjb21wb25lbnRcIik7XG4gIH1cbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICBjb25zdCBDb21wb25lbnQgPSB0aGlzWyB0eXBlIF07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBDb21wb25lbnQgKSB7XG4gIHRoaXNbdHlwZV0gPSBDb21wb25lbnQ7XG59XG5cbndpbmRvdy5pbml0aWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtY29tcG9uZW50XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoIHRoaXMgKS5kYXRhKCdjb21wb25lbnQnKTtcbiAgICBpZiAoIEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcbiAgICAgIGZvciggdmFyIGkgaW4gZGF0YSApIHtcbiAgICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGFbaV0udHlwZSwgZGF0YVtpXSApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YS50eXBlLCBkYXRhICk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLCAkKCB0aGlzICkuZGF0YSgpICk7XG4gICAgfVxuXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0aWF0ZUNvbXBvbmVudHMoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ2hlY2tib3gge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9wZW5Nb2RhbDogXCJiW2RhdGEtZmFuY3lJZF1cIixcbiAgICAgIGJvZHk6IFwiLm0tc2Nyb2xsLWJveF9fYm9keVwiLFxuICAgICAgbW9iaWxlQm9keTogXCIubS1tb2RhbF9fYm9keVwiXG4gICAgICAvL21vZGFsLXVzZXItYWdyZWVtZW50LW1vYmlsZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5vcGVuTW9kYWwpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMub3Blbk1vZGFsLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YShcImZhbmN5aWRcIik7XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC11c2VyLWFncmVlbWVudFwiKSB7XG4gICAgICB0aGlzLiRib2R5ID0gJChtb2RhbElkKS5maW5kKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICB9XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC1jb250YWN0XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICBzcmM6IG1vZGFsSWQsXG4gICAgICBidXR0b25zOiBbXSxcbiAgICAgIHNtYWxsQnRuOiB0cnVlLFxuICAgICAgdG91Y2g6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWxlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcImlucHV0XCIsXG4gICAgICB0ZXh0OiBcIi5hLWZpbGUtaW5wdXRfX3RleHQgc3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICB0aGlzLiR0ZXh0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGV4dCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lO1xuICAgIHRoaXMuJHRleHQudGV4dChmaWxlTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuXG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGhpcy4kc2VsZWN0b3IpKSB7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0YXJlYSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiB0ZXh0YXJlYVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gIHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG5cbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG5cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6IFwiYS1oYW1idXJnZXItLW9wZW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImhhbWJ1cmdlci5jbGlja1wiKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc2JhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYmFyOiBcIi5hLXByb2dyZXNzYmFyX19iYXIgc3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRiYXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5iYXIpO1xuXG5cdFx0dGhpcy5zdGFydCA9IHRydWU7XG5cbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgb25Jbml0KCkge1xuICAgIHZhciB3YXlwb2ludHMgPSB0aGlzLiRlbC53YXlwb2ludCh7XG4gICAgICBoYW5kbGVyOiAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJkb3duXCIgJiYgdGhpcy5zdGFydCkge1xuICAgICAgICAgIHRoaXMuJGJhci5hbmltYXRlKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLiRiYXIuZGF0YShcInBlcmNlbnRcIilcbiAgICAgICAgICB9KTtcblx0XHRcdFx0XHR0aGlzLnN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvZmZzZXQ6ICcxMDAlJ1xuICAgIH0pXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJhY2NvcmRpb25IZWFkc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19oZWFkXCIsXG4gICAgICBcImFjY29yZGlvbkJvZGllc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19ib2R5XCIsXG4gICAgICBcImFjdGl2ZUNsYXNzXCI6IFwibS1hY2NvcmRpb25fX2hlYWQtLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmFjY29yZGlvbkhlYWRzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMpO1xuICAgIHRoaXMuYWNjb3JkaW9uQm9kaWVzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uYm9kaWVzKTtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gdGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzO1xuICAgIHRoaXMuc2hvd09ubHlPbmUgPSB0aGlzLm9wdGlvbnMuc2hvd09ubHlPbmU7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jdXJyVGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuc2hvd09ubHlPbmUpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJUYXJnZXQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKSkge1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMucmVtb3ZlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJUYXJnZXQudG9nZ2xlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImFjY29yZGlvbi5jaGFuZ2VcIik7XG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICBmb2xsb3dGaW5nZXI6IGZhbHNlLFxuICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIik7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHNsaWRlckRhdGEpO1xuXG4gICAgc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIilcbiAgICAgIC5vbignc2xpZGVDaGFuZ2UnLCAoZSwgaW5kZXgpID0+IHRoaXMub25TbGlkZUNoYW5nZShpbmRleCkpXG4gICAgdGhpcy4kZWwuZmluZChcIi5tLWNhcm91c2VsX190aHVtYnMgbGlcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgY29uc3QgYnVsbGV0ID0gJChldmVudC50YXJnZXQpLnBhcmVudCgpLmluZGV4KClcblxuICAgIHNsaWRlci5zbGlkZVRvKGJ1bGxldCArIDEpXG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKGluZGV4KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIikuZGF0YShcImNvbXBvbmVudFNsaWRlclwiKTtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLiRlbC5maW5kKFwiLmEtYnVsbGV0c1wiKS5kYXRhKFwiY29tcG9uZW50QnVsbGV0c1wiKTtcbiAgICAgIGJ1bGxldHMuc2V0QWN0aXZlKHNsaWRlci5yZWFsSW5kZXgpO1xuXG4gICAgICBjb25zdCBhY3RpdmVJdGVtID0gJChzbGlkZXIuc2xpZGVzW3NsaWRlci5hY3RpdmVJbmRleF0pO1xuXG4gICAgICBhY3RpdmVJdGVtLnRyaWdnZXIoXCJzbGlkZXIuY2hhbmdlXCIsIHRoaXMpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGVsID0gJGVsO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICBjb25zdCBzdHlsZXMgPSBbe1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2U5ZTllOVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDI5XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDAuMlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkZWRlZGVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgfSwge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDM2XG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfSwge1xuICAgICAgICBcIndlaWdodFwiOiAxLjJcbiAgICAgIH1dXG4gICAgfV07XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHpvb206IDExLFxuICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3LjE1MzkzMDcsMzcuMjc5Mjc0NSksXG4gICAgICB1cmw6ICcuLi8uLi9hc3NldHMvZGF0YS9NYXAuanNvbicsXG4gICAgICBwaW46IG9wdGlvbnMucGlubWVkaWEgfHwgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGVudC9waW4ucG5nJyxcbiAgICB9O1xuXG4gICAgZGVmYXVsdHNbJ3N0eWxlcyddID0gc3R5bGVzO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHBpblN0YXR1cyA9ICF0aGlzLm9wdGlvbnMubGF0ICYmICF0aGlzLm9wdGlvbnMubG5nO1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuJGVsWzBdLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKHBpblN0YXR1cykge1xuICAgICAgdGhpcy5tYXBEYXRhSGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gW3tcbiAgICAgICAgXCJjb29yZHNcIjoge1xuICAgICAgICAgIFwibGF0XCI6IHRoaXMub3B0aW9ucy5sYXQsXG4gICAgICAgICAgXCJsbmdcIjogdGhpcy5vcHRpb25zLmxuZ1xuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiB0aGlzLm9wdGlvbnMudXJsLFxuICAgICAgICBcImNvbnRlbnRcIjogdGhpcy5vcHRpb25zLmNvbnRlbnRcbiAgICAgIH1dXG4gICAgfVxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCB0aGlzLm1hcmtlckNyZWF0b3IoKSk7XG4gIH1cblxuICBtYXBGb2N1cyhwbGFjZSkge1xuICAgIGNvbnN0IG5ld1BsYWNlID0gcGxhY2Uuc3BsaXQoJywnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3UGxhY2VbMF0sIG5ld1BsYWNlWzFdKTtcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICB0aGlzLmJvdW5kcy5leHRlbmQocG9zaXRpb24pO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICB0aGlzLm1hcC5zZXRab29tKDExKTtcbiAgfVxuXG4gIG1hcERhdGFIYW5kbGVyKCkge1xuICAgICQuYWpheCh7XG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwgPyB0aGlzLm9wdGlvbnMudXJsIDogdGhpcy5kZWZhdWx0cy51cmwsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tcIm1hcmtlcnNcIl0gPSBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFya2VyQ3JlYXRvcigpIHtcbiAgICBjb25zdCBtYXJrZXJzID0gdGhpcy5vcHRpb25zLm1hcmtlcnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1hcmtlcihwcm9wcykge1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGF0OiBOdW1iZXIocHJvcHMuY29vcmRzLmxhdCksXG4gICAgICAgIGxuZzogTnVtYmVyKHByb3BzLmNvb3Jkcy5sbmcpXG4gICAgICB9LFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGljb246IHRoaXMub3B0aW9ucy5waW4gPyB0aGlzLm9wdGlvbnMucGluIDogdGhpcy5kZWZhdWx0cy5waW4sXG4gICAgfSk7XG5cbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcIm1hcC5jbGlja1wiLCBwcm9wcy5pZCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb25Mb2FkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oZWwuZ2V0KDApKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGVDaGVjayB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJtb2RhbFwiIDogXCIubS1tb2RhbFwiLFxuICAgICAgXCJsYWJlbFwiOiBcIi5hLWNoZWNrYm94XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFsID0gdGhpcy4kZWwuY2xvc2VzdCh0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgIHRoaXMuZmFuY3lJZCA9IFwiI1wiICsgdGhpcy5tb2RhbC5hdHRyKCdpZCcpO1xuICAgIHRoaXMubGFiZWwgPSAkKFwiW2RhdGEtZmFuY3lpZD0nXCIgKyB0aGlzLmZhbmN5SWQgKyBcIiddXCIpLmNsb3Nlc3QodGhpcy5vcHRpb25zLmxhYmVsKTtcbiAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5sYWJlbC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIHRoaXMuY2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgdGhpcy5jaGVja2JveC5wYXJzbGV5KCkuZGVzdHJveSgpXG4gICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICB0b2dnbGU6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLWNsb3NlLXNlYXJjaC1iYXJcIixcbiAgICAgIH0sXG4gICAgICBpY29uczoge1xuICAgICAgICBzZWxmOiBcIi5qcy1zZWFyY2hcIixcbiAgICAgICAgdG9nZ2xlOiBcImEtYnRuLWljb24tLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IFwiPiBpbnB1dFwiLFxuICAgICAgZm9ybTogXCIubS1mb3JtXCJcbiAgICB9O1xuICAgIFxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5pY29ucyA9ICQodGhpcy5vcHRpb25zLmljb25zLnNlbGYpO1xuICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5mb3JtKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpXG4gICAgICAub24oXCJrZXlwcmVzc1wiLCB0aGlzLm9wdGlvbnMuaW5wdXQsIGV2ZW50ID0+IHRoaXMub25LZXlwcmVzcyhldmVudCkpXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2gudG9nZ2xlKVxuICAgIHRoaXMuaWNvbnMudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmljb25zLnRvZ2dsZSlcbiAgfVxuXG4gIG9uS2V5cHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy4kZm9ybS5zdWJtaXQoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TmF2IHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0OiBcIi5hLXNlbGVjdFwiXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIFxuICAgICAgdGhpcy4kZWwub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgfVxuICBcbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgY29uc3QgdXJsID0gJChldmVudC50YXJnZXQpLnZhbCgpXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgIH1cbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBTd2lwZXIge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgY29uc3QgJHNsaWRlciA9IGVsLmZpbmQoXCIubS1zbGlkZXJfX3N3aXBlclwiKTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmRcIiksXG4gICAgICAgIHNsaWRlQ2hhbmdlOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVwiKSxcbiAgICAgICAgaW5pdDogKCkgPT4gICRlbC50cmlnZ2VyKFwiaW5pdFwiKSxcbiAgICAgICAgdG91Y2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwidG91Y2hFbmRcIiksXG4gICAgICAgIHJlYWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoRW5kXCIpLFxuICAgICAgICByZWFjaEJlZ2lubmluZzogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEJlZ2lubmluZ1wiKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdmlnYXRpb24gKSB7XG4gICAgICBvcHRpb25zLm5hdiA9IHtcbiAgICAgICAgbmV4dEVsOiAnPiAubS1zbGlkZXJfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICc+IC5tLXNsaWRlcl9fcHJldicsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6IFwiYS1idG4taWNvbi0tZGlzYWJsZWRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5wYWdpbmF0aW9uICkge1xuICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uID0ge1xuICAgICAgICBlbDogJGVsLmZpbmQoJy5zd2lwZXItcGFnaW5hdGlvbicpLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGVsID0gJGVsO1xuXG4gICAgc3VwZXIoJHNsaWRlci5nZXQoMCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICggb3B0aW9ucy5uYXYgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCApO1xuICAgICAgdGhpcy4kcHJldkVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwgKTtcblxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwsICgpID0+IHRoaXMuc2xpZGVOZXh0KCkpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYucHJldkVsLCAoKSA9PiB0aGlzLnNsaWRlUHJldigpKVxuICAgICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKCkpO1xuXG4gICAgICBpZiAoICFvcHRpb25zLmxvb3AgKSB7XG4gICAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgJGVsXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbk1vdXNlRW50ZXIoKSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKVxuICAgIH1cblxuICAgIGlmICggdGhpcy5zbGlkZXMubGVuZ3RoIDw9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcgKSB7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm0tc2xpZGVyLS1oaWRkZW4tbmF2XCIpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1sb2NhdGlvbi1ocmVmXVwiLCAoZSkgPT4gdGhpcy5vbkNsaWNrSXRlbShlKSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2tJdGVtKGUpIHtcbiAgICBpZiAoICEkKCBlLnRhcmdldCApLmlzKFwiYVwiKSApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoIGUuY3VycmVudFRhcmdldCApO1xuICAgICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhKCk7XG4gICAgICBpZiAoIGRhdGEubG9jYXRpb25IcmVmICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEubG9jYXRpb25IcmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcyAqIDI7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgpIHtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gJCh0aGlzLnNsaWRlc1sgdGhpcy5hY3RpdmVJbmRleCBdKTtcbiAgICBjb25zdCBhbmltYXRlZEl0ZW1zID0gYWN0aXZlSXRlbS5maW5kKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcblxuICAgICQuZWFjaChhbmltYXRlZEl0ZW1zLCAoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChpdGVtKS5kYXRhKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChpdGVtKS5hZGRDbGFzcyggY2xhc3NOYW1lICk7IH0sIDEpO1xuICAgIH0pO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlUHJldigpIHtcbiAgICBzdXBlci5zbGlkZVByZXYoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVOZXh0KCkge1xuICAgIHN1cGVyLnNsaWRlTmV4dCgpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3Qge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG1hcDogXCIjbWFwXCIsXG4gICAgICB0YWI6IFwiLm0tdGFiLWRlZmF1bHRcIixcbiAgICAgIHRhYkl0ZW06IFwiLm0tdGFiLWRlZmF1bHRfX2l0ZW0tLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwibWFwLmNsaWNrXCIsIChldmVudCwgaWQpID0+IHRoaXMub25DbGlja01hcChldmVudCwgaWQpKVxuICAgICAgLm9uKFwidGFiLnNob3dcIiwgKGV2ZW50LCBpbmRleCkgPT4gdGhpcy5vbkNoYW5nZVRhYihldmVudCwgaW5kZXgpKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uSW5pdE1hcCgpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgb25Jbml0TWFwKCkge1xuICAgIGNvbnN0IGNvb3JkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGFiSXRlbSkuZmluZChcIj4gYVwiKS5kYXRhKFwiY29vcmRcIilcbiAgICBjb25zdCBtYXAgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYXApLmRhdGEoXCJjb21wb25lbnRNYXBcIik7XG4gICAgbWFwLm1hcEZvY3VzKGNvb3JkKVxuICB9XG5cbiAgb25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSB7XG4gICAgdGhpcy5vbkluaXRNYXAoKVxuICB9XG5cbiAgb25DbGlja01hcChldmVudCwgaWQpIHtcbiAgICB0aGlzLiR0YWJzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGFiKVxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLiR0YWJzLmRhdGEoXCJjb21wb25lbnRUYWJEZWZhdWx0XCIpO1xuICAgIGNvbnN0IHRhYiA9IHRoaXMuJHRhYnMuZmluZChgYVtocmVmPVwiIyR7aWR9XCJdYCkucGFyZW50KCk7XG5cbiAgICB0YWJzLnNldEFjdGl2ZSh0YWIuaW5kZXgoKSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJtLW5hdi0tYWN0aXZlXCIsXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1zZWFyY2gtaGVhZGVyXCIsXG4gICAgICAgIGNsYXNzOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lml0ZW0sIGV2ZW50ID0+IHRoaXMub25DbGlja0Ryb3Bkb3duKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wZG93bihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmICgkdGFyZ2V0Lm5leHQoXCJ1bFwiKS5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkcGFyZW50ID0gJHRhcmdldC5wYXJlbnQoKTtcblxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKSkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5uYXYuaXRlbSkucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJG5hdi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuJHNlYXJjaEJhci5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKSl7XG4gICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcyk7XG5cbiAgICAgIGlmICh0aGlzLiRuYXYuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpKXtcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TmF2IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYWluOiBcIi5vLXByb2R1Y3QtbmF2LW1haW5fX2ljb25zIGFcIixcbiAgICAgIG1haW5BY3RpdmU6IFwiLm8tcHJvZHVjdC1uYXYtbWFpbl9faWNvbnMgYS5hY3RpdmVcIixcbiAgICAgIGxpc3Q6IFwiLm8tcHJvZHVjdC1uYXZfX2xpc3QgYVwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuICAgIHRoaXMuJG1haW4gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYWluKTtcbiAgICB0aGlzLiRhY3RpdmUgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5tYWluQWN0aXZlKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGljayBtb3VzZWVudGVyXCIsIHRoaXMub3B0aW9ucy5tYWluLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tNYWluKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrIG1vdXNlZW50ZXJcIiwgdGhpcy5vcHRpb25zLmxpc3QsIGV2ZW50ID0+IHRoaXMub25DbGlja0xpc3QoZXZlbnQpKVxuICAgIDtcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJjbGljayBtb3VzZWVudGVyXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJvLXByb2R1Y3QtbmF2LS1vcGVuXCIpO1xuICAgIHRoaXMuJHNoYWRvdy5yZW1vdmVDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcblx0XHR0aGlzLiRtYWluLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG5cdFx0dGhpcy4kYWN0aXZlLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gIH1cblxuICBvbkNsaWNrTWFpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgJGhhc2ggPSAkKCR0YXJnZXQuYXR0cihcImhyZWZcIikpO1xuICAgIGNvbnN0ICRzdWJIYXNoID0gJCgkaGFzaC5hdHRyKCdocmVmJykpO1xuXG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJvLXByb2R1Y3QtbmF2LS1vcGVuXCIpO1xuICAgICR0YXJnZXQuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkaGFzaC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRzdWJIYXNoLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcblxuICAgIHRoaXMuJHNoYWRvdy5hZGRDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcbiAgfVxuXG4gIG9uQ2xpY2tMaXN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkcGFyZW50ID0gJChgYVtocmVmJD0nJHskdGFyZ2V0LmF0dHIoXCJpZFwiKX0nXWApO1xuICAgIGNvbnN0ICRzdWJIYXNoID0gJCgkdGFyZ2V0LmF0dHIoJ2hyZWYnKSk7XG5cbiAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgJHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRwYXJlbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkc3ViSGFzaC5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XG5cbiAgICB0aGlzLiRzaGFkb3cuYWRkQ2xhc3MoJ2Etc2hhZG93LS1vcGVuJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZpY2VzIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHBhZ2luYXRpb246IFwiLm8tc2VydmljZXNfX2ltYWdlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnBhZ2luYXRpb24sIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuXG4gICAgY29uc3QgcHJvZHVjdENhcm91c2VsVGV4dCA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19fdGV4dCAubS1zbGlkZXJfX3N3aXBlclwiLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5vLXNlcnZpY2VzIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucHJvZHVjdENhcm91c2VsSW1hZ2UgPSBuZXcgU3dpcGVyKFwiLm8tc2VydmljZXNfX2ltYWdlIC5tLXNsaWRlcl9fc3dpcGVyXCIsIHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGxhenk6IHtcbiAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAgdGh1bWJzOiB7XG4gICAgICAgIHN3aXBlcjogcHJvZHVjdENhcm91c2VsVGV4dFxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5vLXNlcnZpY2VzIC5tLXNsaWRlcl9fbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLm8tc2VydmljZXMgLm0tc2xpZGVyX19wcmV2XCJcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICA5OTA6IHtcbiAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgdGhpcy5wcm9kdWN0Q2Fyb3VzZWxJbWFnZS5zbGlkZVRvKCR0YXJnZXQuaW5kZXgoKSwgMTAwKVxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIHRvZ2dsZTogXCJvLXNpZGViYXItLW9wZW5cIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIixcbiAgICAgIG5hdjoge1xuICAgICAgICBzZWxmOiBcIi5vLXNpZGViYXJfX25hdlwiLFxuICAgICAgICBpdGVtOiBcIm5hdiA+IHVsID4gbGkgc3BhblwiLFxuICAgICAgICBhY3RpdmU6IFwiby1zaWRlYmFyX19uYXYtLWFjdGl2ZVwiLFxuICAgICAgICBsaW5rOiBcIi5vLXNpZGViYXJfX25hdi0tbGlua1wiXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1zZWFyY2hcIixcbiAgICAgICAgY2xhc3M6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGhhbWJ1cmdlciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmhhbWJ1cmdlcik7XG4gICAgdGhpcy4kbmF2ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubmF2LnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYuaXRlbSwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTmF2KGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYubGluaywgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGluayhldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4gdGhpcy53aW5kb3dSZXNpemUoKSlcblxuICB9XG5cbiAgd2luZG93UmVzaXplKCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGwoKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmICgkdGFyZ2V0Lm5leHQoXCJ1bFwiKS5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkcGFyZW50ID0gJHRhcmdldC5wYXJlbnQoKTtcblxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKSkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5uYXYuaXRlbSkucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tMaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0IHVybCA9ICR0YXJnZXQuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgfVxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0aGlzLiRzZWFyY2hCYXIudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgfVxuXG4gIG9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoID4gNzY4KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIH1cbiAgfVxufVxuIl19
