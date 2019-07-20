"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cellHeight = 40;
var _default = {
  name: 'ink-picker-column',
  data: function data() {
    var _this = this;

    var selectedIndex = 0;
    this.selected && this.colList.forEach(function (element, index) {
      if (element.id === _this.selected.id) {
        selectedIndex = index;
      }
    });
    return {
      preMoveY: 0,
      startY: 0,
      moveY: 0,
      transform: "translate3d(0, ".concat(-selectedIndex * cellHeight, "px, 0)"),
      'transition-duration': '0ms'
    };
  },
  props: {
    colList: {
      type: Array
    },
    selected: {
      type: Object,
      default: null
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'picker-col'
    }, [h('ul', {
      staticClass: 'picker-bar',
      style: {
        transform: this.transform,
        'transition-duration': this['transition-duration']
      },
      on: {
        touchstart: function touchstart(event) {
          _this2.startY = event.targetTouches[0].pageY;
        },
        touchmove: function touchmove(event) {
          event.preventDefault();
          _this2.moveY = event.changedTouches[0].pageY - _this2.startY;
          _this2.transform = "translate3d(0, ".concat((_this2.moveY + _this2.preMoveY).toFixed(0), "px, 0)");
        },
        touchend: function touchend(event) {
          var eventTarget = event.currentTarget;
          var animHeight = Math.abs(_this2.moveY) > 20 ? (_this2.moveY > 0 ? _this2.moveY + (cellHeight - _this2.moveY % cellHeight) : _this2.moveY - (cellHeight + _this2.moveY % cellHeight)) + _this2.preMoveY : _this2.preMoveY;
          var limitHeight = eventTarget.offsetHeight - 200;

          if (animHeight < -1 * limitHeight) {
            animHeight = -1 * limitHeight;
          }

          if (animHeight > 0) {
            animHeight = 0;
          }

          _this2['transition-duration'] = '300ms';
          _this2.transform = "translate3d(0, ".concat(animHeight, "px, 0)");
          _this2.preMoveY = animHeight;

          _this2.$emit('selValue', _this2.colList[Math.abs(animHeight) / cellHeight]);

          eventTarget.addEventListener('transitionend', function () {
            _this2['transition-duration'] = '0ms';
          }, {
            capture: false,
            once: true
          });
        }
      }
    }, this.colList && this.colList.map(function (el, index) {
      return h('div', {
        staticClass: 'picker-item'
      }, el.text);
    }))]);
  }
};
exports.default = _default;