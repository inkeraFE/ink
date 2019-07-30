"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

// return h('div', {staticClass: 'icon-clear'})
var _default = {
  name: 'ink-search-bar',
  data: function data() {
    return {
      innerValue: null,
      showClear: false
    };
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    canClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
      !this.innerValue && (this.showClear = false);
    }
  },
  render: function render(h) {
    var _this = this;

    return h('form', {
      staticClass: 'ink-search',
      on: {
        submit: function submit(e) {
          _this.$emit('submit', e);
        }
      }
    }, [h('div', {
      staticClass: 'search-icon'
    }, [h('div', {
      staticClass: 'icon-wrapper'
    })]), h('input', {
      domProps: {
        value: this.innerValue
      },
      staticClass: 'search-input',
      attrs: {
        type: 'search',
        placeholder: this.placeholder
      },
      on: {
        input: function input(event) {
          _this.innerValue = event.target.value;
          if (_this.canClear && _this.innerValue && !_this.showClear) _this.showClear = true;
        },
        focus: function focus() {
          if (_this.canClear && _this.innerValue) _this.showClear = true;
        }
      }
    }), this.showClear ? h('div', {
      staticClass: 'icon-clear',
      on: {
        click: function click() {
          _this.innerValue = '';
          _this.showClear = false;
        }
      }
    }) : null].filter(function (_) {
      return _;
    }));
  }
};
exports.default = _default;