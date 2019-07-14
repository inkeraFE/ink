import Vue from 'vue'

import { getHash } from '../util'
import popupManager from '../popup/manage'
import Base from './mask'

var MaskClass = Vue.extend(Base)
MaskClass.prototype.show = function() {
  this.isShow = true
}
MaskClass.prototype.close = function() {
  this.isShow = false
  this.$el.addEventListener(
    'transitionend',
    () => {
      popupManager.removePopup()
    },
    { capture: false, once: true }
  )
}

function MaskInstance() {
  this.maskInstance = new MaskClass({ el: document.createElement('div') })
}

export default {
  show: function(actionMask) {
    MaskInstance.call(this)
    const popup = document.getElementsByTagNameNS(
      `ink-popup-wrapper${getHash()}`,
      'div'
    )[0]
    popup.appendChild(this.maskInstance.$el)
    setTimeout(() => {
      this.maskInstance.show()
    }, 0)
  },
  close: function() {
    this.maskInstance.close()
  }
}
