<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const job = reactive({
  id: '',
  title: '',
  type: '',
  description: '',
  location: '',
  salary: '',
  company_name: '',
  company_description: '',
  contact_email: '',
  contact_phone: ''
});
  const router = useRouter();
const handleSubmit = async () => {
    console.log('Job Data:', job);
   try {
       const resp = await axios.post('/api/jobs', job);
    //    router.push(`/jobs/${job.id}`)
        
       console.log(resp.data);
    } catch (error) {
        console.log('error is', error);
    }
};
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">Add Job</h2>
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <div class="flex flex-row">
        <label for="job-id">Job Id</label>
        <input type="number" id="job-id" name="jobId" v-model.number="job.id" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="job.title" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="type">Type</label>
        <input type="text" id="type" name="type" v-model="job.type" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="description">Description</label>
        <textarea id="description" name="description" v-model="job.description" class="border-black border-2 p-2"></textarea>
      </div>

      <div class="flex flex-row">
        <label for="location">Location</label>
        <input type="text" id="location" name="location" v-model="job.location" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="salary">Salary</label>
        <input type="text" id="salary" name="salary" v-model="job.salary" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="company_name">Company Name</label>
        <input type="text" id="company_name" name="company_name" v-model="job.company_name" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="company_description">Company Description</label>
        <textarea id="company_description" name="company_description" v-model="job.company_description" class="border-black border-2 p-2"></textarea>
      </div>

      <div class="flex flex-row">
        <label for="contact_email">Contact Email</label>
        <input type="email" id="contact_email" name="contact_email" v-model="job.contact_email" class="border-black border-2 p-2">
      </div>

      <div class="flex flex-row">
        <label for="contact_phone">Contact Phone</label>
        <input type="tel" id="contact_phone" name="contact_phone" v-model="job.contact_phone" class="border-black border-2 p-2">
      </div>

      <button type="submit" class="bg-green-400 rounded py-3 px-3 mt-2">Create Job</button>
    </form>
  </div>
</template>
