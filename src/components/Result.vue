<script setup>
import { ref } from 'vue';
import Card from './Card.vue';
import foodPlaces from './Data.js';

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

const selectedPlace = ref(null);
const finalPlace = ref("");
const finalFoods = ref([]);
const selectedFoods = ref([]);

const filterAndSelectFoods = () => {
  const filteredPlaces = foodPlaces.filter(place => 
    place.foods.some(food => 
      props.data.some(tag => food.tags.includes(tag))
    )
  );


  if (filteredPlaces.length > 0) {
    selectedPlace.value = filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];
    console.log(selectedPlace.value)
    const filteredFoods = selectedPlace.value.foods.filter(food => 
      props.data.some(tag => food.tags.includes(tag))
    );
    selectedFoods.value = [];
    const availableFoods = [...filteredFoods]; 
    for (let i = 0; i < props.number; i++) {
      if (availableFoods.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableFoods.length);
        selectedFoods.value.push(availableFoods.splice(randomIndex, 1)[0].food); 
      } else {
        break; 
      }
    }
  } else {
    selectedPlace.value = null;
    selectedFoods.value = [];
  }

  finalPlace.value = selectedPlace.value.place;
  finalFoods.value = selectedFoods.value;
};

filterAndSelectFoods(); 
</script>

<template>
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="item in props.data" class="flex gap-3">
            <h2 class="mb-2 mr-2 cursor-pointer text-xs rounded-full pl-2 pr-2 pt-1 pb-1 h-fit w-fit
                shadow-none transition-shadow duration-300 hover:shadow-lg  hover:shadow-[#a44899] bg-[#9A348E] text-white">{{ item }}</h2>
        </div>
  </div>

  <div class="flex flex-col justify-center items-center">
    <Card :place="finalPlace" :foods="finalFoods"/>

    <button @click="filterAndSelectFoods" class="transform bg-[#a44899] pt-2 pb-2 pr-8 pl-8 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Generate Again!</button>
</div>
</template>
