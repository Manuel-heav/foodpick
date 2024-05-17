<script setup>
import Stepper from './Stepper.vue'
</script>

<template>
        <Stepper class="w-full"/>
            <h1 class="text-2xl mt-1">🍔 Let's Feast! 🌮</h1>
            <p class="mb-2 text-sm text-gray-200">How many hungry souls are raiding the spots today?</p>
        <form class="max-w-sm mx-auto">
            <input type="number" id="number-input" class="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="5" min="1" required />
        </form>
        <button class="transform bg-[#a44899] pt-2 pb-2 pr-7 pl-7 rounded-full hover:bg-[#9A348E] transition duration-500 hover:scale-110">Next</button>
</template>