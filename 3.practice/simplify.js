/**
 * Created by dengyong on 7/19/17.
 */
function simply(inputsArr,choose) {
    let result=[];
    let judge=choose;
    let resultstring=[];

    if(judge){
        for(let per of inputsArr){
            result=result.concat(per)
    }
    }else{
        resultstring=inputsArr.toString();
        resultstring=resultstring.split(',');
        for(let per in resultstring){
            result[per]=parseInt(resultstring[per])
        }
        /*for(let per of inputsArr ){
            if(Array.isArray(per))
        }*/
    }
    return result;
}

console.log(simply([1,[2,[3,4]]]))