function retry(fn, retries){
    return fn().catch((err) => {
        if(retries == 0){
            throw err;
        }
        console.log("Retrying...");
        return retry(fn, retries - 1);
    });
}

function getData(){
    return fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(res => {
        if(!res.ok){
            throw new Error("API request failed");
        }
        return res.json();
    });
}

retry(getData, 3)
.then(data => console.log(data))
.catch((err => console.log("Failed after retries", err)));