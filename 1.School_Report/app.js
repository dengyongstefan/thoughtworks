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

//dan ge xue shen cun ru
app.post('/student',function (req,res) {
    let allInfo = [];
    let stu = req.body;
    allInfo.push(stu);
    client.get('students',function (err,val) {
        if (val){
            let students = JSON.parse(val);
            students.push(stu);
            client.set('students',JSON.stringify(students))
        }else {
            client.set('students',JSON.stringify(allInfo))
        }
    });
    res.send('ok');
});

//xiu gai xue shen xin xi
app.post('student/id',function (req,res) {
    client.get('student',function (err,object) {
        let students = JSON.parse(object);
        let stu = req.body;
        let sutid = stustudentId;
        for (let i=0;i<students.length;i++){
            if (students[i].studentId === sutid) {
                students.splice(i, 1);
                break;
            }
        }
        students.push(stu);
        client.set('students',JSON.stringify(students));
    })
    res.send('ok');
});

//quan bu xue shen xin xi
app.get('/allStudentInfo',function (req,res) {
    client.get('students',function (err,object) {
        let students = JSON.parse(object);
        res.send(students);
    })
});

app.post('/allStudentInfo/id', function(req, res) {
    let studentId = req.body.studentId;
    client.get("students", function(err, val) {
        let students = JSON.parse(val);
        for (let i = 0; i < students.length; i++) {
            if (students[i].studentId === studentId) {
                console.log(students[i].studentId);
                students.splice(i, 1);
                break;
            }
        }
        client.set("students", JSON.stringify(students), function(err, reply) {
            //console.log(reply);
        })
    });
    res.send("ok");

});

app.listen(8000,()=>{
    console.log('8000')
});