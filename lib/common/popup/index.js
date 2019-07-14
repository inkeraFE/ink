"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _manage = _interopRequireDefault(require("./manage"));

var _mask = _interopRequireDefault(require("../mask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'ink-popup',
  data: function data() {
    return {
      isShow: false
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow: function isShow(val) {
      if (val) {
        _manage.default.createPopup(this.$el);

        _manage.default.lockScroll();

        _mask.default.show();
      } else {
        _mask.default.close();

        _manage.default.openScroll();
      }
    }
  }
};
exports.default = _default;