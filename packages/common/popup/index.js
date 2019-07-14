import popupManager from './manage'
import mask from '../mask'

export default {
  name: 'ink-popup',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        popupManager.createPopup(this.$el)
        popupManager.lockScroll()
        mask.show()
      } else {
        mask.close()
        popupManager.openScroll()
      }
    }
  }
}
