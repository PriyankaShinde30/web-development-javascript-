console.log("Program execution started");
function first() { 
    console.log("Inside first function");
    second();
    console.log("first function execution ended");
}

function second() { 
    console.log("Inside second function");
    third(); 
    console.log("second function execution ended");
}

function third() { 
    console.log("Inside third function");
}

first();
console.log("Program execution ended here");