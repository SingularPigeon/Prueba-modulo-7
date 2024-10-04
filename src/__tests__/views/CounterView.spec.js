import { mount } from '@vue/test-utils'

import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import CounterView from '@/views/CounterView.vue'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe(' Se renderiza la vista CounterView en la App', async () => {
  let wrapper
  let routerPruebas

  beforeEach(async () => {
    setActivePinia(createPinia())

    routerPruebas = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/counter', name: 'counter', component: CounterView }]
    })
    routerPruebas.push({ name: 'counter' })
    await routerPruebas.isReady()

    wrapper = mount(App, {
      global: {
        plugins: [routerPruebas]
      }
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    expect(wrapper.findComponent(CounterView)).toBeTruthy()
  })
})
