<template>
  <div class="n1-news">
    <div class="s-header">
      <div>
        <p>最新动态</p>
        <p>Latest News</p>
      </div>
      <img src="@/assets/img/news.png" alt />
    </div>
    <div class="n1-content">
      <div class="n1-new">

      </div>
      <div class="n1-old">
          <dl>
              <dt>往期动态</dt>
          </dl>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n1-news {
  .n1-content {
      padding:4rem;
  }
  .s-header {
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
      height: 100%;
    }
  }
}
</style>