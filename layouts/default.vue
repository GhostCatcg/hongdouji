<template>
  <div class="default">
    <el-container class="container">
      <el-header class="header">
        <h-header></h-header>
      </el-header>

      <el-main>
        <nuxt />
      </el-main>

      <el-footer class="footer">
        <h-footer></h-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import HHeader from "../components/public/header/index.vue";
import HFooter from "../components/public/footer/index.vue";
export default {
  components: {
    HHeader,
    HFooter
  }
};
</script>
<style>
.default,
.container {
  height: 100%;
}
.push,
.footer {
  height: 125px;
}
.main {
  /* min-height: calc(100vh - 185px); */
  min-height: 100%;
  margin-bottom: -125px;
}
</style>
