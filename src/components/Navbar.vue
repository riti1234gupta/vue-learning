<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
const isActiveLink = (path: string) => {
    const route = useRoute();
    return route.path === path;
}
</script>
<template>
    <div class="flex flex-row items-center py-6 px-6">

    <div class=" flex flex-row">
        <img class="w-[10%]" src="../assets/websitelogo.png" alt="Website log">
        <span>Dev Job hunts</span>
    </div>
    <div class="flex flex-1 flex-row justify-between">
         <div>
            <RouterLink to="/home" :class="[isActiveLink('/home')||isActiveLink('/')?'bg-green-500':'']">Home</RouterLink>
            </div>
      <div>
        <RouterLink to='/jobs' :class="[isActiveLink('/jobs')?'bg-green-500':'']">Jobs</RouterLink>
      </div>
      <div>
         <RouterLink to='/jobs/add' :class="[isActiveLink('/jobs/add')?'bg-green-500':'']">Add Jobs</RouterLink>
      </div>
    </div>
      
    </div>
</template>