// var presentation = ["html" ,"css" , "js" , "react" , "angular" , "bootstrap" ];
// var business = ["nodejs"  , "java" , "dotnet", "python" ];
// var data = ["mongodb", "sql" , "oracle", "cassandra" ];
// //use the spread operator to represent the full stack
// var fullstack = [...presentation  , ...business , ...data ]
// var fullstack2 = [presentation + business + data];
// console.log(fullstack);
// console.log(fullstack2);

// has context menu


let loa=['lion','tiger','elephant'];
let zoo=['birds',...loa];
console.log('zoo will have: '+ zoo)