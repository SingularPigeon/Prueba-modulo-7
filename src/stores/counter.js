import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function aumentar() {
    count.value++
  }

  function disminuir() {
    count.value--
  }
  function reset() {
    count.value = 0
  }

  return { count, aumentar, disminuir, reset }
})
