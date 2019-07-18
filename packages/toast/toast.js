import './style.css'

export default {
  name: 'ink-toast',
  data() {
    return {
      position: null,
      isActive: false
    }
  },
  computed: {
    animClass() {
      return this.isActive ? `${this.position}-active` : 'remove'
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: ['ink-toast', `${this.position}-position`, this.animClass]
      },
      [this.message]
    )
  }
}
