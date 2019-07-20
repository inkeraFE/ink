"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _popup = _interopRequireDefault(require("../common/popup"));

var _button = _interopRequireDefault(require("../button"));

var _column = _interopRequireDefault(require("./column"));

var _transition = require("../common/transition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-picker',
  mixins: [_popup.default],
  data: function data() {
    return {
      pickerArr: [],
      selectArr: []
    };
  },
  components: {
    inkBtn: _button.default,
    pickerColumn: _column.default
  },
  methods: {
    handleData: function handleData(actionDepth, childrens) {
      var _this = this;

      var insertVnode = this.$createElement('picker-column', {
        attrs: {
          colList: childrens,
          selected: this.selected[actionDepth] || null
        },
        on: {
          selValue: function selValue(val) {
            _this.selectArr[actionDepth] = val;

            if (val.childrens) {
              _this.pickerArr.splice(actionDepth + 1);

              _this.handleData(actionDepth + 1, val.childrens);
            } else {
              _this.selectArr.splice(actionDepth + 1);
            }
          }
        }
      });
      var currentSelected = childrens[0];
      childrens.forEach(function (element) {
        if (_this.selected[actionDepth].id === element.id) {
          currentSelected = element;
        }
      });
      this.selectArr[actionDepth] = currentSelected;
      this.pickerArr.push(insertVnode); // initial

      childrens[0] && childrens[0].childrens && this.handleData(actionDepth + 1, childrens[0].childrens);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      _this2.handleData(0, _this2.pickerList || []);
    }, 0);
  },
  render: function render(h) {
    var _this3 = this;

    var _defaultCancel = {
      'max-height': '39px',
      'font-size': '16px'
    };
    var _defaultSubmit = {
      'max-height': '39px',
      'font-size': '16px',
      color: '#108ee9'
    };
    return h('div', {
      staticClass: 'ink-picker',
      on: {
        click: function click() {
          _this3.isShow = false;
        }
      }
    }, [h(_transition.slideTopTransition, {}, [h('div', {
      staticClass: 'picker-wrapper',
      directives: [{
        name: 'show',
        value: this.isShow
      }],
      on: {
        click: function click(event) {
          event.stopPropagation();
        }
      }
    }, [h('div', {
      staticClass: 'picker-header'
    }, [h('ink-btn', {
      style: _defaultCancel,
      on: {
        click: function click() {
          _this3.isShow = false;
          _this3.cancel && _this3.cancel.event && _this3.cancel.event();
        }
      }
    }, this.cancel && this.cancel.text || ''), h('ink-btn', {
      style: _defaultSubmit,
      on: {
        click: function click() {
          _this3.isShow = false;
          _this3.submit && _this3.submit.event && _this3.submit.event(_this3.selectArr);
        }
      }
    }, this.submit && this.submit.text || '')]), h('div', {
      staticClass: 'picker-content'
    }, [h('div', {
      staticClass: 'picker-col-content'
    }, this.pickerArr), h('div', {
      staticClass: 'picker-indicator'
    }), h('div', {
      staticClass: 'picker-mask'
    })])])])]);
  }
};
exports.default = _default;