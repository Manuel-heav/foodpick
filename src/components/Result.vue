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

</script>

<template>
    <h2 class="text-xl">Number of hungry souls: {{ props.number }}</h2>
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="item in props.data" :key="item.id" class="flex gap-3">
            <h2 class="mb-2 mr-2 cursor-pointer text-xs rounded-full p-2 h-fit w-fit
                shadow-none transition-shadow duration-300 hover:shadow-lg  hover:shadow-[#a44899] bg-[#9A348E] text-white">{{ item.title }}</h2>
        </div>
  </div>
</template>
