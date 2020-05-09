<template>
  <div id="app">
    <header-page></header-page>
    <div class="main-section">
      <router-view />
    </div>
  </div>
</template>
<script>
import headerPage from "@/components/header.vue";
export default {
  created() {
    // console.log( this.$router.options.routes )
  },
  components: {
    headerPage,
  },
};
</script>
<style lang="scss">
#app {
  .main-section {
    margin: auto;
    margin-top: 40px;
    width: 1200px;
  }
  a {
    color: #42b983;
    font-weight: 600;
    padding: 0 2px;
    text-decoration: none;
  }
}
</style>
