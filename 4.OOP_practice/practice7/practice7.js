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
        let result=super.introduce()+` I am a Student. I am at Class ${this.klass}.`
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
}

let xiaoming=new Person('xiaoming',20);
let printline1=xiaoming.introduce();
console.log(printline1);

let daming =new Student("daming",12,2);
let printline2=daming.introduce();
console.log(printline2);

let erming =new Teacher("eroming",40,3);
let printline3=erming.introduce();
console.log(printline3);