// 本文件是客服页面接口

const router = require("koa-router")()
const bodyParser = require("koa-bodyparser")

import Service from '../dbs/models/service' // 引入db模型
// import { userInfo } from 'os';

import mongoose from "mongoose"



// 上传图片路由功能
// 上传图片的功能等待更新为 base64
let imgUrl
const multer = require('koa-multer');//加载koa-multer模块
// 文件上传
// koa-multer配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'assets/testimg')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        imgUrl = Date.now() + "上传的图片" + "." + fileFormat[fileFormat.length - 1]
        cb(null, imgUrl);
    }
})
//加载配置
var upload = multer({ storage: storage });



// 路由

router.post('/upload/img', upload.single('file'), async (ctx, next) => {
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }
})


router.post("/upload/json", async (ctx, next) => {
    console.log("外部访问json接口")
    let postParam = ctx.request.body
    postParam.imgUrl = imgUrl
    const service = new Service({
        suggest: postParam.suggest,
        number: postParam.number,
        phone: postParam.phone,
        imgUrl: postParam.imgUrl,
        imgBase64:postParam.imgBase64
    })
    let code
    try {
        await service.save()
        code = 0
    } catch (e) {
        code = -1
    }

    ctx.body = {
        code: code,
        data: postParam
    }
})


router.get("/admin1", async (ctx, next) => {
    console.log("访问管理接口")
    var service = mongoose.model("service")
    await service.find((err, serviceScheam) => {
        ctx.response.body = serviceScheam
    })
})

router.get("/test", async (ctx, next) => {
    ctx.response.body = 'Hello, GhostCat'
})



module.exports = router