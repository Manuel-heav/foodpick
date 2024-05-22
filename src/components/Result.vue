<script setup>
import { defineProps } from 'vue'

// Define the props that the component accepts
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  }
});

console.log(props.data)
</script>

<template>
  <div>
    <h2 class="text-2xl">Number of hungry souls: {{ props.number }}</h2>
    <h3 class="text-xl">Selected Choices:</h3>
    <ul>
      <li v-for="item in props.data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>
