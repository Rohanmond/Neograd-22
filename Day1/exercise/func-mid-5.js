let charAt=(str,ind)=>{
    if(ind<0) ind=str.length+ind;
    if(str.length<=ind || ind<0) return null;
    return str[ind];
}
console.log(charAt("Hello",2));
console.log(charAt("Hello",-6));