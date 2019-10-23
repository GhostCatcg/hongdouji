# 基于Nuxt(Vue) + koa2 + mongodb构建的全栈开源项目，已使用pm2 + nginx部署到阿里云。

## [红豆记官网](https://www.hdouji.com)

## 使用方法

``` bash

# 安装依赖
$ npm run install

# 运行
$ npm run dev

# 打包
$ npm run build

# 线上使用pm2部署
$ npm run prd

```


## 目录结构


```

红豆记
|
│   README.md            项目说明文件
|  
|   layouts              布局目录，用于组织应用的布局组件，不可更改
|
|   pages                用于存放写的页面，我们主要的工作区域
|
|   server               使用node koa2框架写后台和服务端渲染
|
|   dbs                  存放数据库配置文件
|
│   nuxt.config.js       用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|
│   package-lock.json    npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作
|
│   package.json         npm 包管理配置文件
|
│   .nuxt                Nuxt自动生成，临时的用于编辑的文件，build
|
|   assets               用于组织未编译的静态资源如LESS、SASS或JavaScript
|
|   components           用于自己编写的Vue组件，比如波动组件、日历组件、分页组件
|
|   middleware           用于存放中间件
|
|   plugins              用于存放JavaScript插件的地方
|
|   static               用于存放静态资源文件，比如图片
|
|   store                用于组织应用的Vuex 状态管理
|
|   .editorconfig        开发工具格式配置
|
|   .eslintrc.js         ESLint的配置文件，用于检查代码格式
|
|   .gitignore           配置git不上传的文件
|
|
└───layouts              公共模板入口文件
|   |
│   │   default.vue         默认入口文件
|   |
│   │   error.vue           404错误页面
|   |
│   │   none.vue            空白页面(用来写注册协议和隐私协议适配手机)
|   |
│   │   ...  
│     
│     
└───components           公用组件封装
|   |
│   │   home                 首页组件
|   |
│   │   public               首页组件封装
|   |
│   │   ...
│
│
└───page                 路由界面
│   │
│   │   index             首页
│   │          
│   │   about             关于我们
│   │
│   └───news                 最新动态
│       │   index.vue            动态主页
│       │   _id.vue              动态详情页
│       └─  ...
│   │
│   │     service.vue     意见反馈     
│   │         
│   │     edit.vue             markdown测试文件
│   │                  
│   │     privacy.vue     隐私协议
│   │
│   │     terms.vue       注册协议
│   │
│   │   ...
│   │
│   │
└───md                    从零开始nuxt开发记录文档
    .
    
```


