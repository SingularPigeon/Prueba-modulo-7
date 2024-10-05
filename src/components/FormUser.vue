<script setup>
//Child component
import { ref } from 'vue'
//Estadoa para almacenar los datos ingresados en el formulario
const firstName = ref('')
const lastName = ref('')
const email = ref('')
// Define el evento que será emitido al componente padre
const emit = defineEmits(['form-submitted'])

//Función para enviar los datos al componente padre
function handleSubmit() {
  emit('form-submitted', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  })
  // Limpia los campos del formulario una vez realizado el submit
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
