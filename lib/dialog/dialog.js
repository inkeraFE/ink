"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _button = _interopRequireDefault(require("../button"));

var _popup = _interopRequireDefault(require("../common/popup"));

var _transition = require("../common/transition");

var _util = require("../common/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-dialog',
  mixins: [_popup.default],
  data: function data() {
    return {
      isInput: false,
      isCancel: false,
      isSubmit: true,
      title: null,
      children: null,
      options: null,
      clickMaskClose: false,
      promptValue: null
    };
  },
  components: {
    inkBtn: _button.default
  },
  render: function render(h) {
    var _this = this;

    var richRender = h('div', {}, typeof this.children === 'function' ? [this.children(h)] : this.children);
    var inputRender = h('input', {
      staticClass: 'ink-dialog-input',
      attrs: {
        placeholder: typeof this.children === 'string' ? this.children : ' '
      },
      on: {
        input: function input(event) {
          _this.promptValue = event.target.value;
        }
      }
    });
    var _defaultCancel = {
      'line-height': '28px'
    };
    var _defaultSubmit = {
      'line-height': '28px',
      color: '#108ee9'
    };
    var cancelBtn = h('ink-btn', {
      attrs: {
        size: 'large'
      },
      style: this._cancel && (0, _util.isObject)(this._cancel.style) ? Object.assign({}, _defaultCancel, this._cancel.style) : _defaultCancel,
      nativeOn: {
        click: function click() {
          _this.close();

          _this._cancel && _this._cancel.event && (_this.isInput ? _this._cancel.event(_this.promptValue) : _this._cancel.event());
        }
      }
    }, this._cancel && this._cancel.text);
    var submitBtn = h('ink-btn', {
      attrs: {
        size: 'large'
      },
      style: this._submit && (0, _util.isObject)(this._submit.style) ? Object.assign({}, _defaultSubmit, this._submit.style) : _defaultSubmit,
      nativeOn: {
        click: function click() {
          _this.close();

          _this._submit && _this._submit.event && (_this.isInput ? _this._submit.event(_this.promptValue) : _this._submit.event());
        }
      }
    }, this._submit && this._submit.text);
    var btnRender = [];
    var titleRender = h('div', {
      staticClass: 'ink-dialog-title'
    }, this.title);
    if (this.isCancel) btnRender.push(cancelBtn);
    if (this.isSubmit) btnRender.push(submitBtn);
    var contentRender = this.isInput ? inputRender : richRender;
    return h(_transition.fadeTransition, {}, [h('div', {
      staticClass: 'ink-dialog',
      directives: [{
        name: 'show',
        value: this.isShow
      }],
      on: {
        click: function click() {
          if (_this.clickMaskClose) _this.isShow = false;
        }
      }
    }, [h('div', {
      staticClass: 'ink-dialog-content'
    }, [titleRender, contentRender, h('div', {
      staticClass: 'ink-dialog-btn'
    }, btnRender)])])]);
  }
};
exports.default = _default;