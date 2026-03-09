function throttle(fn, limit){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();

        if(now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

function Message(){
    console.log("Message");
}

const throttleMessage = throttle(Message, 5000);
setInterval(throttleMessage, 10);