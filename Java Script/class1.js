class A{
    constructor(brand)
    {
        console.log("this is constructor");
        this.brand=brand;
    }
    msg()
    {
        console.log("this is msg");
    }
};

let obj=new A("Y.M");
console.log(obj);