<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item  in $router.options.routes" :key="item.path" :to="item.path">
        {{item.name}}
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // console.log( this.$router.options.routes )
  }
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  line-height: 2;
  background-color: rgb(84, 92, 100);
  margin-bottom: 10px;
  a {
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    padding: 0 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
