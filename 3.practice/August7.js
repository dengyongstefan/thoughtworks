/**
 * Created by dengyong on 8/7/17.

 */

/*function count(str1,str2){
   let strArr1 = str1.split(' ');
   let strArr2 = str2.split(' ');
   for (let per of strArr2){
       strArr1.push(per);
   }
    strArr1.sort();
    let result = [];

    for (let k = 0; k<strArr1.length;){
        let count = 0;
        for(let j = k;j<strArr1.length;j++){
            if(strArr1[k]==strArr1[j]){
                count++
            }
        }
        result.push([strArr1[k],count]);
        k += count;
    }
    return result;
}

console.log(count('h1 h2 h2 h3 h3 h3 h4','h4 h4 h4 h5 h5 h5 h5 h5'))*/

function Judge(str) {
    let strArr = str.split('');
    let result = false;
    let count = 0;
    let indexB = str.length/2-1;
    let indexA = str.length/2;
    let duibi = '';
    for (i=0;i<str.length/2;i++){
        if(str[indexB]=='{'){
            duibi = '}'
        }else if(str[indexB]=='}'){
            duibi = '}'
        }else if(str[indexB]==')'){
            duibi = '('
        }else if(str[indexB]=='('){
            duibi = ')'
        }else if(str[indexB]=='['){
            duibi = ']'
        }else if(str[indexB]==']'){
            duibi = '['
        }

       if (str[indexA]==duibi){
           count++
       }

       indexB--;
       indexA++;
    }
    if(count==str.length/2){
        result = true
    }
    return result;
}

console.log(Judge('([]{})'));
console.log(Judge('{[(])}'))
