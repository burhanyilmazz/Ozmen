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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
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
},{"./superPropBase.js":11}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
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
},{"./setPrototypeOf.js":10}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
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
},{"./assertThisInitialized.js":1,"@babel/runtime/helpers/typeof":12}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{"./getPrototypeOf.js":6}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],15:[function(require,module,exports){
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

},{"../../molecules/Modal/Modal":28,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],16:[function(require,module,exports){
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

},{"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/get":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],17:[function(require,module,exports){
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

var _MoreInfinite = _interopRequireDefault(require("../../../src/atoms/MoreInfinite/MoreInfinite"));

var _Accordion = _interopRequireDefault(require("../../../src/molecules/Accordion/Accordion"));

var _Carousel = _interopRequireDefault(require("../../../src/molecules/Carousel/Carousel"));

var _Map = _interopRequireDefault(require("../../../src/molecules/Map/Map"));

var _Modal = _interopRequireDefault(require("../../../src/molecules/Modal/Modal"));

var _ModalVideo = _interopRequireDefault(require("../../../src/molecules/Modal/ModalVideo"));

var _RemoteCheck = _interopRequireDefault(require("../../../src/molecules/RemoteCheck/RemoteCheck"));

var _SearchBar = _interopRequireDefault(require("../../../src/molecules/SearchBar/SearchBar"));

var _Slider = _interopRequireDefault(require("../../../src/molecules/Slider/Slider"));

var _TabDefault = _interopRequireDefault(require("../../../src/molecules/TabDefault/TabDefault"));

var _LeftNav = _interopRequireDefault(require("../../../src/molecules/LeftNav/LeftNav"));

var _Sidebar = _interopRequireDefault(require("../../../src/organisms/Sidebar/Sidebar"));

var _Contact = _interopRequireDefault(require("../../../src/organisms/Contact/Contact"));

var _Header = _interopRequireDefault(require("../../../src/organisms/Header/Header"));

var _Hero = _interopRequireDefault(require("../../../src/organisms/Hero/Hero"));

var Components = {
  LazyLoad: _LazyLoad["default"],
  Sticky: _Sticky["default"],
  OnLoadModal: _OnLoadModal["default"],
  FormCheckbox: _FormCheckbox["default"],
  FormFileInput: _FormFileInput["default"],
  FormInput: _FormInput["default"],
  FormTextarea: _FormTextarea["default"],
  Hamburger: _Hamburger["default"],
  MoreInfinite: _MoreInfinite["default"],
  Accordion: _Accordion["default"],
  Carousel: _Carousel["default"],
  Map: _Map["default"],
  Modal: _Modal["default"],
  ModalVideo: _ModalVideo["default"],
  RemoteCheck: _RemoteCheck["default"],
  SearchBar: _SearchBar["default"],
  Slider: _Slider["default"],
  TabDefault: _TabDefault["default"],
  LeftNav: _LeftNav["default"],
  Sidebar: _Sidebar["default"],
  Contact: _Contact["default"],
  Header: _Header["default"],
  Hero: _Hero["default"]
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

},{"../../../src/assets/scripts/General":13,"../../../src/assets/scripts/LazyLoad":14,"../../../src/assets/scripts/OnLoadModal":15,"../../../src/assets/scripts/Sticky":16,"../../../src/atoms/FormCheckbox/FormCheckbox":18,"../../../src/atoms/FormFileInput/FormFileInput":19,"../../../src/atoms/FormInput/FormInput":20,"../../../src/atoms/FormTextarea/FormTextarea":21,"../../../src/atoms/Hamburger/Hamburger":22,"../../../src/atoms/MoreInfinite/MoreInfinite":23,"../../../src/molecules/Accordion/Accordion":24,"../../../src/molecules/Carousel/Carousel":25,"../../../src/molecules/LeftNav/LeftNav":26,"../../../src/molecules/Map/Map":27,"../../../src/molecules/Modal/Modal":28,"../../../src/molecules/Modal/ModalVideo":29,"../../../src/molecules/RemoteCheck/RemoteCheck":30,"../../../src/molecules/SearchBar/SearchBar":31,"../../../src/molecules/Slider/Slider":32,"../../../src/molecules/TabDefault/TabDefault":33,"../../../src/organisms/Contact/Contact":34,"../../../src/organisms/Header/Header":35,"../../../src/organisms/Hero/Hero":36,"../../../src/organisms/Sidebar/Sidebar":37,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":12}],18:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],19:[function(require,module,exports){
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
      text: "span"
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],20:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],21:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],22:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var MoreInfinite = /*#__PURE__*/function () {
  function MoreInfinite(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, MoreInfinite);
    this.$el = el;
    var defaults = {
      container: ".row",
      button: ".js-more-infinite",
      loading: "a-btn--loading"
    };
    this.options = $.extend({}, defaults, options);
    this.container = this.$el.find(this.options.container);
    this.button = this.$el.find(this.options.button);
    this.$el.on("click", this.options.button, function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(MoreInfinite, [{
    key: "onClick",
    value: function onClick(event) {
      var _this2 = this;

      event.preventDefault();
      var url = this.options.url;
      var page = this.button.data("page");
      var data = {
        page: page
      };
      this.htmlTemplate = "";
      this.button.addClass(this.options.loading);
      this.getData(url, data, function (_response) {
        _response.items.map(function (data) {
          _this2.container.append(_this2.createBlog(data));
        });

        _this2.container.append(_this2.htmlTemplate);

        if (_response.totalPage == page) {
          _this2.button.hide();
        } else {
          _this2.button.data("page", page + 1);

          _this2.button.removeClass(_this2.options.loading);
        }
      });
    }
  }, {
    key: "createBlog",
    value: function createBlog(data) {
      var source = $("#blog-card-template").html();
      var template = Handlebars.compile(source);
      var context = {
        text: data.text,
        url: data.url,
        image: data.image,
        date: data.date
      };
      this.htmlTemplate += template(context);
    }
  }, {
    key: "getData",
    value: function getData(url, data, callback) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        data: data,
        success: function success(response) {
          callback && callback(response);
        }
      });
    }
  }]);
  return MoreInfinite;
}();

exports["default"] = MoreInfinite;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],24:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],25:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LeftNav = /*#__PURE__*/function () {
  function LeftNav(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, LeftNav);
    this.$el = el;
    var defaults = {
      anchor: {
        self: ".m-left-nav__top--anchor",
        active: "m-left-nav--active"
      },
      select: ".a-select"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", this.options.anchor.self, function (event) {
      return _this.onClickNav(event);
    }).on("change", this.options.select, function (event) {
      return _this.onChange(event);
    });
    $(document).on("scroll", function (event) {
      return _this.onScroll(event);
    });
  }

  (0, _createClass2["default"])(LeftNav, [{
    key: "onClickNav",
    value: function onClickNav(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $hash = $($target.find("a").attr("href"));
      $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active);
      $('html, body').animate({
        scrollTop: $hash.offset().top - 50
      }, 500);
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var url = $(event.target).val();
      window.location.href = url;
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this2 = this;

      var scrollPos = $(document).scrollTop();

      if (!$(this.options.anchor.self).length) {
        return;
      }

      if (scrollPos < 100) {
        $(this.options.anchor.self).eq(0).addClass(this.options.anchor.active);
        return;
      }

      $(this.options.anchor.self).find("a").each(function (index, item) {
        var currLink = $(item);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 500 > scrollPos) {
          $(_this2.options.anchor.self).removeClass(_this2.options.anchor.active);
          currLink.parent().addClass(_this2.options.anchor.active);
        } else {
          currLink.parent().removeClass(_this2.options.anchor.active);
        }
      });
    }
  }]);
  return LeftNav;
}();

exports["default"] = LeftNav;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],27:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Modal = /*#__PURE__*/function () {
  function Modal(el, options) {
    (0, _classCallCheck2["default"])(this, Modal);
    this.$el = el;
    var defaults = {
      onLoad: false
    };
    this.options = $.extend({}, defaults, options);

    if (this.options.onLoad) {
      return $.fancybox.open(el.get(0));
    }
  }

  (0, _createClass2["default"])(Modal, null, [{
    key: "error",
    value: function error() {
      var _error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var template = Handlebars.compile(Modal.template);
      var html = template(_objectSpread(_objectSpread({
        type: Modal.Types.ERROR,
        icon: "error"
      }, _error), {}, {
        isError: true
      }));
      return $.fancybox.open(html);
    }
  }, {
    key: "success",
    value: function success() {
      var _success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var template = Handlebars.compile(Modal.template);
      var html = template(_objectSpread({
        type: Modal.Types.SUCCESS,
        icon: "success"
      }, _success));
      return $.fancybox.open(html);
    }
  }, {
    key: "info",
    value: function info() {
      var _info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var template = Handlebars.compile(Modal.template);
      var html = template(_objectSpread({
        type: Modal.Types.INFO,
        icon: "info"
      }, _info));
      return $.fancybox.open(html);
    }
  }, {
    key: "warning",
    value: function warning() {
      var _warning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var template = Handlebars.compile(Modal.template);
      var html = template(_objectSpread({
        type: Modal.Types.WARNING,
        icon: "warning"
      }, _warning));
      return $.fancybox.open(html);
    }
  }]);
  return Modal;
}();

exports["default"] = Modal;
(0, _defineProperty2["default"])(Modal, "Types", {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info"
});
(0, _defineProperty2["default"])(Modal, "template", "\n    {{#if isError}}\n      {{#if errorCode }}\n        <div class=\"m-modal m-modal--alert m-modal--{{type}}\" ga-error-code={{errorCode}} id={{id}}>\n      {{else}}\n        <div class=\"m-modal m-modal--alert m-modal--{{type}}\" ga-error-code=\"NA\" id={{id}}>\n      {{/if}}\n    {{else}}\n      <div class=\"m-modal m-modal--alert m-modal--{{type}}\" id={{id}}>\n    {{/if}}\n      <div class=\"m-modal__body\">\n        {{#if icon}}<i class=\"a-icon a-icon--modal icon-circle-{{icon}}\"></i>{{/if}}\n        {{#if title}}<h4>{{title}}</h4>{{/if}}\n        {{#if body}}<p>{{{body}}}</p>{{/if}}\n      </div>\n      <div class=\"m-modal__foot\">\n        {{#if button}}<a class=\"a-btn a-btn--full {{buttonClass}}\" data-fancybox-close href=\"javascript:;\">Kapat</a>{{/if}}\n      </div>\n    </div>\n  ");

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/defineProperty":4,"@babel/runtime/helpers/interopRequireDefault":8}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Modal2 = _interopRequireDefault(require("./Modal"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ModalVideo = /*#__PURE__*/function (_Modal) {
  (0, _inherits2["default"])(ModalVideo, _Modal);

  var _super = _createSuper(ModalVideo);

  function ModalVideo(el, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, ModalVideo);
    _this = _super.call(this, el, options);
    _this.$el = el;
    var defaults = {
      templateSource: "#modal-video-html",
      modalTarget: "#modal-video"
    };
    _this.options = $.extend({}, defaults, options);

    _this.$el.on("click", function (event) {
      return _this.onClick(event);
    });

    _this.templateSource = $(_this.options.templateSource);
    _this.modalTarget = $(_this.options.modalTarget); //this.modalId;

    _this.modalUrl;
    _this.modalTitle;
    _this.modalDesc;
    _this.modalBtnName;
    _this.modalBtnHref;
    _this.modalBtnClose; //this.fancybox = this.modalTarget.fancybox({});

    return _this;
  }

  (0, _createClass2["default"])(ModalVideo, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      var $target = $(event.target).hasClass("a-btn-icon") ? $(event.target) : $(event.currentTarget); //this.modalId = $(event.target).data("src");

      this.modalUrl = $target.data("url");
      this.modalTitle = $target.data("title");
      this.modalDesc = $target.data("desc");
      this.modalBtnName = $target.data("button");
      this.modalBtnHref = $target.data("btnhref");
      this.modalBtnClose = $target.data("btnclose");
      var videoModalHtml = "",
          source,
          template,
          context;
      source = this.templateSource.html();
      template = Handlebars.compile(source);
      context = {
        src: this.modalUrl,
        //id: this.modalId,
        title: this.modalTitle,
        desc: this.modalDesc,
        button: this.modalBtnName,
        href: this.modalBtnHref,
        btnClose: this.modalBtnClose
      };
      videoModalHtml += template(context);
      this.modalTarget.empty().append(videoModalHtml);
      $.fancybox.open(this.modalTarget);
    }
  }]);
  return ModalVideo;
}(_Modal2["default"]);

exports["default"] = ModalVideo;

},{"./Modal":28,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],30:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],31:[function(require,module,exports){
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
        trigger: ".m-search-bar__close"
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],32:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/get":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TabDefault = /*#__PURE__*/function () {
  function TabDefault(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, TabDefault);
    this.$el = el;
    var defaults = {
      "container": ".m-tab-default",
      "tabItems": "> .m-tab-default__items .m-tab-default__items--desc",
      "tabPanes": "> .m-tab-default__panes .m-tab-default__pane",
      "activeTabItemClass": "m-tab-default__item--active",
      "activeTabPaneClass": "m-tab-default__pane--active",
      "inActiveTabPaneClass": "m-tab-default__pane--inactive",
      activeIndex: 0,
      select: ".a-select"
    };
    this.options = $.extend({}, defaults, options);
    this.tabItems = this.$el.find(this.options.tabItems);
    this.tabPanes = this.$el.find(this.options.tabPanes);
    this.$el.on("click", "".concat(this.options.tabItems, " a"), function (e) {
      return _this.onClick(e);
    }).on("change", this.options.select, function (event) {
      return _this.onChange(event);
    });
    this.setActive(this.options.activeIndex);
  }

  (0, _createClass2["default"])(TabDefault, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      var index = $(e.currentTarget).parent().index();
      this.setActive(index);
      $(document).trigger("tab.show", index);
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var index = $(event.target).val();
      this.setActive(index);
    }
  }, {
    key: "setActive",
    value: function setActive(index) {
      this.options.activeIndex = index;
      this.tabItems.removeClass(this.options.activeTabItemClass).eq(index).addClass(this.options.activeTabItemClass);
      this.tabPanes.filter(".".concat(this.options.activeTabPaneClass)).addClass(this.options.inActiveTabPaneClass);
      this.tabPanes.removeClass(this.options.activeTabPaneClass).eq(index).addClass(this.options.activeTabPaneClass).filter(".".concat(this.options.inActiveTabPaneClass)).removeClass(this.options.inActiveTabPaneClass);
    }
  }]);
  return TabDefault;
}();

exports["default"] = TabDefault;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],34:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],35:[function(require,module,exports){
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
        dropdown: ".m-nav--dropdown",
        dropdownOpen: "m-nav--dropdown-open",
        child: ".m-nav--dropdown-child",
        childOpen: "m-nav--dropdown-child-open",
        link: ".m-nav--dropdown-child-link"
      },
      search: {
        self: ".m-search-bar--header",
        trigger: ".js-search-header",
        "class": "m-search-bar--open"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$searchBar = $(this.options.search.self);
    this.$shadow = $(this.options.shadow);
    this.$el.on("click", this.options.nav.dropdown, function (event) {
      return _this.onClickDropdown(event);
    }).on("click", this.options.nav.child, function (event) {
      return _this.onClickChild(event);
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
      event.preventDefault();
      var $target = $(event.currentTarget);
      $target.toggleClass(this.options.nav.dropdownOpen);
    }
  }, {
    key: "onClickChild",
    value: function onClickChild(event) {
      event.preventDefault();
      event.stopPropagation();
      var $target = $(event.currentTarget);

      if ($target.hasClass(this.options.nav.childOpen)) {
        $target.removeClass(this.options.nav.childOpen);
      } else {
        $target.addClass(this.options.nav.childOpen).siblings().removeClass(this.options.nav.childOpen);
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
      this.$nav.removeClass(this.options.nav.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
      this.$searchBar.hasClass(this.options.search["class"]) ? $("html").addClass('disable-scroll') : $("html").removeClass('disable-scroll');
    }
  }, {
    key: "onClickHamburger",
    value: function onClickHamburger(event) {
      var windowWidth = $(window).width();

      if (windowWidth < 769) {
        event.preventDefault();
        this.$nav.toggleClass(this.options.nav.toggle);
        this.$searchBar.removeClass(this.options.search["class"]);
        this.$nav.hasClass(this.options.nav.toggle) ? $("html").addClass('disable-scroll') : $("html").removeClass('disable-scroll');
      }
    }
  }]);
  return Header;
}();

exports["default"] = Header;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],36:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Hero = /*#__PURE__*/function () {
  function Hero(el, options) {
    (0, _classCallCheck2["default"])(this, Hero);
    this.$el = el;
    var defaults = {
      leaf1: ".o-hero__leaf--leaf-1",
      leaf2: ".o-hero__leaf--leaf-2",
      leaf3: ".o-hero__leaf--leaf-3",
      pill: ".o-hero-product__pill",
      pill2: ".o-hero-product__pill-2"
    };
    this.options = $.extend({}, defaults, options);
    this.$leaf1 = this.$el.find(this.options.leaf1);
    this.$leaf2 = this.$el.find(this.options.leaf2);
    this.$leaf3 = this.$el.find(this.options.leaf3);
    this.$pill = this.$el.find(this.options.pill);
    this.$pill2 = this.$el.find(this.options.pill2);
    this.moved(80, 95, 100, this.$leaf1);
    this.moved(-70, -92, 150, this.$leaf2);
    this.moved(-60, 74, 200, this.$leaf3);
    this.moved(50, 80, 50, this.$pill);
    this.moved(-64, -100, 50, this.$pill2);
  }

  (0, _createClass2["default"])(Hero, [{
    key: "moved",
    value: function moved(x, y, duration, el) {
      var _this = this;

      el.animate({
        textIndent: 0
      }, {
        step: function step(now, fx) {
          _this.$el.mousemove(function (e) {
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
  }]);
  return Hero;
}();

exports["default"] = Hero;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],37:[function(require,module,exports){
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
      product: {
        self: ".o-sidebar__product",
        item: ".o-sidebar__product--dropdown",
        active: "o-sidebar__product--active",
        link: ".o-sidebar__product--link"
      },
      search: {
        self: ".m-search-bar--header",
        trigger: ".js-search",
        "class": "m-search-bar--open"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$product = this.$el.find(this.options.product.self);
    this.$shadow = $(this.options.shadow);
    this.$searchBar = $(this.options.search.self);
    this.$el.on("click", this.options.product.item, function (event) {
      return _this.onClickNav(event);
    }).on("click", this.options.product.link, function (event) {
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

      if ($target.find("ul").length) {
        event.preventDefault();

        if (!$target.hasClass(this.options.product.active)) {
          $(this.options.product.item).removeClass(this.options.product.active);
          $target.addClass(this.options.product.active);
        } else {
          $target.removeClass(this.options.product.active);
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3guZXM2Iiwic3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYS5lczYiLCJzcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlci5lczYiLCJzcmMvYXRvbXMvTW9yZUluZmluaXRlL01vcmVJbmZpbml0ZS5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbC5lczYiLCJzcmMvbW9sZWN1bGVzL0xlZnROYXYvTGVmdE5hdi5lczYiLCJzcmMvbW9sZWN1bGVzL01hcC9NYXAuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsVmlkZW8uZXM2Iiwic3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjay5lczYiLCJzcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXIuZXM2Iiwic3JjL21vbGVjdWxlcy9TbGlkZXIvU2xpZGVyLmVzNiIsInNyYy9tb2xlY3VsZXMvVGFiRGVmYXVsdC9UYWJEZWZhdWx0LmVzNiIsInNyYy9vcmdhbmlzbXMvQ29udGFjdC9Db250YWN0LmVzNiIsInNyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlci5lczYiLCJzcmMvb3JnYW5pc21zL0hlcm8vSGVyby5lczYiLCJzcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhci5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JCQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQixZQUFNO0FBRXRCLEVBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MsRUFBbEMsQ0FBcUMsT0FBckMsRUFBOEMsVUFBQyxLQUFE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Q0FBZ0IsV0FBaEIsQ0FBNEIsbUJBQTVCO0FBQ0Q7OztXQUVELDBCQUFpQixLQUFqQixFQUF3QjtBQUN0QixVQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsS0FBVixFQUFwQjs7QUFFQSxVQUFJLFdBQVcsR0FBRyxHQUFsQixFQUF1QjtBQUNyQixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsYUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxNQUFsQztBQUNBLGFBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLE9BQUwsQ0FBYSxNQUFiLFNBQTVCO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblxuICAkKFwiLm0tY29weXJpZ2h0LW5hdiAuYS1idG4taWNvblwiKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogMFxuICAgIH0sICdzbG93Jyk7XG4gIH0pXG5cbiAgY29uc3QgJHdvbWFuMSA9ICQoXCIucC1ob21lcGFnZS1oaXN0b3J5X193b21hbi0tbGVhZi0xXCIpO1xuICBjb25zdCAkd29tYW4yID0gJChcIi5wLWhvbWVwYWdlLWhpc3RvcnlfX3dvbWFuLS1sZWFmLTJcIik7XG4gIGNvbnN0ICR3b21hbjMgPSAkKFwiLnAtaG9tZXBhZ2UtaGlzdG9yeV9fd29tYW4tLWxlYWYtM1wiKTtcblxuICBmdW5jdGlvbiBtb3ZlZCh4LCB5LCBkdXJhdGlvbiwgZWwpIHtcbiAgICBlbC5hbmltYXRlKHtcbiAgICAgIHRleHRJbmRlbnQ6IDBcbiAgICB9LCB7XG4gICAgICBzdGVwOiAobm93LCBmeCkgPT4ge1xuICAgICAgICAkKFwiLnAtaG9tZXBhZ2VfX2hpc3RvcnlcIikubW91c2Vtb3ZlKChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYW1vdW50TW92ZWRYID0gKGUucGFnZVggKiAtMSAvIHgpO1xuICAgICAgICAgIGNvbnN0IGFtb3VudE1vdmVkWSA9IChlLnBhZ2VZICogLTEgLyB5KTtcbiAgICAgICAgICBlbC5jc3Moe1xuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKScsXG4gICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvblxuICAgIH0sICdlYXNlT3V0Q3ViaWMnKTtcbiAgfVxuXG4gIG1vdmVkKDc0LCA3NSwgMjAwLCAkd29tYW4xKTtcbiAgbW92ZWQoLTg2LCA5MiwgMjAwLCAkd29tYW4yKTtcbiAgbW92ZWQoLTk2LCA2NiwgMjAwLCAkd29tYW4zKTtcblxufSk7XG5cbndpbmRvdy5QYXJzbGV5LmFkZFZhbGlkYXRvcignbWF4RmlsZVNpemUnLCB7XG4gIHZhbGlkYXRlU3RyaW5nOiBmdW5jdGlvbiAoX3ZhbHVlLCBtYXhTaXplLCBwYXJzbGV5SW5zdGFuY2UpIHtcbiAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBmaWxlcyA9IHBhcnNsZXlJbnN0YW5jZS4kZWxlbWVudFswXS5maWxlcztcbiAgICByZXR1cm4gZmlsZXMubGVuZ3RoICE9IDEgfHwgZmlsZXNbMF0uc2l6ZSA8PSBtYXhTaXplICogMTAyNDtcbiAgfSxcbiAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gIG1lc3NhZ2VzOiB7XG4gICAgdHI6ICdNYXguIGRvc3lhIGJveXV0dSAlcyBLYi4gb2xhbWFsxLFkxLFyJ1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgbGF4LnNldHVwKHtcbiAgICBicmVha3BvaW50czoge1xuICAgICAgc21hbGw6IDAsXG4gICAgICBsYXJnZTogNzY4XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZUxheCA9ICgpID0+IHtcbiAgICBsYXgudXBkYXRlKHdpbmRvdy5zY3JvbGxZKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudCkub24oXCJsYXp5YmVmb3JldW52ZWlsXCIsIHRoaXMub3B0aW9ucy5zcGVlY2hCdXR0b24sIGV2ZW50ID0+IHRoaXMub25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSk7XG5cbiAgfVxuXG4gIG9uTGF6eUJlZm9yZVVudmVpbChldmVudCkge1xuICAgIGNvbnN0IGxhenlFbGVtZW50ID0gJChldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBsYXp5RWxlbWVudC5hdHRyKCBcImRhdGEtYmFja2dyb3VuZFwiICk7XG4gICAgaWYgKCBiYWNrZ3JvdW5kICkge1xuICAgICAgbGF6eUVsZW1lbnQuY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBMYXp5TG9hZCgpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5jbGFzcyBPbkxvYWRNb2RhbCB7XG4gIHN0YXRpYyBvbkxvYWRNb2RhbCgpIHtcbiAgICBjb25zdCBoYXNoID0gJChsb2NhdGlvbikuYXR0cihcImhhc2hcIik7XG5cbiAgICBzd2l0Y2ggKGhhc2gpIHtcbiAgICAgIGNhc2UgXCIjZXJyb3JNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiI3N1Y2Nlc3NNZXNzYWdlXCI6XG4gICAgICAgIHRoaXMubW9kYWxUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1vZGFsVHlwZSh0eXBlKSB7XG4gICAgaWYgKCQoYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWApLmxlbmd0aCA+IDApIHtcbiAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgIHNyYzogYCNtb2RhbC1wcmVzZXQtJHt0eXBlfWAsXG4gICAgICAgIGJhc2VDbGFzczogYGZhbmN5Ym94LS0ke3R5cGV9IG0tbW9kYWwtLWFsZXJ0YCxcbiAgICAgICAgdG91Y2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE9uTG9hZE1vZGFsKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IE9uTG9hZE1vZGFsLm9uTG9hZE1vZGFsKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2t5IGV4dGVuZHMgSGVhZHJvb20ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHByZWZpeDogJ3N0aWNreScsXG4gICAgICB0b2xlcmFuY2U6IHtcbiAgICAgICAgZG93biA6IDEwLFxuICAgICAgICB1cCA6IDBcbiAgICAgIH0sXG4gICAgICBvZmZzZXQgOiA2NFxuICAgIH07XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIG9wdGlvbnMuY2xhc3NlcyA9IHtcbiAgICAgIGluaXRpYWwgOiBgJHtvcHRpb25zLnByZWZpeH1gLFxuICAgICAgcGlubmVkIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1waW5uZWRgLFxuICAgICAgdW5waW5uZWQgOiBgJHtvcHRpb25zLnByZWZpeH0tLXVucGlubmVkYCxcbiAgICAgIHRvcCA6IGAke29wdGlvbnMucHJlZml4fS0tdG9wYCxcbiAgICAgIG5vdFRvcCA6IGAke29wdGlvbnMucHJlZml4fS0tbm90LXRvcGAsXG4gICAgICBib3R0b20gOiBgJHtvcHRpb25zLnByZWZpeH0tLWJvdHRvbWAsXG4gICAgICBub3RCb3R0b20gOiBgJHtvcHRpb25zLnByZWZpeH0tLW5vdC1ib3R0b21gXG4gICAgfVxuXG4gICAgc3VwZXIoJGVsLmdldCgwKSwgb3B0aW9ucyk7XG4gICAgc3VwZXIuaW5pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCBHZW5lcmFsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsJztcbmltcG9ydCBMYXp5TG9hZCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQnO1xuaW1wb3J0IE9uTG9hZE1vZGFsICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL09uTG9hZE1vZGFsJztcbmltcG9ydCBTdGlja3kgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvU3RpY2t5JztcblxuaW1wb3J0IEZvcm1DaGVja2JveCAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtQ2hlY2tib3gvRm9ybUNoZWNrYm94JztcbmltcG9ydCBGb3JtRmlsZUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dCc7XG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5pbXBvcnQgTW9yZUluZmluaXRlICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL01vcmVJbmZpbml0ZS9Nb3JlSW5maW5pdGUnO1xuXG5pbXBvcnQgQWNjb3JkaW9uICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9BY2NvcmRpb24vQWNjb3JkaW9uJztcbmltcG9ydCBDYXJvdXNlbCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0Nhcm91c2VsL0Nhcm91c2VsJztcbmltcG9ydCBNYXAgICAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL01hcC9NYXAnO1xuaW1wb3J0IE1vZGFsICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuaW1wb3J0IE1vZGFsVmlkZW8gICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWxWaWRlbyc7XG5pbXBvcnQgUmVtb3RlQ2hlY2sgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjayc7XG5pbXBvcnQgU2VhcmNoQmFyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoQmFyJztcbmltcG9ydCBTbGlkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NsaWRlci9TbGlkZXInO1xuaW1wb3J0IFRhYkRlZmF1bHQgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvVGFiRGVmYXVsdC9UYWJEZWZhdWx0JztcbmltcG9ydCBMZWZ0TmF2ICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0xlZnROYXYvTGVmdE5hdic7XG5cbmltcG9ydCBTaWRlYmFyICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhcic7XG5cbmltcG9ydCBDb250YWN0ICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0NvbnRhY3QvQ29udGFjdCc7XG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBIZXJvICAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0hlcm8vSGVybyc7XG5cbmNvbnN0IENvbXBvbmVudHMgPSB7XG4gIExhenlMb2FkLFxuICBTdGlja3ksXG4gIE9uTG9hZE1vZGFsLFxuXG4gIEZvcm1DaGVja2JveCxcbiAgRm9ybUZpbGVJbnB1dCxcbiAgRm9ybUlucHV0LFxuICBGb3JtVGV4dGFyZWEsXG4gIEhhbWJ1cmdlcixcbiAgTW9yZUluZmluaXRlLFxuXG4gIEFjY29yZGlvbixcbiAgQ2Fyb3VzZWwsXG4gIE1hcCxcbiAgTW9kYWwsXG4gIE1vZGFsVmlkZW8sXG4gIFJlbW90ZUNoZWNrLFxuICBTZWFyY2hCYXIsXG4gIFNsaWRlcixcbiAgVGFiRGVmYXVsdCxcbiAgTGVmdE5hdixcbiAgXG4gIFNpZGViYXIsXG4gIENvbnRhY3QsXG4gIEhlYWRlcixcbiAgSGVybyxcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KCB0aGF0LCB0eXBlLCBkYXRhICkge1xuICBjb25zdCBvcHRpb25zID0gZGF0YSB8fCB7fTtcbiAgbGV0IENvbXBvbmVudCA9IENvbXBvbmVudHNbdHlwZV07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJCh0aGF0KSwgb3B0aW9ucyk7XG4gICAgdGhhdC5zZXRDb21wb25lbnQoIHR5cGUsIENvbXBvbmVudCk7XG4gICAgJCh0aGF0KS5kYXRhKGBjb21wb25lbnQke3R5cGV9YCwgQ29tcG9uZW50KS5yZW1vdmVBdHRyKFwiZGF0YS1jb21wb25lbnRcIikucmVtb3ZlRGF0YShcImNvbXBvbmVudFwiKTtcbiAgfVxufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHRoaXNbIHR5cGUgXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUsIENvbXBvbmVudCApIHtcbiAgdGhpc1t0eXBlXSA9IENvbXBvbmVudDtcbn1cblxud2luZG93LmluaXRpYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1jb21wb25lbnRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gJCggdGhpcyApLmRhdGEoJ2NvbXBvbmVudCcpO1xuICAgIGlmICggQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuICAgICAgZm9yKCB2YXIgaSBpbiBkYXRhICkge1xuICAgICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YVtpXS50eXBlLCBkYXRhW2ldICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLnR5cGUsIGRhdGEgKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEsICQoIHRoaXMgKS5kYXRhKCkgKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXRpYXRlQ29tcG9uZW50cygpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1DaGVja2JveCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb3Blbk1vZGFsOiBcImJbZGF0YS1mYW5jeUlkXVwiLFxuICAgICAgYm9keTogXCIubS1zY3JvbGwtYm94X19ib2R5XCIsXG4gICAgICBtb2JpbGVCb2R5OiBcIi5tLW1vZGFsX19ib2R5XCJcbiAgICAgIC8vbW9kYWwtdXNlci1hZ3JlZW1lbnQtbW9iaWxlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm9wZW5Nb2RhbCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5vcGVuTW9kYWwsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKFwiZmFuY3lpZFwiKTtcblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLXVzZXItYWdyZWVtZW50XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLWNvbnRhY3RcIikge1xuICAgICAgdGhpcy4kYm9keSA9ICQobW9kYWxJZCkuZmluZCh0aGlzLm9wdGlvbnMuYm9keSk7XG4gICAgfVxuXG4gICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgIHNyYzogbW9kYWxJZCxcbiAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgc21hbGxCdG46IHRydWUsXG4gICAgICB0b3VjaDogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpbGVJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiaW5wdXRcIixcbiAgICAgIHRleHQ6IFwic3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICB0aGlzLiR0ZXh0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGV4dCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcbiAgfVxuXG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICB0aGlzLiR0ZXh0LnRleHQoZmlsZU5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/IHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gdGV4dGFyZWFcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/ICB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuXG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBcImEtaGFtYnVyZ2VyLS1vcGVuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJoYW1idXJnZXIuY2xpY2tcIik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9yZUluZmluaXRlIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjb250YWluZXI6IFwiLnJvd1wiLFxuICAgICAgYnV0dG9uOiBcIi5qcy1tb3JlLWluZmluaXRlXCIsXG4gICAgICBsb2FkaW5nOiBcImEtYnRuLS1sb2FkaW5nXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTtcbiAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbik7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5idXR0b24sIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmJ1dHRvbi5kYXRhKFwicGFnZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcGFnZVxuICAgIH1cbiAgICB0aGlzLmh0bWxUZW1wbGF0ZSA9IFwiXCI7XG5cbiAgICB0aGlzLmJ1dHRvbi5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZylcblxuICAgIHRoaXMuZ2V0RGF0YSh1cmwsIGRhdGEsIF9yZXNwb25zZSA9PiB7XG4gICAgICBfcmVzcG9uc2UuaXRlbXMubWFwKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVCbG9nKGRhdGEpKVxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmh0bWxUZW1wbGF0ZSlcblxuICAgICAgaWYgKF9yZXNwb25zZS50b3RhbFBhZ2UgPT0gcGFnZSkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5oaWRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRhdGEoXCJwYWdlXCIsIHBhZ2UgKyAxKTtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmcpXG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJsb2coZGF0YSkge1xuICAgIGNvbnN0IHNvdXJjZSA9ICQoXCIjYmxvZy1jYXJkLXRlbXBsYXRlXCIpLmh0bWwoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHVybDogZGF0YS51cmwsXG4gICAgICBpbWFnZTogZGF0YS5pbWFnZSxcbiAgICAgIGRhdGU6IGRhdGEuZGF0ZVxuICAgIH07XG5cbiAgICB0aGlzLmh0bWxUZW1wbGF0ZSArPSB0ZW1wbGF0ZShjb250ZXh0KTtcbiAgfVxuXG4gIGdldERhdGEodXJsLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogcmVzcG9uc2UgPT4ge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiYWNjb3JkaW9uSGVhZHNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9faGVhZFwiLFxuICAgICAgXCJhY2NvcmRpb25Cb2RpZXNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9fYm9keVwiLFxuICAgICAgXCJhY3RpdmVDbGFzc1wiOiBcIm0tYWNjb3JkaW9uX19oZWFkLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY2NvcmRpb25IZWFkcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzKTtcbiAgICB0aGlzLmFjY29yZGlvbkJvZGllcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbmJvZGllcyk7XG4gICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcztcbiAgICB0aGlzLnNob3dPbmx5T25lID0gdGhpcy5vcHRpb25zLnNob3dPbmx5T25lO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY3VyclRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnNob3dPbmx5T25lKSB7XG4gICAgICBpZiAodGhpcy5jdXJyVGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkhlYWRzLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyVGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJhY2NvcmRpb24uY2hhbmdlXCIpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWwge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgZm9sbG93RmluZ2VyOiBmYWxzZSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIGxhenk6IHtcbiAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVyRGF0YSA9IHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCBzbGlkZXJEYXRhKTtcblxuICAgIHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpXG4gICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKGUsIGluZGV4KSA9PiB0aGlzLm9uU2xpZGVDaGFuZ2UoaW5kZXgpKVxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1jYXJvdXNlbF9fdGh1bWJzIGxpXCIpLm9uKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcblxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKS5kYXRhKFwiY29tcG9uZW50U2xpZGVyXCIpO1xuICAgIGNvbnN0IGJ1bGxldCA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpXG5cbiAgICBzbGlkZXIuc2xpZGVUbyhidWxsZXQgKyAxKVxuICB9XG5cbiAgb25TbGlkZUNoYW5nZShpbmRleCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgICBjb25zdCBidWxsZXRzID0gdGhpcy4kZWwuZmluZChcIi5hLWJ1bGxldHNcIikuZGF0YShcImNvbXBvbmVudEJ1bGxldHNcIik7XG4gICAgICBidWxsZXRzLnNldEFjdGl2ZShzbGlkZXIucmVhbEluZGV4KTtcblxuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9ICQoc2xpZGVyLnNsaWRlc1tzbGlkZXIuYWN0aXZlSW5kZXhdKTtcblxuICAgICAgYWN0aXZlSXRlbS50cmlnZ2VyKFwic2xpZGVyLmNoYW5nZVwiLCB0aGlzKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnROYXYge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBzZWxmOiBcIi5tLWxlZnQtbmF2X190b3AtLWFuY2hvclwiLFxuICAgICAgICBhY3RpdmU6IFwibS1sZWZ0LW5hdi0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IFwiLmEtc2VsZWN0XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYsIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG4gICAgICAub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBldmVudCA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkaGFzaCA9ICQoJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKSlcbiAgICAkdGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKVxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkaGFzaC5vZmZzZXQoKS50b3AgLSA1MFxuICAgIH0sIDUwMCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHVybCA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKCEkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsUG9zIDwgMTAwKSB7XG4gICAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikuZXEoMCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLmZpbmQoXCJhXCIpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyTGluayA9ICQoaXRlbSk7XG4gICAgICBjb25zdCByZWZFbGVtZW50ID0gJChjdXJyTGluay5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICBpZiAocmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCA8PSBzY3JvbGxQb3MgJiYgcmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgKyA1MDAgPiBzY3JvbGxQb3MpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgZWwgPSAkZWw7XG5cbiAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IFt7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZTllOWU5XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjlcbiAgICAgIH0sIHtcbiAgICAgICAgXCJ3ZWlnaHRcIjogMC4yXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE4XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2RlZGVkZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInNhdHVyYXRpb25cIjogMzZcbiAgICAgIH0sIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiA0MFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDEuMlxuICAgICAgfV1cbiAgICB9XTtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgem9vbTogMTUsXG4gICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDEuMDQyODAyNywgMjguOTgyNjMyNyksXG4gICAgICB1cmw6ICcuLi8uLi9hc3NldHMvZGF0YS9NYXAuanNvbicsXG4gICAgICBwaW46IG9wdGlvbnMucGlubWVkaWEgfHwgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGVudC9waW4ucG5nJyxcbiAgICB9O1xuXG4gICAgZGVmYXVsdHNbJ3N0eWxlcyddID0gc3R5bGVzO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHBpblN0YXR1cyA9ICF0aGlzLm9wdGlvbnMubGF0ICYmICF0aGlzLm9wdGlvbnMubG5nO1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuJGVsWzBdLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKHBpblN0YXR1cykge1xuICAgICAgdGhpcy5tYXBEYXRhSGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gW3tcbiAgICAgICAgXCJjb29yZHNcIjoge1xuICAgICAgICAgIFwibGF0XCI6IHRoaXMub3B0aW9ucy5sYXQsXG4gICAgICAgICAgXCJsbmdcIjogdGhpcy5vcHRpb25zLmxuZ1xuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiB0aGlzLm9wdGlvbnMudXJsLFxuICAgICAgICBcImNvbnRlbnRcIjogdGhpcy5vcHRpb25zLmNvbnRlbnRcbiAgICAgIH1dXG4gICAgfVxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCB0aGlzLm1hcmtlckNyZWF0b3IoKSk7XG4gIH1cblxuICBtYXBGb2N1cyhwbGFjZSkge1xuICAgIGNvbnN0IG5ld1BsYWNlID0gcGxhY2Uuc3BsaXQoJywnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3UGxhY2VbMF0sIG5ld1BsYWNlWzFdKTtcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICB0aGlzLmJvdW5kcy5leHRlbmQocG9zaXRpb24pO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICB0aGlzLm1hcC5zZXRab29tKDExKTtcbiAgfVxuXG4gIG1hcERhdGFIYW5kbGVyKCkge1xuICAgICQuYWpheCh7XG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwgPyB0aGlzLm9wdGlvbnMudXJsIDogdGhpcy5kZWZhdWx0cy51cmwsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tcIm1hcmtlcnNcIl0gPSBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFya2VyQ3JlYXRvcigpIHtcbiAgICBjb25zdCBtYXJrZXJzID0gdGhpcy5vcHRpb25zLm1hcmtlcnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1hcmtlcihwcm9wcykge1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGF0OiBOdW1iZXIocHJvcHMuY29vcmRzLmxhdCksXG4gICAgICAgIGxuZzogTnVtYmVyKHByb3BzLmNvb3Jkcy5sbmcpXG4gICAgICB9LFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGljb246IHRoaXMub3B0aW9ucy5waW4gPyB0aGlzLm9wdGlvbnMucGluIDogdGhpcy5kZWZhdWx0cy5waW4sXG4gICAgfSk7XG5cbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcIm1hcC5jbGlja1wiLCBwcm9wcy5pZCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIHN0YXRpYyBUeXBlcyA9IHtcbiAgICBFUlJPUjogXCJlcnJvclwiLFxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICAgIFdBUk5JTkc6IFwid2FybmluZ1wiLFxuICAgIElORk86IFwiaW5mb1wiXG4gIH07XG5cbiAgc3RhdGljIHRlbXBsYXRlID0gYFxuICAgIHt7I2lmIGlzRXJyb3J9fVxuICAgICAge3sjaWYgZXJyb3JDb2RlIH19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsIG0tbW9kYWwtLWFsZXJ0IG0tbW9kYWwtLXt7dHlwZX19XCIgZ2EtZXJyb3ItY29kZT17e2Vycm9yQ29kZX19IGlkPXt7aWR9fT5cbiAgICAgIHt7ZWxzZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsIG0tbW9kYWwtLWFsZXJ0IG0tbW9kYWwtLXt7dHlwZX19XCIgZ2EtZXJyb3ItY29kZT1cIk5BXCIgaWQ9e3tpZH19PlxuICAgICAge3svaWZ9fVxuICAgIHt7ZWxzZX19XG4gICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbCBtLW1vZGFsLS1hbGVydCBtLW1vZGFsLS17e3R5cGV9fVwiIGlkPXt7aWR9fT5cbiAgICB7ey9pZn19XG4gICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbF9fYm9keVwiPlxuICAgICAgICB7eyNpZiBpY29ufX08aSBjbGFzcz1cImEtaWNvbiBhLWljb24tLW1vZGFsIGljb24tY2lyY2xlLXt7aWNvbn19XCI+PC9pPnt7L2lmfX1cbiAgICAgICAge3sjaWYgdGl0bGV9fTxoND57e3RpdGxlfX08L2g0Pnt7L2lmfX1cbiAgICAgICAge3sjaWYgYm9keX19PHA+e3t7Ym9keX19fTwvcD57ey9pZn19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19mb290XCI+XG4gICAgICAgIHt7I2lmIGJ1dHRvbn19PGEgY2xhc3M9XCJhLWJ0biBhLWJ0bi0tZnVsbCB7e2J1dHRvbkNsYXNzfX1cIiBkYXRhLWZhbmN5Ym94LWNsb3NlIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5LYXBhdDwvYT57ey9pZn19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9uTG9hZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLm9uTG9hZCApIHtcbiAgICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oIGVsLmdldCgwKSApO1xuICAgIH1cblxuICB9XG5cbiAgc3RhdGljIGVycm9yKGVycm9yID0ge30pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoTW9kYWwudGVtcGxhdGUpO1xuICAgIHZhciBodG1sID0gdGVtcGxhdGUoe1xuICAgICAgdHlwZTogTW9kYWwuVHlwZXMuRVJST1IsXG4gICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAuLi5lcnJvcixcbiAgICAgIGlzRXJyb3IgOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3Moc3VjY2VzcyA9IHt9KSB7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKE1vZGFsLnRlbXBsYXRlKTtcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHtcbiAgICAgIHR5cGU6IE1vZGFsLlR5cGVzLlNVQ0NFU1MsXG4gICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgIC4uLnN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgaW5mbyhpbmZvID0ge30pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoTW9kYWwudGVtcGxhdGUpO1xuICAgIHZhciBodG1sID0gdGVtcGxhdGUoe1xuICAgICAgdHlwZTogTW9kYWwuVHlwZXMuSU5GTyxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgLi4uaW5mb1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyB3YXJuaW5nKHdhcm5pbmcgPSB7fSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShNb2RhbC50ZW1wbGF0ZSk7XG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSh7XG4gICAgICB0eXBlOiBNb2RhbC5UeXBlcy5XQVJOSU5HLFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAuLi53YXJuaW5nXG4gICAgfSk7XG5cbiAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGh0bWwpO1xuICB9XG5cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxWaWRlbyBleHRlbmRzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGVtcGxhdGVTb3VyY2U6IFwiI21vZGFsLXZpZGVvLWh0bWxcIixcbiAgICAgIG1vZGFsVGFyZ2V0OiBcIiNtb2RhbC12aWRlb1wiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuXG4gICAgdGhpcy50ZW1wbGF0ZVNvdXJjZSA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlU291cmNlKTtcbiAgICB0aGlzLm1vZGFsVGFyZ2V0ID0gJCh0aGlzLm9wdGlvbnMubW9kYWxUYXJnZXQpO1xuXG4gICAgLy90aGlzLm1vZGFsSWQ7XG4gICAgdGhpcy5tb2RhbFVybDtcbiAgICB0aGlzLm1vZGFsVGl0bGU7XG4gICAgdGhpcy5tb2RhbERlc2M7XG4gICAgdGhpcy5tb2RhbEJ0bk5hbWU7XG4gICAgdGhpcy5tb2RhbEJ0bkhyZWY7XG4gICAgdGhpcy5tb2RhbEJ0bkNsb3NlO1xuXG4gICAgLy90aGlzLmZhbmN5Ym94ID0gdGhpcy5tb2RhbFRhcmdldC5mYW5jeWJveCh7fSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLmhhc0NsYXNzKFwiYS1idG4taWNvblwiKSA/ICQoZXZlbnQudGFyZ2V0KSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAvL3RoaXMubW9kYWxJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKFwic3JjXCIpO1xuICAgIHRoaXMubW9kYWxVcmwgPSAkdGFyZ2V0LmRhdGEoXCJ1cmxcIik7XG4gICAgdGhpcy5tb2RhbFRpdGxlID0gJHRhcmdldC5kYXRhKFwidGl0bGVcIik7XG4gICAgdGhpcy5tb2RhbERlc2MgPSAkdGFyZ2V0LmRhdGEoXCJkZXNjXCIpO1xuICAgIHRoaXMubW9kYWxCdG5OYW1lID0gJHRhcmdldC5kYXRhKFwiYnV0dG9uXCIpO1xuICAgIHRoaXMubW9kYWxCdG5IcmVmID0gJHRhcmdldC5kYXRhKFwiYnRuaHJlZlwiKTtcbiAgICB0aGlzLm1vZGFsQnRuQ2xvc2UgPSAkdGFyZ2V0LmRhdGEoXCJidG5jbG9zZVwiKTtcblxuICAgIGxldCB2aWRlb01vZGFsSHRtbCA9IFwiXCIsXG4gICAgICBzb3VyY2UsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIGNvbnRleHQ7XG5cbiAgICBzb3VyY2UgPSB0aGlzLnRlbXBsYXRlU291cmNlLmh0bWwoKTtcbiAgICB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHNyYzogdGhpcy5tb2RhbFVybCxcbiAgICAgIC8vaWQ6IHRoaXMubW9kYWxJZCxcbiAgICAgIHRpdGxlOiB0aGlzLm1vZGFsVGl0bGUsXG4gICAgICBkZXNjOiB0aGlzLm1vZGFsRGVzYyxcbiAgICAgIGJ1dHRvbjogdGhpcy5tb2RhbEJ0bk5hbWUsXG4gICAgICBocmVmOiB0aGlzLm1vZGFsQnRuSHJlZixcbiAgICAgIGJ0bkNsb3NlOiB0aGlzLm1vZGFsQnRuQ2xvc2VcbiAgICB9O1xuICAgIHZpZGVvTW9kYWxIdG1sICs9IHRlbXBsYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5tb2RhbFRhcmdldC5lbXB0eSgpLmFwcGVuZCh2aWRlb01vZGFsSHRtbCk7XG5cbiAgICAkLmZhbmN5Ym94Lm9wZW4odGhpcy5tb2RhbFRhcmdldCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZUNoZWNrIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcIm1vZGFsXCIgOiBcIi5tLW1vZGFsXCIsXG4gICAgICBcImxhYmVsXCI6IFwiLmEtY2hlY2tib3hcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWwgPSB0aGlzLiRlbC5jbG9zZXN0KHRoaXMub3B0aW9ucy5tb2RhbCk7XG4gICAgdGhpcy5mYW5jeUlkID0gXCIjXCIgKyB0aGlzLm1vZGFsLmF0dHIoJ2lkJyk7XG4gICAgdGhpcy5sYWJlbCA9ICQoXCJbZGF0YS1mYW5jeWlkPSdcIiArIHRoaXMuZmFuY3lJZCArIFwiJ11cIikuY2xvc2VzdCh0aGlzLm9wdGlvbnMubGFiZWwpO1xuICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLmxhYmVsLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgdGhpcy5jaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB0aGlzLmNoZWNrYm94LnBhcnNsZXkoKS5kZXN0cm95KClcbiAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHRvZ2dsZTogXCJtLXNlYXJjaC1iYXItLW9wZW5cIixcbiAgICAgICAgdHJpZ2dlcjogXCIubS1zZWFyY2gtYmFyX19jbG9zZVwiLFxuICAgICAgfSxcbiAgICAgIGljb25zOiB7XG4gICAgICAgIHNlbGY6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICB0b2dnbGU6IFwiYS1idG4taWNvbi0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dDogXCI+IGlucHV0XCIsXG4gICAgICBmb3JtOiBcIi5tLWZvcm1cIlxuICAgIH07XG4gICAgXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmljb25zID0gJCh0aGlzLm9wdGlvbnMuaWNvbnMuc2VsZik7XG4gICAgdGhpcy4kZm9ybSA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmZvcm0pO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcbiAgICAgIC5vbihcImtleXByZXNzXCIsIHRoaXMub3B0aW9ucy5pbnB1dCwgZXZlbnQgPT4gdGhpcy5vbktleXByZXNzKGV2ZW50KSlcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC50b2dnbGUpXG4gICAgdGhpcy5pY29ucy50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuaWNvbnMudG9nZ2xlKVxuICB9XG5cbiAgb25LZXlwcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLiRmb3JtLnN1Ym1pdCgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBTd2lwZXIge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgY29uc3QgJHNsaWRlciA9IGVsLmZpbmQoXCIubS1zbGlkZXJfX3N3aXBlclwiKTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmRcIiksXG4gICAgICAgIHNsaWRlQ2hhbmdlOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVwiKSxcbiAgICAgICAgaW5pdDogKCkgPT4gICRlbC50cmlnZ2VyKFwiaW5pdFwiKSxcbiAgICAgICAgdG91Y2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwidG91Y2hFbmRcIiksXG4gICAgICAgIHJlYWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoRW5kXCIpLFxuICAgICAgICByZWFjaEJlZ2lubmluZzogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEJlZ2lubmluZ1wiKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdmlnYXRpb24gKSB7XG4gICAgICBvcHRpb25zLm5hdiA9IHtcbiAgICAgICAgbmV4dEVsOiAnPiAubS1zbGlkZXJfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICc+IC5tLXNsaWRlcl9fcHJldicsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6IFwiYS1idG4taWNvbi0tZGlzYWJsZWRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5wYWdpbmF0aW9uICkge1xuICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uID0ge1xuICAgICAgICBlbDogJGVsLmZpbmQoJy5zd2lwZXItcGFnaW5hdGlvbicpLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGVsID0gJGVsO1xuXG4gICAgc3VwZXIoJHNsaWRlci5nZXQoMCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICggb3B0aW9ucy5uYXYgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCApO1xuICAgICAgdGhpcy4kcHJldkVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwgKTtcblxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwsICgpID0+IHRoaXMuc2xpZGVOZXh0KCkpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYucHJldkVsLCAoKSA9PiB0aGlzLnNsaWRlUHJldigpKVxuICAgICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKCkpO1xuXG4gICAgICBpZiAoICFvcHRpb25zLmxvb3AgKSB7XG4gICAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgJGVsXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbk1vdXNlRW50ZXIoKSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKVxuICAgIH1cblxuICAgIGlmICggdGhpcy5zbGlkZXMubGVuZ3RoIDw9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcgKSB7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm0tc2xpZGVyLS1oaWRkZW4tbmF2XCIpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1sb2NhdGlvbi1ocmVmXVwiLCAoZSkgPT4gdGhpcy5vbkNsaWNrSXRlbShlKSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2tJdGVtKGUpIHtcbiAgICBpZiAoICEkKCBlLnRhcmdldCApLmlzKFwiYVwiKSApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoIGUuY3VycmVudFRhcmdldCApO1xuICAgICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhKCk7XG4gICAgICBpZiAoIGRhdGEubG9jYXRpb25IcmVmICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEubG9jYXRpb25IcmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcyAqIDI7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgpIHtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gJCh0aGlzLnNsaWRlc1sgdGhpcy5hY3RpdmVJbmRleCBdKTtcbiAgICBjb25zdCBhbmltYXRlZEl0ZW1zID0gYWN0aXZlSXRlbS5maW5kKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcblxuICAgICQuZWFjaChhbmltYXRlZEl0ZW1zLCAoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChpdGVtKS5kYXRhKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChpdGVtKS5hZGRDbGFzcyggY2xhc3NOYW1lICk7IH0sIDEpO1xuICAgIH0pO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlUHJldigpIHtcbiAgICBzdXBlci5zbGlkZVByZXYoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVOZXh0KCkge1xuICAgIHN1cGVyLnNsaWRlTmV4dCgpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYXA6IFwiI21hcFwiLFxuICAgICAgdGFiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICB0YWJJdGVtOiBcIi5tLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcIm1hcC5jbGlja1wiLCAoZXZlbnQsIGlkKSA9PiB0aGlzLm9uQ2xpY2tNYXAoZXZlbnQsIGlkKSlcbiAgICAgIC5vbihcInRhYi5zaG93XCIsIChldmVudCwgaW5kZXgpID0+IHRoaXMub25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkluaXRNYXAoKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uSW5pdE1hcCgpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYkl0ZW0pLmZpbmQoXCI+IGFcIikuZGF0YShcImNvb3JkXCIpXG4gICAgY29uc3QgbWFwID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFwKS5kYXRhKFwiY29tcG9uZW50TWFwXCIpO1xuICAgIG1hcC5tYXBGb2N1cyhjb29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkge1xuICAgIHRoaXMub25Jbml0TWFwKClcbiAgfVxuXG4gIG9uQ2xpY2tNYXAoZXZlbnQsIGlkKSB7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYilcbiAgICBjb25zdCB0YWJzID0gdGhpcy4kdGFicy5kYXRhKFwiY29tcG9uZW50VGFiRGVmYXVsdFwiKTtcbiAgICBjb25zdCB0YWIgPSB0aGlzLiR0YWJzLmZpbmQoYGFbaHJlZj1cIiMke2lkfVwiXWApLnBhcmVudCgpO1xuXG4gICAgdGFicy5zZXRBY3RpdmUodGFiLmluZGV4KCkpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGRyb3Bkb3duOiBcIi5tLW5hdi0tZHJvcGRvd25cIixcbiAgICAgICAgZHJvcGRvd25PcGVuOiBcIm0tbmF2LS1kcm9wZG93bi1vcGVuXCIsXG4gICAgICAgIGNoaWxkOiBcIi5tLW5hdi0tZHJvcGRvd24tY2hpbGRcIixcbiAgICAgICAgY2hpbGRPcGVuOiBcIm0tbmF2LS1kcm9wZG93bi1jaGlsZC1vcGVuXCIsXG4gICAgICAgIGxpbms6IFwiLm0tbmF2LS1kcm9wZG93bi1jaGlsZC1saW5rXCJcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyLS1oZWFkZXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoLWhlYWRlclwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5kcm9wZG93biwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrRHJvcGRvd24oZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5jaGlsZCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrQ2hpbGQoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wZG93bihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAkdGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuZHJvcGRvd25PcGVuKVxuICB9XG5cbiAgb25DbGlja0NoaWxkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cbiAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmNoaWxkT3BlbikpIHtcbiAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgICR0YXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJG5hdi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLmhhc0NsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpID8gJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJykgOiAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAgIHRoaXMuJG5hdi5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSkgPyAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKSA6ICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsZWFmMTogXCIuby1oZXJvX19sZWFmLS1sZWFmLTFcIixcbiAgICAgIGxlYWYyOiBcIi5vLWhlcm9fX2xlYWYtLWxlYWYtMlwiLFxuICAgICAgbGVhZjM6IFwiLm8taGVyb19fbGVhZi0tbGVhZi0zXCIsXG4gICAgICBwaWxsOiBcIi5vLWhlcm8tcHJvZHVjdF9fcGlsbFwiLFxuICAgICAgcGlsbDI6IFwiLm8taGVyby1wcm9kdWN0X19waWxsLTJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGxlYWYxID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubGVhZjEpO1xuICAgIHRoaXMuJGxlYWYyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubGVhZjIpO1xuICAgIHRoaXMuJGxlYWYzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubGVhZjMpO1xuICAgIHRoaXMuJHBpbGwgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5waWxsKTtcbiAgICB0aGlzLiRwaWxsMiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnBpbGwyKTtcblxuICAgIHRoaXMubW92ZWQoODAsIDk1LCAxMDAsIHRoaXMuJGxlYWYxKTtcbiAgICB0aGlzLm1vdmVkKC03MCwgLTkyLCAxNTAsIHRoaXMuJGxlYWYyKTtcbiAgICB0aGlzLm1vdmVkKC02MCwgNzQsIDIwMCwgdGhpcy4kbGVhZjMpO1xuICAgIHRoaXMubW92ZWQoNTAsIDgwLCA1MCwgdGhpcy4kcGlsbCk7XG4gICAgdGhpcy5tb3ZlZCgtNjQsIC0xMDAsIDUwLCB0aGlzLiRwaWxsMik7XG4gIH1cblxuXG4gIG1vdmVkKHgsIHksIGR1cmF0aW9uLCBlbCkge1xuICAgIGVsLmFuaW1hdGUoe1xuICAgICAgdGV4dEluZGVudDogMFxuICAgIH0sIHtcbiAgICAgIHN0ZXA6IChub3csIGZ4KSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLm1vdXNlbW92ZSgoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFtb3VudE1vdmVkWCA9IChlLnBhZ2VYICogLTEgLyB4KTtcbiAgICAgICAgICBjb25zdCBhbW91bnRNb3ZlZFkgPSAoZS5wYWdlWSAqIC0xIC8geSk7XG4gICAgICAgICAgZWwuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZHVyYXRpb25cbiAgICB9LCAnZWFzZU91dEN1YmljJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIHRvZ2dsZTogXCJvLXNpZGViYXItLW9wZW5cIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIixcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgc2VsZjogXCIuby1zaWRlYmFyX19wcm9kdWN0XCIsXG4gICAgICAgIGl0ZW06IFwiLm8tc2lkZWJhcl9fcHJvZHVjdC0tZHJvcGRvd25cIixcbiAgICAgICAgYWN0aXZlOiBcIm8tc2lkZWJhcl9fcHJvZHVjdC0tYWN0aXZlXCIsXG4gICAgICAgIGxpbms6IFwiLm8tc2lkZWJhcl9fcHJvZHVjdC0tbGlua1wiXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhci0taGVhZGVyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRwcm9kdWN0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMucHJvZHVjdC5zZWxmKTtcbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuICAgIHRoaXMuJHNlYXJjaEJhciA9ICQodGhpcy5vcHRpb25zLnNlYXJjaC5zZWxmKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMucHJvZHVjdC5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tOYXYoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnByb2R1Y3QubGluaywgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGluayhldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4gdGhpcy53aW5kb3dSZXNpemUoKSlcblxuICB9XG5cbiAgd2luZG93UmVzaXplKCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGwoKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgaWYgKCR0YXJnZXQuZmluZChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5wcm9kdWN0LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMucHJvZHVjdC5pdGVtKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucHJvZHVjdC5hY3RpdmUpXG4gICAgICAgICR0YXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnByb2R1Y3QuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucHJvZHVjdC5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPiA3NjgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgfVxuICB9XG59XG4iXX0=
