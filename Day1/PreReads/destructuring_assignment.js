let arr=["Rohan","Mondal","Ram",3];
let [firstName,LastName]=arr;
//let fname=arr[0];
//let lname=arr[1];
console.log(firstName);
console.log(LastName);

//unwanted variable can be thrown away by adding an extra comma
let [firstN,,,LastN]=["Rajib","Lochan","Mondal","Diamond Harbour"];
console.log(firstN); //Rajib
console.log(LastN); //Diamond Harbour

//works with any iterable on the right side
let [one,two,three]="abc";
console.log(one,two,three); //a b c

//assign to anything at the left side
let user={};
[user.fname,user.lname]="john smith".split(' ');
console.log(user.fname,user.lname);

//Object.entries() -> returns an array of arrays of key val pair ([['key','val'],['key','val']])
const object1 = {
    c:"Hello",
    a: 'somestring',
    b: 42
  };
  console.log(Object.entries(object1).sort((a, b) => a[0].localeCompare(b[0])));
  for (const [key, value] /*destructuring*/  of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  //use in map
  let user2=new Map();
  user2.set("name","John");
  user2.set("age",30);
  for([key,val] of user2){
      console.log(key,val);
  }

  //swap variables
  let guest="Rohan";
  let admin="Ritesh";
  [admin,guest]=[guest,admin];
  console.log(guest,admin);

  //...rest
  let [name1,name2,...rest/*We can use any name*/ ]=["Rohan","Mondal","DiamondHarbour","West Bengal"];
  console.log(rest.length);
  console.log(rest[0]);
  console.log(rest.length);

  //default value
  let [x=10,y=20]=[30,40];
  console.log(x,y); //undefined it will give not an error
  //if we want to put any default value
  let [guest1="anym-g1",guest2="anym-g2"]=["Swati"];
  console.log(guest1,guest2); //swa,anyg2

//Object Destructuring
let options={
    title:"Menu",
    width:100,
    height:200
}
let {height: h=100,width: w=100,title,name="demo",color}=options;
console.log(h,w,title,name,color); //we can assign another name with the colon and ordering is not require on the left side. We can assign a default value for missing keys and those we will not give any default value they will be undefined 

//we can also extract only what we need
let {value}={value:200,y:340};
console.log(value);

//we can use ...rest here also
let {a,b,...rest2}={a:4,b:5,c:8,d:9};
console.log(rest2.c);
console.log(rest2.d);
