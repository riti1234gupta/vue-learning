<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Home from './views/Home.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar></Navbar>
<RouterView/>
</template>
