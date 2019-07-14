"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _util = require("../common/util");

var _popup = _interopRequireDefault(require("./popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * children: element
 * left
 * right
 * bottom
 * top
 * width
 * height
 */
var PopupClass = _vue.default.extend(_popup.default);

PopupClass.prototype.config = function (options) {
  var _this = this;

  Object.keys(options).forEach(function (key) {
    _this[key] = options[key];
  });
};

PopupClass.prototype.close = function () {
  this.isShow = false;
};

PopupClass.prototype.show = function () {
  this.isShow = true;
};

function Popup(options) {
  var popupInstance = new PopupClass({
    el: document.createElement('div')
  });
  popupInstance.config(options);
  popupInstance.show();
}

Popup.render = function (options) {
  if (!(0, _util.isObject)(options)) options = {
    bottom: true
  };
  return Popup(options);
};

var _default = Popup;
exports.default = _default;