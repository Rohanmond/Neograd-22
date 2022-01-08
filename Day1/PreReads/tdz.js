let x="Hello";
function fun(){
    console.log(x); //cause an reference error because x is hoisted and it can see that let is declared inside the scope also. So it will not print the "Hello"
    let x="Hey"; //tdz ends here
}
fun();