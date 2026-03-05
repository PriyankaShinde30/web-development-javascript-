function Person(name) { 
    this.name = name;
}

Person.prototype.greet = function() { 
    console.log("Hello, my name is "+ this.name);
};

const user1 = new Person("Priyanka");
user1.greet();