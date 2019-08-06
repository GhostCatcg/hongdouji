<template>
  <div class="I-top">
    <el-row>
      <el-col class="big-title" :span="24" align="center">
        <p>情侣必备</p>
      </el-col>

      <el-col class="msg" :span="24" align="center">
        <p>红豆记记录美好爱情分享恋爱经历</p>
      </el-col>

      <el-col class="different" :span="24" align="center">
        <!-- <div class="QRcode" v-for="(item, index) in qrcode" :key="index">
          <div>
            <i class="iconfont">{{item.icon}}</i>
            <span>{{item.name}}</span>
          </div>
          <img :src="item.imgUrl" alt="">
        </div>-->

        <div class="QRcode">
          <div @mouseenter="enter" @mouseleave="leave">
            <i class="iconfont">&#xe690;</i>
            <span>Android</span>
          </div>

          <img v-show="flag" src="@/assets/img/12_12.jpg" alt />
        </div>
        <div class="QRcode">
          <div @mouseenter="enter" @mouseleave="leave">
            <i class="iconfont">&#xe634;</i>
            <span>iPhone</span>
          </div>
          <img v-show="flag" src="@/assets/img/12_12.jpg" alt />
        </div>
        <div class="QRcode">
          <div @mouseenter="enter" @mouseleave="leave">
            <i class="iconfont">&#xe62c;</i>
            <span>微信公众号</span>
          </div>
          <img v-show="flag" src="@/assets/img/12_12.jpg" alt />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qrcode: [
        {
          icon: "&#xe690;",
          name: "Android",
          imgUrl: "@/assets/img/12_12.jpg"
        }
      ],
      flag: true
    };
  },
  methods: {
    enter(e) {
      e.target.nextElementSibling.style.display = "block";
      // console.log("我进来了", e.target.nextElementSibling);
    },
    leave(e) {
      e.target.nextElementSibling.style.display = "none";
      // console.log("我出去了");
    }
  }
};
</script>

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
    margin-top: 3rem;
    .QRcode {
      display: inline-block;
      width: 12rem;
      line-height: 3rem;
      background-color: $color;
      color: #fff;
      border-radius: 10px;
      margin-top: 4rem;

      &:nth-child(2) {
        margin: 0 2rem;
      }
      i {
        margin-right: 0.2rem;
        color: #fff;
      }
      div {
        color: #fff;
      }

      img {
        width: 80%;
      }
    }
  }
}
</style>
