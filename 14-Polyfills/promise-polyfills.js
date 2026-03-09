const promise = new Promise((resolve, reject) => {
    let success = false;

    if(success) {
        resolve("Operation Successful");
    }
    else{
        reject("Operation Failed");
    }
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log("Done after 2 seconds");
        })
        .catch((error) => {
            console.log(error);
        });
}, 2000);