<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import Tab from '@/components/Tab.vue';
import Joblistings from '@/components/Joblistings.vue';
</script>
<template>
    <Hero title="Dev jobs" subTitle="Software engineering is sorted here.."/>
<Tab title="For developers" subTitle="Browse our jobs and start your career today" buttonText="View jobs"/>
<Tab title="For Employees" subTitle="List your jobs to find the developer for the role" buttonText="Add job"/>
<Joblistings :limit="5" :show-button="true"></Joblistings>
</template>