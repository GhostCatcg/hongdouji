<template>
  <div class="I-top">
    <div class="I-line">
      <div class="I-text">
        <p class="I-title">分享生活</p>
        <p class="I-msg">让生活变得更有趣</p>
      </div>
      <div>
        <img src="@/assets/img/1.png" alt />
      </div>
    </div>
    <div class="I-arrow">
      <img src="@/assets/img/arrow1.png" alt />
    </div>
    <div class="I-line">
      <div>
        <img src="@/assets/img/2.png" alt />
      </div>
      <div class="I-text">
        <p class="I-title">随时拍摄</p>
        <p class="I-msg">记录美好瞬间</p>
      </div>
    </div>

    <div class="I-arrow">
      <img src="@/assets/img/arrow.png" alt />
    </div>
    <div class="I-line">
      <div class="I-text">
        <p class="I-title">情侣必备</p>
        <p class="I-msg">你想要的二人空间</p>
      </div>
      <div>
        <img src="@/assets/img/3.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.I-top {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10% 15% 5%;

  .I-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 4rem 0;
    .I-text {
      margin: 4rem 10%;
      p {
        &.I-title {
          font-size: 3rem;
          font-weight: 600;
        }
        font-size: 2rem;
        letter-spacing: 1px;
        color: #0b0b0b;
      }
    }
  }
  .I-arrow {
    text-align: center;
    img {
      &.matrix {
        filter: FlipH; /* IE only */
        -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
        -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
      }
    }
  }
}


@media screen and (max-width: 1500px) {
  .I-top {
    padding: 10% 5% 5%;
  }
}
</style>
