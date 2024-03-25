<template>
    <div>
      <h1>Task Management System</h1>
      <TaskList :tasks="tasks" @create-task="createTask" @edit-task="editTask" @delete-task="deleteTask" />
    </div>
  </template>
  
  <script>
  import TaskList from './TaskList.vue';
  
  export default {
    components: {
      TaskList
    },
    data() {
      return {
        tasks: []
      };
    },
    methods: {
      createTask(description) {
        const newTask = {
          id: this.tasks.length + 1,
          description: description,
          status: 'pending' // Initial status
        };
        this.tasks.push(newTask);
      },
      editTask(editedTask) {
        // Find the task in the array and update it
        const index = this.tasks.findIndex(task => task.id === editedTask.id);
        if (index !== -1) {
          this.tasks[index] = editedTask;
        }
      },
      deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      }
    }
  };
  </script>  