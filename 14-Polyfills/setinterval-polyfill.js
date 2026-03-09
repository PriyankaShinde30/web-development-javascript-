function mySetInterval(callback, delay){
    function run(){
        if(callback() === false) return; 
        setTimeout(run, delay);
    }
    setTimeout(run, delay);
}

let count = 1;

mySetInterval(() => {
    console.log("Counter:", count);
    if(count >= 5){
        return false;
    }
    count++;
}, 2000);