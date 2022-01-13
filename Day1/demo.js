const mergeArrays=(arr1,arr2)=>[...arr1,...arr2];
const arr1=[1,3,5];
const arr2=[2,4,6];
mergeArrays(arr1,arr2);

const inUpperCase=(str)=>str.split(' ').map((i)=>i[0].toUpperCase()+i.slice(1)).join(' ');
console.log(inUpperCase("we are neogrammers"));

const toggle=(str)=>{
    let s=str.split('');
    for(let i=0;i<s.length;i++){
        if(i&1) s[i]=s[i].toUpperCase();
        else s[i]=s[i].toLowerCase();
    }
    return s.join('');
}
console.log(toggle("WEARE"));

// const toSentenceCase=(sentence) =>{
//     return letters = sentence.split(" ").map(word => word.split("").map((alphabet,index) => index%2===0? alphabet.toUpperCase():alphabet.toLowerCase()).join("") ).join(" ")
    
//   }

// const fact=function factorial(n){
//     if(n<=1) return 1;
//     return factorial(n-1)*n;
// }

const fact = (n) => n<=1?1 : n*fact(n-1);  
console.log(fact(5));

const mergeArr=(...arr)=>{
    let a=[];
    for(let it of arr) a=[...it,...a];
    return a;
}
console.log(mergeArr([1,2,3],[3,4,5],[7,8,9]));
