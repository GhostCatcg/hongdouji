<template>
  <div class="about">
    <div class="BG">
      <div class="content">
        <div class="about-header">
          <div>
            <p>关于我们</p>
            <p>About Us</p>
          </div>
          <img src="@/assets/img/about.png" alt />
        </div>
        <div class="main">
          <p class="main-title">什么是红豆记</p>
          <p
            class="text"
          >一款有趣有温度的情侣社交和服务软件，有一群90后的年轻人开发，让情侣们更随心晒出他们的美好点滴，记录他们的时光印记，享受我们提供的情侣服务。我们希望有情人终成眷属，单身狗不再孤独，这是我们的愿景，也是我们的初衷。</p>
          <p class="text"></p>
          <div class="img-wapper">
            <div class="img">
              <img src="@/assets/img/look.png" alt />
              <p class="ct">看情侣们分享他们的有趣视频和图文，这里是"云虐狗"的集中地</p>
            </div>
            <div class="img">
              <img src="@/assets/img/show.png" alt />
              <p class="ct">发布自己的短视频和图文，可以参加各种逗趣官方活动哦</p>
            </div>
            <div class="img">
              <img src="@/assets/img/link.png" alt />
              <p class="ct">在"我的"里绑定情侣，不仅获得恋爱积分，还有持续上新的情侣服务</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/varibale"; // 引入全局样式
.content {
  display: inline-block;
}
.about {
  .BG {
    height: 100%;
    width: 100%;
    color: #fff;
    .about-header {
      position: relative;
      div {
        position: absolute;
        position: absolute;
        z-index: 99;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        p {
          color: #fff;
          font-size: 3rem;
          letter-spacing: 3px;
          &:first-child {
            font-size: 4rem;
          }
        }
      }
      img {
        width: 100%;
      }
    }

    .main {
      background-color: #fff;
      padding: 4rem 20%;
      box-shadow: 0px 0px 10px 2px #bbb;
      .main-title {
        text-align: center;
        font-size: 3rem;
        color: #0b0b0b;
      }
      .text {
        text-indent: 4rem;
        line-height: 1.8;
        color: #000;
        letter-spacing: 1px;
        margin: 4rem auto;
        font-size: 2rem;
      }

      .img-wapper {
        display: flex;
        justify-content: space-around;
        margin:6rem 0;
        .img {
          text-align: center;
          img {
            height: 3rem;
          }
          .ct {
            color: #000;
            font-size: 1.5rem;
            margin-top:4rem;
          }
        }
        .img:nth-child(2) {
          margin: 0 15%;
        }
      }
    }
  }
}
</style>


<script>
export default {};
</script>
