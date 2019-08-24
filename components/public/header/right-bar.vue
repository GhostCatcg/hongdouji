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
        <nuxt-link to="/news" active-class="active">最新动态</nuxt-link>
      </el-col>
      <el-col :span="4" align="center">
        <nuxt-link to="/service" active-class="active">意见反馈</nuxt-link>
      </el-col>
      <el-col :span="6" align="center" class="about" @mouseenter="enter()" @mouseleave="leave()">
        <nuxt-link to="/about" class="download" >
          关注我们
          <div class="about-imgWapper" v-show="showFlag">
            <img src="@/assets/img/12_12.jpg" alt />
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFlag: false,
      active:"active"
    };
  },
  methods: {
    enter() {
      this.showFlag = true
      console.log("进入")
    },
    leave(){
      this.showFlag = false
      console.log("离开")

    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../assets/css/varibale";

.h-rb {
  .nuxt-link-exact-active.active {
    border-bottom: 4px solid #fff;
    padding-bottom: 5px;
  }
  border-bottom: 0px solid $color;
  box-sizing: border-box;
  height: 4rem;
  .about {
    position: relative;

    .download {
      color: #fff;
      background: #000;
      border-radius: 50px;
      padding: 0.7rem 2.7rem;
      box-sizing: content-box;
      position: relative;
      .about-imgWapper {
        position: absolute;
        background-color: #000;
        padding: 1.5rem 1rem 0;
        width: 100%;
        height: 11rem;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        top: 60%;
        z-index: -1;
        left: 0;
        img {
          width: 100%;
        }
      }
    }
  }
  a {
    font-size: 1.1rem;
    color: #fff;
    letter-spacing: 1px;
  }
}
</style>




