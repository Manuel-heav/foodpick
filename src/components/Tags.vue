<script setup>
import { ref, computed } from 'vue';
import { ChevronRightIcon } from 'lucide-vue-next';
import People from './People.vue'
import Stepper from './Stepper.vue'

const showNextPage = ref(false);
const selectedData = ref([]);

const myList = [
  { id: 1, colorState: ref(true), title: "Low Budget", chosen: ref(false) },
  { id: 2, colorState: ref(true), chosen: ref(false), title: "Fasting" },
  { id: 3, colorState: ref(true), chosen: ref(false), title: "Explore Mood" },
  { id: 4, colorState: ref(true), chosen: ref(false), title: "Meh Mood" },
  { id: 5, colorState: ref(true), chosen: ref(false), title: "High Budget" },
  { id: 6, colorState: ref(true), chosen: ref(false), title: "Inside Campus" },
  { id: 7, colorState: ref(true), chosen: ref(false), title: "Outside Campus" },
  { id: 8, colorState: ref(true), chosen: ref(false), title: "Breakfast" },
  { id: 9, colorState: ref(true), chosen: ref(false), title: "Lunch" },
  { id: 10, colorState: ref(true), chosen: ref(false), title: "Dinner" },
  { id: 11, colorState: ref(true), chosen: ref(false), title: "Non Fasting" },
  { id: 12, colorState: ref(true), chosen: ref(false), title: "Injera Related" },
  { id: 13, colorState: ref(true), chosen: ref(false), title: "Bread Related" },
  { id: 14, colorState: ref(true), chosen: ref(false), title: "High Portion" },
];

const choose = (item) => {
  item.colorState.value = !item.colorState.value;
  item.chosen.value = !item.chosen.value;
}

const computedTagClass = computed(() => (item) => {
  const baseClasses = "mb-3 mr-3 cursor-pointer text-sm font-medium rounded-lg p-3 h-fit transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  const activeClasses = "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md";
  const inactiveClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200";
  
  return `${baseClasses} ${item.colorState.value ? inactiveClasses : activeClasses}`;
});

const saveData = () => {
  selectedData.value = myList.filter(item => item.chosen.value).map(item => item.title);
  showNextPage.value = true;
}

const selectedCount = computed(() => myList.filter(item => item.chosen.value).length);
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pb-8">
    <div class="max-w-3xl mx-auto">
      <div v-if="!showNextPage">
        <!-- <Stepper class="w-full mb-10"/> -->
        <div class="shadow-xl rounded-2xl p-6 mb-8">
          <div class="flex flex-wrap -m-1">
            <div v-for="list in myList" :key="list.id" class="p-1">
              <button 
                @click="choose(list)" 
                :class="computedTagClass(list)"
              >
                {{ list.title }}
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            {{ selectedCount }} item{{ selectedCount !== 1 ? 's' : '' }} selected
          </p>
          <button 
            @click="saveData" 
            class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110"
          >
            Next
          </button>
        </div>
      </div>
      <People v-else :data="selectedData"/>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>