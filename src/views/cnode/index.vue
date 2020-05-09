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
      tab: "all"
    };
  },
  computed: {
    ...mapGetters("home", {
      allList: "getLists"
    }),
  },
  created() {
    this.getList(this.tab);
  },
  methods: {
      handleTabClick(name) {
        this.tab = name;
        
        let store = this.$store.state.home.storeList
        console.log(store.all, this.tab, 'storeListstoreListstoreList');

        if (!store[this.tab]) {
            this.limit = 20;
            // this.allList = []
            this.$store.commit('home/changeList', [])
            this.getList(this.tab)
            return;
        }
        this.$store.commit('home/changeList', store[this.tab].data)
        // this.allList = store[this.tab].data;
        this.limit = store[this.tab].limit;

    },
    getList(type) {
      let params = {
        page: this.page,
        limit: this.limit,
        tab: type,
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
.home{
    margin: auto;
    width: 90%;
    padding: 20px 30px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
