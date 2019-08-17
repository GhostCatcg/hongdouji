<template>
  <div class="I-top">
    <el-row>
      <!-- <el-col class="big-title" :span="24" align="center">
        <p>{{bigTitle}}</p>
      </el-col>

      <el-col class="msg" :span="24" align="center">
        <p>{{title}}</p>
      </el-col>-->

      <el-col :span="8" align="right" class="I-home">
        <img src="@/assets/img/home1.png" alt />
      </el-col>

      <el-col class="different" :span="10" align="center">
        <div>
          <p class="big-title">{{bigTitle}}</p>
          <p class="msg">{{title}}</p>
        </div>
        <div class="QR-wapper">
          <div class="QRcode" v-for="(item, index) in qrcode" :key="index">
            <div @mouseenter="enter(index)" @mouseleave="leave(index)">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </div>
            <div class="img" v-show="item.flag">
              <img :src="item.imgUrl" />
            </div>
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
      bigTitle: "红豆记",
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
  background: linear-gradient(
    215deg,
    rgba(255, 61, 73, 1) 0%,
    rgba(255, 116, 104, 1) 100%
  );
  height: 45rem;
  padding-top: 6rem;
  position: relative;
  .I-home {
    position: relative;
    bottom: -4rem;
    img {
      width: 400px;
    }
  }
  div {
    z-index: 1;
    height: 100%;
  }
  .big-title {
    font-size: 4rem;
  }
  .msg {
    font-size: 1.8rem;
  }
  .big-title,
  .msg {
    color: #fff;
    text-align: left;
    letter-spacing: 2px;
  }
  .different {
    margin-top: 4rem;
    top: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
