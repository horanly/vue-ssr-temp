<template>
  <div class="home">
    <Tabs v-model="tab" @on-click="handleTabClick">
      <TabPane label="全部" name="all">
        <content-list :list="allList"></content-list>
      </TabPane>
      <TabPane label="精华" name="good">
        <content-list :list="allList"></content-list>
      </TabPane>
      <TabPane label="分享" name="share">
        <content-list :list="allList"></content-list>
      </TabPane>
      <TabPane label="问答" name="ask">
        <content-list :list="allList"></content-list>
      </TabPane>
      <TabPane label="招聘" name="job">
        <content-list :list="allList"></content-list>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import contentList from "@/components/content.vue";
export default {
  data() {
    return {
      page: 1,
      limit: 20,
      tab: "all",
      obj: {
        all: { limit: "", data: "" },
        good: { limit: "", data: "" },
        share: { limit: "", data: "" },
        ask: { limit: "", data: "" },
        job: { limit: "", data: "" }
      },
    };
  },
  computed: {
    ...mapGetters("home", {
      allList: "getLists",
    }),
  },
  mounted() {
    this.getList(this.tab);
    window.addEventListener("scroll", this.scrollMethod);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollMethod);
  },
  methods: {
    scrollMethod() {
      const sumH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const viewH = document.documentElement.clientHeight;
      const scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (viewH + scrollH >= sumH) {
        this.limit = this.limit + 10
        this.getList(this.tab);
      }
    },

    handleTabClick(name) {
      this.tab = name;
      let store = this.$store.state.home.storeList;
      if (!store[this.tab].data) {
        this.limit = 20;
        // this.allList = []
        this.$store.commit("home/changeList", []);
        this.getList(this.tab);
        return;
      }
      this.$store.commit("home/changeList", store[this.tab].data);
      this.limit = store[this.tab].limit;
    },
    getList(type) {
      let params = {
        page: this.page,
        limit: this.limit,
        tab: type,
        obj: this.obj,
      };
      this.$store.dispatch("home/getListAjax", params);
    },
  },
  components: {
    contentList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 90%;
  padding: 20px 30px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
