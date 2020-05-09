<template>
  <div>
    <div class='topic' v-for='item in list' :key='item.id'>
      <router-link :to='{path: "/user/"+item.author.loginname}'>
        <img :src='item.author.avatar_url' alt="用户头像" />
      </router-link>
      <span class="count">
        <em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em>
      </span>
      
      <Tag color="success" v-if="item.top">
        置顶
      </Tag>
      <Tag :color="$tab[item.tab] && $tab[item.tab].type" v-else>
        {{$tab[item.tab] && $tab[item.tab].name}}
      </Tag>

      <router-link class="title" :to='{path: "/topic/"+ item.id}'>
        {{item.title}}
      </router-link>
      <span class="time">
        {{$moment(item.last_reply_at, 'YYYY-MM-DD')
        .startOf('day')
        .fromNow()}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "Topics",
  props: ["list"],
  data() {
    return {
      article: []
    };
  }
};
</script>

<style lang='scss' scoped>
.topic {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
  }
  span.count {
    width: 80px;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color: purple;
    }
    em:last-child {
      color: grey;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    color: #42b983;
    font-weight: 600;
    text-align: left;
  }
  span.time {
    width: 70px;
    text-align: right;
  }
}
</style>