<template>
  <div class="footer">
    <footer>
      <!-- https://blog.csdn.net/Fabulous1111/article/details/79651832 -->
      <div class="footer-logo">
        <nuxt-link to="/">
          <img src="../../../assets/img/logo.png" alt="">
        </nuxt-link>
      </div>
      <p>
        <span>豆印有限公司</span>
        <span>版权所有</span>
        <nuxt-link to="/terms">注册协议</nuxt-link>
        <nuxt-link to="/privacy">隐私协议</nuxt-link>
      </p>
      <p>公司地址：浙江省杭州市江干区下沙万亚金沙湖1号2幢1301室 电话：(0571) 8697 2071</p>
      <div class="ba">
        <img class="baicon" src="@/assets/img/beianico.png" alt />
        <span>浙公网安备 33011802001708号</span>
        <span>浙ICP备19012677号</span>
        <span>浙网文 (2019) 4002-383号</span>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
/* 脚步区域 */
footer {
  width: 100%;
  // height: 125px;
  background-color: #181818;
  text-align: center;
  color: #6d6d6d;
  padding: 1.5rem 0;
  position: relative;
  .footer-logo{
    position: absolute;
    left:7rem;
    top:50%;
    transform: translateY(-50%);
    img{
      width: 10rem;
    }
  }
  .state span {
    cursor: pointer;
  }
  .message span {
    margin: 0 20px;
    vertical-align: middle;
  }
  .ba span {
    margin-right: 5px;
  }

  .baicon {
    width: 20px;
    vertical-align: sub;
  }
  p {
    margin-bottom: 0.6rem;
    p{
      margin:0 .2rem;
    }
    a{
      margin:0 .2rem;

    }
  }
  .footer-top{
    position:absolute;
    top:-35px;
    left:50%;
    transform: translateX(-50%);
    a{
      margin:0 8em;
      font-size: 1.1em;
    }
  }
}
</style>
