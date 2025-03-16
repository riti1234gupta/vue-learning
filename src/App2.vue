<script setup lang="ts">
import { ref, onMounted } from 'vue'
const name = ref('Ritik Gupta')
let userStatus = ref('active')
const tasks = ref<string[]>(['Task 1', 'Task 2', 'Task 3', 'Task 4'])
const newTask = ref('')
const link =
  'https://venupay.atlassian.net/jira/software/projects/MAP/boards/17?assignee=712020%3Aa62a26bd-bba1-4115-98be-e757daf01492'
const toggleStatus = () => {
  if (userStatus.value === 'active') userStatus.value = 'pending'
  else if (userStatus.value === 'pending') userStatus.value = 'inactive'
  else userStatus.value = 'active'
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  tasks.value = data.map((task) => task.title)
})
</script>

<template>
  <div>Hello {{ name }}</div>
  <p v-if="userStatus === 'active'">User is active</p>
  <p v-else-if="userStatus === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <div v-for="(task, index) in tasks">
    <h2>{{ task }}</h2>
    <button @click="deleteTask(index)">Delete this task</button>
  </div>

  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
</template>
