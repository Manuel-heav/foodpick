<script setup>
    import { ref } from 'vue';

    const myList = [{
        id: 1,
        colorState: ref(true),
        title: "Low Budget"
    },{
        id: 2,
        colorState: ref(true),
        title: "Fasting"
    },{
        id: 3,
        colorState: ref(true),
        title: "Explore Mood"
    },{
        id: 4,
        colorState: ref(true),
        title: "Meh Mood"
    },{
        id: 5,
        colorState: ref(true),
        title: "High Budget"
    },{
        id: 6,
        colorState: ref(true),
        title: "Inside Campus"
    },
    {
        id: 7,
        colorState: ref(true),
        title: "Outside Campus"
    },
    {
        id: 8,
        colorState: ref(true),
        title: "Breakfast"
    },
    {
        id: 9,
        colorState: ref(true),
        title: "Lunch"
    },
    {
        id: 10,
        colorState: ref(true),
        title: "Dinner"
    },
    {
        id: 11,
        colorState: ref(true),
        title: "Non Fasting"
    },
    {
        id: 12,
        colorState: ref(true),
        title: "Injera Related"
    },
    {
        id: 13,
        colorState: ref(true),
        title: "Bread Related"
    },
    {
        id: 14,
        colorState: ref(true),
        title: "High Portion"
    },
    ]


    const changeBg = (item) => {
        item.colorState.value = !item.colorState.value;
    }
    const computedBgColor = (item) => {
        return item.colorState.value ? 'bg-[#fff] text-black hover:shadow-[#a44899]' : 'bg-[#9A348E] text-white';
    }

</script>

<template>
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="list in myList" :key="list.id" class="flex gap-3">
            <h2 @click="changeBg(list)" :class="computedBgColor(list)" class="mb-2 mr-2 cursor-pointer text-xs rounded-full p-2 h-fit w-fit
            shadow-none transition-shadow duration-300 hover:shadow-lg">{{ list.title }}</h2>
        </div>
    </div>
</template>