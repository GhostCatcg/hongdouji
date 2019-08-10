<template>
  <div class="I-top">
    <el-row>
      <el-col class="big-title" :span="24" align="center">
        <p>{{bigTitle}}</p>
      </el-col>

      <el-col class="msg" :span="24" align="center">
        <p>{{title}}</p>
      </el-col>

      <el-col class="different" :span="24" align="center">
        <div class="QRcode" v-for="(item, index) in qrcode" :key="index">
          <div @mouseenter="enter(index)" @mouseleave="leave(index)">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </div>
          <div class="img" v-show="item.flag">
            <img :src="item.imgUrl"  />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bigTitle: "情侣必备",
      title: "红豆记记录美好爱情分享恋爱经历",
      qrcode: [
        {
          icon: "iconfont icon-anzhuo",
          name: "Android",
          imgUrl: require("@/assets/img/12_12.jpg"),
          flag: false
        },
        {
          icon: "iconfont icon-iconfontapple",
          name: "iPhone",
          imgUrl: require("@/assets/img/12_12.jpg"),
          flag: false
        },
        {
          icon: "iconfont icon-weixin",
          name: "微信公众号",
          imgUrl: require("@/assets/img/12_12.jpg"),
          flag: false
        }
      ]
    };
  },
  methods: {
    enter(index) {
      this.qrcode[index].flag = true;
    },
    leave(index) {
      this.qrcode[index].flag = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibale.scss"; // 引入全局样式记得带后缀
@import "@/assets/font/iconfont.css";
// @import "@/assets/css/temp.scss";

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
  cursor: default;
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
    text-shadow: 2px 2px 5px #fff, 2px 2px 5px #ffe, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff,
      2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff, 2px 2px 5px #fff;
  }
  .different {
    margin-top: 3rem;
    position: absolute;
    top: 100%;
    .QRcode {
      display: inline-block;
      width: 12rem;
      line-height: 3rem;
      background-color: $color;
      color: #fff;
      border-radius: 30px;
      margin-top: 4rem;

      &:nth-child(2) {
        margin: 0 2rem;
      }
      i {
        margin-right: 0.2rem;
        color: #fff;
        font-size: 1.2rem;
      }
      div {
        color: #fff;
      }

      .img {
        position: absolute;
        top: 60%;
        padding-top: 20px;
        z-index: -1;
        background-color: $color;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        object-fit: cover;
        box-sizing: border-box;
        img {
          height: 100%;
          width: 80%;
          object-fit: cover;
        }
      }
    }
  }
}


</style>
