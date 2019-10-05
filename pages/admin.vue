<template>
  <div class="admin" style="height:100%;">
    <div>
      <h1 class="title">Test Markdown后台发布功能</h1>
      <div class="mavonEditor">
        <no-ssr>
          <mavon-editor :toolbars="markdownOption" v-model="handbook" />
        </no-ssr>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%;margin:0 atuo;text-align:center;">
      <el-table-column prop="suggest" label="反馈内容" width="180"></el-table-column>
      <el-table-column prop="number" label="手机号" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机系统"></el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss">
.title{
  text-align:center;
  font-size: 4rem;
}
.admin{
  padding-top:8rem;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>
<script>
import axios from "axios";
export default {
  mounted() {
    axios.get(`/admin1`).then(res => {
      for (var i in res.data) {
        console.log(res.data[i]);
        this.tableData.push({
          suggest: res.data[i].suggest,
          number: res.data[i].number,
          phone: res.data[i].phone == 0 ? "安卓系统" : "苹果系统"
        });
      }
    });
  },
  data() {
    return {
      tableData: [],
      markdownOption: {
        bold: true // 粗体
        // ... // 更多配置
      },
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  }
};
</script>
