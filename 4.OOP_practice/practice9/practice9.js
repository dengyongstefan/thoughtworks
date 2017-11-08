/**
 * Created by zengy on 2017/7/17.
 */
class Person {
    constructor(id,name,age) {
        this.id=id
        this.age = age;
        this.name = name;
    }

    introduce() {
        let result = `My name is ${this.name}.I am ${this.age} years old`
        return result;
    }

}

class  klass{

    constructor(number) {
        this.number=number;
    }
    assignLeader(student){
      this.leader=student;
    }
}

class Student extends Person{
    constructor(id,name,age,klass) {
        super(id,name,age);
        this.klass=klass;
    }

    introduce(){

        let result="";
        if(this.klass.leader==this){
            result=super.introduce()+` I am a Student. I am at Class ${this.klass.number}.I am Leader of Class ${this.klass.number}`
        }else {
            result=super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`
        }

        return result;
    }

}

class Teacher extends Person{
    constructor(id,name,age,klass) {
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        let result="";
        if(this.klass){
            result=super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`
        }
        else {
            result = super.introduce() + ` I am a Teacher. I teach Class No Class.`
        }
        return result;
    }
    introduceWith(student){
        let result1="";
        if(this.klass==student.klass.number){
            result1=super.introduce() + ' I am a Teacher. I teach'+" "+student.name;
        }else{
            result1=super.introduce() + ' I am a Teacher. I don\'t teach '+" "+student.name;
        }
        return result1;
    }
}


let xiaoming=new Person(001,'xiaoming',20);
let printline1=xiaoming.introduce();
console.log(printline1);

let klass1=new klass(3)
let daming =new Student(002,"daming",12,klass1);
klass1.assignLeader(daming);
let printline2=daming.introduce();
console.log(printline2);

let erming =new Teacher(003,"eroming",40,3);
let printline3=erming.introduce();
console.log(printline3);
let printline4=erming.introduceWith(daming);
console.log(printline4);
