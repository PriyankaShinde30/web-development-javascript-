function outer() { 
    let name = "Priyanka";

    function inner() {
        console.log(name);
    }
    inner(); // inner function can access variables from its outer function scope 
    
}
outer();