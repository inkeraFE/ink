import './style.css'

export default {
  name: 'ink-carousel',
  data() {
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
    }
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
    value(val) {
      this.isTabs && this.changeIndex()
    },
    activeIdx(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.changeIndex(true)
    this.startAnim()
  },
  methods: {
    changeIndex(isInit) {
      const carouselDom = this.$el.children.item(0)
      this.preMoveX = -1 * carouselDom.offsetWidth * this.value

      this.carouselStyle = {
        'transition-duration': !isInit ? '300ms' : '0ms',
        transform: `translate3d(${this.preMoveX}px, 0, 0)`
      }
    },
    update(moveX, offsetWidth) {
      this.activeIdx = Math.abs(moveX) / offsetWidth
      if (this.loop && this.activeIdx >= this._carouseLength - 1) {
        this.activeIdx = 0
      }

      this.carouselStyle = {
        'transition-duration': `300ms`,
        transform: `translate3d(${moveX}px, 0, 0)`
      }
      this.listenAnimEnd(moveX)
    },
    animation() {
      const carouselDom = this.$el.children.item(0)
      const { offsetWidth } = carouselDom
      this.timer = setTimeout(() => {
        let moveX
        let updateTimer
        const compareMovex = this.preMoveX - offsetWidth
        if (this.loop) {
          this.handleLoop(compareMovex)
          moveX = this.preMoveX - offsetWidth
        } else if (
          Math.abs(compareMovex) >
          offsetWidth * (this._carouseLength - 1)
        ) {
          this.preMoveX = 0
          moveX = 0
        } else {
          moveX = this.preMoveX - offsetWidth
        }
        if (this.loop) {
          // 切换延迟一帧
          updateTimer = setTimeout(() => {
            this.update(moveX, offsetWidth)
            clearTimeout(updateTimer)
          }, 16)
        } else {
          this.update(moveX, offsetWidth)
        }
      }, this.time)
    },
    startAnim() {
      if (this.timer) clearTimeout(this.timer)
      if (this.auto) this.animation()
    },
    handleLoop(moveX) {
      const carouselDom = this.$el.children.item(0)
      const offsetWidth = carouselDom.offsetWidth
      if (Math.abs(moveX) > offsetWidth * (this._carouseLength - 1)) {
        this.preMoveX = 0
        this.carouselStyle.transform = 'translate3d(0, 0, 0)'
      } else if (moveX > 0) {
        this.preMoveX = -1 * offsetWidth * (this._carouseLength - 1)
      }
    },
    listenAnimEnd(animWidth) {
      document.addEventListener(
        'transitionend',
        () => {
          this.preMoveX = animWidth
          this.tempMoveX = 0
          this.carouselStyle['transition-duration'] = '0ms'
          this.startAnim()
        },
        { capture: false, once: true }
      )
    },
    onTouchStart(event) {
      if (this.timer) clearTimeout(this.timer)
      if (this.isLock || !this.canMove) return
      this.touchStartX = event.targetTouches[0].pageX
      this.touchStartY = event.targetTouches[0].pageY
    },
    onTouchMove(event) {
      if (this.isLock) return
      const carouselDom = event.currentTarget
      const touchEndX = event.changedTouches[0].pageX
      const { offsetWidth } = carouselDom
      this.tempMoveX = touchEndX - this.touchStartX

      const moveY = event.changedTouches[0].pageY - this.touchStartY
      const absMoveX = Math.abs(this.tempMoveX)
      if (absMoveX < 5 || (absMoveX >= 5 && moveY >= 1.73 * absMoveX)) {
        this.canMove = false
      } else if (event.cancelable) {
        this.canMove = true
        event.preventDefault()
      }

      if (!this.canMove) return
      const moveX = this.tempMoveX + this.preMoveX

      if (
        !this.loop &&
        (moveX > 0 || Math.abs(moveX) > offsetWidth * (this._carouseLength - 1))
      ) {
        this.tempMoveX = 0
        return
      }

      if (this.loop) this.handleLoop(moveX)

      this.carouselStyle.transform = `translate3d(${moveX}px, 0, 0)`
    },
    onTouchEnd(event) {
      if (this.isLock || !this.canMove) return

      const carouselDom = event.currentTarget
      const { offsetWidth } = carouselDom
      let animWidth =
        Math.abs(this.tempMoveX) > offsetWidth / 2
          ? this.tempMoveX > 0
            ? this.preMoveX + offsetWidth
            : this.preMoveX - offsetWidth
          : this.preMoveX
      this.update(animWidth, offsetWidth)
    }
  },
  render(h) {
    let paginationArr = []
    let paginationRender
    const carouselList =
      this.$slots.default &&
      this.$slots.default
        .map((el, index) => {
          if (el.tag !== void 0) {
            return h('li', { staticClass: 'carousel-item' }, [el])
          }
        })
        .filter((el, index) => {
          if (el !== void 0) return el
        })
    if (carouselList) {
      for (let i = 0; i < carouselList.length; i++) {
        paginationArr.push(
          h('li', {
            class: [
              'point',
              {
                'is-active': this.activeIdx === i
              }
            ]
          })
        )
      }
      paginationRender = this.pagination
        ? h('ul', { staticClass: 'pagination-point-wrapper' }, paginationArr)
        : void 0
      if (this.loop) carouselList.push(carouselList[0])
    }
    this._carouseLength = carouselList.length
    return h('div', { staticClass: 'ink-carousel' }, [
      h(
        'ul',
        {
          staticClass: 'carousel-wrapper',
          style: this.carouselStyle,
          on: {
            touchstart: event => this.onTouchStart(event),
            touchmove: event => this.onTouchMove(event),
            touchend: event => this.onTouchEnd(event)
          }
        },
        carouselList
      ),
      paginationRender
    ])
  }
}
