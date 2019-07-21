"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-header',
  render: function render(h) {
    var slotsDefault = h('div');
    return h('header', {
      staticClass: 'ink-header'
    }, [this.$slots.left || slotsDefault, this.$slots.center || slotsDefault, this.$slots.right || slotsDefault]);
  }
};
exports.default = _default;