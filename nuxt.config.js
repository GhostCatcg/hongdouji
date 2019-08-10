
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:"红豆记 - 情侣服务平台",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keyword', content: "红豆记,红豆记恋爱记录,情侣必备软件,情侣恋爱神器,爱情银行,我爱你保险基金,小恩爱,微爱,情侣空间,恋人清单,异地恋,印书记录,闹钟,相册,纪念日,情感求助咨询,存钱,头像,礼物" },
      { hid: 'description', name: 'description', content: "红豆记服务于上千万情侣用户，是一个分享与记录生活的平台，在红豆记里，用户以图文，视频等形式记录二人生活的点滴。情侣分享的内容涵盖旅行、健身、时尚、美食、影视等各个生活领域。" },
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
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/base.scss',  // 全局的基础样式
    '@/assets/css/varibale.scss', // 全局的颜色配置
    '@/assets/font/iconfont.css' // 字体图标的样式
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
