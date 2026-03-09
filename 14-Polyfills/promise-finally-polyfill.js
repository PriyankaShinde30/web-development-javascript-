const promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Done");
    }
    else{
        reject("Error");
    }
})
.then(res => {
    console.log(res);
})
.finally(() => {
    console.log("Promise Execution Finished");
})