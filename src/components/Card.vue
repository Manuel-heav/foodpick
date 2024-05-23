<script setup>
const props = defineProps({
  place: {
    type: String,
    required: true,
  },
  foods: {
    type: Array,
    required: true,
  }
});

console.log(props.place, props.foods);


</script>

<template>
<div class="food-card bg-transparent rounded-lg p-8 max-w-md mx-auto">
    <div class="text-8xl mb-4 text-center">🥗</div>
    <h2 class="text-2xl font-semibold text-white mb-2 text-center">{{props.place}}</h2>
    <p class="text-white text-center">{{props.foods.join(" + ")}}</p>
  </div>
</template>