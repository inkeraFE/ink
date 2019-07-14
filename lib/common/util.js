"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHash = setHash;
exports.getHash = getHash;
exports.isObject = isObject;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setHash() {
  window._popupHash = Date.now();
}

function getHash() {
  return window._popupHash;
}

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}