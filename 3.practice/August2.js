/**
 * Created by dengyong on 8/2/17.
 */
/*function huiwen(num){
    let result = false;
    if (num<10){
        result = true;
    }else {
        let count = 0;
        let numArr = num.toString().split('');
        for (let i = 0; i<parseInt(numArr.length/2); i++){
            if(numArr[i]!=numArr[numArr.length-1-i]){
                count++;
                break;
            }
        }
        if(!count){
            result = true;
        }
    }
return result;
}

console.log(huiwen(121));
console.log(huiwen(1221));
console.log(huiwen(123));
console.log(huiwen(3));*/

function longest(str){
    var alphabet = [];
    for (let i = 97; i<123; i++){
        alphabet.push(String.fromCharCode(i))
    }
    let strArr = str.split('');
    strArr.sort();
    let countObjArr =[];
    for(let i = 0;i<alphabet.length;i++){
        let per = {};
        let count = 0;
        for (let k = 0;k<strArr.length;k++){
            if(alphabet[i]==strArr[k]){
                count++
            }
        }
       per.name=alphabet[i];
       per.count=count;
       countObjArr.push(per)
    }

    let result =[];

    for (let i=0;i<countObjArr.length;i++){
        let shang = parseInt(countObjArr[i].count/2);
        let yushu = countObjArr[i].count%2;
        countObjArr[i].shang=shang;
        countObjArr[i].yushu=yushu;
    }

    for(let i = 0;i<countObjArr.length;i++){
        if(countObjArr[i].shang){
            for(let k=0;k<countObjArr[i].shang;k++){
                result.push(countObjArr[i].name);
                result.unshift(countObjArr[i].name);
            }
        }
    }

    for(let i = 0;i<countObjArr.length;i++){
        if (countObjArr[i].yushu){
           result.splice(result.length/2,0,countObjArr[i].name);
           break;
        }
    }

    return result;
}

console.log(longest('abccccdd'))
console.log(longest('abbcccccdd'))