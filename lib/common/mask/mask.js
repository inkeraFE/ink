"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-mask',
  data: function data() {
    return {
      isShow: false
    };
  },
  computed: {
    animClass: function animClass() {
      if (this.isShow) {
        return 'mask-anim';
      }
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['ink-mask', this.animClass]
    });
  }
};
exports.default = _default;