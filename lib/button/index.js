"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-btn',
  computed: {
    typeClass: function typeClass() {
      return this.type === 'primary' ? 'btn-primary' : this.type === 'danger' ? 'btn-danger' : this.type === 'warning' ? 'btn-warning' : 'btn-default';
    },
    sizeClass: function sizeClass() {
      if (this.size === 'large') return 'btn-large';
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var _this = this;

    return h('button', {
      attrs: {
        name: 'button',
        type: 'button'
      },
      class: ['ink-btn', this.typeClass, this.sizeClass, this.disabled ? 'is-disabled' : ''],
      disabled: this.disabled,
      on: {
        click: function click(evt) {
          _this.$emit('click', evt);
        }
      }
    }, this.$slots.default);
  }
};
exports.default = _default;