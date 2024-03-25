<template>
  <div>
    <h2>Task List</h2>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @complete="completeTask" @edit="editTask" @delete="deleteTask" />
    <button @click="openCreateForm">Create Task</button>
    <div v-if="createFormVisible">
      <h3>Create Task</h3>
      <input type="text" v-model="newTaskDescription" placeholder="Enter task description" />
      <button @click="saveNewTask">Save</button>
      <button @click="closeCreateForm">Cancel</button>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  props: ['tasks'],
  data() {
    return {
      createFormVisible: false,
      newTaskDescription: ''
    };
  },
  methods: {
    completeTask(taskId, completed) {
      // Implement task completion logic here using the taskId
      console.log("Task completed:", taskId, completed);
    },
    editTask(taskData) {
      // Emit an event to the parent TaskManagement component for task editing
      this.$emit('edit-task', taskData);
    },
    deleteTask(taskId) {
      // Emit an event to the parent TaskManagement component for task deletion
      this.$emit('delete-task', taskId);
    },
    openCreateForm() {
      this.createFormVisible = true;
    },
    closeCreateForm() {
      this.createFormVisible = false;
      this.newTaskDescription = '';
    },
    saveNewTask() {
      if (this.newTaskDescription.trim() !== '') {
        // Emit an event to the parent TaskManagement component for creating a new task
        this.$emit('create-task', this.newTaskDescription.trim());
        this.closeCreateForm();
      }
    }
  }
};
</script>
