function createUser() { 
    let user  = {
        name: "Priyanka",
        age: 21
    };

    console.log("User Created: ", user);
}

createUser();
// after function execution finishes, the user object becomes unreachable and JavaScript garbage collector removes it 