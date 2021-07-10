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

$(document).ready(function () {
  $(".m-copyright-nav .a-btn-icon").on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });
  var $woman1 = $(".p-homepage-history__woman--leaf-1");
  var $woman2 = $(".p-homepage-history__woman--leaf-2");
  var $woman3 = $(".p-homepage-history__woman--leaf-3");

  function moved(x, y, duration, el) {
    el.animate({
      textIndent: 0
    }, {
      step: function step(now, fx) {
        $(".p-homepage__history").mousemove(function (e) {
          var amountMovedX = e.pageX * -1 / x;
          var amountMovedY = e.pageY * -1 / y;
          el.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
          });
        });
      },
      duration: duration
    }, 'easeOutCubic');
  }

  moved(74, 75, 200, $woman1);
  moved(-86, 92, 200, $woman2);
  moved(-96, 66, 200, $woman3);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Sticky = /*#__PURE__*/function (_Headroom) {
  (0, _inherits2["default"])(Sticky, _Headroom);

  var _super = _createSuper(Sticky);

  function Sticky(el, options) {
    var _thisSuper, _this;

    (0, _classCallCheck2["default"])(this, Sticky);
    var $el = el;
    var defaults = {
      prefix: 'sticky',
      tolerance: {
        down: 10,
        up: 0
      },
      offset: 64
    };
    options = $.extend({}, defaults, options);
    options.classes = {
      initial: "".concat(options.prefix),
      pinned: "".concat(options.prefix, "--pinned"),
      unpinned: "".concat(options.prefix, "--unpinned"),
      top: "".concat(options.prefix, "--top"),
      notTop: "".concat(options.prefix, "--not-top"),
      bottom: "".concat(options.prefix, "--bottom"),
      notBottom: "".concat(options.prefix, "--not-bottom")
    };
    _this = _super.call(this, $el.get(0), options);
    (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this), (0, _getPrototypeOf2["default"])(Sticky.prototype)), "init", _thisSuper).call(_thisSuper);
    return _this;
  }

  return Sticky;
}(Headroom);

exports["default"] = Sticky;

},{"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/get":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _General = _interopRequireDefault(require("../../../src/assets/scripts/General"));

var _LazyLoad = _interopRequireDefault(require("../../../src/assets/scripts/LazyLoad"));

var _OnLoadModal = _interopRequireDefault(require("../../../src/assets/scripts/OnLoadModal"));

var _Sticky = _interopRequireDefault(require("../../../src/assets/scripts/Sticky"));

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
  Sticky: _Sticky["default"],
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

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/assets/scripts/OnLoadModal":14,"../../../src/assets/scripts/Sticky":15,"../../../src/atoms/FormCheckbox/FormCheckbox":17,"../../../src/atoms/FormFileInput/FormFileInput":18,"../../../src/atoms/FormInput/FormInput":19,"../../../src/atoms/FormTextarea/FormTextarea":20,"../../../src/atoms/Hamburger/Hamburger":21,"../../../src/molecules/Accordion/Accordion":22,"../../../src/molecules/Carousel/Carousel":23,"../../../src/molecules/Map/Map":24,"../../../src/molecules/Modal/Modal":25,"../../../src/molecules/RemoteCheck/RemoteCheck":26,"../../../src/molecules/SearchBar/SearchBar":27,"../../../src/molecules/SelectNav/SelectNav":28,"../../../src/molecules/Slider/Slider":29,"../../../src/organisms/Contact/Contact":30,"../../../src/organisms/Header/Header":31,"../../../src/organisms/ProductNav/ProductNav":32,"../../../src/organisms/Services/Services":33,"../../../src/organisms/Sidebar/Sidebar":34,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],17:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],18:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],19:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],20:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],21:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],33:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],34:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9TdGlja3kuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsInNyYy9hdG9tcy9Gb3JtQ2hlY2tib3gvRm9ybUNoZWNrYm94LmVzNiIsInNyYy9hdG9tcy9Gb3JtRmlsZUlucHV0L0Zvcm1GaWxlSW5wdXQuZXM2Iiwic3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQuZXM2Iiwic3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEuZXM2Iiwic3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXIuZXM2Iiwic3JjL21vbGVjdWxlcy9BY2NvcmRpb24vQWNjb3JkaW9uLmVzNiIsInNyYy9tb2xlY3VsZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuZXM2Iiwic3JjL21vbGVjdWxlcy9NYXAvTWFwLmVzNiIsInNyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwuZXM2Iiwic3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjay5lczYiLCJzcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXIuZXM2Iiwic3JjL21vbGVjdWxlcy9TZWxlY3ROYXYvU2VsZWN0TmF2LmVzNiIsInNyYy9tb2xlY3VsZXMvU2xpZGVyL1NsaWRlci5lczYiLCJzcmMvb3JnYW5pc21zL0NvbnRhY3QvQ29udGFjdC5lczYiLCJzcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9Qcm9kdWN0TmF2L1Byb2R1Y3ROYXYuZXM2Iiwic3JjL29yZ2FuaXNtcy9TZXJ2aWNlcy9TZXJ2aWNlcy5lczYiLCJzcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhci5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFpQixNQUFsQztBQUNELFNBSEQsTUFHTztBQUNMLFVBQUEsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixNQUFyQztBQUNEO0FBQ0Y7QUFDRjs7O1dBRUQscUJBQVksS0FBWixFQUFtQjtBQUNqQixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsVUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFQLENBQWpCO0FBQ0EsVUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQVIsQ0FBYSxHQUFiLEVBQWtCLElBQWxCLENBQXVCLE1BQXZCLENBQVo7QUFFQSxNQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0Q7OztXQUVELHVCQUFjLEtBQWQsRUFBcUI7QUFDbkIsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUVBLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLE9BQUwsQ0FBYSxNQUFiLFNBQTVCO0FBQ0EsV0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxNQUFsQztBQUNBLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixtQkFBNUI7QUFDRDs7O1dBRUQsMEJBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxLQUFWLEVBQXBCOztBQUVBLFVBQUksV0FBVyxHQUFHLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxhQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxDQUFhLE1BQWxDO0FBQ0EsYUFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssT0FBTCxDQUFhLE1BQWIsU0FBNUI7QUFDRDtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cbiAgJChcIi5tLWNvcHlyaWdodC1uYXYgLmEtYnRuLWljb25cIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9LCAnc2xvdycpO1xuICB9KVxuXG4gIGNvbnN0ICR3b21hbjEgPSAkKFwiLnAtaG9tZXBhZ2UtaGlzdG9yeV9fd29tYW4tLWxlYWYtMVwiKTtcbiAgY29uc3QgJHdvbWFuMiA9ICQoXCIucC1ob21lcGFnZS1oaXN0b3J5X193b21hbi0tbGVhZi0yXCIpO1xuICBjb25zdCAkd29tYW4zID0gJChcIi5wLWhvbWVwYWdlLWhpc3RvcnlfX3dvbWFuLS1sZWFmLTNcIik7XG5cbiAgZnVuY3Rpb24gbW92ZWQoeCwgeSwgZHVyYXRpb24sIGVsKSB7XG4gICAgZWwuYW5pbWF0ZSh7XG4gICAgICB0ZXh0SW5kZW50OiAwXG4gICAgfSwge1xuICAgICAgc3RlcDogKG5vdywgZngpID0+IHtcbiAgICAgICAgJChcIi5wLWhvbWVwYWdlX19oaXN0b3J5XCIpLm1vdXNlbW92ZSgoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFtb3VudE1vdmVkWCA9IChlLnBhZ2VYICogLTEgLyB4KTtcbiAgICAgICAgICBjb25zdCBhbW91bnRNb3ZlZFkgPSAoZS5wYWdlWSAqIC0xIC8geSk7XG4gICAgICAgICAgZWwuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZHVyYXRpb25cbiAgICB9LCAnZWFzZU91dEN1YmljJyk7XG4gIH1cblxuICBtb3ZlZCg3NCwgNzUsIDIwMCwgJHdvbWFuMSk7XG4gIG1vdmVkKC04NiwgOTIsIDIwMCwgJHdvbWFuMik7XG4gIG1vdmVkKC05NiwgNjYsIDIwMCwgJHdvbWFuMyk7XG5cbn0pO1xuXG53aW5kb3cuUGFyc2xleS5hZGRWYWxpZGF0b3IoJ21heEZpbGVTaXplJywge1xuICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gKF92YWx1ZSwgbWF4U2l6ZSwgcGFyc2xleUluc3RhbmNlKSB7XG4gICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBwYXJzbGV5SW5zdGFuY2UuJGVsZW1lbnRbMF0uZmlsZXM7XG4gICAgcmV0dXJuIGZpbGVzLmxlbmd0aCAhPSAxIHx8IGZpbGVzWzBdLnNpemUgPD0gbWF4U2l6ZSAqIDEwMjQ7XG4gIH0sXG4gIHJlcXVpcmVtZW50VHlwZTogJ2ludGVnZXInLFxuICBtZXNzYWdlczoge1xuICAgIHRyOiAnTWF4LiBkb3N5YSBib3l1dHUgJXMgS2IuIG9sYW1hbMSxZMSxcidcbiAgfVxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxheC5zZXR1cCh7XG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIHNtYWxsOiAwLFxuICAgICAgbGFyZ2U6IDc2OFxuICAgIH1cbiAgfSlcblxuICBjb25zdCB1cGRhdGVMYXggPSAoKSA9PiB7XG4gICAgbGF4LnVwZGF0ZSh3aW5kb3cuc2Nyb2xsWSlcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUxheClcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwibGF6eWJlZm9yZXVudmVpbFwiLCB0aGlzLm9wdGlvbnMuc3BlZWNoQnV0dG9uLCBldmVudCA9PiB0aGlzLm9uTGF6eUJlZm9yZVVudmVpbChldmVudCkpO1xuXG4gIH1cblxuICBvbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpIHtcbiAgICBjb25zdCBsYXp5RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbGF6eUVsZW1lbnQuYXR0ciggXCJkYXRhLWJhY2tncm91bmRcIiApO1xuICAgIGlmICggYmFja2dyb3VuZCApIHtcbiAgICAgIGxhenlFbGVtZW50LmNzcyh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTGF6eUxvYWQoKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuY2xhc3MgT25Mb2FkTW9kYWwge1xuICBzdGF0aWMgb25Mb2FkTW9kYWwoKSB7XG4gICAgY29uc3QgaGFzaCA9ICQobG9jYXRpb24pLmF0dHIoXCJoYXNoXCIpO1xuXG4gICAgc3dpdGNoIChoYXNoKSB7XG4gICAgICBjYXNlIFwiI2Vycm9yTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcImVycm9yXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIiNzdWNjZXNzTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcInN1Y2Nlc3NcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtb2RhbFR5cGUodHlwZSkge1xuICAgIGlmICgkKGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gKS5sZW5ndGggPiAwKSB7XG4gICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICBzcmM6IGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gLFxuICAgICAgICBiYXNlQ2xhc3M6IGBmYW5jeWJveC0tJHt0eXBlfSBtLW1vZGFsLS1hbGVydGAsXG4gICAgICAgIHRvdWNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPbkxvYWRNb2RhbCgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBPbkxvYWRNb2RhbC5vbkxvYWRNb2RhbCgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreSBleHRlbmRzIEhlYWRyb29tIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBwcmVmaXg6ICdzdGlja3knLFxuICAgICAgdG9sZXJhbmNlOiB7XG4gICAgICAgIGRvd24gOiAxMCxcbiAgICAgICAgdXAgOiAwXG4gICAgICB9LFxuICAgICAgb2Zmc2V0IDogNjRcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLmNsYXNzZXMgPSB7XG4gICAgICBpbml0aWFsIDogYCR7b3B0aW9ucy5wcmVmaXh9YCxcbiAgICAgIHBpbm5lZCA6IGAke29wdGlvbnMucHJlZml4fS0tcGlubmVkYCxcbiAgICAgIHVucGlubmVkIDogYCR7b3B0aW9ucy5wcmVmaXh9LS11bnBpbm5lZGAsXG4gICAgICB0b3AgOiBgJHtvcHRpb25zLnByZWZpeH0tLXRvcGAsXG4gICAgICBub3RUb3AgOiBgJHtvcHRpb25zLnByZWZpeH0tLW5vdC10b3BgLFxuICAgICAgYm90dG9tIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ib3R0b21gLFxuICAgICAgbm90Qm90dG9tIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ub3QtYm90dG9tYFxuICAgIH1cblxuICAgIHN1cGVyKCRlbC5nZXQoMCksIG9wdGlvbnMpO1xuICAgIHN1cGVyLmluaXQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgR2VuZXJhbCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbCc7XG5pbXBvcnQgTGF6eUxvYWQgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0xhenlMb2FkJztcbmltcG9ydCBPbkxvYWRNb2RhbCAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9PbkxvYWRNb2RhbCc7XG5pbXBvcnQgU3RpY2t5ICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreSc7XG5cbmltcG9ydCBGb3JtQ2hlY2tib3ggICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveCc7XG5pbXBvcnQgRm9ybUZpbGVJbnB1dCAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dCc7XG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IENhcm91c2VsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwnO1xuaW1wb3J0IE1hcCAgICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTWFwL01hcCc7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgUmVtb3RlQ2hlY2sgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjayc7XG5pbXBvcnQgU2VhcmNoQmFyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyJztcbmltcG9ydCBTbGlkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXInO1xuaW1wb3J0IFNlbGVjdE5hdiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2VsZWN0TmF2L1NlbGVjdE5hdic7XG5cbmltcG9ydCBTaWRlYmFyICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhcic7XG5pbXBvcnQgQ29udGFjdCAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Db250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IEhlYWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2VydmljZXMgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9TZXJ2aWNlcy9TZXJ2aWNlcyc7XG5pbXBvcnQgUHJvZHVjdE5hdiAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9Qcm9kdWN0TmF2L1Byb2R1Y3ROYXYnO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcbiAgU3RpY2t5LFxuICBPbkxvYWRNb2RhbCxcblxuICBGb3JtQ2hlY2tib3gsXG4gIEZvcm1GaWxlSW5wdXQsXG4gIEZvcm1JbnB1dCxcbiAgRm9ybVRleHRhcmVhLFxuICBIYW1idXJnZXIsXG5cbiAgQWNjb3JkaW9uLFxuICBDYXJvdXNlbCxcbiAgTWFwLFxuICBNb2RhbCxcbiAgUmVtb3RlQ2hlY2ssXG4gIFNlYXJjaEJhcixcbiAgU2xpZGVyLFxuICBTZWxlY3ROYXYsXG4gIFxuICBTaWRlYmFyLFxuICBDb250YWN0LFxuICBIZWFkZXIsXG4gIFNlcnZpY2VzLFxuICBQcm9kdWN0TmF2LFxufTtcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoIHRoYXQsIHR5cGUsIGRhdGEgKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBkYXRhIHx8IHt9O1xuICBsZXQgQ29tcG9uZW50ID0gQ29tcG9uZW50c1t0eXBlXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgkKHRoYXQpLCBvcHRpb25zKTtcbiAgICB0aGF0LnNldENvbXBvbmVudCggdHlwZSwgQ29tcG9uZW50KTtcbiAgICAkKHRoYXQpLmRhdGEoYGNvbXBvbmVudCR7dHlwZX1gLCBDb21wb25lbnQpLnJlbW92ZUF0dHIoXCJkYXRhLWNvbXBvbmVudFwiKS5yZW1vdmVEYXRhKFwiY29tcG9uZW50XCIpO1xuICB9XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGhpc1sgdHlwZSBdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSwgQ29tcG9uZW50ICkge1xuICB0aGlzW3R5cGVdID0gQ29tcG9uZW50O1xufVxuXG53aW5kb3cuaW5pdGlhdGVDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gICQoJ1tkYXRhLWNvbXBvbmVudF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCB0aGlzICkuZGF0YSgnY29tcG9uZW50Jyk7XG4gICAgaWYgKCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG4gICAgICBmb3IoIHZhciBpIGluIGRhdGEgKSB7XG4gICAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEudHlwZSwgZGF0YSApO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YSwgJCggdGhpcyApLmRhdGEoKSApO1xuICAgIH1cblxuICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdGlhdGVDb21wb25lbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNoZWNrYm94IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvcGVuTW9kYWw6IFwiYltkYXRhLWZhbmN5SWRdXCIsXG4gICAgICBib2R5OiBcIi5tLXNjcm9sbC1ib3hfX2JvZHlcIixcbiAgICAgIG1vYmlsZUJvZHk6IFwiLm0tbW9kYWxfX2JvZHlcIlxuICAgICAgLy9tb2RhbC11c2VyLWFncmVlbWVudC1tb2JpbGVcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMub3Blbk1vZGFsKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm9wZW5Nb2RhbCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJChldmVudC50YXJnZXQpLmRhdGEoXCJmYW5jeWlkXCIpO1xuXG4gICAgaWYgKG1vZGFsSWQgPT0gXCIjbW9kYWwtdXNlci1hZ3JlZW1lbnRcIikge1xuICAgICAgdGhpcy4kYm9keSA9ICQobW9kYWxJZCkuZmluZCh0aGlzLm9wdGlvbnMuYm9keSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGFsSWQgPT0gXCIjbW9kYWwtY29udGFjdFwiKSB7XG4gICAgICB0aGlzLiRib2R5ID0gJChtb2RhbElkKS5maW5kKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICB9XG5cbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgc3JjOiBtb2RhbElkLFxuICAgICAgYnV0dG9uczogW10sXG4gICAgICBzbWFsbEJ0bjogdHJ1ZSxcbiAgICAgIHRvdWNoOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmlsZUlucHV0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCJpbnB1dFwiLFxuICAgICAgdGV4dDogXCIuYS1maWxlLWlucHV0X190ZXh0IHNwYW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgdGhpcy4kdGV4dCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRleHQpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICB0aGlzLiR0ZXh0LnRleHQoZmlsZU5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/IHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gdGV4dGFyZWFcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/ICB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuXG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBcImEtaGFtYnVyZ2VyLS1vcGVuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJoYW1idXJnZXIuY2xpY2tcIik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJhY2NvcmRpb25IZWFkc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19oZWFkXCIsXG4gICAgICBcImFjY29yZGlvbkJvZGllc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19ib2R5XCIsXG4gICAgICBcImFjdGl2ZUNsYXNzXCI6IFwibS1hY2NvcmRpb25fX2hlYWQtLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmFjY29yZGlvbkhlYWRzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMpO1xuICAgIHRoaXMuYWNjb3JkaW9uQm9kaWVzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uYm9kaWVzKTtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gdGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzO1xuICAgIHRoaXMuc2hvd09ubHlPbmUgPSB0aGlzLm9wdGlvbnMuc2hvd09ubHlPbmU7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jdXJyVGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuc2hvd09ubHlPbmUpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJUYXJnZXQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKSkge1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMucmVtb3ZlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJUYXJnZXQudG9nZ2xlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImFjY29yZGlvbi5jaGFuZ2VcIik7XG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICBmb2xsb3dGaW5nZXI6IGZhbHNlLFxuICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIik7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHNsaWRlckRhdGEpO1xuXG4gICAgc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIilcbiAgICAgIC5vbignc2xpZGVDaGFuZ2UnLCAoZSwgaW5kZXgpID0+IHRoaXMub25TbGlkZUNoYW5nZShpbmRleCkpXG4gICAgdGhpcy4kZWwuZmluZChcIi5tLWNhcm91c2VsX190aHVtYnMgbGlcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgY29uc3QgYnVsbGV0ID0gJChldmVudC50YXJnZXQpLnBhcmVudCgpLmluZGV4KClcblxuICAgIHNsaWRlci5zbGlkZVRvKGJ1bGxldCArIDEpXG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKGluZGV4KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIikuZGF0YShcImNvbXBvbmVudFNsaWRlclwiKTtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLiRlbC5maW5kKFwiLmEtYnVsbGV0c1wiKS5kYXRhKFwiY29tcG9uZW50QnVsbGV0c1wiKTtcbiAgICAgIGJ1bGxldHMuc2V0QWN0aXZlKHNsaWRlci5yZWFsSW5kZXgpO1xuXG4gICAgICBjb25zdCBhY3RpdmVJdGVtID0gJChzbGlkZXIuc2xpZGVzW3NsaWRlci5hY3RpdmVJbmRleF0pO1xuXG4gICAgICBhY3RpdmVJdGVtLnRyaWdnZXIoXCJzbGlkZXIuY2hhbmdlXCIsIHRoaXMpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGVsID0gJGVsO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICBjb25zdCBzdHlsZXMgPSBbe1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2U5ZTllOVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDI5XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDAuMlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkZWRlZGVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgfSwge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDM2XG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfSwge1xuICAgICAgICBcIndlaWdodFwiOiAxLjJcbiAgICAgIH1dXG4gICAgfV07XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHpvb206IDE1LFxuICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQxLjA0MjgwMjcsIDI4Ljk4MjYzMjcpLFxuICAgICAgdXJsOiAnLi4vLi4vYXNzZXRzL2RhdGEvTWFwLmpzb24nLFxuICAgICAgcGluOiBvcHRpb25zLnBpbm1lZGlhIHx8ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvcGluLnBuZycsXG4gICAgfTtcblxuICAgIGRlZmF1bHRzWydzdHlsZXMnXSA9IHN0eWxlcztcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBwaW5TdGF0dXMgPSAhdGhpcy5vcHRpb25zLmxhdCAmJiAhdGhpcy5vcHRpb25zLmxuZztcblxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLiRlbFswXSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChwaW5TdGF0dXMpIHtcbiAgICAgIHRoaXMubWFwRGF0YUhhbmRsZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zW1wibWFya2Vyc1wiXSA9IFt7XG4gICAgICAgIFwiY29vcmRzXCI6IHtcbiAgICAgICAgICBcImxhdFwiOiB0aGlzLm9wdGlvbnMubGF0LFxuICAgICAgICAgIFwibG5nXCI6IHRoaXMub3B0aW9ucy5sbmdcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjogdGhpcy5vcHRpb25zLnVybCxcbiAgICAgICAgXCJjb250ZW50XCI6IHRoaXMub3B0aW9ucy5jb250ZW50XG4gICAgICB9XVxuICAgIH1cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgdGhpcy5tYXJrZXJDcmVhdG9yKCkpO1xuICB9XG5cbiAgbWFwRm9jdXMocGxhY2UpIHtcbiAgICBjb25zdCBuZXdQbGFjZSA9IHBsYWNlLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld1BsYWNlWzBdLCBuZXdQbGFjZVsxXSk7XG4gICAgdGhpcy5ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgdGhpcy5ib3VuZHMuZXh0ZW5kKHBvc2l0aW9uKTtcblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSgxMSk7XG4gIH1cblxuICBtYXBEYXRhSGFuZGxlcigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsID8gdGhpcy5vcHRpb25zLnVybCA6IHRoaXMuZGVmYXVsdHMudXJsLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcmtlckNyZWF0b3IoKSB7XG4gICAgY29uc3QgbWFya2VycyA9IHRoaXMub3B0aW9ucy5tYXJrZXJzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXJrZXJzW2ldKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXJrZXIocHJvcHMpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxhdDogTnVtYmVyKHByb3BzLmNvb3Jkcy5sYXQpLFxuICAgICAgICBsbmc6IE51bWJlcihwcm9wcy5jb29yZHMubG5nKVxuICAgICAgfSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICBpY29uOiB0aGlzLm9wdGlvbnMucGluID8gdGhpcy5vcHRpb25zLnBpbiA6IHRoaXMuZGVmYXVsdHMucGluLFxuICAgIH0pO1xuXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJtYXAuY2xpY2tcIiwgcHJvcHMuaWQpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9uTG9hZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMub25Mb2FkKSB7XG4gICAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGVsLmdldCgwKSk7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RlQ2hlY2sge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwibW9kYWxcIiA6IFwiLm0tbW9kYWxcIixcbiAgICAgIFwibGFiZWxcIjogXCIuYS1jaGVja2JveFwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5tb2RhbCA9IHRoaXMuJGVsLmNsb3Nlc3QodGhpcy5vcHRpb25zLm1vZGFsKTtcbiAgICB0aGlzLmZhbmN5SWQgPSBcIiNcIiArIHRoaXMubW9kYWwuYXR0cignaWQnKTtcbiAgICB0aGlzLmxhYmVsID0gJChcIltkYXRhLWZhbmN5aWQ9J1wiICsgdGhpcy5mYW5jeUlkICsgXCInXVwiKS5jbG9zZXN0KHRoaXMub3B0aW9ucy5sYWJlbCk7XG4gICAgdGhpcy5jaGVja2JveCA9IHRoaXMubGFiZWwuZmluZCgnaW5wdXQnKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICB0aGlzLmNoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIHRoaXMuY2hlY2tib3gucGFyc2xleSgpLmRlc3Ryb3koKVxuICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgdG9nZ2xlOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1jbG9zZS1zZWFyY2gtYmFyXCIsXG4gICAgICB9LFxuICAgICAgaWNvbnM6IHtcbiAgICAgICAgc2VsZjogXCIuanMtc2VhcmNoXCIsXG4gICAgICAgIHRvZ2dsZTogXCJhLWJ0bi1pY29uLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGlucHV0OiBcIj4gaW5wdXRcIixcbiAgICAgIGZvcm06IFwiLm0tZm9ybVwiXG4gICAgfTtcbiAgICBcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuaWNvbnMgPSAkKHRoaXMub3B0aW9ucy5pY29ucy5zZWxmKTtcbiAgICB0aGlzLiRmb3JtID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuZm9ybSk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuICAgICAgLm9uKFwia2V5cHJlc3NcIiwgdGhpcy5vcHRpb25zLmlucHV0LCBldmVudCA9PiB0aGlzLm9uS2V5cHJlc3MoZXZlbnQpKVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLnRvZ2dsZSlcbiAgICB0aGlzLmljb25zLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5pY29ucy50b2dnbGUpXG4gIH1cblxuICBvbktleXByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIHRoaXMuJGZvcm0uc3VibWl0KClcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE5hdiB7XG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gIFxuICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICBcbiAgICAgIHRoaXMuJGVsLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKVxuICAgIH1cbiAgXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHVybCA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICB9XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgU3dpcGVyIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGNvbnN0ICRzbGlkZXIgPSBlbC5maW5kKFwiLm0tc2xpZGVyX19zd2lwZXJcIik7XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogKCkgPT4gICRlbC50cmlnZ2VyKFwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kXCIpLFxuICAgICAgICBzbGlkZUNoYW5nZTogKCkgPT4gICRlbC50cmlnZ2VyKFwic2xpZGVDaGFuZ2VcIiksXG4gICAgICAgIGluaXQ6ICgpID0+ICAkZWwudHJpZ2dlcihcImluaXRcIiksXG4gICAgICAgIHRvdWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInRvdWNoRW5kXCIpLFxuICAgICAgICByZWFjaEVuZDogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEVuZFwiKSxcbiAgICAgICAgcmVhY2hCZWdpbm5pbmc6ICgpID0+ICRlbC50cmlnZ2VyKFwicmVhY2hCZWdpbm5pbmdcIiksXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICggb3B0aW9ucy5uYXZpZ2F0aW9uICkge1xuICAgICAgb3B0aW9ucy5uYXYgPSB7XG4gICAgICAgIG5leHRFbDogJz4gLm0tc2xpZGVyX19uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnPiAubS1zbGlkZXJfX3ByZXYnLFxuICAgICAgICBkaXNhYmxlZENsYXNzOiBcImEtYnRuLWljb24tLWRpc2FibGVkXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIG9wdGlvbnMucGFnaW5hdGlvbiApIHtcbiAgICAgIG9wdGlvbnMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgZWw6ICRlbC5maW5kKCcuc3dpcGVyLXBhZ2luYXRpb24nKSxcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBlbCA9ICRlbDtcblxuICAgIHN1cGVyKCRzbGlkZXIuZ2V0KDApLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIG9wdGlvbnMubmF2ICkge1xuICAgICAgdGhpcy4kbmV4dEVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwgKTtcbiAgICAgIHRoaXMuJHByZXZFbCA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy5uYXYucHJldkVsICk7XG5cbiAgICAgIHRoaXMuJGVsXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYubmV4dEVsLCAoKSA9PiB0aGlzLnNsaWRlTmV4dCgpKVxuICAgICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2LnByZXZFbCwgKCkgPT4gdGhpcy5zbGlkZVByZXYoKSlcbiAgICAgICAgLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHRoaXMub25TbGlkZUNoYW5nZSgpKTtcblxuICAgICAgaWYgKCAhb3B0aW9ucy5sb29wICkge1xuICAgICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICRlbFxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMub25Nb3VzZUVudGVyKCkpXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSlcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuc2xpZGVzLmxlbmd0aCA8PSB0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICkge1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJtLXNsaWRlci0taGlkZGVuLW5hdlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIFwiW2RhdGEtbG9jYXRpb24taHJlZl1cIiwgKGUpID0+IHRoaXMub25DbGlja0l0ZW0oZSkpO1xuXG4gIH1cblxuICBvbkNsaWNrSXRlbShlKSB7XG4gICAgaWYgKCAhJCggZS50YXJnZXQgKS5pcyhcImFcIikgKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAkKCBlLmN1cnJlbnRUYXJnZXQgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB0YXJnZXQuZGF0YSgpO1xuICAgICAgaWYgKCBkYXRhLmxvY2F0aW9uSHJlZiApIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLmxvY2F0aW9uSHJlZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5sb29wZWRTbGlkZXMgKiAyO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuYXV0b3BsYXkuc3RhcnQoKTtcbiAgfVxuXG4gIG9uU2xpZGVDaGFuZ2UoKSB7XG4gICAgdGhpcy4kcHJldkVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB0aGlzLiRuZXh0RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9ICQodGhpcy5zbGlkZXNbIHRoaXMuYWN0aXZlSW5kZXggXSk7XG4gICAgY29uc3QgYW5pbWF0ZWRJdGVtcyA9IGFjdGl2ZUl0ZW0uZmluZChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG5cbiAgICAkLmVhY2goYW5pbWF0ZWRJdGVtcywgKGksIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9ICQoaXRlbSkuZGF0YShcImFuaW1hdGlvblwiKTtcbiAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQoaXRlbSkuYWRkQ2xhc3MoIGNsYXNzTmFtZSApOyB9LCAxKTtcbiAgICB9KTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzQmVnaW5uaW5nICkge1xuICAgICAgdGhpcy4kcHJldkVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG4gIH1cblxuICBzbGlkZVByZXYoKSB7XG4gICAgc3VwZXIuc2xpZGVQcmV2KCk7XG4gICAgdGhpcy4kcHJldkVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB0aGlzLiRuZXh0RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlTmV4dCgpIHtcbiAgICBzdXBlci5zbGlkZU5leHQoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0VuZCApIHtcbiAgICAgIHRoaXMuJG5leHRFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuXG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYXA6IFwiI21hcFwiLFxuICAgICAgdGFiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICB0YWJJdGVtOiBcIi5tLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcIm1hcC5jbGlja1wiLCAoZXZlbnQsIGlkKSA9PiB0aGlzLm9uQ2xpY2tNYXAoZXZlbnQsIGlkKSlcbiAgICAgIC5vbihcInRhYi5zaG93XCIsIChldmVudCwgaW5kZXgpID0+IHRoaXMub25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkluaXRNYXAoKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uSW5pdE1hcCgpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYkl0ZW0pLmZpbmQoXCI+IGFcIikuZGF0YShcImNvb3JkXCIpXG4gICAgY29uc3QgbWFwID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFwKS5kYXRhKFwiY29tcG9uZW50TWFwXCIpO1xuICAgIG1hcC5tYXBGb2N1cyhjb29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkge1xuICAgIHRoaXMub25Jbml0TWFwKClcbiAgfVxuXG4gIG9uQ2xpY2tNYXAoZXZlbnQsIGlkKSB7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYilcbiAgICBjb25zdCB0YWJzID0gdGhpcy4kdGFicy5kYXRhKFwiY29tcG9uZW50VGFiRGVmYXVsdFwiKTtcbiAgICBjb25zdCB0YWIgPSB0aGlzLiR0YWJzLmZpbmQoYGFbaHJlZj1cIiMke2lkfVwiXWApLnBhcmVudCgpO1xuXG4gICAgdGFicy5zZXRBY3RpdmUodGFiLmluZGV4KCkpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm0tbmF2XCIsXG4gICAgICAgIHRvZ2dsZTogXCJtLW5hdi0tb3BlblwiLFxuICAgICAgICBpdGVtOiBcIm5hdiA+IHVsID4gbGkgc3BhblwiLFxuICAgICAgICBhY3RpdmU6IFwibS1uYXYtLWFjdGl2ZVwiLFxuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBzZWxmOiBcIi5tLXNlYXJjaC1iYXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoLWhlYWRlclwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tEcm9wZG93bihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gIH1cblxuICBvbkNsaWNrRHJvcGRvd24oZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoJHRhcmdldC5uZXh0KFwidWxcIikubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJHBhcmVudCA9ICR0YXJnZXQucGFyZW50KCk7XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMubmF2Lml0ZW0pLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0aGlzLiRzZWFyY2hCYXIudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB0aGlzLiRuYXYucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLiRzZWFyY2hCYXIuaGFzQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcykpe1xuICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSl7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE5hdiB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbWFpbjogXCIuby1wcm9kdWN0LW5hdi1tYWluX19pY29ucyBhXCIsXG4gICAgICBtYWluQWN0aXZlOiBcIi5vLXByb2R1Y3QtbmF2LW1haW5fX2ljb25zIGEuYWN0aXZlXCIsXG4gICAgICBsaXN0OiBcIi5vLXByb2R1Y3QtbmF2X19saXN0IGFcIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcbiAgICB0aGlzLiRtYWluID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFpbik7XG4gICAgdGhpcy4kYWN0aXZlID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFpbkFjdGl2ZSk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2sgbW91c2VlbnRlclwiLCB0aGlzLm9wdGlvbnMubWFpbiwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTWFpbihldmVudCkpXG4gICAgICAub24oXCJjbGljayBtb3VzZWVudGVyXCIsIHRoaXMub3B0aW9ucy5saXN0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaXN0KGV2ZW50KSlcbiAgICA7XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgdGhpcy4kc2hhZG93LnJlbW92ZUNsYXNzKCdhLXNoYWRvdy0tb3BlbicpO1xuXHRcdHRoaXMuJG1haW4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcblx0XHR0aGlzLiRhY3RpdmUuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgfVxuXG4gIG9uQ2xpY2tNYWluKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkaGFzaCA9ICQoJHRhcmdldC5hdHRyKFwiaHJlZlwiKSk7XG4gICAgY29uc3QgJHN1Ykhhc2ggPSAkKCRoYXNoLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm8tcHJvZHVjdC1uYXYtLW9wZW5cIik7XG4gICAgJHRhcmdldC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRoYXNoLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJHN1Ykhhc2guc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xuXG4gICAgdGhpcy4kc2hhZG93LmFkZENsYXNzKCdhLXNoYWRvdy0tb3BlbicpO1xuICB9XG5cbiAgb25DbGlja0xpc3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0ICRwYXJlbnQgPSAkKGBhW2hyZWYkPSckeyR0YXJnZXQuYXR0cihcImlkXCIpfSddYCk7XG4gICAgY29uc3QgJHN1Ykhhc2ggPSAkKCR0YXJnZXQuYXR0cignaHJlZicpKTtcblxuICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiby1wcm9kdWN0LW5hdi0tb3BlblwiKTtcbiAgICAkdGFyZ2V0LmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJHBhcmVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRzdWJIYXNoLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcblxuICAgIHRoaXMuJHNoYWRvdy5hZGRDbGFzcygnYS1zaGFkb3ctLW9wZW4nKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZXMge1xuXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gIFxuICAgICAgY29uc3QgcHJvZHVjdENhcm91c2VsVGV4dCA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19fdGV4dCAubS1zbGlkZXJfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgbGF6eToge1xuICAgICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6IFwiLm8tc2VydmljZXMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHByb2R1Y3RDYXJvdXNlbEltYWdlID0gbmV3IFN3aXBlcihcIi5vLXNlcnZpY2VzX19pbWFnZSAubS1zbGlkZXJfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRodW1iczoge1xuICAgICAgICAgIHN3aXBlcjogcHJvZHVjdENhcm91c2VsVGV4dFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBcIi5vLXNlcnZpY2VzIC5tLXNsaWRlcl9fbmV4dFwiLFxuICAgICAgICAgIHByZXZFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX3ByZXZcIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDk5MDoge1xuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgfVxuICBcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICB0b2dnbGU6IFwiby1zaWRlYmFyLS1vcGVuXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIuby1zaWRlYmFyX19uYXZcIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm8tc2lkZWJhcl9fbmF2LS1hY3RpdmVcIixcbiAgICAgICAgbGluazogXCIuby1zaWRlYmFyX19uYXYtLWxpbmtcIlxuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBzZWxmOiBcIi5tLXNlYXJjaC1iYXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoXCIsXG4gICAgICAgIGNsYXNzOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuICAgIHRoaXMuJHNlYXJjaEJhciA9ICQodGhpcy5vcHRpb25zLnNlYXJjaC5zZWxmKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lml0ZW0sIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2LmxpbmssIGV2ZW50ID0+IHRoaXMub25DbGlja0xpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tTZWFyY2goZXZlbnQpKVxuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImhhbWJ1cmdlci5jbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGlja0hhbWJ1cmdlcihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2hhZG93LCAoKSA9PiB0aGlzLmNsb3NlQWxsKCkpXG5cbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHRoaXMud2luZG93UmVzaXplKCkpXG5cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZSgpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgICB0aGlzLmNsb3NlQWxsKClcbiAgICB9XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgfVxuXG4gIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoJHRhcmdldC5uZXh0KFwidWxcIikubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJHBhcmVudCA9ICR0YXJnZXQucGFyZW50KCk7XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMubmF2Lml0ZW0pLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrTGluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICBjb25zdCB1cmwgPSAkdGFyZ2V0LmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBvbkNsaWNrU2VhcmNoKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGhpcy4kc2VhcmNoQmFyLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gIH1cblxuICBvbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA+IDc2OCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB9XG4gIH1cbn1cbiJdfQ==
