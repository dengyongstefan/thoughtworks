/**
 * Created by dengyong on 7/20/17.
 */
function main(Arr1,Arr2) {

let Arr3=Arr1.concat(Arr2);
console.log(Arr3);

Arr3.filter(function (current,index,self) {
return self.indexOf(current)===index;
})
console.log(Arr3);
}

main([1,2,3,4,5],[7,8,9,1,2])
