let ask=(question,yes,no)=>(confirm(question))? yes():no();
ask(
    "Do You Agree?",
    ()=>alert("Yes I am"),
    ()=>alert("No I'm not")
)