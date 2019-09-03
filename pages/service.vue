<template>
  <div class="service">
    <div class="content">
      <!-- <p class="title">{{title}}</p> -->
      <div class="s-header">
        <div>
          <p>意见反馈</p>
          <p>Feedback</p>
        </div>
        <img src="@/assets/img/feedback.png" alt />
      </div>
      <div class="main">
        <img class="left-img" src="@/assets/img/pink.png" alt />
        <img class="right-img" src="@/assets/img/green.png" alt />
        <div class="from">
          <div>
            <span class="left">选择系统：</span>
            <div class="platform">
              <input
                type="radio"
                checked
                v-model="platform.type"
                value="0"
                name="phone"
                id="androld"
              />
              <label class="active" for="androld">安卓系统</label>

              <input type="radio" v-model="platform.type" value="1" name="phone" id="ios" />
              <label for="ios">苹果系统</label>
            </div>
          </div>
          <div>
            <label class="left">反馈内容：</label>
            <div>
              <textarea
                v-model="suggest"
                name
                id
                placeholder="1、请详细描述您遇到的问题。
2、尽量上传出现问题时的截图。
3、请留下您的真是姓名和联系方式，以便豆印客服联系您。"
              ></textarea>
            </div>
          </div>
          <div class="imgWapper">
            <span class="left">上传截图：</span>
            <div class="seimg">
              <div>
                <label for="imgfile">选择图片</label>
                <input
                  type="file"
                  @change="uploadImg($event,'HF')"
                  ref="imgfile"
                  id="imgfile"
                  accept="image/png, image/jpeg, image/gif, image/jpg"
                />
                <span>不超过2M</span>
              </div>
              <div class="uploadedimg" v-show="upimg">
                <img :src="imgBase64" alt  />
              </div>
            </div>
          </div>
          <div>
            <label class="left" for>联系方式：</label>
            <div class="phone">
              <input v-model="number" type="number" placeholder="您的手机号或者QQ号" />
              <span class="mark">仅豆印工作人员可见，请保持您的联系方式畅通。</span>
            </div>
          </div>
          <p class="submit">
            <span @click="submitForm">提交</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      suggest: "", //建议
      number: "", // 联系方式
      platform: {
        type: "0" // 0安卓 1苹果
      },
      images: "",
      imgBase64: "",
      title: "人本精神 服务至上",
      upimg: false
    };
  },
  methods: {
    verify() {
      if (this.suggest === "") {
        alert("请输入建议");
        return;
      }
      if (this.number === "") {
        alert("请输入手机号");
        return;
      }

      if (window.FileReader) {
        var fr = new FileReader();
        // add your code here
      } else {
        alert("您的浏览器不支持上传图片！");
        return;
      }
    },
    // 发送数据
    submitForm() {
      // 简单验证
      this.verify();

      let _this = this; //转换this

      var imgFile = this.$refs.imgfile.files[0]; // 获取图片文件
      var fr = new FileReader(imgFile); // 读取文件
      fr.readAsDataURL(imgFile);
      fr.onload = function() {
        // 图片读取完成后
        _this.imgBase64 = fr.result; // 读取到的图片路径是Base64的
        var jsonData = {
          suggest: _this.suggest,
          number: _this.number,
          phone: _this.platform.type,
          imgBase64: _this.imgBase64
        };
        _this.send(jsonData);
      };
    },

    async send(data) {
      // console.log(data);
      // let jsonRes = await axios.post("https://hdouji.com/upload/json", data);
      let jsonRes = await axios.post("http://localhost:8080/upload/json", data);
      if (jsonRes.status !== 200) {
        alert("上传失败!");
        return;
      }
      alert("上传成功！");
      this.$router.push("/");
    },

    uploadImg(e, type) {
      let _this = this; //转换this

      var imgFile = e.target.files[0]; // 获取图片文件
      var fr = new FileReader(imgFile); // 读取文件
      fr.readAsDataURL(imgFile);
      fr.onload = function() {
        // 图片读取完成后
        _this.imgBase64 = fr.result; // 读取到的图片路径是Base64的
        _this.upimg = true
        console.log(_this.imgBase64);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/varibale"; // 引入全局样式
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.content {
  position: relative;
  &::after,
  &::before {
    content: "";
    display: inline-block;
    background: url("../assets/img/ellipse.png") no-repeat;
    background-size: 100% 100%;
    width: 15em;
    height: 15em;
    position: absolute;
  }
  &::after {
    background-position: 6em 4em;
    bottom: 0em;
    right: 0em;
    width: 20em;
    height: 20em;
  }
  &::before {
    background-position: -4em -2em;
    top: 0em;
    left: 0em;
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
  .title {
    color: #fff;
    font-size: 2rem;
    text-align: center;
    margin: 0 0 2rem;
    letter-spacing: 0.2rem;
  }
  .main {
    width: 60%;
    margin: 12rem auto;
    background-color: #fff;
    padding: 2.5rem 5rem;
    background: #fff;
    position: relative;
    box-shadow: 0px 0px 8px -3px #bdbdbd;
    .m-title {
      text-align: center;
      font-size: 1.5rem;
      color: $color;
      margin-bottom: 2.5em;
    }
    & > img {
      position: absolute;
      width: 25rem;
      z-index: -1;
    }
    .left-img {
      left: -5rem;
      bottom: -5rem;
    }
    .right-img {
      right: -10rem;
      top: -5rem;
    }
    .from {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      & > div:nth-child(2) {
        align-items: flex-start;
        
      }
      .uploadedimg{
        img{
          width: 40%;
          object-fit: cover;
        }
      }
      & > div.imgWapper {
        align-items: flex-start;
      }
      & > div {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 1.1rem;

        & > .left {
          padding: 0.2em 1em;
          font-size: 1.5rem;
        }
        & > div {
          flex: 1;
          vertical-align: top;
          textarea {
            width: 100%;
            height: 12em;
            padding: 0.6em 1em;
            line-height: 1.5;
            font-size: 1.1em;
            color: #333;
            border: 1px solid #d7d7d7;
          }
          input {
            border: 1px solid #d7d7d7;
          }
        }

        .seimg {
          & > div:first-child{
            height:3rem;
            display: flex;
    align-items: center;
          }
          label {
            border: 1px solid #d7d7d7;
            padding: 0.4em 1em;
            font-size: 1.1em;
            cursor: pointer;
          }
          input {
            opacity: 0;
            display: none;
          }
          span {
            margin-left: 0.3em;
            font-size: 0.9rem;
            color: #666;
          }
        }
        .phone {
          .mark {
            font-size: 0.9rem;
            color: #666;
          }
          input {
            font-size: 1.1rem;
            padding: 0.5rem;
          }
        }
      }
    }
    .platform {
      input {
        display: none;
      }
      label {
        display: inline-block;
        padding: 0.3em 1em;
        text-align: center;
        font-size: 1.1em;
        border-radius: 5px;
        border: 1px solid $color;
        margin-right: 1em;
        cursor: pointer;
      }

      input:checked + label {
        background-color: $color;
        color: #fff;
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
