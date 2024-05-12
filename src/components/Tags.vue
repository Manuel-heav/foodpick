<script setup>
    const myList = [{
        id: 1,
        title: "Low Budget"
    },{
        id: 2,
        title: "Fasting"
    },{
        id: 3,
        title: "Explore Mood"
    },{
        id: 4,
        title: "Meh Mood"
    },{
        id: 5,
        title: "High Budget"
    },{
        id: 6,
        title: "Inside Campus"
    },
    {
        id: 7,
        title: "Outside Campus"
    },
    {
        id: 8,
        title: "Breakfast"
    },
    {
        id: 9,
        title: "Lunch"
    },
    {
        id: 10,
        title: "Dinner"
    },
    {
        id: 11,
        title: "Non Fasting"
    },
    {
        id: 12,
        title: "Injera Related"
    },
    {
        id: 13,
        title: "Bread Related"
    },
    {
        id: 14,
        title: "High Portion"
    },
    ]
</script>

<template>
    <div class="flex flex-row flex-wrap justify-center">
    <div v-for="list in myList" :key="list.id" class="flex gap-3">
            <h2 class="mb-2 mr-2 cursor-pointer text-black text-xs bg-[#fff] rounded-full p-2 h-fit w-fit">{{ list.title }}</h2>
        </div>
    </div>
</template>