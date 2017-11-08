let express = require('express');
let app=express();
let redies = require('redis');
let client = redies.createClient();
let bodyParser = require('body-parser');
let count = 0;

app.use(express.static(__dirname+'/public'));
let urlencodedParser = bodyParser.urlencoded({ extended: false });
//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。

app.get('/',(req,res)=>{
    res.sendFile('index.html', {root: './public'});
});