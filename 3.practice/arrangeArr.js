/*
/!**
 * Created by dengyong on 7/26/17.
 *!/
function rangeBetween(num1,num2) {
    let result=[];
    if(num1>num2){
        let a=num2;
        num2=num1;
        num1=a;
    }

    for(let i=num1;i<=num2;i++){
        result.push(i)
    }
    return result;
}

console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));*/

function union(Arr1,Arr2) {
    let Arr3=Arr1.concat(Arr2);
    Arr3.sort(function (a,b) {return a-b;})
    let Arr4=Arr3.filter(function(current,index,self){
        return(self.indexOf(current)==index);})
    return Arr4;

}
console.log(union([1,2,3],[100,2,1,10]));