const router = require("koa-router")()
const bodyParser = require("koa-bodyparser")



// 上传图片路由功能
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
        cb(null, Date.now() + "上传的图片" + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });



// 路由

router.post("/upload/json", async (ctx, next) => {
    let postParam = ctx.request.body
    ctx.body = postParam
    console.log(ctx.body)
})

router.post('/upload/img', upload.single('file'), async (ctx, next) => {
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }
})




router.get("/test", async (ctx, next) => {
    ctx.response.body = 'hello a '
})






module.exports = router