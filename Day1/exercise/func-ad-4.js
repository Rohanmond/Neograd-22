let func= (...rest)=> {
    let r=[];
    for (ar of rest){
        r.push(...ar);
    }
    return r;
}
console.log(func([1,23],[3,45]));