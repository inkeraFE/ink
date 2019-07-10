"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-radio',
  props: {
    name: {
      type: String
    },
    val: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  computed: {
    bgColor: function bgColor() {
      if (this.value === this.val) return this.color;else return 'white';
    }
  },
  render: function render(h) {
    var _this = this;

    return h('label', {
      staticClass: 'ink-radio'
    }, [h('input', {
      attrs: {
        type: 'radio',
        name: this.name,
        value: this.val
      },
      domProps: {
        checked: this.value === this.val,
        disabled: this.disabled
      },
      staticClass: 'radio-input',
      on: {
        change: function change(event) {
          _this.checked = event.target.value === _this.val;

          _this.$emit('input', event.target.value);
        }
      }
    }), h('label', {
      staticClass: 'radio-label',
      style: {
        background: this.bgColor
      }
    })]);
  }
};
exports.default = _default;