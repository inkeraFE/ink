"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-loading',
  props: {
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  computed: {
    bgColor: function bgColor() {
      return 'white';
    },
    borderColor: function borderColor() {
      return this.color;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'ink-loading',
      style: {
        background: this.bgColor
      }
    }, [h('div', {
      staticClass: 'loading-item',
      style: {
        'border-bottom-color': this.borderColor,
        'border-top-color': this.borderColor
      }
    })]);
  }
};
exports.default = _default;