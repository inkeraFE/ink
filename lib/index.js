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
exports.default = void 0;

var _package = _interopRequireDefault(require("../package.json"));

var _button = _interopRequireDefault(require("./button"));

var _flex = _interopRequireDefault(require("./flex"));

var _switch = _interopRequireDefault(require("./switch"));

var _radio = _interopRequireDefault(require("./radio"));

var _loading = _interopRequireDefault(require("./loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package.default.version;
var compList = [_button.default, _flex.default, _switch.default, _radio.default, _loading.default];

var install = function install(Vue) {
  // handle js plugin
  // handle component
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