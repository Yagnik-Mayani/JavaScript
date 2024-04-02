let arr = [2,3,4,5]

let method = arr.filter(function (x) {
    if(x%2 == 0)
    {
       return x;
    }
});

console.log(method);