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
exports.default = void 0;

var _package = _interopRequireDefault(require("../package.json"));

var _button = _interopRequireDefault(require("./button"));

var _flex = _interopRequireDefault(require("./flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package.default.version;
var compList = [_button.default, _flex.default];

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