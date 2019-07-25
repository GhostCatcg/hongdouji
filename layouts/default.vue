<template>
  <div class="default">
        <h-header></h-header>
        <nuxt />

        <h-footer></h-footer>

    <!-- <el-container class="container">

      <el-header class="header">
        <h-header></h-header>
      </el-header>

      <el-main class="mian">
        <nuxt />
      </el-main>

      <el-footer class="footer" height="125">
        <h-footer></h-footer>
      </el-footer>

    </el-container> -->
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
<style lang="scss" scoped>
.default,
.container {
  height: 100%;
}
.header{

}
.push,
.footer {
  height: 125px;
}
.main {
  // min-height: 100%;
  height:100%;
  /* margin-bottom: -125px; */
}
</style>
