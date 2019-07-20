import inkPopup from '../common/popup'
import inkBtn from '../button'
import pickerColumn from './column'
import { slideTopTransition } from '../common/transition'

export default {
  name: 'ink-picker',
  mixins: [inkPopup],
  data() {
    return {
      pickerArr: [],
      selectArr: []
    }
  },
  components: {
    inkBtn,
    pickerColumn
  },
  methods: {
    handleData(actionDepth, childrens) {
      const insertVnode = this.$createElement('picker-column', {
        attrs: {
          colList: childrens,
          selected: this.selected[actionDepth] || null
        },
        on: {
          selValue: val => {
            this.selectArr[actionDepth] = val
            if (val.childrens) {
              this.pickerArr.splice(actionDepth + 1)
              this.handleData(actionDepth + 1, val.childrens)
            } else {
              this.selectArr.splice(actionDepth + 1)
            }
          }
        }
      })
      let currentSelected = childrens[0]
      childrens.forEach(element => {
        if (this.selected[actionDepth].id === element.id) {
          currentSelected = element
        }
      })

      this.selectArr[actionDepth] = currentSelected
      this.pickerArr.push(insertVnode)
      // initial
      childrens[0] &&
        childrens[0].childrens &&
        this.handleData(actionDepth + 1, childrens[0].childrens)
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleData(0, this.pickerList || [])
    }, 0)
  },
  render(h) {
    const _defaultCancel = {
      'max-height': '39px',
      'font-size': '16px'
    }
    const _defaultSubmit = {
      'max-height': '39px',
      'font-size': '16px',
      color: '#108ee9'
    }

    return h(
      'div',
      {
        staticClass: 'ink-picker',
        on: {
          click: () => {
            this.isShow = false
          }
        }
      },
      [
        h(slideTopTransition, {}, [
          h(
            'div',
            {
              staticClass: 'picker-wrapper',
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
              h(
                'div',
                {
                  staticClass: 'picker-header'
                },
                [
                  h(
                    'ink-btn',
                    {
                      style: _defaultCancel,
                      on: {
                        click: () => {
                          this.isShow = false
                          this.cancel &&
                            this.cancel.event &&
                            this.cancel.event()
                        }
                      }
                    },
                    (this.cancel && this.cancel.text) || ''
                  ),
                  h(
                    'ink-btn',
                    {
                      style: _defaultSubmit,
                      on: {
                        click: () => {
                          this.isShow = false
                          this.submit &&
                            this.submit.event &&
                            this.submit.event(this.selectArr)
                        }
                      }
                    },
                    (this.submit && this.submit.text) || ''
                  )
                ]
              ),
              h(
                'div',
                {
                  staticClass: 'picker-content'
                },
                [
                  h(
                    'div',
                    { staticClass: 'picker-col-content' },
                    this.pickerArr
                  ),
                  h('div', {
                    staticClass: 'picker-indicator'
                  }),
                  h('div', {
                    staticClass: 'picker-mask'
                  })
                ]
              )
            ]
          )
        ])
      ]
    )
  }
}
