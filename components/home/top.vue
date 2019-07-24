<template>
  <div class="I-top">
    <el-row>
      <el-col class="big-title" :span="24" align="center">
        <p>情侣必备</p>
      </el-col>

      <el-col class="msg" :span="24" align="center">
        <p>享受我们在一起的甜蜜生活</p>
      </el-col>

      <el-col class="different" :span="24" align="center">
        <nuxt-link to>
          <i class="iconfont">&#xe690;</i>
          <span>Android</span>
        </nuxt-link>

        <nuxt-link to>
          <i class="iconfont">&#xe634;</i>
          <span>iPhone</span>
        </nuxt-link>

        <nuxt-link to>
          <i class="iconfont">&#xe62c;</i>
          <span>微信公众号</span>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/varibale"; // 引入全局样式

.container {
  margin: 0 auto;
  min-height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
p,
span {
  color: #fff;
}
.I-top {
  background: url("../../assets/img/home.jpg") no-repeat;
  background-size: 100% 100%;
  height: 30rem;
  position: relative;

  div {
    position: relative;
    z-index: 1;
  }
  .big-title p {
    font-size: 4rem;
    margin: 6rem 0 0.8rem;
    text-indent: 2rem;
    letter-spacing: 2rem;
  }
  .msg p {
    font-size: 1.8rem;
  }
  .big-title p,
  .msg p {
    color: $color;
    text-shadow: 2px 2px 5px #fff, 2px 2px 5px #ffe, 2px 2px 5px #fff,
      2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff,
      2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff;
  }
  .different {
    margin-top: 4rem;

    a:nth-child(2) {
      margin: 0 2rem;
    }

    a {
      display: inline-block;
      width: 11rem;
      line-height: 3rem;
      background-color: $color;
      color: #fff;
      border-radius: 10px;

      i {
        margin-right: 0.2rem;
        color: #fff;
      }
    }
  }
}
</style>
