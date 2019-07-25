import './style.css'

export default {
  name: 'ink-pull-down',
  data() {
    return {
      startY: 0,
      moveY: 0,
      promptHeight: 0,
      lock: false,
      pullStyle: {
        transform: 'translate3d(0, 0, 0)',
        'transition-duration': '0ms'
      }
    }
  },
  props: {
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
    onTouchStart(event) {
      this.startY = event.targetTouches[0].pageY
      this.moveY = 0
    },
    onTouchMove(event) {
      const eventTarget = event.currentTarget
      this.moveY = event.changedTouches[0].pageY - this.startY
      if (this.moveY > 0) {
        event.preventDefault()
        event.stopPropagation()
        this.$slots.pull !== void 0
          ? (this.promptHeight = eventTarget.children.item(0).offsetHeight)
          : console.warn('expect a pull slot, but not found!')
      }
      Math.abs(this.moveY) > this.promptHeight && this.$emit('promptDisplay')
      if (Math.abs(this.moveY) > this.maxMove) return
      this.pullStyle.transform = `translate3d(0, ${this.moveY}px, 0)`
    },
    onTouchEnd(event) {
      if (Math.abs(this.moveY) < 5) {
        this.pullStyle = {
          transform: 'translate3d(0, 0, 0)',
          'transition-duration': '0ms'
        }
        return
      }

      const eventTarget = event.currentTarget
      let time = this.delay
      Math.abs(this.moveY) > this.promptHeight
        ? this.$emit('touchEnd')
        : (time = 0)
      setTimeout(() => {
        this.pullStyle['transition-duration'] = '150ms'
        this.pullStyle.transform = 'translate3d(0, 0, 0)'
        eventTarget.addEventListener(
          'transitionend',
          () => {
            this.pullStyle['transition-duration'] = '0ms'
            this.$emit('pullEnd')
          },
          { capture: false, once: true }
        )
      }, time)
    }
  },
  render(h) {
    return h('div', { staticClass: 'ink-pull' }, [
      h('div', { staticClass: 'pull-wrapper' }, [
        h(
          'div',
          {
            staticClass: 'pull-content',
            style: this.pullStyle,
            on: {
              touchstart: event => this.onTouchStart(event),
              touchmove: event => this.onTouchMove(event),
              touchend: event => this.onTouchEnd(event)
            }
          },
          [
            h('div', { staticClass: 'pull-top-refresh' }, this.$slots.pull),
            this.$slots.box
          ]
        )
      ])
    ])
  }
}
