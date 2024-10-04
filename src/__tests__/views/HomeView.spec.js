import { mount } from '@vue/test-utils'

import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'
import { describe, it, expect } from 'vitest'

describe(' Se renderiza la vista HomeView en la App', async () => {
  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'home', component: HomeView }]
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    routerPruebas.push({ name: 'home' })
    await routerPruebas.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [routerPruebas]
      }
    })
    expect(wrapper.findComponent(HomeView)).toBeTruthy()
  })
})
