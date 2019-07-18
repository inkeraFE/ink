"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-toast',
  data: function data() {
    return {
      position: null,
      isActive: false
    };
  },
  computed: {
    animClass: function animClass() {
      return this.isActive ? "".concat(this.position, "-active") : 'remove';
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['ink-toast', "".concat(this.position, "-position"), this.animClass]
    }, [this.message]);
  }
};
exports.default = _default;