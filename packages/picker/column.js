const cellHeight = 40

export default {
  name: 'ink-picker-column',
  data() {
    let selectedIndex = 0
    this.selected &&
      this.colList.forEach((element, index) => {
        if (element.id === this.selected.id) {
          selectedIndex = index
        }
      })
    return {
      preMoveY: 0,
      startY: 0,
      moveY: 0,
      transform: `translate3d(0, ${-selectedIndex * cellHeight}px, 0)`,
      'transition-duration': '0ms'
    }
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
  render(h) {
    return h('div', { staticClass: 'picker-col' }, [
      h(
        'ul',
        {
          staticClass: 'picker-bar',
          style: {
            transform: this.transform,
            'transition-duration': this['transition-duration']
          },
          on: {
            touchstart: event => {
              this.startY = event.targetTouches[0].pageY
            },
            touchmove: event => {
              event.preventDefault()
              this.moveY = event.changedTouches[0].pageY - this.startY
              this.transform = `translate3d(0, ${(
                this.moveY + this.preMoveY
              ).toFixed(0)}px, 0)`
            },
            touchend: event => {
              const eventTarget = event.currentTarget
              let animHeight =
                Math.abs(this.moveY) > 20
                  ? (this.moveY > 0
                      ? this.moveY + (cellHeight - (this.moveY % cellHeight))
                      : this.moveY - (cellHeight + (this.moveY % cellHeight))) +
                    this.preMoveY
                  : this.preMoveY
              const limitHeight = eventTarget.offsetHeight - 200

              if (animHeight < -1 * limitHeight) {
                animHeight = -1 * limitHeight
              }
              if (animHeight > 0) {
                animHeight = 0
              }

              this['transition-duration'] = '300ms'
              this.transform = `translate3d(0, ${animHeight}px, 0)`
              this.preMoveY = animHeight

              this.$emit(
                'selValue',
                this.colList[Math.abs(animHeight) / cellHeight]
              )

              eventTarget.addEventListener(
                'transitionend',
                () => {
                  this['transition-duration'] = '0ms'
                },
                { capture: false, once: true }
              )
            }
          }
        },
        this.colList &&
          this.colList.map((el, index) => {
            return h('div', { staticClass: 'picker-item' }, el.text)
          })
      )
    ])
  }
}
