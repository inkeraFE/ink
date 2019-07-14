import './style.css'
import inkPopup from '../common/popup'
import { fadeTransition } from '../common/transition'

export default {
  name: 'ink-popup',
  mixins: [inkPopup],
  data() {
    return {
      children: null,
      top: false,
      left: false,
      right: false,
      bottom: false,
      width: '100%',
      height: '100%',
      clickMaskClose: false
    }
  },
  render(h) {
    return h(fadeTransition, {}, [
      h(
        'div',
        {
          staticClass: 'ink-popup',
          directives: [
            {
              name: 'show',
              value: this.isShow
            }
          ],
          on: {
            click: event => {
              if (this.clickMaskClose) this.isShow = false
            }
          }
        },
        [
          h(
            'div',
            {
              staticClass: 'ink-popup-content',
              style: {
                width: this.width,
                height: this.height,
                bottom: this.bottom ? 0 : 'auto',
                top: this.top ? 0 : 'auto'
              },
              on: {
                click: event => {
                  event.preventDefault()
                  event.stopPropagation()
                }
              }
            },
            [
              typeof this.children === 'function'
                ? this.children(h)
                : this.children
            ]
          )
        ]
      )
    ])
  }
}
