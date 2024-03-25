<template>
  <div id="app">
    <TaskManagement />
  </div>
</template>

<script>
import TaskManagement from './views/TaskManagement.vue';

export default {
  components: {
    TaskManagement
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>