# 让koa、nuxt等node项目使用ES6


一、  安装babel-cli、babel-preset-env
``` bash
npm i babel-cli babel-preset-env -D
```
二、 配置babel

> 根目录下新建 .babelre 文件，文件内容如下
``` bash
{
    "presets": ["env"]
}
```

三、在package.json文件的script中修改启动命令(以nuxt项目为例)，添加"--exec babel-node"

``` json
"scripts": {
"dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
"build": "nuxt build",
"start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
"generate": "nuxt generate"
},

```