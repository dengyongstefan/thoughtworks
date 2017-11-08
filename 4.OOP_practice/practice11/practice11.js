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
        if(!student.whethercontain){
            console.log("It is not one of us.")
        }
    }
    appendMember(student){
        student.whethercontain=true;
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
    constructor(id,name,age,klasses) {
        super(id,name,age);
        this.klasses=klasses;
    }

    introduce(){
        let result="";
        let banji="";
        if(this.klasses.length!=0){
            result=super.introduce()+` I am a Teacher. I teach Class `
            for(let i=0;i<this.klasses.length;i++){
                banji=banji+this.klasses[i]+" "
            }
            result=result+banji;
        }
        else {
            result = super.introduce() + ` I am a Teacher. I teach Class No Class.`
        }
        return result;
    }

    introduceWith(student){
        let result1="";
        result1=super.introduce() + ' I am a Teacher. I don\'t teach '+" "+student.name;
        for(let banji of this.klasses){
            if(banji==student.klass.number){
                result1=super.introduce() + ' I am a Teacher. I teach'+" "+student.name;
            }
        }

        return result1;

    }

    isTeaching(student){
        let result=false;
      for(let banji in this.klasses){
          if(banji==student.klass.number){
              result=true;
          }
      }
      return result;
    }
}

let xiaoming=new Person(001,'xiaoming',20);
let printline1=xiaoming.introduce();
console.log(printline1);

let klass1=new klass(3)
let daming =new Student(002,"daming",12,klass1);
klass1.appendMember(daming);
klass1.assignLeader(daming);
let printline2=daming.introduce();
console.log(printline2);


let erming =new Teacher(003,"eroming",40,[1,2,3]);
let printline3=erming.introduce();
console.log(printline3);
let printline4=erming.introduceWith(daming);
console.log(printline4);
