import './style.css'

export default {
  name: 'ink-btn',
  data() {
    return {
      active: false,
      cacheStyle: {}
    }
  },
  computed: {
    typeClass() {
      return this.type === 'primary'
        ? 'btn-primary'
        : this.type === 'danger'
        ? 'btn-danger'
        : this.type === 'warning'
        ? 'btn-warning'
        : 'btn-default'
    },
    activeStyle() {
      let style = {}
      if (this.active) {
        const btnStyles = window.getComputedStyle(this.$el)

        Object.keys(this.actionStyle).forEach((el, index) => {
          if (btnStyles[el]) {
            this.cacheStyle[el] = btnStyles[el]
            style = this.actionStyle[el]
          }
        })
      } else {
        Object.keys(this.cacheStyle).forEach((el, index) => {
          style = this.cacheStyle[el]
        })
      }
      return style
    },
    sizeClass() {
      if (this.size === 'large') return 'btn-large'
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    },
    actionStyle: {
      type: Object,
      default: () => {
        return { background: '#f7f8f9' }
      }
    }
  },
  render(h) {
    return h(
      'button',
      {
        attrs: {
          name: 'button',
          type: 'button'
        },
        class: ['ink-btn', this.typeClass, this.sizeClass],
        style: this.activeStyle,
        on: {
          touchstart: () => {
            this.active = true
          },
          touchend: () => {
            this.active = false
          }
        }
      },
      this.$slots.default
    )
  }
}
