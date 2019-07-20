"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _flex.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _switch.default;
  }
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function get() {
    return _radio.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _loading.default;
  }
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: function get() {
    return _progress.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function get() {
    return _dialog.default;
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _popup.default;
  }
});
Object.defineProperty(exports, "ActionSheet", {
  enumerable: true,
  get: function get() {
    return _actionSheet.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _toast.default;
  }
});
Object.defineProperty(exports, "Picker", {
  enumerable: true,
  get: function get() {
    return _picker.default;
  }
});
exports.default = void 0;

var _package = _interopRequireDefault(require("../package.json"));

var _button = _interopRequireDefault(require("./button"));

var _flex = _interopRequireDefault(require("./flex"));

var _switch = _interopRequireDefault(require("./switch"));

var _radio = _interopRequireDefault(require("./radio"));

var _loading = _interopRequireDefault(require("./loading"));

var _progress = _interopRequireDefault(require("./progress"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _popup = _interopRequireDefault(require("./popup"));

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

var _toast = _interopRequireDefault(require("./toast"));

var _picker = _interopRequireDefault(require("./picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package.default.version;
var compList = [_button.default, _flex.default, _switch.default, _radio.default, _loading.default, _progress.default];

var install = function install(Vue) {
  // handle js plugin
  Vue.$dialog = Vue.prototype.$dialog = _dialog.default;
  Vue.$popup = Vue.prototype.$popup = _popup.default;
  Vue.$actionSheet = Vue.prototype.$actionSheet = _actionSheet.default;
  Vue.$toast = Vue.prototype.$toast = _toast.default;
  Vue.$picker = Vue.prototype.$picker = _picker.default; // handle component

  compList.forEach(function (Component, idx) {
    Vue.component(Component.name, Component);
  }); // handle directive
}; // auto install


if (window && window.Vue !== void 0) {
  install(window.Vue);
}

var _default = {
  version: version,
  install: install
};
exports.default = _default;