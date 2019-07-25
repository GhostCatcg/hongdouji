
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title:"红豆记",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: "红豆记服务于上千万情侣用户，是一个分享与记录生活的平台，在红豆记里，用户以图文，视频等形式记录二人生活的点滴。情侣分享的内容涵盖旅行、健身、时尚、美食、影视等各个生活领域。" },
      // { hid: 'content', name: 'contents', content: "红豆记服务于上千万情侣用户，是一个分享与记录生活的平台，在红豆记里，用户以图文，视频等形式记录二人生活的点滴。情侣分享的内容涵盖旅行、健身、时尚、美食、影视等各个生活领域。"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  server: {
    port: 800, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/base.scss',  // 全局的基础样式
    '@/assets/css/varibale.scss', // 全局的颜色配置
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
