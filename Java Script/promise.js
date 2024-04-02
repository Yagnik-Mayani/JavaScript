// let promise = new Promise((resolve,reject) => {
//     console.log("i am promise");
//     resolve("done");
//     reject("some error");
// });

function getData(dataId,getNextData)
{
    return new Promise((resolve,reject) => {
    //2s
    setTimeout( () => {
        console.log("data",dataId);
        resolve("success");
        if(getNextData)
        {
            getNextData();
        }
    },9000);
});
}