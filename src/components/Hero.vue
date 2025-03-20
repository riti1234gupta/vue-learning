<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(
    {
        title: {
            type: String,
            default:"Become a pro dev"
        },
       subTitle: {
            type: String,
            default:"Become a pro dev"
     }
   }
    
)
</script>

<template>
    <p class="text-4xl">{{ title }}</p>
    <p class="text-2xl">{{ subTitle }}</p>
</template>