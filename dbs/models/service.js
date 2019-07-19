import mongoose from "mongoose"

// 文件名就是表名

// 建表 创建mongodb模型
let serviceScheam = new mongoose.Schema({
    // 设计表结构
    suggest:String,
    number:Number,
    phone:Number,
    imgUrl:String
})


// 生成model

export default mongoose.model("service", serviceScheam)