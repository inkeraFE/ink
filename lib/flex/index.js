"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  name: 'Flex',
  props: {
    flex: {
      type: Number
    },
    auto: {
      type: Boolean,
      default: false
    },
    none: {
      type: Boolean,
      default: false
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    row: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    nowrap: {
      type: Boolean,
      default: false
    },
    justifyStart: {
      type: Boolean,
      default: false
    },
    justifyEnd: {
      type: Boolean,
      default: false
    },
    justifyCenter: {
      type: Boolean,
      default: false
    },
    justifyBetween: {
      type: Boolean,
      default: false
    },
    justifyAround: {
      type: Boolean,
      default: false
    },
    alignStart: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    alignBaseline: {
      type: Boolean,
      default: false
    },
    alignStretch: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClassArray: function getClassArray() {
      var map = {
        'flex-flex': this.flex,
        'flex-auto': this.auto,
        'flex-none': this.none || this.width || this.height,
        'flex-row': this.row,
        'flex-column': this.column,
        'flex-wrap': this.wrap,
        'flex-nowrap': this.nowrap,
        'flex-justify-start': this.justifyStart,
        'flex-justify-end': this.justifyEnd,
        'flex-justify-center': this.justifyCenter,
        'flex-justify-between': this.justifyBetween,
        'flex-justify-around': this.justifyAround,
        'flex-align-start': this.alignStart,
        'flex-align-end': this.alignEnd,
        'flex-align-center': this.alignCenter,
        'flex-align-baseline': this.alignBaseline,
        'flex-align-stretch': this.alignStretch
      };
      var classArr = [];
      var keys = Object.keys(map);
      keys.forEach(function (key) {
        map[key] && classArr.push(key);
      });
      return classArr;
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['flex', this.className].concat(_toConsumableArray(this.getClassArray))
    }, this.$slots.default);
  }
};
exports.default = _default;