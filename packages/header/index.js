import './style.css'

export default {
  name: 'ink-header',
  render(h) {
    const slotsDefault = h('div')
    return h(
      'header',
      {
        staticClass: 'ink-header'
      },
      [
        this.$slots.left || slotsDefault,
        this.$slots.center || slotsDefault,
        this.$slots.right || slotsDefault
      ]
    )
  }
}
