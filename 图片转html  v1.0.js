const fs = require("fs");
const path = require("path");



function getbase64tag(url,name){
    const imageData = fs.readFileSync(url);
    const imageBase64 = imageData.toString("base64");
    const imagetype = url.substring(url.length-3)
    const imagePrefix = 'data:image/'+ imagetype + ';base64,';
    const tag = '<img src='+imagePrefix + imageBase64+'>';
    fs.appendFile(name + ".html", tag , 'utf-8', function(err) {
        if(err) {
            return console.log('写入失败');
        }
        console.log('写入图片成功');
    });
}


function gethtml(fileurl,name){
    fs.writeFile(name + ".html", startstr , function(err) {
        if(err) {
            return console.log("写入开头失败");
        }
        console.log("写入开头成功");
    });
    for (let i = 0; i < 99; i++) {
        fs.access(fileurl+'\\'+ i +'.jpg',(err)=>{
            if(err){
                return false; 
            }
            getbase64tag(fileurl+'\\'+ i +'.jpg',name);
        });
    }
    setTimeout(()=>{
        fs.appendFile(name + ".html", endstr , 'utf-8', function(err) {
            if(err) {
                return console.log('写入结尾失败');
            }
            console.log('写入结尾成功');
        });
    },5000)
    
}

const startstr = 'lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>*{background-color: while;margin: 0px;padding: 0px;}img{display: block;margin: 0 auto;width: 1000px;}</style></head><body>'
const endstr = '</body>'





const fileurl = 'E:\\下载\\seding\\tu\\'
for (let i = 0; i < 99; i++) {
    gethtml(fileurl + '0 ('+i+')', i )   
}