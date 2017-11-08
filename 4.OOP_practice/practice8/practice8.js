/**
 * Created by zengy on 2017/7/17.
 */
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    introduce() {
        let result = `My name is ${this.name}.I am ${this.age} years old`
        return result;
    }

}

class Student extends Person{
    constructor(name,age,klass) {
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        let result=super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`
        return result;
    }

}

class Teacher extends Person{
    constructor(name,age,klass) {
        super(name,age);
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


class  klass{
    constructor(number) {
        this.number=number;
    }

}

let xiaoming=new Person('xiaoming',20);
let printline1=xiaoming.introduce();
console.log(printline1);

let klass1=new klass(3)
let daming =new Student("daming",12,klass1);
let printline2=daming.introduce();
console.log(printline2);

let erming =new Teacher("eroming",40,3);
let printline3=erming.introduce();
console.log(printline3);
let printline4=erming.introduceWith(daming);
console.log(printline4);
