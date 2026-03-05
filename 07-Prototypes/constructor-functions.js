function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.displayInfo = function () { 
    console.log("Car Brand is: "+this.brand+"Car Model is: "+this.model);
};

const car1 = new Car("Toyota", "Corolla");
car1.displayInfo();