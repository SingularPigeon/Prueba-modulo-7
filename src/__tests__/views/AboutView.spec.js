// Testeo de ruta de la vista 'AboutView'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe(' Se renderiza la vista AboutView en la App', async () => {
  // Configura el enrutador para el testeo con la ruta correspondiente

  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/about', name: 'about', component: HomeView }]
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    // Agrega la ruta al routear antes de montar el componente
    routerPruebas.push('/about')
    await routerPruebas.isReady()
    // Crea un wrapper para el montado del componente HomeView
    const wrapper = mount(AboutView, {
      global: {
        plugins: [routerPruebas]
      }
    })
    // Verifica que el componente se haya renderizado correctamente
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
