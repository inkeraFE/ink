import './style.css'
import inkFlex from '../flex'

export default {
  name: 'ink-page',
  components: {
    inkFlex
  },
  render(h) {
    return h(
      'ink-flex',
      {
        staticClass: 'ink-page',
        attrs: {
          column: true
        }
      },
      [
        this.$slots.header &&
          h(
            'ink-flex',
            {
              staticClass: 'page-header',
              attrs: {
                column: true,
                none: true
              }
            },
            this.$slots.header
          ),
        h(
          'ink-flex',
          {
            staticClass: 'page-content block',
            attrs: {
              flex: 1
            }
          },
          this.$slots.content
        ),
        this.$slots.bottom &&
          h(
            'ink-flex',
            {
              staticClass: 'page-tabbar',
              attrs: {
                column: true,
                none: true
              }
            },
            this.$slots.bottom
          )
      ].filter(_ => _)
    )
  }
}
