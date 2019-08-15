<template>
  <div class="h-rb">
    <el-row>
      <el-col :offset="2" :span="3" align="center" :class="active">
        <nuxt-link to="/" active-class="active">首页</nuxt-link>
      </el-col>
      <el-col :span="3" align="center">
        <nuxt-link to="/about" active-class="active">关于我们</nuxt-link>
      </el-col>
      <el-col :span="3" align="center">
        <nuxt-link to="/service" active-class="active">最新动态</nuxt-link>
      </el-col>
      <el-col :span="3" align="center">
        <nuxt-link to="/service" active-class="active">意见反馈</nuxt-link>
      </el-col>
      <el-col :span="5" align="center">
        <nuxt-link to="/download" class="download" active-class="active">下载</nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    console.log("创建完成");
    console.log(this.$route.path);
  },
  beforeCreate() {
    congsole.log("挂载之前");
  }
};
</script>


<style lang="scss" scoped>
@import "../../../assets/css/varibale";

.h-rb {
  .nuxt-link-exact-active {
    color: #ff5387;
  }
  border-bottom: 0px solid $color;
  box-sizing: border-box;
  height: 4rem;
  .download {
    color: #fff;
    background: #000;
    border-radius: 50px;
    padding: 0.8rem 3.5rem;
    box-sizing: content-box;
  }
  a {
    font-size: 0.8rem;
    color: #fff;
  }
}
</style>



<script>
export default {
  data() {
    return {
      active: "active"
    };
  }
};
</script>

