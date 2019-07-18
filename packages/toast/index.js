import Vue from 'vue'
import Base from './toast'
import { isObject } from '../common/util'

/**
 * options : string | object
 * { message, duration, position }
 */
const ToastClass = Vue.extend(Base)

ToastClass.prototype.config = function(options) {
  if (isObject(options)) {
    this.message = options.message
    this.duration = options.duration || 1000
    this.position = options.position || 'bottom'
  } else {
    this.message = options
    this.duration = 1000
    this.position = 'bottom'
  }
}

ToastClass.prototype.removeToast = function(event) {
  event.target.parentNode.removeChild(event.target)
}

ToastClass.prototype.close = function() {
  this.isActive = false
  this.$el.addEventListener('transitionend', this.removeToast, {
    capture: false,
    once: true
  })
}

ToastClass.prototype.show = function() {
  this.isActive = true
}

function Toast(options) {
  const toastInstance = new ToastClass({ el: document.createElement('div') })
  toastInstance.config(options)
  document.body.appendChild(toastInstance.$el)

  const sTimer = setTimeout(function() {
    toastInstance.show()
    clearTimeout(sTimer)
  }, 0)

  const eTimer = setTimeout(function() {
    toastInstance.close()
    clearTimeout(eTimer)
  }, toastInstance.duration)
}

export default Toast
