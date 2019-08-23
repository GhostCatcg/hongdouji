<template>
  <div class="e1-wapper">
    <h1>Markdown 后台发布</h1>

    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e1-wapper {
  height: 100%;
  background-color: #666;
  padding-top: 8rem;
}
h1 {
  text-align: center;
  color: #fff;
  font-size: 5rem;
}

html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>

<script src="https://unpkg.com/marked@0.3.6"></script>
<script src="https://unpkg.com/lodash@4.16.0"></script>
<script>
export default {
  data: {
    input: "# hello"
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};

// new Vue({
//   el: "#editor",
//   data: {
//     input: "# hello"
//   },
//   computed: {
//     compiledMarkdown: function() {
//       return marked(this.input, { sanitize: true });
//     }
//   },
//   methods: {
//     update: _.debounce(function(e) {
//       this.input = e.target.value;
//     }, 300)
//   }
// });
</script>