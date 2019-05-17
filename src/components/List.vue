<template>
  <div class="todo-list">
    <div class="undone-tasks">
      <b>Undone</b>
      <div v-bind:key="item.id" v-for="item in undone">
        <Todo v-bind:data="item" v-on:finish="finishTask"/>
      </div>
    </div>
    <div class="done-tasks">
      <b>Done</b>
      <div v-bind:key="item.id" v-for="item in done">
        <Todo v-bind:data="item" v-on:undo="undoTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './Item.vue';
import data from '../../__data__';

const { items } = data;

export default {
  components: {
    Todo,
  },
  name: 'List',

  data() {
    return {
      items,
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
    undoTask(taskId) {
      this.items = this.items.map((item) => {
        if (item.id === taskId) {
          return { ...item, done: false };
        }
        return item;
      });
    },
  },
};
</script>

<style scoped>
  .undone-tasks {
    width: 48%;
    float: left;
    margin-right: 1%
  }

  .done-tasks {
    width: 48%;
    float: left;
    margin-left: 1%
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
