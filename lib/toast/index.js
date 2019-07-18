"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _toast = _interopRequireDefault(require("./toast"));

var _util = require("../common/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * options : string | object
 * { message, duration, position }
 */
var ToastClass = _vue.default.extend(_toast.default);

ToastClass.prototype.config = function (options) {
  if ((0, _util.isObject)(options)) {
    this.message = options.message;
    this.duration = options.duration || 1000;
    this.position = options.position || 'bottom';
  } else {
    this.message = options;
    this.duration = 1000;
    this.position = 'bottom';
  }
};

ToastClass.prototype.removeToast = function (event) {
  event.target.parentNode.removeChild(event.target);
};

ToastClass.prototype.close = function () {
  this.isActive = false;
  this.$el.addEventListener('transitionend', this.removeToast, {
    capture: false,
    once: true
  });
};

ToastClass.prototype.show = function () {
  this.isActive = true;
};

function Toast(options) {
  var toastInstance = new ToastClass({
    el: document.createElement('div')
  });
  toastInstance.config(options);
  document.body.appendChild(toastInstance.$el);
  var sTimer = setTimeout(function () {
    toastInstance.show();
    clearTimeout(sTimer);
  }, 0);
  var eTimer = setTimeout(function () {
    toastInstance.close();
    clearTimeout(eTimer);
  }, toastInstance.duration);
}

var _default = Toast;
exports.default = _default;