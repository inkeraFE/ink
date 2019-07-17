import Vue from 'vue'
import Base from './action-sheet'
import { isObject } from '../common/util'

const ActionSheetClass = Vue.extend(Base)

/**
 * actionList [{ text, style, ... }]
 * cancelBtn { text, style, ... }
 * onSelect fuc
 * onCancel fuc
 */

ActionSheetClass.prototype.config = function(options) {
  this.cancelBtn = options.cancelBtn
  this.actionList = options.list
  this.onSelect = options.onSelect
  this.onCancel = options.onCancel
}

ActionSheetClass.prototype.close = function() {
  this.isShow = false
}

ActionSheetClass.prototype.show = function() {
  this.isShow = true
}

function ActionSheet(options) {
  const actionSheetInstance = new ActionSheetClass({
    el: document.createElement('div')
  })
  actionSheetInstance.config(options)
  actionSheetInstance.show()
}

ActionSheet.render = function(options) {
  if (!isObject(options)) options = {}
  return ActionSheet(options)
}

export default ActionSheet
