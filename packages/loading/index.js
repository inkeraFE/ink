import './style.css'

export default {
  name: 'ink-loading',
  props: {
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  computed: {
    bgColor() {
      return 'white'
    },
    borderColor() {
      return this.color
    }
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'ink-loading',
        style: {
          background: this.bgColor
        }
      },
      [
        h('div', {
          staticClass: 'loading-item',
          style: {
            'border-bottom-color': this.borderColor,
            'border-top-color': this.borderColor
          }
        })
      ]
    )
  }
}
