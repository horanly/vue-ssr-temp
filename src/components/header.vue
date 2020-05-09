<template>
  <div>
    <!-- eslint-disable -->
    <Row class="header clearfix">
      <Col span="18">
        <router-link to="/" class="brand">
          <img src="../assets/img/cnodejs_light.svg" />
        </router-link>
      </Col>
      <Col span="6" class="btnClass">
        <Button type="text" ghost @click="handleDialogVisible">关于</Button>
      </Col>
    </Row>
    <Modal title="关于本项目" v-model="modalDialog" :mask-closable="false">
      <div>作者： Horan</div>
      <div>源码： <Rate disabled v-model="valueDisabled" :count="1" /> <a href="https://github.com/horanly/vue-ssr-temp" target="_blank">vueSsrTemp</a>  <Rate disabled v-model="valueDisabled" :count="1" />  欢迎Star~ </div>
      <div>
        <p>技术栈：</p>
        <ul>
          <li>Vue</li>
          <li>Vue Router</li>
          <li>iviewui</li>
          <li>Axios</li>
          <li>koa</li>
          <li>vuex</li>
        </ul>
      </div>

    </Modal>
  </div>
</template>

<script>
export default {
  name: "headerCom",
  data() {
    return {
      valueDisabled: 1,
      modalDialog: false
    };
  },
  methods: {
    handleDialogVisible() {
      this.modalDialog = true
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  position: relative;
  background: #444;
  font-size: 13px;
  min-height: 40px;
  padding: 5px;
  overflow: hidden;
  .brand {
    display: block;
    float: left;
    padding: 10px 20px;
    width: 160px;
    color: #ccc;
    font-weight: 700;
  }
  .btnClass {
    line-height: 48px;
  }
}
</style>
