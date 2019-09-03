<template>
  <div class="I-top">
    <el-row class="I-el-row">
      <el-col :span="10" align="right" class="I-home">
        <div>
          <img src="@/assets/img/home1.png" alt />
        </div>
      </el-col>

      <el-col class="different" :span="12" align="center">
        <div class="text">
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
          icon: "iconfont icon-iconfontapple",
          name: "iPhone",
          imgUrl: 'https://hdjqrcode.oss-cn-beijing.aliyuncs.com/1567524788.png',
          flag: false
        },
        {
          icon: "iconfont icon-anzhuo",
          name: "Android",
          imgUrl: 'https://hdjqrcode.oss-cn-beijing.aliyuncs.com/1567524788.png',
          flag: false
        },
        // {
        //   icon: "iconfont icon-weixin",
        //   name: "微信公众号",
        //   imgUrl: require("@/assets/img/12_12.jpg"),
        //   flag: false
        // }
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
  .I-el-row {
    position: relative;
    bottom: -4rem;
    height: 100%;
  }

  .I-home {
    height: 100%;
    div {
      margin-right: 2rem;
      width: 400px;
    }
    img {
      height: 100%;
      width: 100%;

    }
  }
  div {
    z-index: 1;
  }
  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .big-title {
    font-size: 4rem;
  }
  .msg {
    font-size: 2.5rem;
  }
  .big-title,
  .msg {
    color: #fff;
    text-align: left;
    letter-spacing: 2px;
  }
  .different {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding-top: 5rem;
    margin-left: 1rem;
    .QR-wapper {
      text-align: left;
    }
    .QRcode {
      display: inline-block;
      width: 9rem;
      line-height: 3rem;
      font-size: 0.8rem;
      background-color: #000;
      color: #fff;
      border-radius: 5px;
      margin-top: 1rem;
      text-align: center;
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
        height: 100%;
      }
      position: relative;
      .img {
        position: absolute;
        top: 60%;
        padding-top: 20px;
        z-index: -1;
        background-color: #000;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        object-fit: cover;
        box-sizing: border-box;
        width: 9rem;
        height: 9.5rem;
        img {
          width: 80%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
