const arr = [5, 3, 9, 6, 1, 4];

const output = arr.reduce(function (acc, curr){
    acc += curr;
    return acc;
});
console.log(output);

