import './style.css'

export default {
  name: 'ink-radio',
  props: {
    name: {
      type: String
    },
    val: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  computed: {
    bgColor() {
      if (this.value === this.val) return this.color
      else return 'white'
    }
  },
  render(h) {
    return h(
      'label',
      {
        staticClass: 'ink-radio'
      },
      [
        h('input', {
          attrs: {
            type: 'radio',
            name: this.name,
            value: this.val
          },
          domProps: {
            checked: this.value === this.val,
            disabled: this.disabled
          },
          staticClass: 'radio-input',
          on: {
            change: event => {
              this.checked = event.target.value === this.val
              this.$emit('input', event.target.value)
            }
          }
        }),
        h('label', {
          staticClass: 'radio-label',
          style: {
            background: this.bgColor
          }
        })
      ]
    )
  }
}
