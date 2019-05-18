<template>
  <div class="creation-form">
    <b>
      <label>
        Title
        <input
          v-model="title"
          placeholder="Enter task title">
      </label>
    </b>
    <b>
      <label>
        Description
        <input
          v-model="description"
          class="description-input"
          placeholder="Enter task description">
      </label>
    </b>
    <button v-on:click="createTask">Add task</button>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      title: '',
      description: '',
    };
  },

  methods: {
    createTask() {
      const { title, description } = this;
      if (title && description) {
        this.$emit('create', {
          title,
          description,
        });
        this.title = '';
        this.description = '';
      } else {
        // eslint-disable-next-line
          alert('Both title and description are required.');
      }
    },
  },
};

</script>

<style scoped>
  .creation-form {
    border: 1px solid #6dd2e2;
    margin-bottom: 5px;
    padding: 10px;
  }

  input {
    margin-left: 5px;
    margin-right: 5px;
  }

  .description-input {
    width: 44%;
  }
</style>
