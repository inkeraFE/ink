import './style.css'
import inkBtn from '../button'
import inkPopup from '../common/popup'
import { fadeTransition } from '../common/transition'
import { isObject } from '../common/util'

export default {
  name: 'ink-dialog',
  mixins: [inkPopup],
  data() {
    return {
      isInput: false,
      isCancel: false,
      isSubmit: true,
      title: null,
      children: null,
      options: null,
      clickMaskClose: false,
      promptValue: null
    }
  },
  components: {
    inkBtn
  },
  render(h) {
    const richRender = h(
      'div',
      {},
      typeof this.children === 'function' ? [this.children(h)] : this.children
    )
    const inputRender = h('input', {
      staticClass: 'ink-dialog-input',
      attrs: {
        placeholder: typeof this.children === 'string' ? this.children : ' '
      },
      on: {
        input: event => {
          this.promptValue = event.target.value
        }
      }
    })

    const _defaultCancel = {
      'line-height': '28px'
    }
    const _defaultSubmit = {
      'line-height': '28px',
      color: '#108ee9'
    }

    const cancelBtn = h(
      'ink-btn',
      {
        attrs: {
          size: 'large'
        },
        style:
          this._cancel && isObject(this._cancel.style)
            ? Object.assign({}, _defaultCancel, this._cancel.style)
            : _defaultCancel,
        nativeOn: {
          click: () => {
            this.close()
            this._cancel &&
              this._cancel.event &&
              (this.isInput
                ? this._cancel.event(this.promptValue)
                : this._cancel.event())
          }
        }
      },
      this._cancel && this._cancel.text
    )
    const submitBtn = h(
      'ink-btn',
      {
        attrs: {
          size: 'large'
        },
        style:
          this._submit && isObject(this._submit.style)
            ? Object.assign({}, _defaultSubmit, this._submit.style)
            : _defaultSubmit,
        nativeOn: {
          click: () => {
            this.close()
            this._submit &&
              this._submit.event &&
              (this.isInput
                ? this._submit.event(this.promptValue)
                : this._submit.event())
          }
        }
      },
      this._submit && this._submit.text
    )
    const btnRender = []
    const titleRender = h(
      'div',
      { staticClass: 'ink-dialog-title' },
      this.title
    )
    if (this.isCancel) btnRender.push(cancelBtn)
    if (this.isSubmit) btnRender.push(submitBtn)
    const contentRender = this.isInput ? inputRender : richRender

    return h(fadeTransition, {}, [
      h(
        'div',
        {
          staticClass: 'ink-dialog',
          directives: [
            {
              name: 'show',
              value: this.isShow
            }
          ],
          on: {
            click: () => {
              if (this.clickMaskClose) this.isShow = false
            }
          }
        },
        [
          h(
            'div',
            {
              staticClass: 'ink-dialog-content'
            },
            [
              titleRender,
              contentRender,
              h('div', { staticClass: 'ink-dialog-btn' }, btnRender)
            ]
          )
        ]
      )
    ])
  }
}
