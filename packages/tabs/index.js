import inkCarousel from '../carousel'

export default {
  name: 'ink-tabs',
  props: {
    value: {
      type: Number
    },
    isGesture: {
      type: Boolean,
      default: true
    },
    text: {
      type: String
    }
  },
  components: {
    inkCarousel
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'ink-tabs'
      },
      [
        this.$slots.navbar,
        h(
          'ink-carousel',
          {
            attrs: {
              isTabs: true,
              value: this.value,
              isLock: !this.isGesture
            },
            on: {
              input: val => {
                this.$emit('input', val)
              }
            }
          },
          this.$slots.default
        )
      ]
    )
  }
}
