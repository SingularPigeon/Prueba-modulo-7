<script setup>
// Parent Component
import { ref } from 'vue'
import FormUser from '@/components/FormUser.vue'

// Estado para almacenar los datos del formulario
const formData = ref({})

// Función para manejar la recepción de datos desde el componente hijo
function handleSubmit(data) {
  formData.value = data
}
</script>
<template>
  <div class="container mt-5">
    <div class="row d-flex flex-column align-items-center">
      <h1 class="text-center">Regístrate</h1>
      <div class="col-md-6 mt-5">
        <FormUser @form-submitted="handleSubmit" />
      </div>
    </div>
    <div class="row" v-if="formData.firstName || formData.lastName || formData.email">
      <h2 class="text-center">¡Bienvenido/a {{ formData.firstName }}!</h2>
      <div class="col-md-6">
        <img src="/public/pandaHi.png" alt="panda saludando" />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <p class="fs-3"><span class="fw-bold">Nombre:</span> {{ formData.firstName }}</p>
        <p class="fs-3"><span class="fw-bold">Apellido:</span> {{ formData.lastName }}</p>
        <p class="fs-3"><span class="fw-bold">Email:</span> {{ formData.email }}</p>
      </div>
    </div>
  </div>
</template>
