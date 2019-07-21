import './style.css'

export default {
  name: 'ink-page',
  render(h) {
    return h(
      'div',
      {
        staticClass: 'ink-page'
      },
      [
        h('div', { staticClass: 'page-header' }, this.$slots.header),
        h('div', { staticClass: 'page-content' }, this.$slots.content),
        this.$slots.bottom &&
          h('div', { staticClass: 'page-tabbar' }, this.$slots.bottom)
      ].filter(_ => _)
    )
  }
}
