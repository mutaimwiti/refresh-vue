<template>
  <div class="todo-item">
    <div class="todo-title">
      {{data.title}}
    </div>
    <div class="todo-description">
      {{data.description}}
      <button v-on:click="$emit('delete', data.id)" class="action-button delete-button">
        Delete
      </button>
      <button v-if="!data.done" v-on:click="$emit('finish', data.id)" class="action-button">
        Finish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    data: Object,
  },
};
</script>

<style scoped>
  .todo-item {
    border: 1px solid #6dd2e2;
    margin-bottom: 10px;
  }

  .todo-title {
    border: 1px solid #6dd2e2;
    background: #6dd2e2;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 5px;
  }

  .todo-description {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  .action-button {
    float: right;
    margin-right: 5px;
  }

  .delete-button {
    color: #ff0900;
  }
</style>
