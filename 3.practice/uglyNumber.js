/**
 * Created by dengyong on 7/27/17.
 */

function findUglyNumber(num){
   while (num%2==0){
       num=num/2
   }
    while (num%3==0){
        num=num/3
    }
    while (num%5==0){
        num=num/5
    }
    return num==1?true:false;

}

/*
console.log(findUglyNumber(8));
console.log(findUglyNumber(6));
*/

function findeUglyNumberWithIndex(index){
    let num=1;
    let count=0;
    if (index<1){
        return false;
    }
    else{
        while (1){
            if (findUglyNumber(num)){
                count++
                if(count==index){
                    break
                }
            }
            num++
        }
    }
    return num;
}
console.log(findeUglyNumberWithIndex(9))
