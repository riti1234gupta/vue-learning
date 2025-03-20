<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    title: {
        type: String,
        default:""
    },
    subTitle: {
       type: String,
        default:"" 
    },
    buttonText: {
        type: String,
        default:""
    }
})
</script>

<template>
    <div class="bg-green-400 w-[50%] py-5 px-3 flex flex-col items-start my-3">
    <p class="text-2xl">{{ title }}</p>
    <p class="text-xl">{{subTitle }}</p>
    <button class="bg-yellow-300 text-black text-xl">{{ buttonText }}</button>
 </div>
</template>