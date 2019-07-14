import Vue from 'vue'
import { isObject } from '../common/util'
import Base from './popup'
/**
 * children: element
 * left
 * right
 * bottom
 * top
 * width
 * height
 */

const PopupClass = Vue.extend(Base)

PopupClass.prototype.config = function(options) {
  Object.keys(options).forEach(key => {
    this[key] = options[key]
  })
}

PopupClass.prototype.close = function() {
  this.isShow = false
}

PopupClass.prototype.show = function() {
  this.isShow = true
}

function Popup(options) {
  var popupInstance = new PopupClass({ el: document.createElement('div') })
  popupInstance.config(options)
  popupInstance.show()
}

Popup.render = function(options) {
  if (!isObject(options)) options = { bottom: true }
  return Popup(options)
}

export default Popup
