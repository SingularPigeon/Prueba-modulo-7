<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const emit = defineEmits(['form-submitted'])

function handleSubmit() {
  emit('form-submitted', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  })
  firstName.value = ''
  lastName.value = ''
  email.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="firstName" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        placeholder="Ingresa tu nombre"
        required
        v-model="firstName"
      />
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Apellido</label>
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="Ingresa tu apellido"
        required
        v-model="lastName"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Ingresa tu correo"
        required
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <button type="submit" class="btn bg-info-subtle w-100">Registrarse</button>
    </div>
  </form>
</template>
