<script setup>
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

// Instancia del store
const counterStore = useCounterStore()

// Computed para acceder al valor del contador y su valor duplicado
const count = computed(() => counterStore.count)

// Métodos del store para modificar el estado
const aumentar = counterStore.aumentar
const disminuir = counterStore.disminuir
const reset = counterStore.reset
</script>
<template>
  <div id="counter" class="counter">
    <h2>Contador: {{ count }}</h2>

    <button id="aumentar" @click="aumentar">Aumentar</button>
    <button id="disminuir" @click="disminuir">Disminuir</button>
    <button id="reset" @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin: 5px;
}
</style>
