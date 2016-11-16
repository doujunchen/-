var express = require('express');
var router = express.Router();
// const multer = require("multer");
// // const upload = multer();
// //                    传到
// const upload = multer({dest: "public/uploads"});
const upload = require("../sources/upload");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/hello', function (req, res) {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", function (req, res) {
    //传汉字 字节不一样，会乱码
    // var str = "";
    // req.on("data", function (data) {
    //     str += data;
    // });
    // req.on("end", function () {
    //     console.log(str);
    // });

    res.send(`Hello ${req.body.user}`);
});
//                   只接受上传文本数据
router.post("/upload", upload.none(), function (req, res) {
    res.send(`Hello ${req.body.user},and your age is ${req.body.age}`);
});

router.post("/hello.json", (req, res)=> {
    // let allData = Buffer.alloc(0);
    let allData;
    req.on("data", data=> {
        // allData = Buffer.concat([allData, data]);
        if (allData) {
            allData = Buffer.concat([allData, data]);
        } else {
            allData = data;
        }
    });
    req.on("end", ()=> {
        var obj = JSON.parse(allData.toString());
        // （res.send）
        res.json({message: `Your name is ${obj.user},your age is ${obj.age}`});
    });
});

router.post("/upload.image", upload.single("img"), function (req, res) {
    //           第一个参数是渲染哪个页面
    res.render("UploadImageHandler", {imagePath: `/uploads/${req.file.filename}`});
});
module.exports = router;
