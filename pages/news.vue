<template>
  <div class="n1-news">
    <div class="s-header">
      <div>
        <p>最新动态</p>
        <p>Latest News</p>
      </div>
      <img src="@/assets/img/news.png" alt />
    </div>
    <el-row>
      <el-col :span="8">
        <div>
          <img src="../assets/img/news.png" alt />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="n1-o-title">
          <p>往期动态</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.n1-news {
  .n1-content {
    padding: 4rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & > div {
    }
    .n1-new {
    }
    .n1-old {
      flex: 1;
    }
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