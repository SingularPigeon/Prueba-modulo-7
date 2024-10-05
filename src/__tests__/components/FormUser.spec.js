import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import FormUser from '@/components/FormUser.vue'

describe('FormUser', () => {
  it('el formulario envía la información al hacer click en el botón "Registrarse"', async () => {
    const wrapper = mount(FormUser)

    const inputFirstName = wrapper.find('#firstname')
    const inputLastName = wrapper.find('#lastname')
    const inputEmail = wrapper.find('#email')

    await inputFirstName.setValue('Paloma')
    await inputLastName.setValue('Rivera')
    await inputEmail.setValue('dori@finding.cl')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('form-submitted')).toBeTruthy()

    const emittedEvent = wrapper.emitted('form-submitted')[0][0]
    expect(emittedEvent).toEqual({
      firstName: 'Paloma',
      lastName: 'Rivera',
      email: 'dori@finding.cl'
    })
  })
})
