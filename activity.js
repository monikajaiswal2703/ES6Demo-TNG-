class Product{
    //method


    //constructure
      //this keyword is used to access the class varibales in the scope
    constructor(pId,pname,price){
        //initialize the entId using "this" keywor
        this.pId=pId;
        this.pname=pname;
        this.price=price;
    }
    //class method
    getProductDetails(){
        console.log(this.pId)
        console.log(this.pname)
        console.log(this.price)
    }
}

let p=new Product("M1","mobile",12000)
p.getProductDetails()