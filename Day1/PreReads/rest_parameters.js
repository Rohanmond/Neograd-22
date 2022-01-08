//to gather all the arguments
function sumAll(...args){
    let sum=0;
    for(let it of args) sum+=it;
    return sum; 
}
console.log(sumAll(2,3,4));

//we can take some parameters also including it
function showName(firstName,lastName,...others){
    console.log("first name and last:",firstName,lastName);
    console.log("other details:");
    console.log(others);
    for(let it of others/*It is an array */) console.log(it+" ");
}
showName("Rohan","Mondal","Diamond Harbour",743331,"West Bengal");

//spread -> convert the array into list of arguments
console.log(Math.max(1,4,8,10,29,90)); //it works 
//but it will not
let arr=[1,6,7];
console.log(Math.max(arr)); //NaN
// so to convert the array into arguments we use spread(opposite of rest but syntax is same)
console.log(Math.max(...arr));
Math.max([1,6,7]);
Math.max(1,6,7);
