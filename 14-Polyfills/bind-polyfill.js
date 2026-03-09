let viewUser = function() {
    console.log(this.name);
}

let user1 = {
    name: "Priyanka"
}

let user2 = {
    name: "Khushi"
}

printUser1 = viewUser.bind(user1); // returns a function 
printUser1();

printUser2 = viewUser.bind(user2);
printUser2();