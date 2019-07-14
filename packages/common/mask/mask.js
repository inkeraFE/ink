import './style.css'

export default {
  name: 'ink-mask',
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    animClass() {
      if (this.isShow) {
        return 'mask-anim'
      }
    }
  },
  render(h) {
    return h('div', {
      class: ['ink-mask', this.animClass]
    })
  }
}
