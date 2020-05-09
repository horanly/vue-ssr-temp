<template>
  <!-- eslint-disable -->
  <Row class="header clearfix">
    <Col span="18">
      <router-link to="/" class="brand">
        <img src="../assets/img/cnodejs_light.svg" />
      </router-link>
    </Col>
    <Col span="6" class="btnClass">
      <Button type="text" ghost>关于</Button>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "headerCom",
  data() {
    return {};
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
