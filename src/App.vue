<template>
  <div id="app">
    <header-page></header-page>
    <div class="main-section">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import headerPage from '@/components/header.vue'
export default {
  created() {
    // console.log( this.$router.options.routes )
  },
  components: {
      headerPage
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-section{
  margin: auto;
  margin-top: 40px;
  width: 1200px;
}
</style>
