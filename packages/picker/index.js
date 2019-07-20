import Vue from 'vue'
import Base from './picker'
import './style.css'

const PickerClass = Vue.extend(Base)

/**
 * data： [
 *  {
 *     text: 1996,
 *     id: 1
 *     childrens: [{
 *				text: 122,
 *        id: 11
 *				childrens: [...]
 *			},...]
 *   },
 * 	 ...
 * ]
 */
PickerClass.prototype.config = function(options) {
  this.pickerList = options.data
  this.selected = options.selected
  this.submit = {
    event: options.onSubmit,
    text: options.submitText || '确定'
  }
  this.cancel = {
    event: options.onCancel,
    text: options.cancelText || '取消'
  }
}

PickerClass.prototype.close = function() {
  this.isShow = false
}

PickerClass.prototype.show = function() {
  this.isShow = true
}

function Picker(options) {
  var pickerInstance = new PickerClass({ el: document.createElement('div') })
  pickerInstance.config(options)
  pickerInstance.show()
}

Picker.render = function(options) {
  return Picker(options)
}

export default Picker
