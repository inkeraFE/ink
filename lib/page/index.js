"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-page',
  render: function render(h) {
    return h('div', {
      staticClass: 'ink-page'
    }, [h('div', {
      staticClass: 'page-header'
    }, this.$slots.header), h('div', {
      staticClass: 'page-content'
    }, this.$slots.content), this.$slots.bottom && h('div', {
      staticClass: 'page-tabbar'
    }, this.$slots.bottom)].filter(function (_) {
      return _;
    }));
  }
};
exports.default = _default;