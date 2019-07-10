"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

// v-model 会把 value 用作 prop 且把 input 用作 event
var _default = {
  name: 'ink-switch',
  computed: {
    inner_value: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    mainColor: function mainColor() {
      if (this.inner_value) {
        return this.color;
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  render: function render(h) {
    var _this = this;

    return h('label', {
      staticClass: 'ink-switch'
    }, [h('input', {
      staticClass: 'switch-input',
      attrs: {
        type: 'checkbox'
      },
      domProps: {
        checked: this.inner_value
      },
      on: {
        change: function change(event) {
          _this.inner_value = event.target.checked;
        }
      }
    }), h('label', {
      staticClass: 'switch-label',
      style: {
        background: this.mainColor
      }
    })]);
  }
};
exports.default = _default;