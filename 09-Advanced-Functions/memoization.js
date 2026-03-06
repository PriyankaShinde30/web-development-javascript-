function memoize(fn) {

    const cache = {};

    return function(n) {

        if (cache[n]) {
            console.log("Fetching from cache");
            return cache[n];
        }

        console.log("Calculating result");

        const result = fn(n);
        cache[n] = result;

        return result;
    };
}

function square(n) {
    return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));