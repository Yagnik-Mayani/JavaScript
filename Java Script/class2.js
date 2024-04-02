class person{
    constructor(name)
    {
        this.species="homo species";
        this.name=name;

    }
    eat()
    {
        console.log("eating");
    }
}
class Enginner extends person{
    constructor(name)
    {
         super(name);
    }
    work()
    {
        console.log("working");
    }
}
let engobj=new Enginner("yagnik");