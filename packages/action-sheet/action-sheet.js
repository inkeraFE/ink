import './style.css'
import inkPopup from '../common/popup'
import { slideTopTransition } from '../common/transition'
import { isObject } from '../common/util'

export default {
  name: 'ink-action-sheet',
  mixin: [inkPopup],
  render: function(h) {
    return h(
      'div',
      {
        staticClass: 'ink-action-sheet',
        on: {
          click: () => {
            this.isShow = false
          }
        }
      },
      [
        h(slideTopTransition, {}, [
          h(
            'ul',
            {
              staticClass: 'action-sheet-content',
              directives: [
                {
                  name: 'show',
                  value: this.isShow
                }
              ],
              on: {
                click: event => {
                  event.stopPropagation()
                }
              }
            },
            [
              ...[
                this.actionList &&
                  this.actionList.map((el, index) => {
                    return h(
                      'li',
                      {
                        staticClass: 'action-sheet-item',
                        style: isObject(el.style) && el.style,
                        on: {
                          click: () => {
                            this.onSelect && this.onSelect(el, index)
                          }
                        }
                      },
                      el.text
                    )
                  })
              ],
              this.cancelBtn &&
                h(
                  'div',
                  {
                    staticClass: 'action-sheet-cancel',
                    style:
                      isObject(this.cancelBtn.style) && this.cancelBtn.style,
                    on: {
                      click: () => {
                        this.onCancel && this.onCancel()
                        this.isShow = false
                      }
                    }
                  },
                  this.cancelBtn.text
                )
            ]
          )
        ])
      ]
    )
  }
}
