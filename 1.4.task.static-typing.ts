// String
let firstName: string = "Jyothi";

console.log(firstName);

// Number
let age: number = 25;

console.log(age);

// Boolean
let isLoggedIn: boolean = true;

console.log(isLoggedIn);

// Array of strings
let favoriteColors: string[] = ["blue", "green", "red"];
console.log(favoriteColors);

// Array of numbers
let luckyNumbers: number[] = [3, 7, 21];
console

// Array of objects
let users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
console.log(users);

// Union type (multiple data types)
let userId: string | number = "abc123";
userId = 42; // Also valid

// Interface for a User
interface User {
  id: number;
  name: string;
  email?: string; // optional
  isActive: boolean;
  role: "admin" | "user" | "guest"; // string literal union
}

// Create an object using the interface
const user1: User = {
  id: 101,
  name: "Jyothi",
  isActive: true,
  role: "admin"
};

// Displaying the object
console.log("User Info:");
console.log(`ID: ${user1.id}`);
console.log(`Name: ${user1.name}`);
console.log(`Active: ${user1.isActive}`);
console.log(`Role: ${user1.role}`);

// Complex object with multiple types
type Product = {
  id: number;
  name: string;
  price: number;
  tags: string[];
  inStock: boolean;
  metadata: {
    createdAt: Date;
    updatedBy: string;
  };
};

const product1: Product = {
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
let userTuple: [number, string, boolean] = [1, "Sam", true];
console.log("Tuple:", userTuple);
