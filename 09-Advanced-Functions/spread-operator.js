// Spread Operator Example

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

const user = {
    name: "Priyanka",
    age: 22
};

const updatedUser = {
    ...user,
    city: "Mumbai"
};

console.log(updatedUser);