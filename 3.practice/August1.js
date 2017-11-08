/**
 * Created by dengyong on 8/1/17.
 */

function oneWei(num) {
    let num1 = num;
    let numArr = [];
    while (1){
        let num2 = 0;
        numArr = num1.toString().split('');
        for (let per of numArr){
            num2 += parseInt(per)
        }

        if(num2<10){
            return num2;
            break;
        }else {
            num1 = num2;
        }
    }
}

console.log(oneWei(38));
