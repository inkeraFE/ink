"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _popup = _interopRequireDefault(require("../common/popup"));

var _transition = require("../common/transition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-popup',
  mixins: [_popup.default],
  data: function data() {
    return {
      children: null,
      top: false,
      left: false,
      right: false,
      bottom: false,
      width: '100%',
      height: '100%',
      clickMaskClose: false
    };
  },
  render: function render(h) {
    var _this = this;

    return h(_transition.fadeTransition, {}, [h('div', {
      staticClass: 'ink-popup',
      directives: [{
        name: 'show',
        value: this.isShow
      }],
      on: {
        click: function click(event) {
          if (_this.clickMaskClose) _this.isShow = false;
        }
      }
    }, [h('div', {
      staticClass: 'ink-popup-content',
      style: {
        width: this.width,
        height: this.height,
        bottom: this.bottom ? 0 : 'auto',
        top: this.top ? 0 : 'auto'
      },
      on: {
        click: function click(event) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    }, [typeof this.children === 'function' ? this.children(h) : this.children])])]);
  }
};
exports.default = _default;