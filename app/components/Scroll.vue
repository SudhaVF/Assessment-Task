<template>
<button
  style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;"
  v-show="showButton"
  @click="scrollToTop"
>
  <i class="fas fa-arrow-up"></i>
</button>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
button {
  right: 1.5rem !important; 
  left: auto !important;
  color: white;
  background-color: #c7932c;
  border: none;
  height: 30px;
  width: 30px;
}
</style>
