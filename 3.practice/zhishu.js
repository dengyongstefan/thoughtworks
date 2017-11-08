/**
 * Created by dengyong on 7/24/17.
 */
/*

let numberArr=[];
for (let i=1;i<101;i++){
    numberArr.push(i);
}

let result=[];

function findPrinmeNumber(numberArr){
   for (let i=0;i<numberArr.length;i++){
       let a=0;
       for(let j=2;j<numberArr[i];j++){
           if(numberArr[i]%j==0){
              a++;
           }
       }
       if(!a){
           result.push(numberArr[i]);
       }
   }
   return result;
}

console.log(findPrinmeNumber(numberArr));*/

function first(inputArr,num){
    let result=[];

    if(num<0){
        result=[]
    }else if (num>0){
        result=inputArr.slice(0,num)
    }else {
        result.push(inputArr[0])
    }

    return result;
}

console.log(first([7,9,0,-2]));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],-3));