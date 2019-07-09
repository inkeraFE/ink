import './style.css'

export default {
  name: 'ink-flex',
  props: {
    flex: {
      type: Number
    },
    auto: {
      type: Boolean,
      default: false
    },
    none: {
      type: Boolean,
      default: false
    },

    width: {
      type: String
    },
    height: {
      type: String
    },

    row: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },

    wrap: {
      type: Boolean,
      default: false
    },
    nowrap: {
      type: Boolean,
      default: false
    },

    justifyStart: {
      type: Boolean,
      default: false
    },
    justifyEnd: {
      type: Boolean,
      default: false
    },
    justifyCenter: {
      type: Boolean,
      default: false
    },
    justifyBetween: {
      type: Boolean,
      default: false
    },
    justifyAround: {
      type: Boolean,
      default: false
    },

    alignStart: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    alignBaseline: {
      type: Boolean,
      default: false
    },
    alignStretch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClassArray() {
      const map = {
        'flex-flex': this.flex,
        'flex-auto': this.auto,
        'flex-none': this.none || this.width || this.height,

        'flex-row': this.row,
        'flex-column': this.column,

        'flex-wrap': this.wrap,
        'flex-nowrap': this.nowrap,

        'flex-justify-start': this.justifyStart,
        'flex-justify-end': this.justifyEnd,
        'flex-justify-center': this.justifyCenter,
        'flex-justify-between': this.justifyBetween,
        'flex-justify-around': this.justifyAround,

        'flex-align-start': this.alignStart,
        'flex-align-end': this.alignEnd,
        'flex-align-center': this.alignCenter,
        'flex-align-baseline': this.alignBaseline,
        'flex-align-stretch': this.alignStretch
      }
      const classArr = []
      const keys = Object.keys(map)
      keys.forEach(key => {
        map[key] && classArr.push(key)
      })
      return classArr
    },
    getStyle() {
      let s = {}
      if (this.flex) {
        s.flex = typeof this.flex === 'boolean' ? 1 : this.flex
        s.WebkitFlex = typeof this.flex === 'boolean' ? 1 : this.flex
      }
      if (this.height) {
        s.height = this.height
      }
      if (this.width) {
        s.width = this.width
      }
      return s
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: ['flex', ...this.getClassArray],
        style: this.getStyle
      },
      this.$slots.default
    )
  }
}
