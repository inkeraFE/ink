import './style.css'

export default {
  name: 'ink-btn',
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
    disabled: {
      type: Boolean,
      default: false
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
        class: [
          'ink-btn',
          this.typeClass,
          this.sizeClass,
          this.disabled ? 'is-disabled' : ''
        ],
        disabled: this.disabled,
        on: {
          click: evt => {
            this.$emit('click', evt)
          }
        }
      },
      this.$slots.default
    )
  }
}
