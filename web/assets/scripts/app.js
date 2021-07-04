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

},{"../../molecules/Modal/Modal":27,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],16:[function(require,module,exports){
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

var _SelectNav = _interopRequireDefault(require("../../../src/molecules/SelectNav/SelectNav"));

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
  SelectNav: _SelectNav["default"],
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

},{"../../../src/assets/scripts/General":13,"../../../src/assets/scripts/LazyLoad":14,"../../../src/assets/scripts/OnLoadModal":15,"../../../src/assets/scripts/Sticky":16,"../../../src/atoms/FormCheckbox/FormCheckbox":18,"../../../src/atoms/FormFileInput/FormFileInput":19,"../../../src/atoms/FormInput/FormInput":20,"../../../src/atoms/FormTextarea/FormTextarea":21,"../../../src/atoms/Hamburger/Hamburger":22,"../../../src/atoms/MoreInfinite/MoreInfinite":23,"../../../src/molecules/Accordion/Accordion":24,"../../../src/molecules/Carousel/Carousel":25,"../../../src/molecules/Map/Map":26,"../../../src/molecules/Modal/Modal":27,"../../../src/molecules/Modal/ModalVideo":28,"../../../src/molecules/RemoteCheck/RemoteCheck":29,"../../../src/molecules/SearchBar/SearchBar":30,"../../../src/molecules/SelectNav/SelectNav":31,"../../../src/molecules/Slider/Slider":32,"../../../src/molecules/TabDefault/TabDefault":33,"../../../src/organisms/Contact/Contact":34,"../../../src/organisms/Header/Header":35,"../../../src/organisms/Services/Services":36,"../../../src/organisms/Sidebar/Sidebar":37,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":12}],18:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],27:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/defineProperty":4,"@babel/runtime/helpers/interopRequireDefault":8}],28:[function(require,module,exports){
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

},{"./Modal":27,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],29:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],30:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}],31:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":8}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvT25Mb2FkTW9kYWwuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1DaGVja2JveC9Gb3JtQ2hlY2tib3guZXM2Iiwic3JjL2F0b21zL0Zvcm1GaWxlSW5wdXQvRm9ybUZpbGVJbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYS5lczYiLCJzcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlci5lczYiLCJzcmMvYXRvbXMvTW9yZUluZmluaXRlL01vcmVJbmZpbml0ZS5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbC5lczYiLCJzcmMvbW9sZWN1bGVzL01hcC9NYXAuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsVmlkZW8uZXM2Iiwic3JjL21vbGVjdWxlcy9SZW1vdGVDaGVjay9SZW1vdGVDaGVjay5lczYiLCJzcmMvbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hCYXIuZXM2Iiwic3JjL21vbGVjdWxlcy9TZWxlY3ROYXYvU2VsZWN0TmF2LmVzNiIsInNyYy9tb2xlY3VsZXMvU2xpZGVyL1NsaWRlci5lczYiLCJzcmMvbW9sZWN1bGVzL1RhYkRlZmF1bHQvVGFiRGVmYXVsdC5lczYiLCJzcmMvb3JnYW5pc21zL0NvbnRhY3QvQ29udGFjdC5lczYiLCJzcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9TZXJ2aWNlcy9TZXJ2aWNlcy5lczYiLCJzcmMvb3JnYW5pc21zL1NpZGViYXIvU2lkZWJhci5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JCQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQixZQUFNO0FBRXRCLEVBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MsRUFBbEMsQ0FBcUMsT0FBckMsRUFB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RUEsVUFBSSxXQUFXLEdBQUcsR0FBbEIsRUFBdUI7QUFDckIsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLGFBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQWEsTUFBbEM7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxPQUFMLENBQWEsTUFBYixTQUE1QjtBQUNEO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cbiAgJChcIi5tLWNvcHlyaWdodC1uYXYgLmEtYnRuLWljb25cIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9LCAnc2xvdycpO1xuICB9KVxuXG4gIGNvbnN0ICR3b21hbjEgPSAkKFwiLnAtaG9tZXBhZ2UtaGlzdG9yeV9fd29tYW4tLWxlYWYtMVwiKTtcbiAgY29uc3QgJHdvbWFuMiA9ICQoXCIucC1ob21lcGFnZS1oaXN0b3J5X193b21hbi0tbGVhZi0yXCIpO1xuICBjb25zdCAkd29tYW4zID0gJChcIi5wLWhvbWVwYWdlLWhpc3RvcnlfX3dvbWFuLS1sZWFmLTNcIik7XG5cbiAgZnVuY3Rpb24gbW92ZWQoeCwgeSwgZHVyYXRpb24sIGVsKSB7XG4gICAgZWwuYW5pbWF0ZSh7XG4gICAgICB0ZXh0SW5kZW50OiAwXG4gICAgfSwge1xuICAgICAgc3RlcDogKG5vdywgZngpID0+IHtcbiAgICAgICAgJChcIi5wLWhvbWVwYWdlX19oaXN0b3J5XCIpLm1vdXNlbW92ZSgoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFtb3VudE1vdmVkWCA9IChlLnBhZ2VYICogLTEgLyB4KTtcbiAgICAgICAgICBjb25zdCBhbW91bnRNb3ZlZFkgPSAoZS5wYWdlWSAqIC0xIC8geSk7XG4gICAgICAgICAgZWwuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBhbW91bnRNb3ZlZFggKyAncHgsJyArIGFtb3VudE1vdmVkWSArICdweCwgMCknLFxuICAgICAgICAgICAgJy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgYW1vdW50TW92ZWRYICsgJ3B4LCcgKyBhbW91bnRNb3ZlZFkgKyAncHgsIDApJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIGFtb3VudE1vdmVkWCArICdweCwnICsgYW1vdW50TW92ZWRZICsgJ3B4LCAwKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZHVyYXRpb25cbiAgICB9LCAnZWFzZU91dEN1YmljJyk7XG4gIH1cblxuICBtb3ZlZCg3NCwgNzUsIDIwMCwgJHdvbWFuMSk7XG4gIG1vdmVkKC04NiwgOTIsIDIwMCwgJHdvbWFuMik7XG4gIG1vdmVkKC05NiwgNjYsIDIwMCwgJHdvbWFuMyk7XG5cbn0pO1xuXG53aW5kb3cuUGFyc2xleS5hZGRWYWxpZGF0b3IoJ21heEZpbGVTaXplJywge1xuICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gKF92YWx1ZSwgbWF4U2l6ZSwgcGFyc2xleUluc3RhbmNlKSB7XG4gICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBwYXJzbGV5SW5zdGFuY2UuJGVsZW1lbnRbMF0uZmlsZXM7XG4gICAgcmV0dXJuIGZpbGVzLmxlbmd0aCAhPSAxIHx8IGZpbGVzWzBdLnNpemUgPD0gbWF4U2l6ZSAqIDEwMjQ7XG4gIH0sXG4gIHJlcXVpcmVtZW50VHlwZTogJ2ludGVnZXInLFxuICBtZXNzYWdlczoge1xuICAgIHRyOiAnTWF4LiBkb3N5YSBib3l1dHUgJXMgS2IuIG9sYW1hbMSxZMSxcidcbiAgfVxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxheC5zZXR1cCh7XG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIHNtYWxsOiAwLFxuICAgICAgbGFyZ2U6IDc2OFxuICAgIH1cbiAgfSlcblxuICBjb25zdCB1cGRhdGVMYXggPSAoKSA9PiB7XG4gICAgbGF4LnVwZGF0ZSh3aW5kb3cuc2Nyb2xsWSlcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUxheClcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlTGF4KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwibGF6eWJlZm9yZXVudmVpbFwiLCB0aGlzLm9wdGlvbnMuc3BlZWNoQnV0dG9uLCBldmVudCA9PiB0aGlzLm9uTGF6eUJlZm9yZVVudmVpbChldmVudCkpO1xuXG4gIH1cblxuICBvbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpIHtcbiAgICBjb25zdCBsYXp5RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbGF6eUVsZW1lbnQuYXR0ciggXCJkYXRhLWJhY2tncm91bmRcIiApO1xuICAgIGlmICggYmFja2dyb3VuZCApIHtcbiAgICAgIGxhenlFbGVtZW50LmNzcyh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTGF6eUxvYWQoKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuY2xhc3MgT25Mb2FkTW9kYWwge1xuICBzdGF0aWMgb25Mb2FkTW9kYWwoKSB7XG4gICAgY29uc3QgaGFzaCA9ICQobG9jYXRpb24pLmF0dHIoXCJoYXNoXCIpO1xuXG4gICAgc3dpdGNoIChoYXNoKSB7XG4gICAgICBjYXNlIFwiI2Vycm9yTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcImVycm9yXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIiNzdWNjZXNzTWVzc2FnZVwiOlxuICAgICAgICB0aGlzLm1vZGFsVHlwZShcInN1Y2Nlc3NcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtb2RhbFR5cGUodHlwZSkge1xuICAgIGlmICgkKGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gKS5sZW5ndGggPiAwKSB7XG4gICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICBzcmM6IGAjbW9kYWwtcHJlc2V0LSR7dHlwZX1gLFxuICAgICAgICBiYXNlQ2xhc3M6IGBmYW5jeWJveC0tJHt0eXBlfSBtLW1vZGFsLS1hbGVydGAsXG4gICAgICAgIHRvdWNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPbkxvYWRNb2RhbCgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBPbkxvYWRNb2RhbC5vbkxvYWRNb2RhbCgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreSBleHRlbmRzIEhlYWRyb29tIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBwcmVmaXg6ICdzdGlja3knLFxuICAgICAgdG9sZXJhbmNlOiB7XG4gICAgICAgIGRvd24gOiAxMCxcbiAgICAgICAgdXAgOiAwXG4gICAgICB9LFxuICAgICAgb2Zmc2V0IDogNjRcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLmNsYXNzZXMgPSB7XG4gICAgICBpbml0aWFsIDogYCR7b3B0aW9ucy5wcmVmaXh9YCxcbiAgICAgIHBpbm5lZCA6IGAke29wdGlvbnMucHJlZml4fS0tcGlubmVkYCxcbiAgICAgIHVucGlubmVkIDogYCR7b3B0aW9ucy5wcmVmaXh9LS11bnBpbm5lZGAsXG4gICAgICB0b3AgOiBgJHtvcHRpb25zLnByZWZpeH0tLXRvcGAsXG4gICAgICBub3RUb3AgOiBgJHtvcHRpb25zLnByZWZpeH0tLW5vdC10b3BgLFxuICAgICAgYm90dG9tIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ib3R0b21gLFxuICAgICAgbm90Qm90dG9tIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ub3QtYm90dG9tYFxuICAgIH1cblxuICAgIHN1cGVyKCRlbC5nZXQoMCksIG9wdGlvbnMpO1xuICAgIHN1cGVyLmluaXQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgR2VuZXJhbCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbCc7XG5pbXBvcnQgTGF6eUxvYWQgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0xhenlMb2FkJztcbmltcG9ydCBPbkxvYWRNb2RhbCAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9PbkxvYWRNb2RhbCc7XG5pbXBvcnQgU3RpY2t5ICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreSc7XG5cbmltcG9ydCBGb3JtQ2hlY2tib3ggICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUNoZWNrYm94L0Zvcm1DaGVja2JveCc7XG5pbXBvcnQgRm9ybUZpbGVJbnB1dCAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtRmlsZUlucHV0L0Zvcm1GaWxlSW5wdXQnO1xuaW1wb3J0IEZvcm1JbnB1dCAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtSW5wdXQvRm9ybUlucHV0JztcbmltcG9ydCBGb3JtVGV4dGFyZWEgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYSc7XG5pbXBvcnQgSGFtYnVyZ2VyICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXInO1xuaW1wb3J0IE1vcmVJbmZpbml0ZSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Nb3JlSW5maW5pdGUvTW9yZUluZmluaXRlJztcblxuaW1wb3J0IEFjY29yZGlvbiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9DYXJvdXNlbC9DYXJvdXNlbCc7XG5pbXBvcnQgTWFwICAgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9NYXAvTWFwJztcbmltcG9ydCBNb2RhbCAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsJztcbmltcG9ydCBNb2RhbFZpZGVvICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsVmlkZW8nO1xuaW1wb3J0IFJlbW90ZUNoZWNrICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvUmVtb3RlQ2hlY2svUmVtb3RlQ2hlY2snO1xuaW1wb3J0IFNlYXJjaEJhciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvU2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQgU2xpZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9TbGlkZXIvU2xpZGVyJztcbmltcG9ydCBUYWJEZWZhdWx0ICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1RhYkRlZmF1bHQvVGFiRGVmYXVsdCc7XG5pbXBvcnQgU2VsZWN0TmF2ICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1NlbGVjdE5hdi9TZWxlY3ROYXYnO1xuXG5pbXBvcnQgU2lkZWJhciAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9TaWRlYmFyL1NpZGViYXInO1xuaW1wb3J0IENvbnRhY3QgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvQ29udGFjdC9Db250YWN0JztcbmltcG9ydCBIZWFkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IFNlcnZpY2VzICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvU2VydmljZXMvU2VydmljZXMnO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcbiAgU3RpY2t5LFxuICBPbkxvYWRNb2RhbCxcblxuICBGb3JtQ2hlY2tib3gsXG4gIEZvcm1GaWxlSW5wdXQsXG4gIEZvcm1JbnB1dCxcbiAgRm9ybVRleHRhcmVhLFxuICBIYW1idXJnZXIsXG4gIE1vcmVJbmZpbml0ZSxcblxuICBBY2NvcmRpb24sXG4gIENhcm91c2VsLFxuICBNYXAsXG4gIE1vZGFsLFxuICBNb2RhbFZpZGVvLFxuICBSZW1vdGVDaGVjayxcbiAgU2VhcmNoQmFyLFxuICBTbGlkZXIsXG4gIFRhYkRlZmF1bHQsXG4gIFNlbGVjdE5hdixcbiAgXG4gIFNpZGViYXIsXG4gIENvbnRhY3QsXG4gIEhlYWRlcixcbiAgU2VydmljZXMsXG59O1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudCggdGhhdCwgdHlwZSwgZGF0YSApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IGRhdGEgfHwge307XG4gIGxldCBDb21wb25lbnQgPSBDb21wb25lbnRzW3R5cGVdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICBDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCQodGhhdCksIG9wdGlvbnMpO1xuICAgIHRoYXQuc2V0Q29tcG9uZW50KCB0eXBlLCBDb21wb25lbnQpO1xuICAgICQodGhhdCkuZGF0YShgY29tcG9uZW50JHt0eXBlfWAsIENvbXBvbmVudCkucmVtb3ZlQXR0cihcImRhdGEtY29tcG9uZW50XCIpLnJlbW92ZURhdGEoXCJjb21wb25lbnRcIik7XG4gIH1cbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICBjb25zdCBDb21wb25lbnQgPSB0aGlzWyB0eXBlIF07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBDb21wb25lbnQgKSB7XG4gIHRoaXNbdHlwZV0gPSBDb21wb25lbnQ7XG59XG5cbndpbmRvdy5pbml0aWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtY29tcG9uZW50XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoIHRoaXMgKS5kYXRhKCdjb21wb25lbnQnKTtcbiAgICBpZiAoIEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcbiAgICAgIGZvciggdmFyIGkgaW4gZGF0YSApIHtcbiAgICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGFbaV0udHlwZSwgZGF0YVtpXSApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YS50eXBlLCBkYXRhICk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLCAkKCB0aGlzICkuZGF0YSgpICk7XG4gICAgfVxuXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0aWF0ZUNvbXBvbmVudHMoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ2hlY2tib3gge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9wZW5Nb2RhbDogXCJiW2RhdGEtZmFuY3lJZF1cIixcbiAgICAgIGJvZHk6IFwiLm0tc2Nyb2xsLWJveF9fYm9keVwiLFxuICAgICAgbW9iaWxlQm9keTogXCIubS1tb2RhbF9fYm9keVwiXG4gICAgICAvL21vZGFsLXVzZXItYWdyZWVtZW50LW1vYmlsZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5vcGVuTW9kYWwpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMub3Blbk1vZGFsLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YShcImZhbmN5aWRcIik7XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC11c2VyLWFncmVlbWVudFwiKSB7XG4gICAgICB0aGlzLiRib2R5ID0gJChtb2RhbElkKS5maW5kKHRoaXMub3B0aW9ucy5ib2R5KTtcbiAgICB9XG5cbiAgICBpZiAobW9kYWxJZCA9PSBcIiNtb2RhbC1jb250YWN0XCIpIHtcbiAgICAgIHRoaXMuJGJvZHkgPSAkKG1vZGFsSWQpLmZpbmQodGhpcy5vcHRpb25zLmJvZHkpO1xuICAgIH1cblxuICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICBzcmM6IG1vZGFsSWQsXG4gICAgICBidXR0b25zOiBbXSxcbiAgICAgIHNtYWxsQnRuOiB0cnVlLFxuICAgICAgdG91Y2g6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWxlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcImlucHV0XCIsXG4gICAgICB0ZXh0OiBcIi5hLWZpbGUtaW5wdXRfX3RleHQgc3BhblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICB0aGlzLiR0ZXh0ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGV4dCk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lO1xuICAgIHRoaXMuJHRleHQudGV4dChmaWxlTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuXG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGhpcy4kc2VsZWN0b3IpKSB7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0YXJlYSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiB0ZXh0YXJlYVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gIHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG5cbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG5cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6IFwiYS1oYW1idXJnZXItLW9wZW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImhhbWJ1cmdlci5jbGlja1wiKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3JlSW5maW5pdGUge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbnRhaW5lcjogXCIucm93XCIsXG4gICAgICBidXR0b246IFwiLmpzLW1vcmUtaW5maW5pdGVcIixcbiAgICAgIGxvYWRpbmc6IFwiYS1idG4tLWxvYWRpbmdcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgIHRoaXMuYnV0dG9uID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYnV0dG9uKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmJ1dHRvbiwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMub3B0aW9ucy51cmw7XG4gICAgY29uc3QgcGFnZSA9IHRoaXMuYnV0dG9uLmRhdGEoXCJwYWdlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBwYWdlXG4gICAgfVxuICAgIHRoaXMuaHRtbFRlbXBsYXRlID0gXCJcIjtcblxuICAgIHRoaXMuYnV0dG9uLmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nKVxuXG4gICAgdGhpcy5nZXREYXRhKHVybCwgZGF0YSwgX3Jlc3BvbnNlID0+IHtcbiAgICAgIF9yZXNwb25zZS5pdGVtcy5tYXAoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZUJsb2coZGF0YSkpXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaHRtbFRlbXBsYXRlKVxuXG4gICAgICBpZiAoX3Jlc3BvbnNlLnRvdGFsUGFnZSA9PSBwYWdlKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmhpZGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idXR0b24uZGF0YShcInBhZ2VcIiwgcGFnZSArIDEpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZylcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQmxvZyhkYXRhKSB7XG4gICAgY29uc3Qgc291cmNlID0gJChcIiNibG9nLWNhcmQtdGVtcGxhdGVcIikuaHRtbCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgdGV4dDogZGF0YS50ZXh0LFxuICAgICAgdXJsOiBkYXRhLnVybCxcbiAgICAgIGltYWdlOiBkYXRhLmltYWdlLFxuICAgICAgZGF0ZTogZGF0YS5kYXRlXG4gICAgfTtcblxuICAgIHRoaXMuaHRtbFRlbXBsYXRlICs9IHRlbXBsYXRlKGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0RGF0YSh1cmwsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiByZXNwb25zZSA9PiB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJhY2NvcmRpb25IZWFkc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19oZWFkXCIsXG4gICAgICBcImFjY29yZGlvbkJvZGllc1wiOiBcIj4gLm0tYWNjb3JkaW9uX19jb250YWluZXIgLm0tYWNjb3JkaW9uX19ib2R5XCIsXG4gICAgICBcImFjdGl2ZUNsYXNzXCI6IFwibS1hY2NvcmRpb25fX2hlYWQtLWFjdGl2ZVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmFjY29yZGlvbkhlYWRzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMpO1xuICAgIHRoaXMuYWNjb3JkaW9uQm9kaWVzID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uYm9kaWVzKTtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gdGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzO1xuICAgIHRoaXMuc2hvd09ubHlPbmUgPSB0aGlzLm9wdGlvbnMuc2hvd09ubHlPbmU7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jdXJyVGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuc2hvd09ubHlPbmUpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJUYXJnZXQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKSkge1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMucmVtb3ZlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJUYXJnZXQudG9nZ2xlQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImFjY29yZGlvbi5jaGFuZ2VcIik7XG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICBmb2xsb3dGaW5nZXI6IGZhbHNlLFxuICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2xpZGVyID0gdGhpcy4kZWwuZmluZChcIi5tLXNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIik7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHNsaWRlckRhdGEpO1xuXG4gICAgc2xpZGVyLmRhdGEoXCJjb21wb25lbnRcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIilcbiAgICAgIC5vbignc2xpZGVDaGFuZ2UnLCAoZSwgaW5kZXgpID0+IHRoaXMub25TbGlkZUNoYW5nZShpbmRleCkpXG4gICAgdGhpcy4kZWwuZmluZChcIi5tLWNhcm91c2VsX190aHVtYnMgbGlcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKVxuXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbC5maW5kKFwiLm0tc2xpZGVyXCIpLmRhdGEoXCJjb21wb25lbnRTbGlkZXJcIik7XG4gICAgY29uc3QgYnVsbGV0ID0gJChldmVudC50YXJnZXQpLnBhcmVudCgpLmluZGV4KClcblxuICAgIHNsaWRlci5zbGlkZVRvKGJ1bGxldCArIDEpXG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKGluZGV4KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJGVsLmZpbmQoXCIubS1zbGlkZXJcIikuZGF0YShcImNvbXBvbmVudFNsaWRlclwiKTtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLiRlbC5maW5kKFwiLmEtYnVsbGV0c1wiKS5kYXRhKFwiY29tcG9uZW50QnVsbGV0c1wiKTtcbiAgICAgIGJ1bGxldHMuc2V0QWN0aXZlKHNsaWRlci5yZWFsSW5kZXgpO1xuXG4gICAgICBjb25zdCBhY3RpdmVJdGVtID0gJChzbGlkZXIuc2xpZGVzW3NsaWRlci5hY3RpdmVJbmRleF0pO1xuXG4gICAgICBhY3RpdmVJdGVtLnRyaWdnZXIoXCJzbGlkZXIuY2hhbmdlXCIsIHRoaXMpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbCA9IGVsO1xuICAgIGVsID0gJGVsO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICBjb25zdCBzdHlsZXMgPSBbe1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2U5ZTllOVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDI5XG4gICAgICB9LCB7XG4gICAgICAgIFwid2VpZ2h0XCI6IDAuMlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkZWRlZGVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgfSwge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDM2XG4gICAgICB9LCB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZWZlZmVcIlxuICAgICAgfSwge1xuICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xuICAgICAgfSwge1xuICAgICAgICBcIndlaWdodFwiOiAxLjJcbiAgICAgIH1dXG4gICAgfV07XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHpvb206IDE1LFxuICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQxLjA0MjgwMjcsIDI4Ljk4MjYzMjcpLFxuICAgICAgdXJsOiAnLi4vLi4vYXNzZXRzL2RhdGEvTWFwLmpzb24nLFxuICAgICAgcGluOiBvcHRpb25zLnBpbm1lZGlhIHx8ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvcGluLnBuZycsXG4gICAgfTtcblxuICAgIGRlZmF1bHRzWydzdHlsZXMnXSA9IHN0eWxlcztcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBwaW5TdGF0dXMgPSAhdGhpcy5vcHRpb25zLmxhdCAmJiAhdGhpcy5vcHRpb25zLmxuZztcblxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLiRlbFswXSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChwaW5TdGF0dXMpIHtcbiAgICAgIHRoaXMubWFwRGF0YUhhbmRsZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zW1wibWFya2Vyc1wiXSA9IFt7XG4gICAgICAgIFwiY29vcmRzXCI6IHtcbiAgICAgICAgICBcImxhdFwiOiB0aGlzLm9wdGlvbnMubGF0LFxuICAgICAgICAgIFwibG5nXCI6IHRoaXMub3B0aW9ucy5sbmdcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjogdGhpcy5vcHRpb25zLnVybCxcbiAgICAgICAgXCJjb250ZW50XCI6IHRoaXMub3B0aW9ucy5jb250ZW50XG4gICAgICB9XVxuICAgIH1cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgdGhpcy5tYXJrZXJDcmVhdG9yKCkpO1xuICB9XG5cbiAgbWFwRm9jdXMocGxhY2UpIHtcbiAgICBjb25zdCBuZXdQbGFjZSA9IHBsYWNlLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld1BsYWNlWzBdLCBuZXdQbGFjZVsxXSk7XG4gICAgdGhpcy5ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgdGhpcy5ib3VuZHMuZXh0ZW5kKHBvc2l0aW9uKTtcblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSgxMSk7XG4gIH1cblxuICBtYXBEYXRhSGFuZGxlcigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsID8gdGhpcy5vcHRpb25zLnVybCA6IHRoaXMuZGVmYXVsdHMudXJsLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnNbXCJtYXJrZXJzXCJdID0gZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcmtlckNyZWF0b3IoKSB7XG4gICAgY29uc3QgbWFya2VycyA9IHRoaXMub3B0aW9ucy5tYXJrZXJzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXJrZXJzW2ldKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXJrZXIocHJvcHMpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxhdDogTnVtYmVyKHByb3BzLmNvb3Jkcy5sYXQpLFxuICAgICAgICBsbmc6IE51bWJlcihwcm9wcy5jb29yZHMubG5nKVxuICAgICAgfSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICBpY29uOiB0aGlzLm9wdGlvbnMucGluID8gdGhpcy5vcHRpb25zLnBpbiA6IHRoaXMuZGVmYXVsdHMucGluLFxuICAgIH0pO1xuXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJtYXAuY2xpY2tcIiwgcHJvcHMuaWQpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBzdGF0aWMgVHlwZXMgPSB7XG4gICAgRVJST1I6IFwiZXJyb3JcIixcbiAgICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgICBXQVJOSU5HOiBcIndhcm5pbmdcIixcbiAgICBJTkZPOiBcImluZm9cIlxuICB9O1xuXG4gIHN0YXRpYyB0ZW1wbGF0ZSA9IGBcbiAgICB7eyNpZiBpc0Vycm9yfX1cbiAgICAgIHt7I2lmIGVycm9yQ29kZSB9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbCBtLW1vZGFsLS1hbGVydCBtLW1vZGFsLS17e3R5cGV9fVwiIGdhLWVycm9yLWNvZGU9e3tlcnJvckNvZGV9fSBpZD17e2lkfX0+XG4gICAgICB7e2Vsc2V9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbCBtLW1vZGFsLS1hbGVydCBtLW1vZGFsLS17e3R5cGV9fVwiIGdhLWVycm9yLWNvZGU9XCJOQVwiIGlkPXt7aWR9fT5cbiAgICAgIHt7L2lmfX1cbiAgICB7e2Vsc2V9fVxuICAgICAgPGRpdiBjbGFzcz1cIm0tbW9kYWwgbS1tb2RhbC0tYWxlcnQgbS1tb2RhbC0te3t0eXBlfX1cIiBpZD17e2lkfX0+XG4gICAge3svaWZ9fVxuICAgICAgPGRpdiBjbGFzcz1cIm0tbW9kYWxfX2JvZHlcIj5cbiAgICAgICAge3sjaWYgaWNvbn19PGkgY2xhc3M9XCJhLWljb24gYS1pY29uLS1tb2RhbCBpY29uLWNpcmNsZS17e2ljb259fVwiPjwvaT57ey9pZn19XG4gICAgICAgIHt7I2lmIHRpdGxlfX08aDQ+e3t0aXRsZX19PC9oND57ey9pZn19XG4gICAgICAgIHt7I2lmIGJvZHl9fTxwPnt7e2JvZHl9fX08L3A+e3svaWZ9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibS1tb2RhbF9fZm9vdFwiPlxuICAgICAgICB7eyNpZiBidXR0b259fTxhIGNsYXNzPVwiYS1idG4gYS1idG4tLWZ1bGwge3tidXR0b25DbGFzc319XCIgZGF0YS1mYW5jeWJveC1jbG9zZSBocmVmPVwiamF2YXNjcmlwdDo7XCI+S2FwYXQ8L2E+e3svaWZ9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvbkxvYWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5vbkxvYWQgKSB7XG4gICAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKCBlbC5nZXQoMCkgKTtcbiAgICB9XG5cbiAgfVxuXG4gIHN0YXRpYyBlcnJvcihlcnJvciA9IHt9KSB7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKE1vZGFsLnRlbXBsYXRlKTtcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHtcbiAgICAgIHR5cGU6IE1vZGFsLlR5cGVzLkVSUk9SLFxuICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgLi4uZXJyb3IsXG4gICAgICBpc0Vycm9yIDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBzdWNjZXNzKHN1Y2Nlc3MgPSB7fSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShNb2RhbC50ZW1wbGF0ZSk7XG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSh7XG4gICAgICB0eXBlOiBNb2RhbC5UeXBlcy5TVUNDRVNTLFxuICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAuLi5zdWNjZXNzXG4gICAgfSk7XG5cbiAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGluZm8oaW5mbyA9IHt9KSB7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKE1vZGFsLnRlbXBsYXRlKTtcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHtcbiAgICAgIHR5cGU6IE1vZGFsLlR5cGVzLklORk8sXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIC4uLmluZm9cbiAgICB9KTtcblxuICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgd2FybmluZyh3YXJuaW5nID0ge30pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoTW9kYWwudGVtcGxhdGUpO1xuICAgIHZhciBodG1sID0gdGVtcGxhdGUoe1xuICAgICAgdHlwZTogTW9kYWwuVHlwZXMuV0FSTklORyxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgLi4ud2FybmluZ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihodG1sKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlkZW8gZXh0ZW5kcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZWwsIG9wdGlvbnMpO1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRlbXBsYXRlU291cmNlOiBcIiNtb2RhbC12aWRlby1odG1sXCIsXG4gICAgICBtb2RhbFRhcmdldDogXCIjbW9kYWwtdmlkZW9cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcblxuICAgIHRoaXMudGVtcGxhdGVTb3VyY2UgPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZVNvdXJjZSk7XG4gICAgdGhpcy5tb2RhbFRhcmdldCA9ICQodGhpcy5vcHRpb25zLm1vZGFsVGFyZ2V0KTtcblxuICAgIC8vdGhpcy5tb2RhbElkO1xuICAgIHRoaXMubW9kYWxVcmw7XG4gICAgdGhpcy5tb2RhbFRpdGxlO1xuICAgIHRoaXMubW9kYWxEZXNjO1xuICAgIHRoaXMubW9kYWxCdG5OYW1lO1xuICAgIHRoaXMubW9kYWxCdG5IcmVmO1xuICAgIHRoaXMubW9kYWxCdG5DbG9zZTtcblxuICAgIC8vdGhpcy5mYW5jeWJveCA9IHRoaXMubW9kYWxUYXJnZXQuZmFuY3lib3goe30pO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcyhcImEtYnRuLWljb25cIikgPyAkKGV2ZW50LnRhcmdldCkgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgLy90aGlzLm1vZGFsSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YShcInNyY1wiKTtcbiAgICB0aGlzLm1vZGFsVXJsID0gJHRhcmdldC5kYXRhKFwidXJsXCIpO1xuICAgIHRoaXMubW9kYWxUaXRsZSA9ICR0YXJnZXQuZGF0YShcInRpdGxlXCIpO1xuICAgIHRoaXMubW9kYWxEZXNjID0gJHRhcmdldC5kYXRhKFwiZGVzY1wiKTtcbiAgICB0aGlzLm1vZGFsQnRuTmFtZSA9ICR0YXJnZXQuZGF0YShcImJ1dHRvblwiKTtcbiAgICB0aGlzLm1vZGFsQnRuSHJlZiA9ICR0YXJnZXQuZGF0YShcImJ0bmhyZWZcIik7XG4gICAgdGhpcy5tb2RhbEJ0bkNsb3NlID0gJHRhcmdldC5kYXRhKFwiYnRuY2xvc2VcIik7XG5cbiAgICBsZXQgdmlkZW9Nb2RhbEh0bWwgPSBcIlwiLFxuICAgICAgc291cmNlLFxuICAgICAgdGVtcGxhdGUsXG4gICAgICBjb250ZXh0O1xuXG4gICAgc291cmNlID0gdGhpcy50ZW1wbGF0ZVNvdXJjZS5odG1sKCk7XG4gICAgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcblxuICAgIGNvbnRleHQgPSB7XG4gICAgICBzcmM6IHRoaXMubW9kYWxVcmwsXG4gICAgICAvL2lkOiB0aGlzLm1vZGFsSWQsXG4gICAgICB0aXRsZTogdGhpcy5tb2RhbFRpdGxlLFxuICAgICAgZGVzYzogdGhpcy5tb2RhbERlc2MsXG4gICAgICBidXR0b246IHRoaXMubW9kYWxCdG5OYW1lLFxuICAgICAgaHJlZjogdGhpcy5tb2RhbEJ0bkhyZWYsXG4gICAgICBidG5DbG9zZTogdGhpcy5tb2RhbEJ0bkNsb3NlXG4gICAgfTtcbiAgICB2aWRlb01vZGFsSHRtbCArPSB0ZW1wbGF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMubW9kYWxUYXJnZXQuZW1wdHkoKS5hcHBlbmQodmlkZW9Nb2RhbEh0bWwpO1xuXG4gICAgJC5mYW5jeWJveC5vcGVuKHRoaXMubW9kYWxUYXJnZXQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGVDaGVjayB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgXCJtb2RhbFwiIDogXCIubS1tb2RhbFwiLFxuICAgICAgXCJsYWJlbFwiOiBcIi5hLWNoZWNrYm94XCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFsID0gdGhpcy4kZWwuY2xvc2VzdCh0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgIHRoaXMuZmFuY3lJZCA9IFwiI1wiICsgdGhpcy5tb2RhbC5hdHRyKCdpZCcpO1xuICAgIHRoaXMubGFiZWwgPSAkKFwiW2RhdGEtZmFuY3lpZD0nXCIgKyB0aGlzLmZhbmN5SWQgKyBcIiddXCIpLmNsb3Nlc3QodGhpcy5vcHRpb25zLmxhYmVsKTtcbiAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5sYWJlbC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIHRoaXMuY2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgdGhpcy5jaGVja2JveC5wYXJzbGV5KCkuZGVzdHJveSgpXG4gICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICB0b2dnbGU6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLWNsb3NlLXNlYXJjaC1iYXJcIixcbiAgICAgIH0sXG4gICAgICBpY29uczoge1xuICAgICAgICBzZWxmOiBcIi5qcy1zZWFyY2hcIixcbiAgICAgICAgdG9nZ2xlOiBcImEtYnRuLWljb24tLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IFwiPiBpbnB1dFwiLFxuICAgICAgZm9ybTogXCIubS1mb3JtXCJcbiAgICB9O1xuICAgIFxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5pY29ucyA9ICQodGhpcy5vcHRpb25zLmljb25zLnNlbGYpO1xuICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5mb3JtKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpXG4gICAgICAub24oXCJrZXlwcmVzc1wiLCB0aGlzLm9wdGlvbnMuaW5wdXQsIGV2ZW50ID0+IHRoaXMub25LZXlwcmVzcyhldmVudCkpXG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2gudG9nZ2xlKVxuICAgIHRoaXMuaWNvbnMudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmljb25zLnRvZ2dsZSlcbiAgfVxuXG4gIG9uS2V5cHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy4kZm9ybS5zdWJtaXQoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TmF2IHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0OiBcIi5hLXNlbGVjdFwiXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIFxuICAgICAgdGhpcy4kZWwub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgfVxuICBcbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgY29uc3QgdXJsID0gJChldmVudC50YXJnZXQpLnZhbCgpXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgIH1cbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBTd2lwZXIge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG4gICAgY29uc3QgJHNsaWRlciA9IGVsLmZpbmQoXCIubS1zbGlkZXJfX3N3aXBlclwiKTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmRcIiksXG4gICAgICAgIHNsaWRlQ2hhbmdlOiAoKSA9PiAgJGVsLnRyaWdnZXIoXCJzbGlkZUNoYW5nZVwiKSxcbiAgICAgICAgaW5pdDogKCkgPT4gICRlbC50cmlnZ2VyKFwiaW5pdFwiKSxcbiAgICAgICAgdG91Y2hFbmQ6ICgpID0+ICRlbC50cmlnZ2VyKFwidG91Y2hFbmRcIiksXG4gICAgICAgIHJlYWNoRW5kOiAoKSA9PiAkZWwudHJpZ2dlcihcInJlYWNoRW5kXCIpLFxuICAgICAgICByZWFjaEJlZ2lubmluZzogKCkgPT4gJGVsLnRyaWdnZXIoXCJyZWFjaEJlZ2lubmluZ1wiKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCBvcHRpb25zLm5hdmlnYXRpb24gKSB7XG4gICAgICBvcHRpb25zLm5hdiA9IHtcbiAgICAgICAgbmV4dEVsOiAnPiAubS1zbGlkZXJfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICc+IC5tLXNsaWRlcl9fcHJldicsXG4gICAgICAgIGRpc2FibGVkQ2xhc3M6IFwiYS1idG4taWNvbi0tZGlzYWJsZWRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5wYWdpbmF0aW9uICkge1xuICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uID0ge1xuICAgICAgICBlbDogJGVsLmZpbmQoJy5zd2lwZXItcGFnaW5hdGlvbicpLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGVsID0gJGVsO1xuXG4gICAgc3VwZXIoJHNsaWRlci5nZXQoMCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICggb3B0aW9ucy5uYXYgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMubmF2Lm5leHRFbCApO1xuICAgICAgdGhpcy4kcHJldkVsID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLm5hdi5wcmV2RWwgKTtcblxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5uZXh0RWwsICgpID0+IHRoaXMuc2xpZGVOZXh0KCkpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYucHJldkVsLCAoKSA9PiB0aGlzLnNsaWRlUHJldigpKVxuICAgICAgICAub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gdGhpcy5vblNsaWRlQ2hhbmdlKCkpO1xuXG4gICAgICBpZiAoICFvcHRpb25zLmxvb3AgKSB7XG4gICAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgJGVsXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbk1vdXNlRW50ZXIoKSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKVxuICAgIH1cblxuICAgIGlmICggdGhpcy5zbGlkZXMubGVuZ3RoIDw9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcgKSB7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIm0tc2xpZGVyLS1oaWRkZW4tbmF2XCIpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1sb2NhdGlvbi1ocmVmXVwiLCAoZSkgPT4gdGhpcy5vbkNsaWNrSXRlbShlKSk7XG5cbiAgfVxuXG4gIG9uQ2xpY2tJdGVtKGUpIHtcbiAgICBpZiAoICEkKCBlLnRhcmdldCApLmlzKFwiYVwiKSApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoIGUuY3VycmVudFRhcmdldCApO1xuICAgICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhKCk7XG4gICAgICBpZiAoIGRhdGEubG9jYXRpb25IcmVmICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEubG9jYXRpb25IcmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcyAqIDI7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgpIHtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gJCh0aGlzLnNsaWRlc1sgdGhpcy5hY3RpdmVJbmRleCBdKTtcbiAgICBjb25zdCBhbmltYXRlZEl0ZW1zID0gYWN0aXZlSXRlbS5maW5kKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcblxuICAgICQuZWFjaChhbmltYXRlZEl0ZW1zLCAoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChpdGVtKS5kYXRhKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChpdGVtKS5hZGRDbGFzcyggY2xhc3NOYW1lICk7IH0sIDEpO1xuICAgIH0pO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubG9vcCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXNCZWdpbm5pbmcgKSB7XG4gICAgICB0aGlzLiRwcmV2RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuaXNFbmQgKSB7XG4gICAgICB0aGlzLiRuZXh0RWwuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlUHJldigpIHtcbiAgICBzdXBlci5zbGlkZVByZXYoKTtcbiAgICB0aGlzLiRwcmV2RWwucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5uYXYuZGlzYWJsZWRDbGFzcyApO1xuICAgIHRoaXMuJG5leHRFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5sb29wICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5pc0JlZ2lubmluZyApIHtcbiAgICAgIHRoaXMuJHByZXZFbC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVOZXh0KCkge1xuICAgIHN1cGVyLnNsaWRlTmV4dCgpO1xuICAgIHRoaXMuJHByZXZFbC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLm5hdi5kaXNhYmxlZENsYXNzICk7XG4gICAgdGhpcy4kbmV4dEVsLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcblxuICAgIGlmICggdGhpcy5vcHRpb25zLmxvb3AgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLmlzRW5kICkge1xuICAgICAgdGhpcy4kbmV4dEVsLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMubmF2LmRpc2FibGVkQ2xhc3MgKTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBtYXA6IFwiI21hcFwiLFxuICAgICAgdGFiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICB0YWJJdGVtOiBcIi5tLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcIm1hcC5jbGlja1wiLCAoZXZlbnQsIGlkKSA9PiB0aGlzLm9uQ2xpY2tNYXAoZXZlbnQsIGlkKSlcbiAgICAgIC5vbihcInRhYi5zaG93XCIsIChldmVudCwgaW5kZXgpID0+IHRoaXMub25DaGFuZ2VUYWIoZXZlbnQsIGluZGV4KSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkluaXRNYXAoKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uSW5pdE1hcCgpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYkl0ZW0pLmZpbmQoXCI+IGFcIikuZGF0YShcImNvb3JkXCIpXG4gICAgY29uc3QgbWFwID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubWFwKS5kYXRhKFwiY29tcG9uZW50TWFwXCIpO1xuICAgIG1hcC5tYXBGb2N1cyhjb29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlVGFiKGV2ZW50LCBpbmRleCkge1xuICAgIHRoaXMub25Jbml0TWFwKClcbiAgfVxuXG4gIG9uQ2xpY2tNYXAoZXZlbnQsIGlkKSB7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRhYilcbiAgICBjb25zdCB0YWJzID0gdGhpcy4kdGFicy5kYXRhKFwiY29tcG9uZW50VGFiRGVmYXVsdFwiKTtcbiAgICBjb25zdCB0YWIgPSB0aGlzLiR0YWJzLmZpbmQoYGFbaHJlZj1cIiMke2lkfVwiXWApLnBhcmVudCgpO1xuXG4gICAgdGFicy5zZXRBY3RpdmUodGFiLmluZGV4KCkpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgaGFtYnVyZ2VyOiBcIi5hLWhhbWJ1cmdlclwiLFxuICAgICAgc2hhZG93OiBcIi5hLXNoYWRvd1wiLFxuICAgICAgbmF2OiB7XG4gICAgICAgIHNlbGY6IFwiLm0tbmF2XCIsXG4gICAgICAgIHRvZ2dsZTogXCJtLW5hdi0tb3BlblwiLFxuICAgICAgICBpdGVtOiBcIm5hdiA+IHVsID4gbGkgc3BhblwiLFxuICAgICAgICBhY3RpdmU6IFwibS1uYXYtLWFjdGl2ZVwiLFxuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBzZWxmOiBcIi5tLXNlYXJjaC1iYXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoLWhlYWRlclwiLFxuICAgICAgICBjbGFzczogXCJtLXNlYXJjaC1iYXItLW9wZW5cIlxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG4gICAgdGhpcy4kc2VhcmNoQmFyID0gJCh0aGlzLm9wdGlvbnMuc2VhcmNoLnNlbGYpO1xuICAgIHRoaXMuJHNoYWRvdyA9ICQodGhpcy5vcHRpb25zLnNoYWRvdyk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLm5hdi5pdGVtLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tEcm9wZG93bihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2VhcmNoLnRyaWdnZXIsIGV2ZW50ID0+IHRoaXMub25DbGlja1NlYXJjaChldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zaGFkb3csICgpID0+IHRoaXMuY2xvc2VBbGwoKSlcblxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gIH1cblxuICBvbkNsaWNrRHJvcGRvd24oZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoJHRhcmdldC5uZXh0KFwidWxcIikubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJHBhcmVudCA9ICR0YXJnZXQucGFyZW50KCk7XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMubmF2Lml0ZW0pLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0aGlzLiRzZWFyY2hCYXIudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB0aGlzLiRuYXYucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKTtcblxuICAgIGlmICh0aGlzLiRzZWFyY2hCYXIuaGFzQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcykpe1xuICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSl7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZXMge1xuXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gIFxuICAgICAgY29uc3QgcHJvZHVjdENhcm91c2VsVGV4dCA9IG5ldyBTd2lwZXIoXCIuby1zZXJ2aWNlc19fdGV4dCAubS1zbGlkZXJfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgbGF6eToge1xuICAgICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6IFwiLm8tc2VydmljZXMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHByb2R1Y3RDYXJvdXNlbEltYWdlID0gbmV3IFN3aXBlcihcIi5vLXNlcnZpY2VzX19pbWFnZSAubS1zbGlkZXJfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRodW1iczoge1xuICAgICAgICAgIHN3aXBlcjogcHJvZHVjdENhcm91c2VsVGV4dFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBcIi5vLXNlcnZpY2VzIC5tLXNsaWRlcl9fbmV4dFwiLFxuICAgICAgICAgIHByZXZFbDogXCIuby1zZXJ2aWNlcyAubS1zbGlkZXJfX3ByZXZcIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDk5MDoge1xuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgfVxuICBcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICB0b2dnbGU6IFwiby1zaWRlYmFyLS1vcGVuXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIuby1zaWRlYmFyX19uYXZcIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm8tc2lkZWJhcl9fbmF2LS1hY3RpdmVcIixcbiAgICAgICAgbGluazogXCIuby1zaWRlYmFyX19uYXYtLWxpbmtcIlxuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBzZWxmOiBcIi5tLXNlYXJjaC1iYXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuanMtc2VhcmNoXCIsXG4gICAgICAgIGNsYXNzOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuICAgIHRoaXMuJHNlYXJjaEJhciA9ICQodGhpcy5vcHRpb25zLnNlYXJjaC5zZWxmKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lml0ZW0sIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2LmxpbmssIGV2ZW50ID0+IHRoaXMub25DbGlja0xpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tTZWFyY2goZXZlbnQpKVxuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImhhbWJ1cmdlci5jbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGlja0hhbWJ1cmdlcihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2hhZG93LCAoKSA9PiB0aGlzLmNsb3NlQWxsKCkpXG5cbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHRoaXMud2luZG93UmVzaXplKCkpXG5cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZSgpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY5KSB7XG4gICAgICB0aGlzLmNsb3NlQWxsKClcbiAgICB9XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgfVxuXG4gIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoJHRhcmdldC5uZXh0KFwidWxcIikubGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJHBhcmVudCA9ICR0YXJnZXQucGFyZW50KCk7XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSkpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMubmF2Lml0ZW0pLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrTGluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICBjb25zdCB1cmwgPSAkdGFyZ2V0LmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBvbkNsaWNrU2VhcmNoKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGhpcy4kc2VhcmNoQmFyLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpXG4gIH1cblxuICBvbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA+IDc2OCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICB9XG4gIH1cbn1cbiJdfQ==
