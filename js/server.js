/**
 * Created by Administrator on 2017/6/17.
 */
var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));//解析静态中间件
app.get('/',function(req,res){
    res.sendFile('index.html')
});
var data = fs.readFileSync('./date.json','utf-8');
data = JSON.parse(data)
app.get('/getList',function(req,res){
res.send(data)
})
app.listen(90)
