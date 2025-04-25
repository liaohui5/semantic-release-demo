<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value++;
}
</script>
