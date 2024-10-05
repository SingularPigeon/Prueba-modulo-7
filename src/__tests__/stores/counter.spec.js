// Test de store de Pinia
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import CounterComponent from '@/components/CounterComponent.vue'

describe('Counter', () => {
  // Declara una variable `wrapper` que será utilizada en cada prueba.
  let wrapper
  // Bloque que se ejecuta antes de cada test
  beforeEach(() => {
    setActivePinia(createPinia()) // Activa un store de Pinia para cada rpueba
    wrapper = mount(CounterComponent) // Monta el componente para cada prueba
  })
  // Este bloque se ejecuta después de cada test para limpiar mocks y datos
  afterEach(() => {
    vi.resetAllMocks()
  })
  // Primera prueba: verifica que el valor inicial del contador es "0".
  it('Está recibiendo el valor inicial de "0"', () => {
    expect(wrapper.vm.count).toBe(0)
  })
  // Segunda prueba: verifica que el contador aumenta en 1 cuando se hace clic en el botón "Aumentar"
  it('Incrementa el contador en 1 al hacer click en el botón "aumentar"', async () => {
    // Obtiene el valor del contador antes del click
    const contadorAntesClick = Number(wrapper.find('#counter').text())
    // Encuentra el botón de aumentar y simulamos un click
    const btnAumentar = wrapper.find('#aumentar')
    await btnAumentar.trigger('click')
    // Obtiene el valor del contador después del click
    const contadorDespuesClick = Number(wrapper.find('#counter').text())
    // Verifica que el valor del contador haya aumentado en 1
    expect(contadorDespuesClick).toBe(contadorAntesClick + 1)
  })
  // Tercera prueba: verifica que el contador disminuye en 1 cuando se hace clic en el botón "disminuir"
  it('Disminuye el contador en 1 al hacer click en el botón "disminuir"', async () => {
    // Obtiene el valor del contador antes del click
    const contadorAntesClick = Number(wrapper.find('#counter').text())
    // Encuentra el botón de disminuir y simulamos un click
    const btnDisminuir = wrapper.find('#disminuir')
    await btnDisminuir.trigger('click')
    // Obtiene el valor del contador después del click
    const contadorDespuesClick = Number(wrapper.find('#counter').text())
    // Verifica que el valor del contador haya disminuido en 1
    expect(contadorDespuesClick).toBe(contadorAntesClick - 1)
  })
})
