<template>
  <div id="app">
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue';

export default {
  name: 'app',
  components: {
    List,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  * {
    box-sizing: border-box;
  }

  @media screen and (min-width: 1024px) {
    body {
      width: 60%;
      margin-left: 20%;
    }
  }

  @media screen and (max-width: 768px) {
    body {
      width: 90%;
      margin-left: 5%;
    }
  }
</style>
