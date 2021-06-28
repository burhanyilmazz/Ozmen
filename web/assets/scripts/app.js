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

var _Services = _interopRequireDefault(require("../../../src/organisms/Services/Services"));

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
  Services: _Services["default"]
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

},{"../../../src/assets/scripts/General":13,"../../../src/assets/scripts/LazyLoad":14,"../../../src/assets/scripts/OnLoadModal":15,"../../../src/assets/scripts/Sticky":16,"../../../src/atoms/FormCheckbox/FormCheckbox":18,"../../../src/atoms/FormFileInput/FormFileInput":19,"../../../src/atoms/FormInput/FormInput":20,"../../../src/atoms/FormTextarea/FormTextarea":21,"../../../src/atoms/Hamburger/Hamburger":22,"../../../src/atoms/MoreInfinite/MoreInfinite":23,"../../../src/molecules/Accordion/Accordion":24,"../../../src/molecules/Carousel/Carousel":25,"../../../src/molecules/LeftNav/LeftNav":26,"../../../src/molecules/Map/Map":27,"../../../src/molecules/Modal/Modal":28,"../../../src/molecules/Modal/ModalVideo":29,"../../../src/molecules/RemoteCheck/RemoteCheck":30,"../../../src/molecules/SearchBar/SearchBar":31,"../../../src/molecules/Slider/Slider":32,"../../../src/molecules/TabDefault/TabDefault":33,"../../../src/organisms/Contact/Contact":34,"../../../src/organisms/Header/Header":35,"../../../src/organisms/Services/Services":36,"../../../src/organisms/Sidebar/Sidebar":37,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":12}],18:[function(require,module,exports){
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

var Services = function Services(el, options) {
  (0, _classCallCheck2["default"])(this, Services);
  this.$el = el;
  var productCarouselText = new Swiper(".o-services__text .m-slider__swiper", {
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    lazy: {
      loadPrevNext: true
    },
    pagination: {
      el: ".o-services__text .swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  });
  var productCarouselImage = new Swiper(".o-services__image .m-slider__swiper", {
    slidesPerView: "auto",
    direction: "vertical",
    slideToClickedSlide: true,
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
        spaceBetween: 20
      }
    }
  });
};

exports["default"] = Services;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":8}],37:[function(require,module,exports){
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
        item: "nav > ul > li",
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

      if ($target.find("ul").length) {
        event.preventDefault();

        if (!$target.hasClass(this.options.nav.active)) {
          $(this.options.nav.item).removeClass(this.options.nav.active);
          $target.addClass(this.options.nav.active);
        } else {
          $target.removeClass(this.options.nav.active);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3guZXM2Iiwic3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYS5lczYiLCJzcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlci5lczYiLCJzcmMvYXRvbXMvTW9yZUluZmluaXRlL01vcmVJbmZpbml0ZS5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbC5lczYiLCJzcmMvbW9sZWN1bGVzL0xlZnROYXYvTGVmdE5hdi5lczYiLCJzcmMvbW9sZWN1bGVzL01hcC9NYXAuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsVmlkZW8uZXM2Iiwic3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjay5lczYiLCJzcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXIuZXM2Iiwic3JjL21vbGVjdWxlcy9TbGlkZXIvU2xpZGVyLmVzNiIsInNyYy9tb2xlY3VsZXMvVGFiRGVmYXVsdC9UYWJEZWZhdWx0LmVzNiIsInNyYy9vcmdhbmlzbXMvQ29udGFjdC9Db250YWN0LmVzNiIsInNyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlci5lczYiLCJzcmMvb3JnYW5pc21zL1NlcnZpY2VzL1NlcnZpY2VzLmVzNiIsInNyYy9vcmdhbmlzbXMvU2lkZWJhci9TaWRlYmFyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckJBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQU07QUFFdEIsRUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQyxFQUFsQyxDQUFxQyxPQUFyQyxFQUE4QyxV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QSxLQUFLLENBQUMsY0FBTjtBQUVBLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLE9BQUwsQ0FBYSxNQUFiLFNBQTVCO0FBQ0EsV0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxNQUFsQztBQUNBLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixtQkFBNUI7QUFDRDs7O1dBRUQsMEJBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxLQUFWLEVBQXBCOztBQUVBLFVBQUksV0FBVyxHQUFHLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxhQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxDQUFhLE1BQWxDO0FBQ0EsYUFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssT0FBTCxDQUFhLE1BQWIsU0FBNUI7QUFDRDtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXG4gICQoXCIubS1jb3B5cmlnaHQtbmF2IC5hLWJ0bi1pY29uXCIpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfSwgJ3Nsb3cnKTtcbiAgfSlcblxuICBjb25zdCAkd29tYW4xID0gJChcIi5wLWhvbWVwYWdlLWhpc3RvcnlfX3dvbWFuLS1sZWFmLTFcIik7XG4gIGNvbnN0ICR3b21hbjIgPSAkKFwiLnAtaG9tZXBhZ2UtaGlzdG9yeV9fd29tYW4tLWxlYWYtMlwiKTtcbiAgY29uc3QgJHdvbWFuMyA9ICQoXCIucC1ob21lcGFnZS1oaXN0b3J5X193b21hbi0tbGVhZi0zXCIpO1xuXG4gIGZ1bmN0aW9uIG1vdmVkKHgsIHksIGR1cmF0aW9uLCBlbCkge1xuICAgIGVsLmFuaW1hdGUoe1xuICAgICAgdGV4dEluZGVudDogMFxuICAgIH0sIHtcbiAgICAgIHN0ZXA6IChub3csIGZ4KSA9PiB7XG4gICAgICAgICQoXCIucC1ob21lcGFnZV9faGlzdG9yeVwiKS5tb3VzZW1vdmUoKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhbW91bnRNb3ZlZFggPSAoZS5wYWdlWCAqIC0xIC8geCk7XG4gICAgICAgICAgY29uc3QgYW1vdW50TW92ZWRZID0gKGUucGFnZVkgKiAtMSAvIHkpO1xuICAgICAgICAgIGVsLmNzcyh7XG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKScsXG4gICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKScsXG4gICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKScsXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uXG4gICAgfSwgJ2Vhc2VPdXRDdWJpYycpO1xuICB9XG5cbiAgbW92ZWQoNzQsIDc1LCAyMDAsICR3b21hbjEpO1xuICBtb3ZlZCgtODYsIDkyLCAyMDAsICR3b21hbjIpO1xuICBtb3ZlZCgtOTYsIDY2LCAyMDAsICR3b21hbjMpO1xuXG59KTtcblxud2luZG93LlBhcnNsZXkuYWRkVmFsaWRhdG9yKCdtYXhGaWxlU2l6ZScsIHtcbiAgdmFsaWRhdGVTdHJpbmc6IGZ1bmN0aW9uIChfdmFsdWUsIG1heFNpemUsIHBhcnNsZXlJbnN0YW5jZSkge1xuICAgIGlmICghd2luZG93LkZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGZpbGVzID0gcGFyc2xleUluc3RhbmNlLiRlbGVtZW50WzBdLmZpbGVzO1xuICAgIHJldHVybiBmaWxlcy5sZW5ndGggIT0gMSB8fCBmaWxlc1swXS5zaXplIDw9IG1heFNpemUgKiAxMDI0O1xuICB9LFxuICByZXF1aXJlbWVudFR5cGU6ICdpbnRlZ2VyJyxcbiAgbWVzc2FnZXM6IHtcbiAgICB0cjogJ01heC4gZG9zeWEgYm95dXR1ICVzIEtiLiBvbGFtYWzEsWTEsXInXG4gIH1cbn0pO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBsYXguc2V0dXAoe1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICBzbWFsbDogMCxcbiAgICAgIGxhcmdlOiA3NjhcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlTGF4ID0gKCkgPT4ge1xuICAgIGxheC51cGRhdGUod2luZG93LnNjcm9sbFkpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVMYXgpXG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUxheClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImxhenliZWZvcmV1bnZlaWxcIiwgdGhpcy5vcHRpb25zLnNwZWVjaEJ1dHRvbiwgZXZlbnQgPT4gdGhpcy5vbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpKTtcblxuICB9XG5cbiAgb25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSB7XG4gICAgY29uc3QgbGF6eUVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGxhenlFbGVtZW50LmF0dHIoIFwiZGF0YS1iYWNrZ3JvdW5kXCIgKTtcbiAgICBpZiAoIGJhY2tncm91bmQgKSB7XG4gICAgICBsYXp5RWxlbWVudC5jc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IExhenlMb2FkKCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL01vZGFsL01vZGFsJztcbmNsYXNzIE9uTG9hZE1vZGFsIHtcbiAgc3RhdGljIG9uTG9hZE1vZGFsKCkge1xuICAgIGNvbnN0IGhhc2ggPSAkKGxvY2F0aW9uKS5hdHRyKFwiaGFzaFwiKTtcblxuICAgIHN3aXRjaCAoaGFzaCkge1xuICAgICAgY2FzZSBcIiNlcnJvck1lc3NhZ2VcIjpcbiAgICAgICAgdGhpcy5tb2RhbFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCIjc3VjY2Vzc01lc3NhZ2VcIjpcbiAgICAgICAgdGhpcy5tb2RhbFR5cGUoXCJzdWNjZXNzXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbW9kYWxUeXBlKHR5cGUpIHtcbiAgICBpZiAoJChgI21vZGFsLXByZXNldC0ke3R5cGV9YCkubGVuZ3RoID4gMCkge1xuICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgc3JjOiBgI21vZGFsLXByZXNldC0ke3R5cGV9YCxcbiAgICAgICAgYmFzZUNsYXNzOiBgZmFuY3lib3gtLSR7dHlwZX0gbS1tb2RhbC0tYWxlcnRgLFxuICAgICAgICB0b3VjaDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT25Mb2FkTW9kYWwoKTtcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gT25Mb2FkTW9kYWwub25Mb2FkTW9kYWwoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3kgZXh0ZW5kcyBIZWFkcm9vbSB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgcHJlZml4OiAnc3RpY2t5JyxcbiAgICAgIHRvbGVyYW5jZToge1xuICAgICAgICBkb3duIDogMTAsXG4gICAgICAgIHVwIDogMFxuICAgICAgfSxcbiAgICAgIG9mZnNldCA6IDY0XG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgb3B0aW9ucy5jbGFzc2VzID0ge1xuICAgICAgaW5pdGlhbCA6IGAke29wdGlvbnMucHJlZml4fWAsXG4gICAgICBwaW5uZWQgOiBgJHtvcHRpb25zLnByZWZpeH0tLXBpbm5lZGAsXG4gICAgICB1bnBpbm5lZCA6IGAke29wdGlvbnMucHJlZml4fS0tdW5waW5uZWRgLFxuICAgICAgdG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS10b3BgLFxuICAgICAgbm90VG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ub3QtdG9wYCxcbiAgICAgIGJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tYm90dG9tYCxcbiAgICAgIG5vdEJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tbm90LWJvdHRvbWBcbiAgICB9XG5cbiAgICBzdXBlcigkZWwuZ2V0KDApLCBvcHRpb25zKTtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IEdlbmVyYWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwnO1xuaW1wb3J0IExhenlMb2FkICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZCc7XG5pbXBvcnQgT25Mb2FkTW9kYWwgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwnO1xuaW1wb3J0IFN0aWNreSAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9TdGlja3knO1xuXG5pbXBvcnQgRm9ybUNoZWNrYm94ICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3gnO1xuaW1wb3J0IEZvcm1GaWxlSW5wdXQgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUZpbGVJbnB1dC9Gb3JtRmlsZUlucHV0JztcbmltcG9ydCBGb3JtSW5wdXQgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dCc7XG5pbXBvcnQgRm9ybVRleHRhcmVhICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEnO1xuaW1wb3J0IEhhbWJ1cmdlciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyJztcbmltcG9ydCBNb3JlSW5maW5pdGUgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvTW9yZUluZmluaXRlL01vcmVJbmZpbml0ZSc7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IENhcm91c2VsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwnO1xuaW1wb3J0IE1hcCAgICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTWFwL01hcCc7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgTW9kYWxWaWRlbyAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbFZpZGVvJztcbmltcG9ydCBSZW1vdGVDaGVjayAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1JlbW90ZUNoZWNrL1JlbW90ZUNoZWNrJztcbmltcG9ydCBTZWFyY2hCYXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IFNsaWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2xpZGVyL1NsaWRlcic7XG5pbXBvcnQgVGFiRGVmYXVsdCAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQnO1xuaW1wb3J0IExlZnROYXYgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTGVmdE5hdi9MZWZ0TmF2JztcblxuaW1wb3J0IFNpZGViYXIgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBDb250YWN0ICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0NvbnRhY3QvQ29udGFjdCc7XG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBTZXJ2aWNlcyAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL1NlcnZpY2VzL1NlcnZpY2VzJztcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgTGF6eUxvYWQsXG4gIFN0aWNreSxcbiAgT25Mb2FkTW9kYWwsXG5cbiAgRm9ybUNoZWNrYm94LFxuICBGb3JtRmlsZUlucHV0LFxuICBGb3JtSW5wdXQsXG4gIEZvcm1UZXh0YXJlYSxcbiAgSGFtYnVyZ2VyLFxuICBNb3JlSW5maW5pdGUsXG5cbiAgQWNjb3JkaW9uLFxuICBDYXJvdXNlbCxcbiAgTWFwLFxuICBNb2RhbCxcbiAgTW9kYWxWaWRlbyxcbiAgUmVtb3RlQ2hlY2ssXG4gIFNlYXJjaEJhcixcbiAgU2xpZGVyLFxuICBUYWJEZWZhdWx0LFxuICBMZWZ0TmF2LFxuICBcbiAgU2lkZWJhcixcbiAgQ29udGFjdCxcbiAgSGVhZGVyLFxuICBTZXJ2aWNlcyxcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KCB0aGF0LCB0eXBlLCBkYXRhICkge1xuICBjb25zdCBvcHRpb25zID0gZGF0YSB8fCB7fTtcbiAgbGV0IENvbXBvbmVudCA9IENvbXBvbmVudHNbdHlwZV07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJCh0aGF0KSwgb3B0aW9ucyk7XG4gICAgdGhhdC5zZXRDb21wb25lbnQoIHR5cGUsIENvbXBvbmVudCk7XG4gICAgJCh0aGF0KS5kYXRhKGBjb21wb25lbnQke3R5cGV9YCwgQ29tcG9uZW50KS5yZW1vdmVBdHRyKFwiZGF0YS1jb21wb25lbnRcIikucmVtb3ZlRGF0YShcImNvbXBvbmVudFwiKTtcbiAgfVxufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHRoaXNbIHR5cGUgXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUsIENvbXBvbmVudCApIHtcbiAgdGhpc1t0eXBlXSA9IENvbXBvbmVudDtcbn1cblxud2luZG93LmluaXRpYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1jb21wb25lbnRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gJCggdGhpcyApLmRhdGEoJ2NvbXBvbmVudCcpO1xuICAgIGlmICggQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuICAgICAgZm9yKCB2YXIgaSBpbiBkYXRhICkge1xuICAgICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YVtpXS50eXBlLCBkYXRhW2ldICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLnR5cGUsIGRhdGEgKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEsICQoIHRoaXMgKS5kYXRhKCkgKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXRpYXRlQ29tcG9uZW50cygpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1DaGVja2JveCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb3Blbk1vZGFsOiBcImJbZGF0YS1mYW5jeUlkXVwiLFxuICAgICAgYm9keTogXCIubS1zY3JvbGwtYm94X19ib2R5XCIsXG4gICAgICBtb2JpbGVCb2R5OiBcIi5tLW1vZGFsX19ib2R5XCJcbiAgICAgIC8vbW9kYWwtdXNlci1hZ3JlZW1lbnQtbW9iaWxlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm9wZW5Nb2RhbCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5vcGVuTW9kYWwsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKFwiZmFuY3lpZFwiKTtcblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLXVzZXItYWdyZWVtZW50XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChtb2RhbElkID09IFwiI21vZGFsLWNvbnRhY3RcIikge1xuICAgICAgdGhpcy4kYm9keSA9ICQobW9kYWxJZCkuZmluZCh0aGlzLm9wdGlvbnMuYm9keSk7XG4gICAgfVxuXG4gICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgIHNyYzogbW9kYWxJZCxcbiAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgc21hbGxCdG46IHRydWUsXG4gICAgICB0b3VjaDogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpbGVJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiaW5wdXRcIixcbiAgICAgIHRleHQ6IFwic3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICB0aGlzLiR0ZXh0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGV4dCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcbiAgfVxuXG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICB0aGlzLiR0ZXh0LnRleHQoZmlsZU5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/IHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gdGV4dGFyZWFcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/ICB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuXG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBcImEtaGFtYnVyZ2VyLS1vcGVuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJoYW1idXJnZXIuY2xpY2tcIik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9yZUluZmluaXRlIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjb250YWluZXI6IFwiLnJvd1wiLFxuICAgICAgYnV0dG9uOiBcIi5qcy1tb3JlLWluZmluaXRlXCIsXG4gICAgICBsb2FkaW5nOiBcImEtYnRuLS1sb2FkaW5nXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTtcbiAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbik7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5idXR0b24sIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmJ1dHRvbi5kYXRhKFwicGFnZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcGFnZVxuICAgIH1cbiAgICB0aGlzLmh0bWxUZW1wbGF0ZSA9IFwiXCI7XG5cbiAgICB0aGlzLmJ1dHRvbi5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZylcblxuICAgIHRoaXMuZ2V0RGF0YSh1cmwsIGRhdGEsIF9yZXNwb25zZSA9PiB7XG4gICAgICBfcmVzcG9uc2UuaXRlbXMubWFwKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVCbG9nKGRhdGEpKVxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmh0bWxUZW1wbGF0ZSlcblxuICAgICAgaWYgKF9yZXNwb25zZS50b3RhbFBhZ2UgPT0gcGFnZSkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5oaWRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRhdGEoXCJwYWdlXCIsIHBhZ2UgKyAxKTtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmcpXG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJsb2coZGF0YSkge1xuICAgIGNvbnN0IHNvdXJjZSA9ICQoXCIjYmxvZy1jYXJkLXRlbXBsYXRlXCIpLmh0bWwoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHVybDogZGF0YS51cmwsXG4gICAgICBpbWFnZTogZGF0YS5pbWFnZSxcbiAgICAgIGRhdGU6IGRhdGEuZGF0ZVxuICAgIH07XG5cbiAgICB0aGlzLmh0bWxUZW1wbGF0ZSArPSB0ZW1wbGF0ZShjb250ZXh0KTtcbiAgfVxuXG4gIGdldERhdGEodXJsLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogcmVzcG9uc2UgPT4ge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiYWNjb3JkaW9uSGVhZHNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9faGVhZFwiLFxuICAgICAgXCJhY2NvcmRpb25Cb2RpZXNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9fYm9keVwiLFxuICAgICAgXCJhY3RpdmVDbGFzc1wiOiBcIm0tYWNjb3JkaW9uX19oZWFkLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY2NvcmRpb25IZWFkcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzKTtcbiAgICB0aGlzLmFjY29yZGlvbkJvZGllcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbmJvZGllcyk7XG4gICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcztcbiAgICB0aGlzLnNob3dPbmx5T25lID0gdGhpcy5vcHRpb25zLnNob3dPbmx5T25lO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY3VyclRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnNob3dPbmx5T25lKSB7XG4gICAgICBpZiAodGhpcy5jdXJyVGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkhlYWRzLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyVGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJhY2NvcmRpb24uY2hhbmdlXCIpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWwge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgZm9sbG93RmluZ2VyOiBmYWxzZSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIGxhenk6IHtcbiAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVyRGF0YSA9IHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCBzbGlkZXJEYXRhKTtcblxuICAgIHNsaWRlci5kYXRhKFwiY29tcG9uZW50XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpXG4gICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKGUsIGluZGV4KSA9PiB0aGlzLm9uU2xpZGVDaGFuZ2UoaW5kZXgpKVxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1jYXJvdXNlbF9fdGh1bWJzIGxpXCIpLm9uKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcblxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKS5kYXRhKFwiY29tcG9uZW50U2xpZGVyXCIpO1xuICAgIGNvbnN0IGJ1bGxldCA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpXG5cbiAgICBzbGlkZXIuc2xpZGVUbyhidWxsZXQgKyAxKVxuICB9XG5cbiAgb25TbGlkZUNoYW5nZShpbmRleCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgICBjb25zdCBidWxsZXRzID0gdGhpcy4kZWwuZmluZChcIi5hLWJ1bGxldHNcIikuZGF0YShcImNvbXBvbmVudEJ1bGxldHNcIik7XG4gICAgICBidWxsZXRzLnNldEFjdGl2ZShzbGlkZXIucmVhbEluZGV4KTtcblxuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9ICQoc2xpZGVyLnNsaWRlc1tzbGlkZXIuYWN0aXZlSW5kZXhdKTtcblxuICAgICAgYWN0aXZlSXRlbS50cmlnZ2VyKFwic2xpZGVyLmNoYW5nZVwiLCB0aGlzKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnROYXYge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBzZWxmOiBcIi5tLWxlZnQtbmF2X190b3AtLWFuY2hvclwiLFxuICAgICAgICBhY3RpdmU6IFwibS1sZWZ0LW5hdi0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IFwiLmEtc2VsZWN0XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYsIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG4gICAgICAub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBldmVudCA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrTmF2KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkaGFzaCA9ICQoJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKSlcbiAgICAkdGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKVxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkaGFzaC5vZmZzZXQoKS50b3AgLSA1MFxuICAgIH0sIDUwMCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHVybCA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKCEkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsUG9zIDwgMTAwKSB7XG4gICAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikuZXEoMCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLmZpbmQoXCJhXCIpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyTGluayA9ICQoaXRlbSk7XG4gICAgICBjb25zdCByZWZFbGVtZW50ID0gJChjdXJyTGluay5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICBpZiAocmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCA8PSBzY3JvbGxQb3MgJiYgcmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgKyA1MDAgPiBzY3JvbGxQb3MpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgZWwgPSAkZWw7XG5cbiAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IFt7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZTllOWU5XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjlcbiAgICAgIH0sIHtcbiAgICAgICAgXCJ3ZWlnaHRcIjogMC4yXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE4XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2RlZGVkZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInNhdHVyYXRpb25cIjogMzZcbiAgICAgIH0sIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiA0MFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDEuMlxuICAgICAgfV1cbiAgICB9XTtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgem9vbTogMTUsXG4gICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDEuMDQyODAyNywgMjguOTgyNjMyNyksXG4gICAgICB1cmw6ICcuLi8uLi9hc3NldHMvZGF0YS9NYXAuanNvbicsXG4gICAgICBwaW46IG9wdGlvbnMucGlubWVkaWEgfHwgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGVudC9waW4ucG5nJyxcbiAgICB9O1xuXG4gICAgZGVmYXVsdHNbJ3N0eWxlcyddID0gc3R5bGVzO1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHBpblN0YXR1cyA9ICF0aGlzLm9wdGlvbnMubGF0ICYmICF0aGlzLm9wdGlvbnMubG5nO1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuJGVsWzBdLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKHBpblN0YXR1cykge1xuICAgICAgdGhpcy5tYXBEYXRhSGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gW3tcbiAgICAgICAgXCJjb29yZHNcIjoge1xuICAgICAgICAgIFwibGF0XCI6IHRoaXMub3B0aW9ucy5sYXQsXG4gICAgICAgICAgXCJsbmdcIjogdGhpcy5vcHRpb25zLmxuZ1xuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiB0aGlzLm9wdGlvbnMudXJsLFxuICAgICAgICBcImNvbnRlbnRcIjogdGhpcy5vcHRpb25zLmNvbnRlbnRcbiAgICAgIH1dXG4gICAgfVxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCB0aGlzLm1hcmtlckNyZWF0b3IoKSk7XG4gIH1cblxuICBtYXBGb2N1cyhwbGFjZSkge1xuICAgIGNvbnN0IG5ld1BsYWNlID0gcGxhY2Uuc3BsaXQoJywnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3UGxhY2VbMF0sIG5ld1BsYWNlWzFdKTtcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICB0aGlzLmJvdW5kcy5leHRlbmQocG9zaXRpb24pO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICB0aGlzLm1hcC5zZXRab29tKDExKTtcbiAgfVxuXG4gIG1hcERhdGFIYW5kbGVyKCkge1xuICAgICQuYWpheCh7XG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwgPyB0aGlzLm9wdGlvbnMudXJsIDogdGhpcy5kZWZhdWx0cy51cmwsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tcIm1hcmtlcnNcIl0gPSBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFya2VyQ3JlYXRvcigpIHtcbiAgICBjb25zdCBtYXJrZXJzID0gdGhpcy5vcHRpb25zLm1hcmtlcnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1hcmtlcihwcm9wcykge1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGF0OiBOdW1iZXIocHJvcHMuY29vcmRzLmxhdCksXG4gICAgICAgIGxuZzogTnVtYmVyKHByb3BzLmNvb3Jkcy5sbmcpXG4gICAgICB9LFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGljb246IHRoaXMub3B0aW9ucy5waW4gPyB0aGlzLm9wdGlvbnMucGluIDogdGhpcy5kZWZhdWx0cy5waW4sXG4gICAgfSk7XG5cbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcIm1hcC5jbGlja1wiLCBwcm9wcy5pZCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIHN0YXRpYyBUeXBlcyA9IHtcbiAgICBFUlJPUjogXCJlcnJvclwiLFxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICAgIFdBUk5JTkc6IFwid2FybmluZ1wiLFxuICAgIElORk86IFwiaW5mb1wiXG4gIH07XG5cbiAgc3RhdGljIHRlbXBsYXRlID0gYFxuICAgIHt7I2lmIGlzRXJyb3J9fVxuICAgICAge3sjaWYgZXJyb3JDb2RlIH19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsIG0tbW9kYWwtLWFsZXJ0IG0tbW9kYWwtLXt7dHlwZX19XCIgZ2EtZXJyb3ItY29kZT17e2Vycm9yQ29kZX19IGlkPXt7aWR9fT5cbiAgICAgIHt7ZWxzZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsIG0tbW9kYWwtLWFsZXJ0IG0tbW9kYWwtLXt7dHlwZX19XCIgZ2EtZXJyb3ItY29kZT1cIk5BXCIgaWQ9e3tpZH19PlxuICAgICAge3svaWZ9fVxuICAgIHt7ZWxzZX19XG4gICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbCBtLW1vZGFsLS1hbGVydCBtLW1vZGFsLS17e3R5cGV9fVwiIGlkPXt7aWR9fT5cbiAgICB7ey9pZn19XG4gICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbF9fYm9keVwiPlxuICAgICAgICB7eyNpZiBpY29ufX08aSBjbGFzcz1cImEtaWNvbiBhLWljb24tLW1vZGFsIGljb24tY2lyY2xlLXt7aWNvbn19XCI+PC9pPnt7L2lmfX1cbiAgICAgICAge3sjaWYgdGl0bGV9fTxoND57e3RpdGxlfX08L2g0Pnt7L2lmfX1cbiAgICAgICAge3sjaWYgYm9keX19PHA+e3t7Ym9keX19fTwvcD57ey9pZn19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19mb290XCI+XG4gICAgICAgIHt7I2lmIGJ1dHRvbn19PGEgY2xhc3M9XCJhLWJ0biBhLWJ0bi0tZnVsbCB7e2J1dHRvbkNsYXNzfX1cIiBkYXRhLWZhbmN5Ym94LWNsb3NlIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5LYXBhdDwvYT57ey9pZn19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9uTG9hZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLm9uTG9hZCApIHtcbiAgICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oIGVsLmdldCgwKSApO1xuICAgIH1cblxuICB9XG5cbiAgc3RhdGljIGVycm9yKGVycm9yID0ge30pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoTW9kYWwudGVtcGxhdGUpO1xuICAgIHZhciBodG1sID0gdGVtcGxhdGUoe1xuICAgICAgdHlwZTogTW9kYWwuVHlwZXMuRVJST1IsXG4gICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAuLi5lcnJvcixcbiAgICAgIGlzRXJyb3IgOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3Moc3VjY2VzcyA9IHt9KSB7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKE1vZGFsLnRlbXBsYXRlKTtcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHtcbiAgICAgIHR5cGU6IE1vZGFsLlR5cGVzLlNVQ0NFU1MsXG4gICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgIC4uLnN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgaW5mbyhpbmZvID0ge30pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoTW9kYWwudGVtcGxhdGUpO1xuICAgIHZhciBodG1sID0gdGVtcGxhdGUoe1xuICAgICAgdHlwZTogTW9kYWwuVHlwZXMuSU5GTyxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgLi4uaW5mb1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyB3YXJuaW5nKHdhcm5pbmcgPSB7fSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShNb2RhbC50ZW1wbGF0ZSk7XG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSh7XG4gICAgICB0eXBlOiBNb2RhbC5UeXBlcy5XQVJOSU5HLFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAuLi53YXJuaW5nXG4gICAgfSk7XG5cbiAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGh0bWwpO1xuICB9XG5cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxWaWRlbyBleHRlbmRzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGVtcGxhdGVTb3VyY2U6IFwiI21vZGFsLXZpZGVvLWh0bWxcIixcbiAgICAgIG1vZGFsVGFyZ2V0OiBcIiNtb2RhbC12aWRlb1wiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuXG4gICAgdGhpcy50ZW1wbGF0ZVNvdXJjZSA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlU291cmNlKTtcbiAgICB0aGlzLm1vZGFsVGFyZ2V0ID0gJCh0aGlzLm9wdGlvbnMubW9kYWxUYXJnZXQpO1xuXG4gICAgLy90aGlzLm1vZGFsSWQ7XG4gICAgdGhpcy5tb2RhbFVybDtcbiAgICB0aGlzLm1vZGFsVGl0bGU7XG4gICAgdGhpcy5tb2RhbERlc2M7XG4gICAgdGhpcy5tb2RhbEJ0bk5hbWU7XG4gICAgdGhpcy5tb2RhbEJ0bkhyZWY7XG4gICAgdGhpcy5tb2RhbEJ0bkNsb3NlO1xuXG4gICAgLy90aGlzLmZhbmN5Ym94ID0gdGhpcy5tb2RhbFRhcmdldC5mYW5jeWJveCh7fSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLmhhc0NsYXNzKFwiYS1idG4taWNvblwiKSA/ICQoZXZlbnQudGFyZ2V0KSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAvL3RoaXMubW9kYWxJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKFwic3JjXCIpO1xuICAgIHRoaXMubW9kYWxVcmwgPSAkdGFyZ2V0LmRhdGEoXCJ1cmxcIik7XG4gICAgdGhpcy5tb2RhbFRpdGxlID0gJHRhcmdldC5kYXRhKFwidGl0bGVcIik7XG4gICAgdGhpcy5tb2RhbERlc2MgPSAkdGFyZ2V0LmRhdGEoXCJkZXNjXCIpO1xuICAgIHRoaXMubW9kYWxCdG5OYW1lID0gJHRhcmdldC5kYXRhKFwiYnV0dG9uXCIpO1xuICAgIHRoaXMubW9kYWxCdG5IcmVmID0gJHRhcmdldC5kYXRhKFwiYnRuaHJlZlwiKTtcbiAgICB0aGlzLm1vZGFsQnRuQ2xvc2UgPSAkdGFyZ2V0LmRhdGEoXCJidG5jbG9zZVwiKTtcblxuICAgIGxldCB2aWRlb01vZGFsSHRtbCA9IFwiXCIsXG4gICAgICBzb3VyY2UsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIGNvbnRleHQ7XG5cbiAgICBzb3VyY2UgPSB0aGlzLnRlbXBsYXRlU291cmNlLmh0bWwoKTtcbiAgICB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHNyYzogdGhpcy5tb2RhbFVybCxcbiAgICAgIC8vaWQ6IHRoaXMubW9kYWxJZCxcbiAgICAgIHRpdGxlOiB0aGlzLm1vZGFsVGl0bGUsXG4gICAgICBkZXNjOiB0aGlzLm1vZGFsRGVzYyxcbiAgICAgIGJ1dHRvbjogdGhpcy5tb2RhbEJ0bk5hbWUsXG4gICAgICBocmVmOiB0aGlzLm1vZGFsQnRuSHJlZixcbiAgICAgIGJ0bkNsb3NlOiB0aGlzLm1vZGFsQnRuQ2xvc2VcbiAgICB9O1xuICAgIHZpZGVvTW9kYWxIdG1sICs9IHRlbXBsYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5tb2RhbFRhcmdldC5lbXB0eSgpLmFwcGVuZCh2aWRlb01vZGFsSHRtbCk7XG5cbiAgICAkLmZhbmN5Ym94Lm9wZW4odGhpcy5tb2RhbFRhcmdldCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZUNoZWNrIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcIm1vZGFsXCIgOiBcIi5tLW1vZGFsXCIsXG4gICAgICBcImxhYmVsXCI6IFwiLmEtY2hlY2tib3hcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWwgPSB0aGlzLiRlbC5jbG9zZXN0KHRoaXMub3B0aW9ucy5tb2RhbCk7XG4gICAgdGhpcy5mYW5jeUlkID0gXCIjXCIgKyB0aGlzLm1vZGFsLmF0dHIoJ2lkJyk7XG4gICAgdGhpcy5sYWJlbCA9ICQoXCJbZGF0YS1mYW5jeWlkPSdcIiArIHRoaXMuZmFuY3lJZCArIFwiJ11cIikuY2xvc2VzdCh0aGlzLm9wdGlvbnMubGFiZWwpO1xuICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLmxhYmVsLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgdGhpcy5jaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB0aGlzLmNoZWNrYm94LnBhcnNsZXkoKS5kZXN0cm95KClcbiAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHRvZ2dsZTogXCJtLXNlYXJjaC1iYXItLW9wZW5cIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtY2xvc2Utc2VhcmNoLWJhclwiLFxuICAgICAgfSxcbiAgICAgIGljb25zOiB7XG4gICAgICAgIHNlbGY6IFwiLmpzLXNlYXJjaFwiLFxuICAgICAgICB0b2dnbGU6IFwiYS1idG4taWNvbi0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dDogXCI+IGlucHV0XCIsXG4gICAgICBmb3JtOiBcIi5tLWZvcm1cIlxuICAgIH07XG4gICAgXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmljb25zID0gJCh0aGlzLm9wdGlvbnMuaWNvbnMuc2VsZik7XG4gICAgdGhpcy4kZm9ybSA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmZvcm0pO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSlcbiAgICAgIC5vbihcImtleXByZXNzXCIsIHRoaXMub3B0aW9ucy5pbnB1dCwgZXZlbnQgPT4gdGhpcy5vbktleXByZXNzKGV2ZW50KSlcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC50b2dnbGUpXG4gICAgdGhpcy5pY29ucy50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuaWNvbnMudG9nZ2xlKVxuICB9XG5cbiAgb25LZXlwcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLiRmb3JtLnN1Ym1pdCgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBTd2lwZXIge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgY29uc3QgJHNsaWRlciA9IGVsLmZpbmQoXCIubS1zbGlkZXJfX3N3aXBlclwiKTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmRcIiksXG4gICAgICAgIHNsaWRlQ2hhbmdlOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVwiKSxcbiAgICAgICAgaW5pdDogKCkgPT4gICRlbC50cmlnZ2VyKFwiaW5pdFwiKSxcbiAgICAgICAgdG91Y2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwidG91Y2hFbmRcIiksXG4gICAgICAgIHJlYWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoRW5kXCIpLFxuICAgICAgICByZWFjaEJlZ2lubmluZzogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEJlZ2lubmluZ1wiKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdmlnYXRpb24gKSB7XG4gICAgICBvcHRpb25zLm5hdiA9IHtcbiAgICAgICAgbmV4dEVsOiAnPiAubS1zbGlkZXJfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICc+IC5tLXNsaWRlcl9fcHJldicsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6IFwiYS1idG4taWNvbi0tZGlzYWJsZWRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5wYWdpbmF0aW9uICkge1xuICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uID0ge1xuICAgICAgICBlbDogJGVsLmZpbmQoJy5zd2lwZXItcGFnaW5hdGlvbicpLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGVsID0gJGVsO1xuXG4gICAgc3VwZXIoJHNsaWRlci5nZXQoMCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICggb3B0aW9ucy5uYXYgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCApO1xuICAgICAgdGhpcy4kcHJldkVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwgKTtcblxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwsICgpID0+IHRoaXMuc2xpZGVOZXh0KCkpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYucHJldkVsLCAoKSA9PiB0aGlzLnNsaWRlUHJldigpKVxuICAgICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKCkpO1xuXG4gICAgICBpZiAoICFvcHRpb25zLmxvb3AgKSB7XG4gICAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgJGVsXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbk1vdXNlRW50ZXIoKSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKVxuICAgIH1cblxuICAgIGlmICggdGhpcy5zbGlkZXMubGVuZ3RoIDw9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcgKSB7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm0tc2xpZGVyLS1oaWRkZW4tbmF2XCIpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1sb2NhdGlvbi1ocmVmXVwiLCAoZSkgPT4gdGhpcy5vbkNsaWNrSXRlbShlKSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2tJdGVtKGUpIHtcbiAgICBpZiAoICEkKCBlLnRhcmdldCApLmlzKFwiYVwiKSApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoIGUuY3VycmVudFRhcmdldCApO1xuICAgICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhKCk7XG4gICAgICBpZiAoIGRhdGEubG9jYXRpb25IcmVmICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEubG9jYXRpb25IcmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcyAqIDI7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgpIHtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gJCh0aGlzLnNsaWRlc1sgdGhpcy5hY3RpdmVJbmRleCBdKTtcbiAgICBjb25zdCBhbmltYXRlZEl0ZW1zID0gYWN0aXZlSXRlbS5maW5kKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcblxuICAgICQuZWFjaChhbmltYXRlZEl0ZW1zLCAoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChpdGVtKS5kYXRhKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChpdGVtKS5hZGRDbGFzcyggY2xhc3NOYW1lICk7IH0sIDEpO1xuICAgIH0pO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlUHJldigpIHtcbiAgICBzdXBlci5zbGlkZVByZXYoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVOZXh0KCkge1xuICAgIHN1cGVyLnNsaWRlTmV4dCgpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYXA6IFwiI21hcFwiLFxuICAgICAgdGFiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICB0YWJJdGVtOiBcIi5tLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcIm1hcC5jbGlja1wiLCAoZXZlbnQsIGlkKSA9PiB0aGlzLm9uQ2xpY2tNYXAoZXZlbnQsIGlkKSlcbiAgICAgIC5vbihcInRhYi5zaG93XCIsIChldmVudCwgaW5kZXgpID0+IHRoaXMub25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkluaXRNYXAoKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uSW5pdE1hcCgpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYkl0ZW0pLmZpbmQoXCI+IGFcIikuZGF0YShcImNvb3JkXCIpXG4gICAgY29uc3QgbWFwID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFwKS5kYXRhKFwiY29tcG9uZW50TWFwXCIpO1xuICAgIG1hcC5tYXBGb2N1cyhjb29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkge1xuICAgIHRoaXMub25Jbml0TWFwKClcbiAgfVxuXG4gIG9uQ2xpY2tNYXAoZXZlbnQsIGlkKSB7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYilcbiAgICBjb25zdCB0YWJzID0gdGhpcy4kdGFicy5kYXRhKFwiY29tcG9uZW50VGFiRGVmYXVsdFwiKTtcbiAgICBjb25zdCB0YWIgPSB0aGlzLiR0YWJzLmZpbmQoYGFbaHJlZj1cIiMke2lkfVwiXWApLnBhcmVudCgpO1xuXG4gICAgdGFicy5zZXRBY3RpdmUodGFiLmluZGV4KCkpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGRyb3Bkb3duOiBcIi5tLW5hdi0tZHJvcGRvd25cIixcbiAgICAgICAgZHJvcGRvd25PcGVuOiBcIm0tbmF2LS1kcm9wZG93bi1vcGVuXCIsXG4gICAgICAgIGNoaWxkOiBcIi5tLW5hdi0tZHJvcGRvd24tY2hpbGRcIixcbiAgICAgICAgY2hpbGRPcGVuOiBcIm0tbmF2LS1kcm9wZG93bi1jaGlsZC1vcGVuXCIsXG4gICAgICAgIGxpbms6IFwiLm0tbmF2LS1kcm9wZG93bi1jaGlsZC1saW5rXCJcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyLS1oZWFkZXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoLWhlYWRlclwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5kcm9wZG93biwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrRHJvcGRvd24oZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5jaGlsZCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrQ2hpbGQoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wZG93bihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAkdGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuZHJvcGRvd25PcGVuKVxuICB9XG5cbiAgb25DbGlja0NoaWxkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cbiAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmNoaWxkT3BlbikpIHtcbiAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgICR0YXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5jaGlsZE9wZW4pXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0xpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdXJsID0gJHRhcmdldC5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJG5hdi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLmhhc0NsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpID8gJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJykgOiAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAgIHRoaXMuJG5hdi5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSkgPyAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKSA6ICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlcyB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBwcm9kdWN0Q2Fyb3VzZWxUZXh0ID0gbmV3IFN3aXBlcihcIi5vLXNlcnZpY2VzX190ZXh0IC5tLXNsaWRlcl9fc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgIGxhenk6IHtcbiAgICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiBcIi5vLXNlcnZpY2VzX190ZXh0IC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCBwcm9kdWN0Q2Fyb3VzZWxJbWFnZSA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19faW1hZ2UgLm0tc2xpZGVyX19zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRodW1iczoge1xuICAgICAgICAgIHN3aXBlcjogcHJvZHVjdENhcm91c2VsVGV4dFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBcIi5vLXNlcnZpY2VzIC5tLXNsaWRlcl9fbmV4dFwiLFxuICAgICAgICAgIHByZXZFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX3ByZXZcIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDk5MDoge1xuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgIH1cbiAgXG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgdG9nZ2xlOiBcIm8tc2lkZWJhci0tb3BlblwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm8tc2lkZWJhcl9fbmF2XCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaVwiLFxuICAgICAgICBhY3RpdmU6IFwiby1zaWRlYmFyX19uYXYtLWFjdGl2ZVwiLFxuICAgICAgICBsaW5rOiBcIi5vLXNpZGViYXJfX25hdi0tbGlua1wiXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1zZWFyY2hcIixcbiAgICAgICAgY2xhc3M6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGhhbWJ1cmdlciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmhhbWJ1cmdlcik7XG4gICAgdGhpcy4kbmF2ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubmF2LnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYuaXRlbSwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTmF2KGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYubGluaywgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGluayhldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4gdGhpcy53aW5kb3dSZXNpemUoKSlcblxuICB9XG5cbiAgd2luZG93UmVzaXplKCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCA3NjkpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGwoKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgaWYgKCR0YXJnZXQuZmluZChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKSkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5uYXYuaXRlbSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICAgICR0YXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tMaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0IHVybCA9ICR0YXJnZXQuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgfVxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0aGlzLiRzZWFyY2hCYXIudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgfVxuXG4gIG9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoID4gNzY4KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIH1cbiAgfVxufVxuIl19
