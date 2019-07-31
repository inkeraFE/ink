// return h('div', {staticClass: 'icon-clear'})

import './style.css'
export default {
  name: 'ink-search-bar',
  data() {
    return {
      innerValue: null,
      showClear: false
    }
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    canClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.innerValue = val
    },
    innerValue(val) {
      this.$emit('input', val)
      !this.innerValue && (this.showClear = false)
    }
  },
  render(h) {
    return h(
      'form',
      {
        staticClass: 'ink-search',
        attrs: {
          action: ''
        },
        on: {
          submit: e => {
            this.$emit('submit', e)
          }
        }
      },
      [
        h(
          'div',
          {
            staticClass: 'search-icon'
          },
          [h('div', { staticClass: 'icon-wrapper' })]
        ),
        h('input', {
          domProps: {
            value: this.innerValue
          },
          staticClass: 'search-input',
          attrs: {
            type: 'search',
            placeholder: this.placeholder
          },
          on: {
            input: event => {
              this.innerValue = event.target.value
              if (this.canClear && this.innerValue && !this.showClear)
                this.showClear = true
            },
            focus: () => {
              if (this.canClear && this.innerValue) this.showClear = true
            }
          }
        }),
        this.showClear
          ? h('div', {
              staticClass: 'icon-clear',
              on: {
                click: () => {
                  this.innerValue = ''
                  this.showClear = false
                }
              }
            })
          : null
      ].filter(_ => _)
    )
  }
}
