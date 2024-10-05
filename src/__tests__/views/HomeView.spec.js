// testeo de la ruta de la vista 'Homeview
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import HomeView from '@/views/HomeView.vue'

describe(' Se renderiza la vista HomeView en la App', async () => {
  // Configura el enrutador para el testeo con la ruta correspondiente
  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'home', component: HomeView }]
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    // Agrega la ruta al routear antes de montar el componente
    routerPruebas.push('/')
    await routerPruebas.isReady()
    // Crea un wrapper para el montado del componente HomeView
    const wrapper = mount(HomeView, {
      global: {
        plugins: [routerPruebas]
      }
    })
    // Verifica que el componente se haya renderizado correctamente
    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
