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
import Picker from './picker'
import Header from './header'
import Page from './page'
import Carousel from './carousel'
import Tabs from './tabs'
import Drawer from './drawer'
import PullDown from './pull-down'
import Slide from './slide'
import SearchBar from './search-bar'

const version = pkgInfo.version
const compList = [
  Button,
  Flex,
  Switch,
  Radio,
  Loading,
  Progress,
  Header,
  Page,
  Carousel,
  Tabs,
  Drawer,
  PullDown,
  Slide,
  SearchBar
]

const install = function(Vue) {
  // handle js plugin
  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$popup = Vue.prototype.$popup = Popup
  Vue.$actionSheet = Vue.prototype.$actionSheet = ActionSheet
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$picker = Vue.prototype.$picker = Picker

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
  Toast,
  Picker,
  Header,
  Page,
  Carousel,
  Tabs,
  Drawer,
  PullDown,
  Slide,
  SearchBar
}

export default {
  version,
  install
}
