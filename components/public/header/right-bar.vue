<template>
  <div class="h-rb">
    <el-row>
      <el-col :offset="2" :span="4" align="center" :class="active">
        <nuxt-link to="/" active-class="active">首页</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
        <nuxt-link to="/about" active-class="active">关于我们</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
        <nuxt-link to="/service" active-class="active">意见反馈</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
        <nuxt-link to="/download" active-class="active">下载</nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    created(){
        console.log("创建完成")
        console.log(this.$route.path)
    },
    beforeCreate() {
        congsole.log("挂载之前")
    },
}
</script>


<style lang="scss" scoped>
@import "../../../assets/css/varibale";

.h-rb{
  .nuxt-link-exact-active {
    color: #ff5387;
  }
  border-bottom:0px solid $color;
  box-sizing: border-box;
  height:4rem;
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

