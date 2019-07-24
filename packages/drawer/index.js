import './style.css'
import inkFlex from '../flex'
import { fadeTransition } from '../common/transition'

export default {
  name: 'ink-drawer',
  data() {
    return {
      showMask: false,
      transform: 'translate3d(0, 0, 0)'
    }
  },
  components: { inkFlex },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dWidth: {
      type: String,
      default: '250px'
    },
    dHeight: {
      type: String,
      default: '100vh'
    }
  },
  watch: {
    value(val) {
      this.showMask = val
      if (val) {
        this.transform = `translate3d(${this.dWidth}, 0, 0)`
      } else {
        this.transform = 'translate3d(0, 0, 0)'
      }
    }
  },
  render(h) {
    const maskRender = h(fadeTransition, {}, [
      h('div', {
        staticClass: 'drawer-mask',
        directives: [
          {
            name: 'show',
            value: this.showMask
          }
        ],
        on: {
          click: () => {
            this.showMask = false
            this.transform = 'translate3d(0, 0, 0)'
            this.$emit('input', false)
          }
        }
      })
    ])
    return h(
      'div',
      {
        class: 'ink-drawer',
        style: {
          height: this.dHeight
        }
      },
      [
        h(
          'div',
          {
            staticClass: 'drawer-wrapper'
          },
          [
            h(
              'div',
              {
                staticClass: 'drawer-popup-wrapper',
                style: {
                  width: `${this.dWidth}`,
                  height: '100%',
                  left: `-${this.dWidth}`,
                  transform: this.transform
                }
              },
              this.$slots.navbar
            ),
            h(
              'div',
              {
                staticClass: 'drawer-content'
              },
              this.$slots.content
            ),
            maskRender
          ]
        )
      ]
    )
  }
}
