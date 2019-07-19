# Redis 学习笔记

[下载redis](https://github.com/microsoftarchive/redis/releases)

[安装使用教程](https://www.runoob.com/redis/redis-install.html)
### 存储seesion

```  javascript

// redis的使用
// 启动redis
redis-server


// 使用和连接redis
// 安装中间件
// koa-generic-session 操作session
// koa-redis 连接redis
cnpm install koa-generic-session koa-redis

// 加密处理
app.key=["keys","keyskeys"] // 随便写个
app.use(session({
    key:"mt",
    prefix:"mtpr", //session NAME
    store:new Redis() // redis有默认值，默认端口
}))


ctx.session.count ++ 

// 查看redis数据
redis-cli //启动客户端程序  控制台命令行
keys * // 查看存储得值 *代表所有keys
get [key值] //获取值

```