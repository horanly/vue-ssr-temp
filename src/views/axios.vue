<template>
  <div>
      <!-- {{allList}} -->
    <div v-for="item in allList" :key="item.XXZL_ID">
      {{ item.NAME }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.getIdea();
    // console.log(this.$store.state.home.list, 'this.$store');
  },
  computed: {
    ...mapGetters("home", {
      allList: "getLists"
    })
  },
  methods: {
    getIdea() {
      this.$store.dispatch(
        "home/getListAjax",
        "9aab335b16ec423f9dd25dc181cdd3dd"
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
