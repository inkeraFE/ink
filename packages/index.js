import pkgInfo from '../package.json'
import Button from './button'
import Flex from './flex'
import Switch from './switch'
import Radio from './radio'
import Loading from './loading'
import Progress from './progress'
import Dialog from './dialog'
import Popup from './popup'
import ActionSheet from './action-sheet'
import Toast from './toast'

const version = pkgInfo.version
const compList = [Button, Flex, Switch, Radio, Loading, Progress]

const install = function(Vue) {
  // handle js plugin
  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$popup = Vue.prototype.$popup = Popup
  Vue.$actionSheet = Vue.prototype.$actionSheet = ActionSheet
  Vue.$toast = Vue.prototype.$toast = Toast

  // handle component
  compList.forEach(function(Component, idx) {
    Vue.component(Component.name, Component)
  })
  // handle directive
}
// auto install
if (window && window.Vue !== void 0) {
  install(window.Vue)
}

export {
  Button,
  Flex,
  Switch,
  Radio,
  Loading,
  Progress,
  Dialog,
  Popup,
  ActionSheet,
  Toast
}

export default {
  version,
  install
}
