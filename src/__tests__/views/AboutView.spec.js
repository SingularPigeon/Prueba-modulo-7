import { mount } from '@vue/test-utils'

import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'
import { describe, it, expect } from 'vitest'

describe(' Se renderiza la vista AboutView en la App', async () => {
  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') }]
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    routerPruebas.push({ name: 'about' })
    await routerPruebas.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [routerPruebas]
      }
    })
    expect(wrapper.findComponent(AboutView)).toBeTruthy()
  })
})
