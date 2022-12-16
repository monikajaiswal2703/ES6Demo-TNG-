function add(a,b){
    console.log("Simple fun :"+(a+b));
}
add(23,44);

//Arrow function-multi line
var sum=(c,d)=>{
    console.log("Arrow fun :"+(c+d));
}
sum(22,44);

//Arrow function-single line
var result=(a,b,c)=>a+b+c;
console.log("Arrow function in single line :"+(result(12,22,23)));

let a=() =>{console.log("monika");}
a()