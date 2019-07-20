"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _picker = _interopRequireDefault(require("./picker"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerClass = _vue.default.extend(_picker.default);
/**
 * data： [
 *  {
 *     text: 1996,
 *     id: 1
 *     childrens: [{
 *				text: 122,
 *        id: 11
 *				childrens: [...]
 *			},...]
 *   },
 * 	 ...
 * ]
 */


PickerClass.prototype.config = function (options) {
  this.pickerList = options.data;
  this.selected = options.selected;
  this.submit = {
    event: options.onSubmit,
    text: options.submitText || '确定'
  };
  this.cancel = {
    event: options.onCancel,
    text: options.cancelText || '取消'
  };
};

PickerClass.prototype.close = function () {
  this.isShow = false;
};

PickerClass.prototype.show = function () {
  this.isShow = true;
};

function Picker(options) {
  var pickerInstance = new PickerClass({
    el: document.createElement('div')
  });
  pickerInstance.config(options);
  pickerInstance.show();
}

Picker.render = function (options) {
  return Picker(options);
};

var _default = Picker;
exports.default = _default;