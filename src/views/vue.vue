<template>
  <div class="home">
    <div>
      Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
    </div>
    <div>
      <img src="../assets/img/lifecycle.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "vue"
};
</script>
<style lang="scss" scoped>
.home{
  width: 80%;
  text-align: center;
  margin: 0 auto;
  img{
    width: 60%;
  }
}
</style>
