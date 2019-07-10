import './style.css'
// v-model 会把 value 用作 prop 且把 input 用作 event

export default {
  name: 'ink-switch',
  computed: {
    inner_value: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    mainColor() {
      if (this.inner_value) {
        return this.color
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  render(h) {
    return h('label', { staticClass: 'ink-switch' }, [
      h('input', {
        staticClass: 'switch-input',
        attrs: {
          type: 'checkbox'
        },
        domProps: {
          checked: this.inner_value
        },
        on: {
          change: event => {
            this.inner_value = event.target.checked
          }
        }
      }),
      h('label', {
        staticClass: 'switch-label',
        style: {
          background: this.mainColor
        }
      })
    ])
  }
}
