import './style.css'

export default {
  name: 'ink-slide',
  data() {
    return {
      startX: 0,
      moveX: 0,
      preMoveX: 0,
      tempMoveX: 0,
      slideDomStyle: {
        transform: 'translate3d(0, 0, 0)',
        'transition-duration': '0ms'
      }
    }
  },
  methods: {
    onTouchStart(event) {
      this.startX = event.targetTouches[0].pageX
    },
    onTouchMove(event) {
      event.preventDefault()
      const slideDom = event.currentTarget
      const actionDom = slideDom.children.item(slideDom.children.length - 1)
      this.moveX = event.changedTouches[0].pageX - this.startX
      this.tempMoveX = this.moveX + this.preMoveX
      if (
        this.tempMoveX < 0 &&
        Math.abs(this.tempMoveX) >= actionDom.offsetWidth
      ) {
        return
      }
      if (this.$slots.action === void 0 && this.tempMoveX < 0) return
      this.slideDomStyle.transform = `translate3d(${this.tempMoveX}px, 0, 0)`
    },
    onTouchEnd(event) {
      if (!this.tempMoveX) return
      const slideDom = event.currentTarget
      const actionDom = slideDom.children.item(slideDom.children.length - 1)
      const rightWidthTotal = actionDom.offsetWidth
      let animWidth = 0

      if (this.$slots.action !== void 0 && this.tempMoveX < 0) {
        if (this.moveX < 0 && Math.abs(this.tempMoveX) > rightWidthTotal / 2) {
          animWidth = -1 * actionDom.offsetWidth
        }
        // reload back
        if (this.moveX > 0 && Math.abs(this.tempMoveX) < rightWidthTotal / 2) {
          animWidth = 0
        }
      }
      this.slideDomStyle['transition-duration'] = '100ms'
      this.slideDomStyle.transform = `translate3d(${animWidth}px, 0, 0)`
      slideDom.addEventListener(
        'transitionend',
        () => {
          this.preMoveX = animWidth
          this.slideDomStyle['transition-duration'] = '0ms'
        },
        { capture: false, once: true }
      )
    }
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'ink-slide'
      },
      [
        h(
          'div',
          {
            staticClass: 'slide-box',
            style: this.slideDomStyle,
            on: {
              touchstart: this.onTouchStart.bind(this),
              touchmove: this.onTouchMove.bind(this),
              touchend: this.onTouchEnd.bind(this)
            }
          },
          [
            h(
              'div',
              {
                staticClass: 'slide-content-box'
              },
              this.$slots.default
            ),
            h(
              'div',
              {
                staticClass: 'slide-action-box'
              },
              this.$slots.action
            )
          ]
        )
      ]
    )
  }
}
