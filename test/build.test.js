/* eslint-disable no-undef */
import Vue from 'vue'
import inkUi from '../dist/ink.cjs.js'

import { Flex, Button } from '../lib/index.js'

const compList = [Flex, Button]

const componentNames = ['ink-btn', 'ink-flex']

describe('ink test', () => {
  test('build test', () => {
    Vue.use(inkUi)
    const components = Vue.options.components

    // judge component whether exist
    componentNames.forEach((compName, index) => {
      expect(components[compName]).not.toBeUndefined()
    })
  })

  test('component test', () => {
    // Inject component, popup object and directive into Vue object
    compList.forEach((component, index) => {
      Vue.component(component.name, component)
    })
    const components = Vue.options.components

    componentNames.forEach((compName, index) => {
      expect(components[compName]).not.toBeUndefined()
    })
  })
})
