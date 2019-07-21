"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'ink-carousel',
  data: function data() {
    return {
      preMoveX: 0,
      tempMoveX: 0,
      touchStartX: 0,
      touchStartY: 0,
      activeIdx: 0,
      timer: null,
      canMove: true,
      carouselStyle: {
        'transition-duration': '0ms',
        transform: 'translate3d(0, 0, 0)'
      }
    };
  },
  props: {
    isTabs: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    isLock: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    auto: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    value: function value(val) {
      this.isTabs && this.changeIndex();
    },
    activeIdx: function activeIdx(val) {
      this.$emit('input', val);
    }
  },
  mounted: function mounted() {
    this.changeIndex(true);
    this.startAnim();
  },
  methods: {
    changeIndex: function changeIndex(isInit) {
      var carouselDom = this.$el.children.item(0);
      this.preMoveX = -1 * carouselDom.offsetWidth * this.value;
      this.carouselStyle = {
        'transition-duration': !isInit ? '300ms' : '0ms',
        transform: "translate3d(".concat(this.preMoveX, "px, 0, 0)")
      };
    },
    update: function update(moveX, offsetWidth) {
      this.activeIdx = Math.abs(moveX) / offsetWidth;

      if (this.loop && this.activeIdx >= this._carouseLength - 1) {
        this.activeIdx = 0;
      }

      this.carouselStyle = {
        'transition-duration': "300ms",
        transform: "translate3d(".concat(moveX, "px, 0, 0)")
      };
      this.listenAnimEnd(moveX);
    },
    animation: function animation() {
      var _this = this;

      var carouselDom = this.$el.children.item(0);
      var offsetWidth = carouselDom.offsetWidth;
      this.timer = setTimeout(function () {
        var moveX;
        var updateTimer;
        var compareMovex = _this.preMoveX - offsetWidth;

        if (_this.loop) {
          _this.handleLoop(compareMovex);

          moveX = _this.preMoveX - offsetWidth;
        } else if (Math.abs(compareMovex) > offsetWidth * (_this._carouseLength - 1)) {
          _this.preMoveX = 0;
          moveX = 0;
        } else {
          moveX = _this.preMoveX - offsetWidth;
        }

        if (_this.loop) {
          // 切换延迟一帧
          updateTimer = setTimeout(function () {
            _this.update(moveX, offsetWidth);

            clearTimeout(updateTimer);
          }, 16);
        } else {
          _this.update(moveX, offsetWidth);
        }
      }, this.time);
    },
    startAnim: function startAnim() {
      if (this.timer) clearTimeout(this.timer);
      if (this.auto) this.animation();
    },
    handleLoop: function handleLoop(moveX) {
      var carouselDom = this.$el.children.item(0);
      var offsetWidth = carouselDom.offsetWidth;

      if (Math.abs(moveX) > offsetWidth * (this._carouseLength - 1)) {
        this.preMoveX = 0;
        this.carouselStyle.transform = 'translate3d(0, 0, 0)';
      } else if (moveX > 0) {
        this.preMoveX = -1 * offsetWidth * (this._carouseLength - 1);
      }
    },
    listenAnimEnd: function listenAnimEnd(animWidth) {
      var _this2 = this;

      document.addEventListener('transitionend', function () {
        _this2.preMoveX = animWidth;
        _this2.tempMoveX = 0;
        _this2.carouselStyle['transition-duration'] = '0ms';

        _this2.startAnim();
      }, {
        capture: false,
        once: true
      });
    },
    onTouchStart: function onTouchStart(event) {
      if (this.timer) clearTimeout(this.timer);
      if (this.isLock || !this.canMove) return;
      this.touchStartX = event.targetTouches[0].pageX;
      this.touchStartY = event.targetTouches[0].pageY;
    },
    onTouchMove: function onTouchMove(event) {
      if (this.isLock) return;
      var carouselDom = event.currentTarget;
      var touchEndX = event.changedTouches[0].pageX;
      var offsetWidth = carouselDom.offsetWidth;
      this.tempMoveX = touchEndX - this.touchStartX;
      var moveY = event.changedTouches[0].pageY - this.touchStartY;
      var absMoveX = Math.abs(this.tempMoveX);

      if (absMoveX < 5 || absMoveX >= 5 && moveY >= 1.73 * absMoveX) {
        this.canMove = false;
      } else if (event.cancelable) {
        this.canMove = true;
        event.preventDefault();
      }

      if (!this.canMove) return;
      var moveX = this.tempMoveX + this.preMoveX;

      if (!this.loop && (moveX > 0 || Math.abs(moveX) > offsetWidth * (this._carouseLength - 1))) {
        this.tempMoveX = 0;
        return;
      }

      if (this.loop) this.handleLoop(moveX);
      this.carouselStyle.transform = "translate3d(".concat(moveX, "px, 0, 0)");
    },
    onTouchEnd: function onTouchEnd(event) {
      if (this.isLock || !this.canMove) return;
      var carouselDom = event.currentTarget;
      var offsetWidth = carouselDom.offsetWidth;
      var animWidth = Math.abs(this.tempMoveX) > offsetWidth / 2 ? this.tempMoveX > 0 ? this.preMoveX + offsetWidth : this.preMoveX - offsetWidth : this.preMoveX;
      this.update(animWidth, offsetWidth);
    }
  },
  render: function render(h) {
    var _this3 = this;

    var paginationArr = [];
    var paginationRender;
    var carouselList = this.$slots.default && this.$slots.default.map(function (el, index) {
      if (el.tag !== void 0) {
        return h('li', {
          staticClass: 'carousel-item'
        }, [el]);
      }
    }).filter(function (el, index) {
      if (el !== void 0) return el;
    });

    if (carouselList) {
      for (var i = 0; i < carouselList.length; i++) {
        paginationArr.push(h('li', {
          class: ['point', {
            'is-active': this.activeIdx === i
          }]
        }));
      }

      paginationRender = this.pagination ? h('ul', {
        staticClass: 'pagination-point-wrapper'
      }, paginationArr) : void 0;
      if (this.loop) carouselList.push(carouselList[0]);
    }

    this._carouseLength = carouselList.length;
    return h('div', {
      staticClass: 'ink-carousel'
    }, [h('ul', {
      staticClass: 'carousel-wrapper',
      style: this.carouselStyle,
      on: {
        touchstart: function touchstart(event) {
          return _this3.onTouchStart(event);
        },
        touchmove: function touchmove(event) {
          return _this3.onTouchMove(event);
        },
        touchend: function touchend(event) {
          return _this3.onTouchEnd(event);
        }
      }
    }, carouselList), paginationRender]);
  }
};
exports.default = _default;