<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面没找到</h1>
    <h1 v-if="error.statusCode === 500">服务器出错</h1>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>
<style lang="scss">
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f77;
  h1 {
    font-size: 5rem;
    color: #fff;
  }
  a {
    font-size: 3rem;
    color: #3385ff;
  }
}
</style>
<script>
export default {
  props: ["error"],
  layout: "dafault" // you can set a custom layout for the error page
};
</script>