const getpromise = () => {
    return new Promise((resolve,reject) => {
        console.log("i am a promise");
        resolve("success");
        //reject("error");
    });
};

let promise=getpromise();

promise.then((res) => {
       console.log("after promise add",res);
})
promise.catch((err) => {
    console.log("rejected in catch",err);
})