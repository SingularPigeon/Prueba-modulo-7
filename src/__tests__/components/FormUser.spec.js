// Test Child component
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import FormUser from '@/components/FormUser.vue'

describe('FormUser', () => {
  // Define la prueba individual a realizar
  it('el formulario envía la información al hacer click en el botón "Registrarse"', async () => {
    // Monta el componente para realizar la prueba
    const wrapper = mount(FormUser)
    //// Busca los inputs en el formulario utilizando el id correspondiente.
    const inputFirstName = wrapper.find('#firstname')
    const inputLastName = wrapper.find('#lastname')
    const inputEmail = wrapper.find('#email')

    //Simula que el usuario ingresa valores en cada input.
    await inputFirstName.setValue('Paloma')
    await inputLastName.setValue('Rivera')
    await inputEmail.setValue('dori@finding.cl')
    // Simula que el formulario se envía (submit)
    await wrapper.find('form').trigger('submit.prevent')
    // Verifica que el componente haya emitido el evento luego de enviar el formulario
    expect(wrapper.emitted('form-submitted')).toBeTruthy()
    // Accede al primer evento emitido para obtener los datos enviados
    const emittedEvent = wrapper.emitted('form-submitted')[0][0]
    // Verifica que los datos enviados sean los esperados
    expect(emittedEvent).toEqual({
      firstName: 'Paloma',
      lastName: 'Rivera',
      email: 'dori@finding.cl'
    })
  })
})
