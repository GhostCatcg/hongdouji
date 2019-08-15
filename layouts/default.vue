<template>
  <div class="default">
        <h-header class="header"></h-header>
        <nuxt id="main"/>

        <h-footer></h-footer>

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

</style>
