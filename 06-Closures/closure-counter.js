const createCounter = function () {
    let count = 0;

    return function() {
        count++;
        console.log("Current value of counter:", count);
    };
};

const counter = createCounter();

for(let i = 1; i <= 5; i++){
    counter();
}