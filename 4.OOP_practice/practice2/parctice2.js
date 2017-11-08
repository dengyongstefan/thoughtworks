/**
 * Created by zengy on 2017/7/17.
 */

class Person {
    constructor(name,age) {
        this.age = age;
        this.name = name;
    }

    introduce(){
    let result = `My name is ${this.name}.I am ${this.age} years old`
    return result;
}

}


class Student{
    constructor(name,age,klass) {
        this.age = age;
        this.name = name;
        this.klass=klass;
    }
    introduce(){

    let result=`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`
    return result;


}


}


let daming=new Person("daming",30)
let printline2=daming.introduce();
console.log(printline2);

let xiaoming=new Student("xiaoming",12,2)
let ptintline1=xiaoming.introduce();
console.log(ptintline1);