"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _flex = _interopRequireDefault(require("../flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-page',
  components: {
    inkFlex: _flex.default
  },
  render: function render(h) {
    return h('ink-flex', {
      staticClass: 'ink-page',
      attrs: {
        column: true
      }
    }, [this.$slots.header && h('ink-flex', {
      staticClass: 'page-header',
      attrs: {
        column: true,
        none: true
      }
    }, this.$slots.header), h('ink-flex', {
      staticClass: 'page-content block',
      attrs: {
        flex: 1
      }
    }, this.$slots.content), this.$slots.bottom && h('ink-flex', {
      staticClass: 'page-tabbar',
      attrs: {
        column: true,
        none: true
      }
    }, this.$slots.bottom)].filter(function (_) {
      return _;
    }));
  }
};
exports.default = _default;