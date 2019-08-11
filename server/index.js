const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require("koa-router")()// 导入路由中间间
const bodyParser = require('koa-bodyparser')// 接收post请求处理参数
const service = require("./service")// 导入客服接口
import mongoose from 'mongoose' // 导入mongoose
import dbConfig from "../dbs/config" // 导入mongoose配置
import cors from "koa2-cors" // 导入cors 配置跨域
const config = require('../nuxt.config.js')

const app = new Koa()
app.use(cors()) // 注入跨域
app.use(bodyParser()) // 注入post解析参数
app.use(service.routes(), service.allowedMethods())// 注入路由

mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true // 写死就行，不知道啥意思
}) // 连接数据库




// Import and Set Nuxt.js options
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 8080
  } = nuxt.options.server



  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })


  app.listen(port, host)
  // 暂时没有解决办法的设置host和port   服务器上使用这套
  // app.listen(8080, "0.0.0.0")

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
