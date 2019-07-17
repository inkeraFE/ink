"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

var _util = require("../common/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionSheetClass = _vue.default.extend(_actionSheet.default);
/**
 * actionList [{ text, style, ... }]
 * cancelBtn { text, style, ... }
 * onSelect fuc
 * onCancel fuc
 */


ActionSheetClass.prototype.config = function (options) {
  this.cancelBtn = options.cancelBtn;
  this.actionList = options.list;
  this.onSelect = options.onSelect;
  this.onCancel = options.onCancel;
};

ActionSheetClass.prototype.close = function () {
  this.isShow = false;
};

ActionSheetClass.prototype.show = function () {
  this.isShow = true;
};

function ActionSheet(options) {
  var actionSheetInstance = new ActionSheetClass({
    el: document.createElement('div')
  });
  actionSheetInstance.config(options);
  actionSheetInstance.show();
}

ActionSheet.render = function (options) {
  if (!(0, _util.isObject)(options)) options = {};
  return ActionSheet(options);
};

var _default = ActionSheet;
exports.default = _default;