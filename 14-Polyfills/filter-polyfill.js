const arr = [2, 4, 6, 7, 8, 6, 7, 5, 78, 34, 56];

function isDividedByThree (x) {
    if(x % 3 == 0){
        return x;
    }
}

const output = arr.filter(isDividedByThree);
console.log(arr);
console.log(output);