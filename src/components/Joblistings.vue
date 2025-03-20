<script lang="ts" setup>
import {ref,defineProps, computed, onMounted} from 'vue'

import Joblisting, { type Job } from '@/components/Joblisting.vue';
import axios from 'axios';
defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default:true
    }
})
const jobs = ref<Job[]>([]);

const viewAllJobs = () => {
    
    console.log('view all jobs')
}
onMounted(async () => {
    try {
        const resp = await axios.get('/api/jobs');
        jobs.value = resp.data;
    } catch (error) {
        console.log('error is ', error);
    }
   
})
</script>
<template>
    <div>
        <p>Job listing</p>
        <div v-for="job in jobs.slice(0,limit||jobs.length)" :key="job.id" class="flex justify-start">
        <Joblisting :job="job"/>
        </div>
    </div>
    <button v-if="showButton" @click="viewAllJobs">View all jobs</button>
</template>