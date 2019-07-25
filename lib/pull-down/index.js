"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-pull-down',
  data: function data() {
    return {
      startY: 0,
      moveY: 0,
      promptHeight: 0,
      lock: false,
      pullStyle: {
        transform: 'translate3d(0, 0, 0)',
        'transition-duration': '0ms'
      }
    };
  },
  props: {
    pHeight: {
      type: String,
      default: 'calc(100vh - 50px)'
    },
    maxMove: {
      type: Number,
      default: 50
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.lock && this.$el.scrollTop + this.$el.clientHeight === this.$el.scrollHeight && this.moveY < 0) {
        this.lock = false;
      }

      this.startY = event.targetTouches[0].pageY;
      this.moveY = 0;
    },
    onTouchMove: function onTouchMove(event) {
      var eventTarget = event.currentTarget;
      var scrollYStyle = document.defaultView.getComputedStyle(this.$el).overflowY;
      this.moveY = event.changedTouches[0].pageY - this.startY;

      if (!this.lock && (scrollYStyle === 'auto' || scrollYStyle === 'scroll') && (this.$el.scrollTop === 0 && this.moveY < 5 || this.$el.scrollTop && this.$el.scrollTop + this.$el.clientHeight < this.$el.scrollHeight || this.$el.scrollTop + this.$el.clientHeight === this.$el.scrollHeight && this.moveY > 0)) {
        this.lock = true;
      }

      if (this.lock) return;

      if (this.moveY > 0) {
        event.preventDefault();
        event.stopPropagation();
        this.$slots.pull !== void 0 ? this.promptHeight = eventTarget.children.item(0).offsetHeight : console.warn('expect a pull slot, but not found!');
      }

      Math.abs(this.moveY) > this.promptHeight && this.$emit('promptDisplay');
      if (Math.abs(this.moveY) > this.maxMove) return;
      this.pullStyle.transform = "translate3d(0, ".concat(this.moveY, "px, 0)");
    },
    onTouchEnd: function onTouchEnd(event) {
      var _this = this;

      if (this.lock) return;

      if (Math.abs(this.moveY) < 5) {
        this.pullStyle = {
          transform: 'translate3d(0, 0, 0)',
          'transition-duration': '0ms'
        };
        return;
      }

      var eventTarget = event.currentTarget;
      var time = this.delay;
      Math.abs(this.moveY) > this.promptHeight ? this.$emit('touchEnd') : time = 0;
      setTimeout(function () {
        _this.pullStyle['transition-duration'] = '150ms';
        _this.pullStyle.transform = 'translate3d(0, 0, 0)';
        eventTarget.addEventListener('transitionend', function () {
          _this.pullStyle['transition-duration'] = '0ms';

          _this.$emit('pullEnd');
        }, {
          capture: false,
          once: true
        });
      }, time);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'ink-pull',
      style: {
        height: this.pHeight
      }
    }, [h('div', {
      staticClass: 'pull-wrapper'
    }, [h('div', {
      staticClass: 'pull-content',
      style: this.pullStyle,
      on: {
        touchstart: function touchstart(event) {
          return _this2.onTouchStart(event);
        },
        touchmove: function touchmove(event) {
          return _this2.onTouchMove(event);
        },
        touchend: function touchend(event) {
          return _this2.onTouchEnd(event);
        }
      }
    }, [h('div', {
      staticClass: 'pull-top-refresh'
    }, this.$slots.pull), this.$slots.box])])]);
  }
};
exports.default = _default;