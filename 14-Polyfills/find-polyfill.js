let nums = [1, 3, 5, 76, 4, 66];

Array.prototype.myFind = function(callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return this[i]; // return first match
        }
    }
    return undefined;
};

let a = 10;
let result = nums.myFind(a);

console.log(result);