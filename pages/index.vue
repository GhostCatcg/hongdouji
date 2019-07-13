<template>
  <div class="index">
    <div class="I-top">
      <el-row>
        <el-col :span="24" align="center">
          <p class>情侣必备</p>
        </el-col>

        <el-col :span="24" align="center">
          <p class>享受我们在一起的甜蜜生活</p>
        </el-col>

        <el-col :span="24" align="center">
          <nuxt-link to>
            <span>Android</span>
          </nuxt-link>
          <nuxt-link to>
            <span>Iphone</span>
          </nuxt-link>
          <nuxt-link to>
            <span>微信公众号</span>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
    <div class="I-bottom"></div>
  </div>
</template>

<script>
// import HHeader from '~/components/public/header/index.vue'

export default {
  components: {
    // HHeader
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.I-top {
  background-image: url("../assets/img/homeBG.png");
  background-size: cover;
  height: 20rem;
}
</style>
