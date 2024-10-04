import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import CounterComponent from '@/components/CounterComponent.vue'

describe('Counter', () => {
  let wrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(CounterComponent)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('Está recibiendo el valor inicial', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it('Incrementa el contador en 1 al hacer click en el botón "+1"', async () => {
    const contadorAntesClick = Number(wrapper.find('#counter').text())

    const btnAumentar = wrapper.find('#aumentar')
    await btnAumentar.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#counter').text())

    expect(contadorDespuesClick).toBe(contadorAntesClick + 1)
  })

  it('Disminuye el contador en 1 al hacer click en el botón "-1"', async () => {
    const contadorAntesClick = Number(wrapper.find('#counter').text())

    const btnDisminuir = wrapper.find('#disminuir')
    await btnDisminuir.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#counter').text())

    expect(contadorDespuesClick).toBe(contadorAntesClick - 1)
  })
})
