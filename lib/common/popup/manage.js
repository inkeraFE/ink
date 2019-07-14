"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util");

var _default = {
  lockScroll: function lockScroll() {
    document.body.style.overflow = 'hidden';
  },
  openScroll: function openScroll() {
    document.body.removeAttribute('style');
  },
  createPopup: function createPopup(popupTarget) {
    var _this = this;

    var popstate = function popstate() {
      _this.removePopup();

      window.removeEventListener('popstate', popstate);
    };

    (0, _util.setHash)();
    var popupDom = document.createElementNS("ink-popup-wrapper".concat((0, _util.getHash)()), 'div');
    popupDom.appendChild(popupTarget);
    document.body.appendChild(popupDom);
    window.addEventListener('popstate', popstate);
    window.history.pushState({
      type: 'popup'
    }, null);
  },
  removePopup: function removePopup() {
    var popupDom = document.getElementsByTagNameNS("ink-popup-wrapper".concat((0, _util.getHash)()), 'div')[0];
    popupDom && popupDom.parentNode.removeChild(popupDom);
    window.history.go(-1);
  }
};
exports.default = _default;