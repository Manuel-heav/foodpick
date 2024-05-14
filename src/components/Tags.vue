<script setup>
    import { ref } from 'vue';

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


    const choose = (item) => {
        item.colorState.value = !item.colorState.value;
        item.chosen.value = !item.chosen.value;

    }
    const computedBgColor = (item) => {
        return item.colorState.value ? 'bg-[#fff] text-black hover:shadow-[#a44899]' : 'bg-[#9A348E] text-white';
    }

    console.log(myList.filter((data) => data.chosen.value == true))

</script>

<template>
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="list in myList" :key="list.id" class="flex gap-3">
            <h2 @click="choose(list)" :class="computedBgColor(list)" class="mb-2 mr-2 cursor-pointer text-xs rounded-full p-2 h-fit w-fit
            shadow-none transition-shadow duration-300 hover:shadow-lg">{{ list.title }}</h2>
        </div>
    </div>
    <button @click="sendArrayToParent" class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Next</button>
</template>
