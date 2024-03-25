<template>
  <div>
    <span v-if="!editing" :class="{ completed: completed }">{{ task.description }}</span>
    <input v-if="editing" type="text" v-model="editedDescription" @keyup.enter="saveTask" @blur="cancelEdit" />
    <select v-if="editing" v-model="editedStatus" @change="saveTask">
      <option value="completed">Completed</option>
      <option value="in progress">In Progress</option>
      <option value="pending">Pending</option>
    </select>
    <span v-if="!editing">Status: {{ task.status }}</span>
    <button v-if="!editing" @click="toggleEdit">Edit</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      completed: this.task.completed,
      editing: false,
      editedDescription: this.task.description,
      editedStatus: this.task.status
    };
  },
  methods: {
    toggleEdit() {
      this.editing = true;
    },
    cancelEdit() {
      this.editing = false;
      this.editedDescription = this.task.description;
      this.editedStatus = this.task.status;
    },
    saveTask() {
      this.$emit('edit', { id: this.task.id, description: this.editedDescription, status: this.editedStatus });
      this.editing = false;
    },
    deleteTask() {
      this.$emit('delete', this.task.id);
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
