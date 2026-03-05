function outer () {
    let message = "Hello this message is from outer function";

    function inner() {
        console.log(message);
    }
    return inner;
}

const closureFunction = outer();

closureFunction();