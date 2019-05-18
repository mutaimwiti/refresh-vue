<template>
  <div class="todo-list">
    <div>
      <Create v-on:create="createTask"></Create>
    </div>
    <div class="undone-tasks">
      <b>Undone</b>
      <div v-bind:key="item.id" v-for="item in undone">
        <Todo
          v-bind:data="item"
          v-on:finish="finishTask"
          v-on:delete="deleteTask"
        />
      </div>
    </div>
    <div class="done-tasks">
      <b>Done</b>
      <div v-bind:key="item.id" v-for="item in done">
        <Todo
          v-bind:data="item"
          v-on:delete="deleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './Item.vue';
import Create from './Create.vue';
import data from '../../__data__';

const { items } = data;

export default {
  components: {
    Todo,
    Create,
  },
  name: 'List',

  data() {
    return {
      items,
      currentId: items[items.length - 1].id,
    };
  },

  computed: {
    done() {
      return this.items.filter(item => item.done);
    },
    undone() {
      return this.items.filter(item => !item.done);
    },
  },

  methods: {
    finishTask(taskId) {
      this.items = this.items.map((item) => {
        if (item.id === taskId) {
          return { ...item, done: true };
        }
        return item;
      });
    },
    deleteTask(taskId) {
      this.items = this.items.filter(({ id }) => id !== taskId);
    },
    createTask(item) {
      const { title, description } = item;
      const id = this.currentId + 1;

      this.items.push({
        id,
        title,
        description,
      });

      this.currentId = id;
    },
  },
};
</script>

<style scoped>
  .undone-tasks {
    width: 49%;
    float: left;
    margin-right: 1%
  }

  .done-tasks {
    width: 49%;
    float: left;
    margin-left: 1%
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
