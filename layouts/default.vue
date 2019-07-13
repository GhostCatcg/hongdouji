<template>
  <div>
    <el-container>

      <el-header>
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
import HHeader from '../components/public/header/index.vue'
import HFooter from '../components/public/footer/index.vue'
export default {
  components:{
    HHeader,
    HFooter
  }
}
</script>
<style>

.footer{
  height: 125px;
  margin-bottom:-125px;
}
</style>
