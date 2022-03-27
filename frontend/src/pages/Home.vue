<template>
  <h1>Home</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p class="virtual">msg from virtual module</p>
  <p class="inter">this will be styled with a font-face</p>
  <p class="protocol">{{ state.protocol }}</p>
  <p class="import-meta-url">{{ state.url }}</p>

</template>

<script setup>
import { reactive, defineAsyncComponent } from 'vue'
const url = import.meta.env.SSR
  ? import.meta.url
  : document.querySelector('.import-meta-url').textContent
const protocol = new URL(url).protocol
const state = reactive({
  count: 0,
  protocol,
  url
})
</script>

<style scoped>
h1,
a {
  color: green;
}
</style>
