var courses = ['html','css','js','reactjs','python'];
console.log(courses);
console.log("Specific course value :"+ courses[2]);
//unpack the array values are called as Destructuring
// they cna be assigned to other variables  
//assign the array value is to variables
var [abc, def,ijk,ij,jk]= courses;
console.log(abc); //similar to courses[0]

console.log(def); //similar to courses[1]

console.log(ijk); //similar to courses[2]

console.log(ij); //similar to courses[3]
console.log(jk); //similar to courses[4]