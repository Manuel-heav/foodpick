<script setup>
import { ref, toRefs } from 'vue'
import Stepper from './Stepper.vue'
import Result from './Result.vue';

let number = ref(1)
let showNextPage = ref(false)


const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
});
const { data } = toRefs(props)

const saveData = () => {
     showNextPage.value = true;
}
console.log("Data in People Component:", data.value);

</script>

<template>
    <div v-if="!showNextPage" class="flex flex-col gap-8 mt-5 max-w-3xl items-center">
        <Stepper  class="w-full sm:ml-5"/>
            <h1 class="text-2xl mt-1">🍔 Let's Feast! 🌮</h1>
            <p class="mb-2 text-sm text-gray-200">How many hungry souls are raiding the spots today?</p>
        <form class="max-w-sm mx-auto">
            <input v-model="number"  type="number" id="number-input" class="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="5" min="1" required />
        </form>
        <button @click="saveData" class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Next</button>
    </div>
    <Result v-else :number="number" :data="props.data"/>
</template>