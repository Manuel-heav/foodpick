<script setup>
    const myList = [{
        id: 1,
        title: "Certain Thing"
    },{
        id: 2,
        title: "Certain Thing"
    },{
        id: 3,
        title: "Certain Thing"
    },{
        id: 4,
        title: "Certain Thing"
    },{
        id: 5,
        title: "Certain Thing"
    },{
        id: 6,
        title: "Certain Thing"
    },
    {
        id: 7,
        title: "Certain Thing"
    },
    {
        id: 8,
        title: "Certain Thing"
    },
    {
        id: 9,
        title: "Certain Thing"
    },
    {
        id: 10,
        title: "Certain Thing"
    },
    {
        id: 11,
        title: "Certain Thing"
    },
    ]
</script>

<template>
    <div v-for="list in myList" :key="list.id">
        <div>
            {{ list.title }}
        </div>
    </div>
</template>