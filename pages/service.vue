<template>
  <div class="service">
    <div class="content">
      <p class="title">人本精神 服务至上</p>
      <div class="main">
        <p class="m-title">留言客服</p>
        <div class="from">
          <div>
            <span class="left">选择平台：</span>
            <div class="platform">
              <span class="active">安卓手机</span>
              <span>苹果手机</span>
            </div>
          </div>
          <div>
            <label class="left">反馈内容：</label>
            <div>
              <textarea
                name
                id
                placeholder="1、请详细描述您遇到的问题。
2、金量上传出现问题时的截图。
3、请留下您的真是姓名和联系方式，以便豆印客服联系您。"
              ></textarea>
            </div>
          </div>
          <div>
            <span class="left">上传截图：</span>
            <div class="seimg">
              <label for="imgfile">选择图片</label>
              <input type="file" id="imgfile" />
              <span>不超过2M</span>
            </div>
          </div>
          <div>
            <label class="left" for>联系方式：</label>
            <div class="phone">
              <input type="text" placeholder="您的手机号或者QQ号" />
              <span class="mark">仅豆印工作人员可见，请保持你的联系方式畅通。</span>
            </div>
          </div>
          <p class="submit">
            <span>提交</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/varibale"; // 引入全局样式

.content {
  // background-color: $color;
  background: linear-gradient(to right, #ff5589, #ff77a0);
  padding-top: 3rem;
  height: 100%;
  position:relative;
  &::after,
  &::before {
    content:"";
    display: inline-block;
    background: url("../assets/img/ellipse.png") no-repeat;
    background-size: 100% 100%;
    width: 15em;
    height: 15em;
    position:absolute;
  }
  &::after{
    background-position: 6em 4em;
    bottom:0em;
    right:0em;
    width: 20em;
    height: 20em;
  }
  &::before{
    background-position: -4em -2em;
    top:0em;
    left:0em;
  }
  .title {
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
    padding: 2.5rem 5rem;
    // box-shadow: 0px 0px 10px 2px #bbb;
    // box-shadow: 0px 0px 10px 2px #bbb;
    .m-title {
      text-align: center;
      font-size: 1.5rem;
      color: $color;
      margin-bottom: 2.5em;
    }
    .from {
      width: 100%;
      & > div {
        width: 100%;
        display: flex;
        margin-bottom: 0.6em;
        & > .left {
          padding: 0.2em 1em;
          font-size: 0.9em;
        }
        & > div {
          flex: 1;
          vertical-align: top;
          textarea {
            width: 100%;
            height: 12em;
            padding: 0.6em 1em;
            line-height: 1.5em;
            font-size: 0.8em;
            color: #333;
            border: 1px solid #d7d7d7;
          }
          input {
            border: 1px solid #d7d7d7;
          }
        }

        .seimg {
          label {
            border: 1px solid #d7d7d7;
            padding: 0.4em 1em;
            font-size: 0.8em;
            cursor: pointer;
          }
          input {
            opacity: 0;
            display: none;
          }
          span {
            margin-left: 0.3em;
            font-size: 0.7em;
          }
        }
        .phone {
          .mark {
            font-size: 0.7em;
          }
          input {
            font-size: 0.7em;
            padding: 0.5em;
          }
        }
      }
    }
    .platform {
      span {
        display: inline-block;
        padding: 0.3em 1em;
        text-align: center;
        font-size: 0.8em;
        border-radius: 5px;
        border: 1px solid $color;
        margin-right: 1em;
        cursor: pointer;

        &.active {
          background-color: $color;
          color: #fff;
        }
      }
    }
    .submit {
      text-align: center;
      margin: 2em auto;
      span {
        padding: 0.5em 3.5em;
        background-color: $color;
        color: #fff;
        font-size: 1.2em;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
