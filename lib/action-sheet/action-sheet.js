"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _popup = _interopRequireDefault(require("../common/popup"));

var _transition = require("../common/transition");

var _util = require("../common/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-action-sheet',
  mixins: [_popup.default],
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'ink-action-sheet',
      on: {
        click: function click() {
          _this.isShow = false;
        }
      }
    }, [h(_transition.slideTopTransition, {}, [h('ul', {
      staticClass: 'action-sheet-content',
      directives: [{
        name: 'show',
        value: this.isShow
      }],
      on: {
        click: function click(event) {
          event.stopPropagation();
        }
      }
    }, [this.actionList && this.actionList.map(function (el, index) {
      return h('li', {
        staticClass: 'action-sheet-item',
        style: (0, _util.isObject)(el.style) && el.style,
        on: {
          click: function click() {
            _this.onSelect && _this.onSelect(el, index);
          }
        }
      }, el.text);
    })].concat([this.cancelBtn && h('div', {
      staticClass: 'action-sheet-cancel',
      style: (0, _util.isObject)(this.cancelBtn.style) && this.cancelBtn.style,
      on: {
        click: function click() {
          _this.onCancel && _this.onCancel();
          _this.isShow = false;
        }
      }
    }, this.cancelBtn.text)]))])]);
  }
};
exports.default = _default;