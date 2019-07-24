"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _flex = _interopRequireDefault(require("../flex"));

var _transition = require("../common/transition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-drawer',
  data: function data() {
    return {
      showMask: false,
      transform: 'translate3d(0, 0, 0)'
    };
  },
  components: {
    inkFlex: _flex.default
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dWidth: {
      type: String,
      default: '250px'
    },
    dHeight: {
      type: String,
      default: '100vh'
    }
  },
  watch: {
    value: function value(val) {
      this.showMask = val;

      if (val) {
        this.transform = "translate3d(".concat(this.dWidth, ", 0, 0)");
      } else {
        this.transform = 'translate3d(0, 0, 0)';
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var maskRender = h(_transition.fadeTransition, {}, [h('div', {
      staticClass: 'drawer-mask',
      directives: [{
        name: 'show',
        value: this.showMask
      }],
      on: {
        click: function click() {
          _this.showMask = false;
          _this.transform = 'translate3d(0, 0, 0)';

          _this.$emit('input', false);
        }
      }
    })]);
    return h('div', {
      class: 'ink-drawer',
      style: {
        height: this.dHeight
      }
    }, [h('div', {
      staticClass: 'drawer-wrapper'
    }, [h('div', {
      staticClass: 'drawer-popup-wrapper',
      style: {
        width: "".concat(this.dWidth),
        height: '100%',
        left: "-".concat(this.dWidth),
        transform: this.transform
      }
    }, this.$slots.navbar), h('div', {
      staticClass: 'drawer-content'
    }, this.$slots.content), maskRender])]);
  }
};
exports.default = _default;