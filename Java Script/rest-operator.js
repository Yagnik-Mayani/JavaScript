function hello(a,b,c)
{
    console.log(a,b,c);
}
hello(1,2,3);

//rest-operator

function rest(...all)
{
    console.log(all);
}
rest(1,2,3);