/**
 * Created by deepspace on 17-7-20.
 */
// 学生对象
class Student{
    constructor(name,studentId,national,math,chinese,english,programing){
        this.name=name;
        this.studentId=studentId;
        this.national=national;
        this.math=math;
        this.chinese=chinese;
        this.english=english;
        this.programing=programing;
    }
}
//计算个人总分数
function getSubtotal(studentObj) {
    return parseFloat(studentObj.math)+parseFloat(studentObj.chinese)+parseFloat(studentObj.english)+parseFloat(studentObj.programing);
}
//计算总分和平均分并返回DOM中需要的格式---tr td
//返回查询插入DOM格式
function creatList(student) {
    student.subTotal = getSubtotal(student);
    student.subAverage = parseFloat(student.subTotal/4);
    return `<tr>
        <td>${student.name}</td>
        <td>${student.math}</td>
        <td>${student.chinese}</td>
        <td>${student.english}</td>
        <td>${student.programing}</td>
        <td>${student.subTotal}</td>
        <td>${student.subAverage}</td>
    </tr>`;
}
//从数组中获取中位数
function getMedian(collection) {
    let orderCollection =  collection.sort(function (a,b) {
        return a - b;
    });
    let len = orderCollection.length;
    let median;
    if(len%2===1){
        median = orderCollection[(len-1)/2];
    }else {
        median =(orderCollection[len/2-1] + orderCollection[(len)/2])/2;
    }
    return median;
}


// 添加学生
$('#enter').click(function () {
    let name = $('#name').val(),
        studentId = $('#studentId').val(),
        national = $('#national').val(),
        math = $('#math').val(),
        chinese = $('#chinese').val(),
        english = $('#english').val(),
        programing = $('#programing').val();
    let flag = false ;
    $.get('/allStudentInfo',function (ans) {
        let stuData=ans;
        for(let i=0;i<stuData.length;i++){
            if(stuData[i].studentId===studentId){
                flag=true;
            }
        }
        if(!flag){
            let newStu = new Student(name,studentId,national,math,chinese,english,programing);
            $.post('/student',newStu);
            layer.msg('录入成功', { icon: 6 });
        } else {
            layer.msg('该学生已录入,请前往查询页面查询该生成绩!', { icon: 5 });
        }
    });
});


//查询学生
$('#search').click(function (e) {
    e.preventDefault();
    $('#tbody').html('');
    let count = 0;
    let subTotal = 0;
    let subTotalArr = [];//存放每个同学总分的数组
    let allTotal = 0;
    $.get('/allStudentInfo',function (ans) {
        let students = ans;
        // console.log(students);
        let stuIds = $('#input_studentIds').val().split(',');
        // console.log(stuIds);
        let flag = false;
        for (let i = 0; i < students.length; i++) {
            if (stuIds.indexOf(students[i].studentId) >= 0) {
                subTotalArr.push(getSubtotal(students[i]));
                $('#tbody').append(creatList(students[i]));
                flag = true;
                count++;
                subTotal = getSubtotal(students[i]);
                allTotal+=subTotal;
            }
        }
        if(flag){
            let gradesList = '';
            let median = getMedian(subTotalArr);
            let average = allTotal / count;
            gradesList += `<tr class="total">
                                    <td colspan="3">全班学生总分平均数:</td><td>${average.toFixed(2)}</td>
                                    <td colspan="2">全班学生总分中位数:</td><td>${median.toFixed(2)}</td>
                               </tr>`;
            $('#tbody').append(gradesList);
        }else {
            $('#tbody').html('');
            layer.msg('查无此人 !!!', { icon: 5 });
        }
    });
});
//修改学生
$(document).on('click', '#modify', function(e) {
    e.preventDefault();
    $.get('/allStudentInfo', function(ans) {
        let students = ans;
        let str;
        let flag = false;

        let stuIds = $('#modify_input').val().split(',');
        for (let i = 0; i < students.length; i++) {
            if (stuIds.indexOf(students[i].studentId) >= 0) {
                str = `<tr date-stuId="${students[i].studentId}" id="editor">
                    <td><input type="text" value="${students[i].name}"></input></td>
                    <td><input type="text" value="${students[i].studentId}"></input></td>
                    <td><input type="text" value="${students[i].national}"></input></td>
                    <td><input type="text" value="${students[i].math}"></input></td>
                    <td><input type="text" value="${students[i].chinese}"></input></td>
                    <td><input type="text" value="${students[i].english}"></input></td>
                    <td><input type="text" value="${students[i].programing}"></input></td>
                    <td>
                        <button id="${students[i].studentId}modify" class="btn btn-xs btn-primary">修改</button>
                    </td>
                    <td>
                        <button id="${students[i].studentId}delete" class="btn btn-xs btn-danger">删除</button>
                    </td>    
                    
</tr>`;
                flag = true;
            }
        }
        if (flag) {
            $('#modifyList').append(str);
        } else {
            $("#modifyList").empty();
            layer.msg('不存在此学号的学生 !!!', { icon: 5 })
        }
    });

});

$(document).click(function(e) { // 在页面任意位置点击而触发此事件
    e.preventDefault();
    if (/delete/.test($(e.target).attr("id"))) {
        e.target.parentNode.parentNode.remove();
        $.post('/allStudentInfo/id', { id: $(e.target).attr("id").match(/\d+/g)[0] },function (ans) {
            layer.msg('删除学生信息成功 !!!', { icon: 1 })
        });
    }
    if (/modify/.test($(e.target).attr("id"))) {
        let info = e.target.parentNode;
        let name = info.cells[1].firstChild.value;
        let national = info.cells[2].firstChild.value;
        let studentId = info.cells[3].firstChild.value;
        let math = info.cells[4].firstChild.value;
        let chinese = info.cells[5].firstChild.value;
        let english = info.cells[6].firstChild.value;
        let programing = info.cells[7].firstChild.value;
        //实例化
        let student = new Student(name,national,studentId,math, chinese, english, programing);
        $.post('/allStudentInfo/id', student, function(ans) {
            layer.msg('修改学生信息成功 !!!', { icon: 1 })
        });
    }
});
