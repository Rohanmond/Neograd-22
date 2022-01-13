//1
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);
// convert into es6+
const aloo=1;
if(aloo===1) {
    const a=2;
    console.log(a);
}
console.log(aloo);

//2
/*jsx
var multiply = function(x, y) {
  return x * y;
};
*/
let multiply=(x,y)=>x*y;
console.log(multiply(3,4));

//3
/*jsx
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
*/
let customer={
    name:"Bhaalo"
}
let card={
    amount:20,
    product:"Aaalo",
    unitprice:50
}
let message=`Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece.`;
console.log(message);

//4
/*jsx
var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
*/
let [CEO,,Mentor]=["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
console.log(CEO,Mentor);

//5
/*jsx
var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);
*/
let [firstName,surname]=["MA", "TA", "PA", "CA"];
console.log(firstName,surname);

//6
/*jsx
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
*/
let Aaloo="Tasty";
let Bhaloo="Cute";
let Obj={Aaloo,Bhaloo};
console.log(Obj);

//7
/*jsx
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
*/
let a=5;
let b=10;
console.log(`Fifteen is ${a+b} and n0t ${2*a+b}.`);

//8
/*jsx
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
*/
let arithmeticsObj={
    sum(num1,num2){return num1+num2},
    multiply(num1,num2){ console.log(num1*num2);}
}
console.log(arithmeticsObj.sum(3,4));
console.log(arithmeticsObj.multiply(3,4));

//9
/*jsx
var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
*/
let avengers={
    operation:"Assemble",
    members:[
        {
            ironMan: "Tony Stark"
        },
        {
            captainAmerica: "Steve Rogers"
        },
        {
            blackWidow: "Natasha Romanoff"
        } 
    ]
};
let {operation,members}=avengers;
console.log(operation,members);

//10
/*jsx
const packIt = (...args) => console.log(args)
packIt(1,2,3,5,5)
*/

function packIt(){
    console.log(arguments);
}
packIt(1,2,3,5,5);

