// Testeo de la ruta de la vista 'CounterView'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import CounterView from '@/views/CounterView.vue'

describe(' Se renderiza la vista CounterView en la App', async () => {
  let wrapper
  let routerPruebas
  // Bloque que se ejecuta antes de cada test
  beforeEach(async () => {
    // Activa Pinia (el sistema de estado) para que esté disponible en los tests
    setActivePinia(createPinia())
    // Configura el enrutador para el testeo con la ruta correspondiente
    routerPruebas = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/counter',
          name: 'counterView',
          component: CounterView
        }
      ]
    })
    // Navega a la ruta antes de montar el componente
    routerPruebas.push('/counter')
    await routerPruebas.isReady()
    // Monta el componente con el enrutador configurado globalmente
    wrapper = mount(CounterView, {
      global: {
        plugins: [routerPruebas]
      }
    })
  })
  // Este bloque se ejecuta después de cada test para limpiar mocks y datos
  afterEach(() => {
    vi.resetAllMocks()
  })
  // Define el test que valida si la navegación y el renderizado del componente son correctos
  it('Navega y renderiza la vista correspondiente', async () => {
    // Verifica que el componente CounterView fue correctamente renderizado
    expect(wrapper.findComponent(CounterView).exists()).toBe(true)
  })
})
