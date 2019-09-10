<template>
  <div class="n1-news">
    <div class="s-header" styl="display:none;">
      <div>
        <p>最新动态</p>
        <p>Latest News</p>
      </div>
      <img src="@/assets/img/news.png" alt />
    </div>
    <el-row class="n1-content">
      <el-col class="n1-old" :span="10" :offset="4">
        <div class="n1-line" v-for="(item,index) in news" :key="index">
          <div class="n1-imgWapper">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="n1-l-content">
            <div class="n1-lc-mark">
              <span>{{item.category}}</span>
              -
              <span>{{item.time}}</span>
            </div>
            <nuxt-link to="/about" class="n1-lc-title">{{item.title}}</nuxt-link>
            <div class="n1-lc-content">{{item.content}}</div>
          </div>
        </div>
      </el-col>
      <el-col class="n1-new" :span="4" :offset="2">
        <div class="n1-o-title">
          <p>往期动态</p>
        </div>
        <nuxt-link to="/about" class="n1-o-content" v-for="(item,index) in old" :key="index">
          <div class="n1-o-imgWapper">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="n1-oc-content">
            <div class="n1-oc-title">{{item.title}}</div>
            <div class="n1-oc-time">{{item.time}}</div>
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          imgUrl: require("@/assets/img/about.png"),
          category: "TECHNOLOGY",
          time: "MAR 23, 2019",
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          content:
            "我是内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        },
        {
          imgUrl: require("@/assets/img/about.png"),
          category: "TECHNOLOGY",
          time: "MAR 23, 2019",
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          content:
            "我是内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        },
        {
          imgUrl: require("@/assets/img/about.png"),
          category: "TECHNOLOGY",
          time: "MAR 23, 2019",
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          content:
            "我是内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      ],
      old: [
        {
          imgUrl: require("@/assets/img/about.png"),
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          time: "MAR 23, 2019"
        },
        {
          imgUrl: require("@/assets/img/about.png"),
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          time: "MAR 23, 2019"
        },
        {
          imgUrl: require("@/assets/img/about.png"),
          title: "For Women Only Your Computer Usage Could Cost You Your Job",
          time: "MAR 23, 2019"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.n1-news {
  .n1-content {
    margin: 8rem 0;
    .n1-new {
      .n1-o-title {
        padding-bottom: 0.4rem;
        border-bottom: 4px solid #4777f4;
        p {
          color: #2d3136;
          font-size: 1.3rem;
          font-weight: 600;
        }
      }
      .n1-o-content {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .n1-oc-title {
          color: #000;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .n1-oc-time {
          font-size: 0.8rem;
          color: #818992;
        }
        .n1-oc-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;
        }
        .n1-o-imgWapper {
          width: 4rem;
          height: 4rem;
          margin-right: 0.4rem;
          overflow: hidden;
          background-color: rgb(160, 160, 160);
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .n1-imgWapper {
      overflow: hidden;
      width: 100%;
      height: 21rem;
      background-color: rgb(160, 160, 160);
      border-radius: 4px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(1);
        transition: all 0.5s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .n1-old {
      .n1-line {
        margin-bottom: 6rem;
        position: relative;
        &:last-child {
          margin-bottom: 0;
        }
        .n1-l-content {
          position: relative;
          width: 95%;
          margin: -3rem auto 0;
          background-color: #fff;
          word-wrap: break-word;
          word-break: break-all;
          overflow: hidden;
          border-radius: 4px;
          padding: 1.5rem;
          box-shadow: 0px 0px 17px -4px #ddd;
          transform: translateY(0);
          transition: all 0.5s;
          &:hover {
            transform: translateY(-10px);
          }
          .n1-lc-mark {
            color: #818992;
            span {
              color: #818992;
            }
          }
          .n1-lc-title {
            margin: 1rem 0;
            color: #2d3136;
            font-size: 2rem;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            cursor: pointer;
            &:hover {
              color: #6f757a;
            }
          }
          .n1-lc-content {
            height: calc(1.5rem * 3);
            line-height: 1.5rem;
            font-size: 1.1rem;
            color: #818992;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            text-indent: 2.2rem;
          }
        }
      }
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