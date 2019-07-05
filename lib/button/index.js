"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default2 = {
  name: 'ink-btn',
  data: function data() {
    return {
      active: false,
      cacheStyle: {}
    };
  },
  computed: {
    typeClass: function typeClass() {
      return this.type === 'primary' ? 'btn-primary' : this.type === 'danger' ? 'btn-danger' : this.type === 'warning' ? 'btn-warning' : 'btn-default';
    },
    activeStyle: function activeStyle() {
      var _this = this;

      var style = {};

      if (this.active) {
        var btnStyles = window.getComputedStyle(this.$el);
        Object.keys(this.actionStyle).forEach(function (el, index) {
          if (btnStyles[el]) {
            _this.cacheStyle[el] = btnStyles[el];
            style = _this.actionStyle[el];
          }
        });
      } else {
        Object.keys(this.cacheStyle).forEach(function (el, index) {
          style = _this.cacheStyle[el];
        });
      }

      return style;
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
    actionStyle: {
      type: Object,
      default: function _default() {
        return {
          background: '#f7f8f9'
        };
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('button', {
      attrs: {
        name: 'button',
        type: 'button'
      },
      class: ['ink-btn', this.typeClass, this.sizeClass],
      style: this.activeStyle,
      on: {
        touchstart: function touchstart() {
          _this2.active = true;
        },
        touchend: function touchend() {
          _this2.active = false;
        }
      }
    }, this.$slots.default);
  }
};
exports.default = _default2;