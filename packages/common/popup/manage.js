import { setHash, getHash } from '../util'

export default {
  lockScroll: function() {
    document.body.style.overflow = 'hidden'
  },
  openScroll: function() {
    document.body.removeAttribute('style')
  },
  createPopup: function(popupTarget) {
    const popstate = e => {
      this.removePopup()
      window.removeEventListener('popstate', popstate)
    }
    window.addEventListener('popstate', popstate)
    window.history.pushState({ type: '_popup' }, null)

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
    if (!popupDom) return
    popupDom.parentNode.removeChild(popupDom)
    window.history.go(-1)
  }
}
