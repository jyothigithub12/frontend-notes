// String
var firstName = "Jyothi";
console.log(firstName);
// Number
var age = 25;
console.log(age);
// Boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// Array of strings
var favoriteColors = ["blue", "green", "red"];
console.log(favoriteColors);
// Array of numbers
var luckyNumbers = [3, 7, 21];
console;
// Array of objects
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
console.log(users);
// Union type (multiple data types)
var userId = "abc123";
userId = 42; // Also valid
// Create an object using the interface

var user1 = {
    id: 101,
    name: "Jyothi",
    isActive: true,
    role: "admin"
};

// Displaying the object
console.log("User Info:");
console.log("ID: ".concat(user1.id));
console.log("Name: ".concat(user1.name));
console.log("Active: ".concat(user1.isActive));
console.log("Role: ".concat(user1.role));
var product1 = {
    id: 1001,
    name: "Laptop",
    price: 1099.99,
    tags: ["electronics", "computers"],
    inStock: true,
    metadata: {
        createdAt: new Date(),
        updatedBy: "Admin"
    }
};
console.log("Product:", product1);
// Tuple type
var userTuple = [1, "Sam", true];
console.log("Tuple:", userTuple);
