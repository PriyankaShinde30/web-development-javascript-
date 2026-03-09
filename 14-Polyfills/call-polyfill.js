let printFullName = function (city) {
  console.log("Full Name: " + this.firstName +" " +this.lastName +(city ? " from " + city : ""));
};

let user1 = {
  firstName: "Priyanka",
  lastName: "Shinde",
};
printFullName.call(user1, "Mumbai");

let user2 = {
  firstName: "Khushi",
  lastName: "Shah",
};

printFullName.call(user2); // directly invokes and gives output 
