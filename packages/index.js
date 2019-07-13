import pkgInfo from '../package.json'
import Button from './button'
import Flex from './flex'
import Switch from './switch'
import Radio from './radio'
import Loading from './loading'

const version = pkgInfo.version
const compList = [Button, Flex, Switch, Radio, Loading]

const install = function(Vue) {
  // handle js plugin

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

export { Button, Flex, Switch, Radio, Loading }

export default {
  version,
  install
}
