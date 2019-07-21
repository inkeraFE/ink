"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carousel = _interopRequireDefault(require("../carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-tabs',
  props: {
    value: {
      type: Number
    },
    isGesture: {
      type: Boolean,
      default: true
    },
    text: {
      type: String
    }
  },
  components: {
    inkCarousel: _carousel.default
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'ink-tabs'
    }, [this.$slots.navbar, h('ink-carousel', {
      attrs: {
        isTabs: true,
        value: this.value,
        isLock: !this.isGesture
      },
      on: {
        input: function input(val) {
          _this.$emit('input', val);
        }
      }
    }, this.$slots.default)]);
  }
};
exports.default = _default;