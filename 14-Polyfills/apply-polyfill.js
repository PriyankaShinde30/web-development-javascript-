let printFullName = function(city, state){
    console.log("Full Name: " + this.firstName + " " + this.lastName +" from " + city + " in "+ state);
}

let user1 = {
    firstName: "Priyanka",
    lastName: "Shinde"
}

let user2 = {
    firstName: "Khushi",
    lastName: "Shah"
}

let arr = ["Satara", "Maharashtra"];
printFullName.apply(user1, arr); // same as call just we can pass arguments like an array rather than normal 
printFullName.apply(user2, ["Surat", "Gujrat"]);