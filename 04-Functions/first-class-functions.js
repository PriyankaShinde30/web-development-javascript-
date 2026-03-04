function greet(name) { 
    return "Hello "+name+" !";
}

function execute(fn){ 
    return fn("Priyanka");
}

console.log(execute(greet));