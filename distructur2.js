//perform add,sub,mul,div operations on the same input
//Ex: add(2,3,4), sub(2,3,4), mul(2,3,4), div(2,3,4)
let mathops = (a,b,c)=>{
    return [(a+b+c),(a-b-c),(a*b*c),(a/b/c)]
}

console.log(mathops(12,3,3))

//destructure the mathops result
let [ add,sub,mul,div] = mathops(12,4,2);
console.log("Addition :"+ add);

console.log("Subtraction :"+ sub);

console.log("Multiplication :"+ mul);

console.log("Division :"+ div);