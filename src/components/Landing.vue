<script setup >
import { ref } from 'vue';
import Header from './Header.vue';
import Stepper from './Stepper.vue';
import Tags from './Tags.vue'

</script>


<template>
    <div class="absolute inset-0 -z-10 h-full w-full bg-[#090C08] bg-[linear-gradient(to_right,#8080800a_1px,transparent_2px),linear-gradient(to_bottom,#8080800a_1px,transparent_2px)] bg-[size:8px_12px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[380px] w-[380px] rounded-full bg-[#9A348E] opacity-50 blur-[100px]"></div></div>
<section class="w-full p-2 sm:p-0 flex mt-10 items-center flex-col gap-4 sm:gap-6"> 
            <Header title="Food Pick"/>
            <p class="text-sm sm:text-md text-center max-w-3xl text-gray-200">
                Hey there! Are you another AASTU student like me, constantly battling the eternal struggle of deciding where and what to eat for every meal? I feel you! It's like a daily food dilemma, am I right? But hey, worry not, we've got your back! With Food Pick, we decide for you like your mom!
            </p>
            <div class="flex flex-col gap-8 mt-5 max-w-3xl items-center">
                <Tags />
            </div>  
</section>

</template>