let arr=[[1,3],[4,5]];
console.log(...arr);
// let arr1=[5,6];
// Math.max(...arr1);
// Math.max(5,6,709,41,67);
console.log([4,5,...[34,67],7]);  //4,5,34,67,7
// [[1,2,3,4]]=> [1,2,3,4] //spread
// 1,2,3,4 => [1,2,3,4] //rest
let arr1=[4,5,6];
let arr2=[1,2,3];
let arr3=[...arr1,...arr2];
let fun=(...arr)=>{
    let a=0;
    for(let it of arr) {
        if(a<it) a=it;
    }
    return a;
}


console.log(fun(1,34,12,456,1));


// [[1,3],[4,5]]=> [1,3],[4,5] 