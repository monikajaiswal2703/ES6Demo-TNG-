class Employee{
    //method


    //constructure
      //this keyword is used to access the class varibales in the scope
    constructor(ename,sname){
        //initialize the entId using "this" keywor
        this.entId="monika@accenture.com";
        this.ename=ename;
        this.sname=sname;
    }
    //class method
    display(){
        console.log("Employee ent ID IS :"+ this.entId);
        console.log("Employee name :"+this.ename,"\n","Surname:",this.sname,"\n","EmpID:",this.entId)

    }
}

//object creation
let emtO=new Employee("monika","jaiswal","monikajaiswl@accenture.com");
//call the class method
emtO.display();
