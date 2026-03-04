function calculate(operation, a, b) { 
    return operation(a, b);
}

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

console.log(calculate(add, 5 , 6));
console.log(calculate(subtract, 19, 6));