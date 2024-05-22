<script setup>
    import { ref, watch } from 'vue';
    import People from './People.vue'
    import Stepper from './Stepper.vue'

    let showNextPage = ref(false);
    let selectedData = ref([]);

    const myList = [{
        id: 1,
        colorState: ref(true),
        title: "Low Budget",
        chosen: ref(false),
    },{
        id: 2,
        colorState: ref(true),
        chosen: ref(false),
        title: "Fasting"
    },{
        id: 3,
        colorState: ref(true),
        chosen: ref(false),
        title: "Explore Mood"
    },{
        id: 4,
        colorState: ref(true),
        chosen: ref(false),
        title: "Meh Mood"
    },{
        id: 5,
        colorState: ref(true),
        chosen: ref(false),
        title: "High Budget"
    },{
        id: 6,
        colorState: ref(true),
        chosen: ref(false),
        title: "Inside Campus"
    },
    {
        id: 7,
        colorState: ref(true),
        chosen: ref(false),
        title: "Outside Campus"
    },
    {
        id: 8,
        colorState: ref(true),
        chosen: ref(false),
        title: "Breakfast"
    },
    {
        id: 9,
        colorState: ref(true),
        chosen: ref(false),
        title: "Lunch"
    },
    {
        id: 10,
        colorState: ref(true),
        chosen: ref(false),
        title: "Dinner"
    },
    {
        id: 11,
        colorState: ref(true),
        chosen: ref(false),
        title: "Non Fasting"
    },
    {
        id: 12,
        colorState: ref(true),
        chosen: ref(false),
        title: "Injera Related"
    },
    {
        id: 13,
        colorState: ref(true),
        chosen: ref(false),
        title: "Bread Related"
    },
    {
        id: 14,
        colorState: ref(true),
        chosen: ref(false),
        title: "High Portion"
    },
    ]

    // Change the state of the value in myList array
    const choose = (item) => {
        item.colorState.value = !item.colorState.value;
        item.chosen.value = !item.chosen.value;

    }

    // Adds a dynamic background tailwind class to the tags
    const computedBgColor = (item) => {
        return item.colorState.value ? 'bg-[#fff] text-black hover:shadow-[#a44899]' : 'bg-[#9A348E] text-white';
    }

    const saveData = () => {
        const myVal = myList.filter(item => item.chosen.value)
        selectedData.value = myVal;
        showNextPage.value = true;
    }

</script>

<template>
    <div  v-if="!showNextPage" class="flex flex-row flex-wrap justify-center">
        <Stepper class="w-full sm:ml-20 mb-10"/>
        <div v-for="list in myList" :key="list.id" class="flex gap-3">
                <h2 @click="choose(list)" :class="computedBgColor(list)" class="mb-2 mr-2 cursor-pointer text-xs rounded-full p-2 h-fit w-fit
                shadow-none transition-shadow duration-300 hover:shadow-lg">{{ list.title }}</h2>
            </div>
        </div>
        <button v-if="!showNextPage" @click="saveData" class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Next</button>
    <People v-else :data="selectedData"/>
</template>
