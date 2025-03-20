<script lang="ts" setup>
import type { Job } from '@/components/Joblisting.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const job = ref<Job>();
const route = useRoute();
onMounted(async () => {
    try {
        const resp = await axios.get(`/api/jobs/${route.params.id}`);
        job.value = resp.data;
    } catch (error) {
        console.log('error is', error);
    }
   

})
</script>
<template>
    <h2>Job id {{ job?.id }}</h2>
     <p>{{ job?.title }}</p>
    <p>{{ job?.company_name }}</p>
    <p>{{ job?.company_description }}</p>
    <p>{{ job?.description }}</p>
    <p>{{ job?.location }}</p>
      <p>{{ job?.salary }}</p>
      <p>{{ job?.type }}</p>
   
</template>