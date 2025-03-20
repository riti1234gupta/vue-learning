<script setup lang="ts">
import { computed, defineProps, ref} from 'vue';
import { useRouter } from 'vue-router';
export interface Job {
    id: number;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company_name: string;
    company_description: string;
    contact_email: string;
    contact_phone: string;
}
const showMore = ref(false);
    const router = useRouter();
const getDescription = (job: any) => {

    return computed(() => {
           if (!showMore.value)
    {
        return  job.description.slice(0, 90)+".....";
    }
           else {
               return job.description;
    }
    })

 
}
const toggleShowMore = (id: number) => {
    showMore.value = !showMore.value;
}
const navigateToJobDetails = (jobId: number) => {
    console.log('log coming')

    router.push(`/jobs/${jobId}`)
}
defineProps<{ job: Job }>();
</script>
<template>
 <div  class="bg-gray-400 my-5 w-auto">
            <p>{{ job.type }}</p>
            <p>{{ job.title }}</p>
            <div>
<p>{{ getDescription(job) }}</p>
      <button @click="toggleShowMore(job.id)">{{ !showMore ?"show More":"show less"}}</button>
            </div>
            
            <p>{{ job.salary }}</p>
            <div class="flex flex-row justify-start items-center">
                <i class="pi pi-map-marker"></i>
                <p>{{ job.location }}</p>
            </div>
            
            <button @click="navigateToJobDetails(job.id)">Read more</button>
        </div>
</template>