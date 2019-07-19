# mongoose 学习笔记

## 非关系型数据库

[下载 MongoDB](https://www.mongodb.com/download-center#community)

[下载 Robo 3T](https://studio3t.com/download-now/)

[MongooseJS中文文档](https://xiaoxiami.gitbook.io/mongoose/guide)

[配置MongoDB](https://blog.csdn.net/qq_20412595/article/details/80610724)

``` bash

# 查看 mongodb 安装的位置
$ which mongod

# 
mongod --dbpath E:\DB\data\db

# 把mongod配置成服务
mongod --config "E:\DB\data\mongo.config" --install --serviceName "MongoDB"
# 启动 mongodb
$ mongod

# 安装 mongoose
$ npm i mongoose


```

``` javascript
// mongoose 操作数据库

// dbs:"mongodb://127.0.0.1:27017/dbs"

// 链接 MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/dbs",{
   useNewUrlParser: true 
})

// 建数据库
import mongoose from 'mongoose'
let personSchema = new mongoose.Schema({
    // 建库
    name : String,
    age : Number
})

export default mongoose.model("Person",personSchema)

```







