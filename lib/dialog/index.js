"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _util = require("../common/util");

var _dialog = _interopRequireDefault(require("./dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogClass = _vue.default.extend(_dialog.default);
/**
 * options:
 * title text
 * children text or render element
 * clickMaskClose bool
 * cancel { text, event: () => {}}
 * submit { text, event: () => {}}
 * isInput bool
 * isCancel bool
 */


DialogClass.prototype.config = function (options) {
  if (options.cancel) this._cancel = options.cancel;
  if (options.submit) this._submit = options.submit;
  if (options.clickMaskClose) this.clickMaskClose = options.clickMaskClose;
  this.isInput = options.isInput;
  this.isCancel = options.isCancel;
  this.title = options.title;
  this.children = options.children;
};

DialogClass.prototype.close = function () {
  this.isShow = false;
};

DialogClass.prototype.show = function () {
  this.isShow = true;
};

function Dialog(options) {
  var dialogInstance = new DialogClass({
    el: document.createElement('div')
  });
  dialogInstance.config(options);
  dialogInstance.show();
}

Dialog.alert = function (options) {
  if (!(0, _util.isObject)(options)) options = {};
  options.isCancel = false;
  options.isInput = false;
  return Dialog(options);
};

Dialog.confirm = function (options) {
  if (!(0, _util.isObject)(options)) options = {};
  options.isCancel = true;
  options.isInput = false;
  return Dialog(options);
};

Dialog.prompt = function (options) {
  if (!(0, _util.isObject)(options)) options = {};
  options.isCancel = true;
  options.isInput = true;
  return Dialog(options);
};

var _default = Dialog;
exports.default = _default;