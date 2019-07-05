import pkgInfo from '../package.json'
import Button from './button'
import Flex from './flex'

const version = pkgInfo.version
const compList = [Button, Flex]

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

export { Button, Flex }

export default {
  version,
  install
}
