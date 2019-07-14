import { setHash, getHash } from '../util'

export default {
  lockScroll: function() {
    document.body.style.overflow = 'hidden'
  },
  openScroll: function() {
    document.body.removeAttribute('style')
  },
  createPopup: function(popupTarget) {
    setHash()
    const popupDom = document.createElementNS(
      `ink-popup-wrapper${getHash()}`,
      'div'
    )
    popupDom.appendChild(popupTarget)
    document.body.appendChild(popupDom)
  },
  removePopup: function() {
    const popupDom = document.getElementsByTagNameNS(
      `ink-popup-wrapper${getHash()}`,
      'div'
    )[0]
    popupDom && popupDom.parentNode.removeChild(popupDom)
  }
}
