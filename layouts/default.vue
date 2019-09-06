<template>
  <div class="default">
    <h-header class="header"></h-header>
    <nuxt id="main" />
    <h-footer></h-footer>
  </div>
</template>

<script>
import HHeader from "../components/public/header/index.vue";
import HFooter from "../components/public/footer/index.vue";
console.log(
  "\n" + " %c GhostCat Blogs %c https://GhostCat.info " + "\n",
  "color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
console.log(
  "\n" + " %c GhostCat GitHub %c https://github.com/GhostCatCG " + "\n",
  "color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
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
  min-width: 1280px;
}
.push,
.footer {
  height: 125px;
}
</style>
