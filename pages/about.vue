<template>
  <div class="about">
    <div class="BG">
      <div class="content">
        <p class="company">公司介绍</p>
        <div class="main">
          <p
            class="text"
          >一款有趣有温度的情侣社交和服务软件，有一群90后的年轻人开发，让情侣们更随心晒出他们的美好点滴，记录他们的时光印记，享受我们提供的情侣服务。我们希望有情人终成眷属，单身狗不再孤独，这是我们的愿景，也是我们的初衷。</p>
          <div class="img-wapper">
            <div class="img">
              <img src="@/assets/img/look.png" alt />
              <p class="mark">看看</p>
              <p class="ct">看情侣们分享他们的有趣视频和图文，这里是"云虐狗"的集中地</p>
            </div>
            <div class="img">
              <img src="@/assets/img/show.png" alt />
              <p class="mark">晒晒</p>
              <p class="ct">发布自己的短视频和图文，可以参加各种逗趣官方活动哦</p>
            </div>
            <div class="img">
              <img src="@/assets/img/link.png" alt />
              <p class="mark">绑定情侣</p>
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

.about {
  width: 100%;
  height: 80%;

  .BG {
    height: 100%;
    width: 100%;
    background: url("../assets/img/aboutBG.png") no-repeat;
    background-size: 100%;
    color: #fff;
    padding: 3rem 0 0;
    .company {
      color: #fff;
      font-size: 2rem;
      text-align: center;
      margin: 0 0 2rem;
      letter-spacing: 0.2rem;
    }

    .main {
      width: 60%;
      margin: 0 auto 6rem;
      background-color: #fff;
      padding: 4rem 6.5rem;
      box-shadow: 0px 0px 10px 2px #bbb;


      .text {
        text-indent: 2rem;
        line-height: 2rem;
        color: #000;
        margin-bottom: 5rem;
        letter-spacing: 1px;
      }

      .img-wapper {
        display: flex;
        justify-content: space-around;
        .img {
          text-align: center;
          img{
              height: 2rem;
          }
          .mark {
            color: $color;
            padding: 0.5rem 0;
            font-weight: 600;
          }
          .ct {
            color:#000;
            font-size: 1rem;
          }
        }
        .img:nth-child(2) {
          margin: 0 4.5rem;
        }
      }
    }
  }
}
</style>


<script>
export default {};
</script>
