/**
 * Created by dengyong on 7/21/17.
 */
function finddifference(Arr1,Arr2){
    let Arr1Str=Arr1.toString();
    let Arr2Str=Arr2.toString();
    let Arr3=Arr1Str.split(',');
    let Arr4=Arr2Str.split(',');

    for(let i=0;i<Arr3.length;i++){
        for(let j=0;j<Arr4.length;j++){
            if(Arr3[i]==Arr4[j]){
                Arr3[i]=0;
                Arr4[j]=0;
            }
        }
    }

    let Arr5=Arr3.concat(Arr4);

    let Arr6=Arr5.filter(function (current,index,self){
        return !current==0;
    })

  /* let result = [];
   for(let per of Arr5){
       if(per!=0){
           result.push(per)
       }
   }*/
console.log(Arr6);

}

finddifference([1,2,3],[100,2,1,10]);
finddifference([1,2,3,4,5],[1,[2],[3,[[4]]],[5,6]]);