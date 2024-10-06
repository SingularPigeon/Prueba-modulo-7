<script setup>
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

// Instancia del store
const counterStore = useCounterStore()

// Computed para acceder al valor del contador
const count = computed(() => counterStore.count)

// Métodos del store para modificar el estado
const aumentar = counterStore.aumentar
const disminuir = counterStore.disminuir
const reset = counterStore.reset
</script>
<template>
  <div class="row d-flex flex-column align-items-center mt-5">
    <div id="counter" class="col-md-6">
      <h2 class="text-center">
        Contador: <span class="fs-2"> {{ count }} </span>
      </h2>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button id="aumentar" class="btn bg-success-subtle" @click="aumentar">+</button>
        <button id="disminuir" class="btn bg-danger-subtle" @click="disminuir">-</button>
        <button id="reset" class="btn bg-primary-subtle" @click="reset">Resetear Contador</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
