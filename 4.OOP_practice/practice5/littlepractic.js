/**
 * Created by zengy on 2017/7/17.
 */

let numaArr=[];
for(let i=1;i<101;i++){
    numaArr.push(i);
}

let factors=[];

for(let i=0;i<numaArr.length;i++){
    let perfactor=[];
    for (let j=1;j<=Math.pow(numaArr[i],0.5);j++){
        if(numaArr[i]%j==0){
            let other=numaArr[i]/j
            perfactor.push(j);
            perfactor.push(other)
        }
    }
    perfactor.sort(function (a,b) {return a-b;})
   factors[i]=perfactor;
}

let b=factors[15];
console.log(b);
