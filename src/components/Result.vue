<script setup>
import Card from './Card.vue'
import { defineProps } from 'vue'

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
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="item in props.data" :key="item.id" class="flex gap-3">
            <h2 class="mb-2 mr-2 cursor-pointer text-xs rounded-full p-2 h-fit w-fit
                shadow-none transition-shadow duration-300 hover:shadow-lg  hover:shadow-[#a44899] bg-[#9A348E] text-white">{{ item.title }}</h2>
        </div>
  </div>

  <Card />

  <button class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Generate Again!</button>
</template>
