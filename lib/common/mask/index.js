"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _util = require("../util");

var _manage = _interopRequireDefault(require("../popup/manage"));

var _mask = _interopRequireDefault(require("./mask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaskClass = _vue.default.extend(_mask.default);

MaskClass.prototype.show = function () {
  this.isShow = true;
};

MaskClass.prototype.close = function () {
  this.isShow = false;
  this.$el.addEventListener('transitionend', function () {
    _manage.default.removePopup();
  }, {
    capture: false,
    once: true
  });
};

function MaskInstance() {
  this.maskInstance = new MaskClass({
    el: document.createElement('div')
  });
}

var _default = {
  show: function show(actionMask) {
    var _this = this;

    MaskInstance.call(this);
    var popup = document.getElementsByTagNameNS("ink-popup-wrapper".concat((0, _util.getHash)()), 'div')[0];
    popup.appendChild(this.maskInstance.$el);
    setTimeout(function () {
      _this.maskInstance.show();
    }, 0);
  },
  close: function close() {
    this.maskInstance.close();
  }
};
exports.default = _default;