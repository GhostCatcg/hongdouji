<template>
  <div class="h-rb">
    <el-row>
      <el-col :offset="2" :span="4" align="center" :class="active">
          <nuxt-link to="/">首页</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
          <nuxt-link to="/about">关于</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
          <nuxt-link to="/service">客服</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
          <nuxt-link to="/download">下载</nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>

    .h-rb .active{
        color:#ff5387;
    }

</style>



<script>
export default {


    data(){
        return {
            active:"active"
        }
    }
};
</script>

