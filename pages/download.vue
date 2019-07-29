<template>
  <div class="download">
    <div class="content">
      <div class="left">
        <p class="bigtitle">红豆记客户端</p>
        <p class="mark">情侣恋爱的神器</p>
        <div class="download_icon">
          <div>
            <i class="iconfont">&#xe690;</i>
            <p>Androld</p>
          </div>
          <div>
            <i class="iconfont">&#xe634;</i>
            <p>iPhone</p>
          </div>
        </div>
        <p class="smllMark">感谢您对豆印的支持，敬请期待更多产品。</p>
      </div>
      <div class="right">
        <img src="@/assets/img/phone.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/varibale"; // 引入全局样式
.download{
  height: 90%;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ff5589, #ff77a0);
  padding: 3em 0;
  height:100%;
  position: relative;
  &::after,
  &::before {
    content: " ";
    display: inline-block;
    background: url("../assets/img/ellipse.png") no-repeat;
    background-size: 100% 100%;
    width: 15em;
    height: 15em;
    position: absolute;
  }
  &::after {
    background-position: 4em 2em;
    bottom: 0em;
    right: 0em;
  }
  &::before {
    background-position: -7em -2em;
    top: 0em;
    left: 0em;
    width: 20em;
    height: 20em;
  }
  & > div {
    margin: 0 4em;
  }
  .left {
    color: #fff;
    p {
      color: #fff;
    }
    .bigtitle {
      font-size: 2.5em;
    }
    .mark {
      font-size: 1.4em;
      font-family: "楷体", "楷体_GB2312";
    }

    .download_icon {
      margin: 0;
      margin: 3em 0 1em;
      text-align: left;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        width: 8em;
        padding: 0.4em 0.2em;
        margin: 1em 0;
        cursor: pointer;
        i {
          color: #fff;
          margin-right: 0.5em;
        }
        p {
          color: #fff;
        }
      }
    }
    .smllMark {
      font-size: 0.8em;
    }
  }
  .right {
    img {
      height: 30em;
      position:relative;
      z-index: 1;
    }
    
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        background: url("../assets/img/ellipse.png") no-repeat;
        background-size: 100% 100%;
        width: 12em;
        height: 12em;
        position: absolute;
        left: -40%;
        top: 25%;
      }
  }
}
</style>
