// Function Declaration - Hoisted

function funName(para) {
  const value = 10;

  return value;
}

// Function Expression - Not hoisted

const functionExpression = function (para = 10) {
  const value = para;

  return value;
};

// Arrow Function (ES6) /A shorter way to write functions./ - Not Hoisted / No own this keyword

const arrowFunction = (para) => {
  const value = para;
  console.log(this);

  return value;
};

// console.log(functionExpression());

// Imediately

// (function () {
// console.log("I run immediately!");
// })();

// function sum(...numbers) {
//   console.log(numbers);

//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3));

// const nested = [1, 2, [3, 4]];

// const [one, two, [three, four]] = nested;

// console.log(one, two, three, four);

// const person = { name: "Alice", age: 25 };

// const { name: desiredName, age } = person;
// console.log(desiredName); // "Alice"
// console.log(age); // 25

// const employee = {
//   name: "Emma",
//   department: { name: "IT", location: "New York" },
// };

const person = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {
  name,
  address: { city, zip },
} = person;

// whenever you want to address an nested obj use nested_obj_name:

// console.log(name, city, city);

// const str = "Hello";

// console.log([...str]);

// Nulish collision

// Only considers null an undefined as false

// const user = {
//   profile: {
//     name: "Alex",
//   },
// };

// console.log(user.profile.name); // "Alex"
// console.log(user.settings?.theme); // ❌ Error if settings is undefined

// const obj3 = null;
// console.log(obj3?.toString());
// // "false" ✅ runs, because `false` is not null/undefined

// Sets

// const arr = [1, 2, 2, 3];

// const set = new Set([1, 2, 3, 3]);

// set.add(77);
// set.delete(3);
// console.log(set.has(23));

// set.clear();

// console.log(set);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// // Union
// const union = new Set([...arr1, ...arr2]);

// // Intersection

// const setA = new Set(arr1);
// const setB = new Set(arr2);

// const intersection = [...setA].filter((ele) => setB.has(ele));

// // Difference

// // const difference = console.log(difference);

// const text = "JavaScript is awesome. JavaScript is powerful.";
// const words = text.toLowerCase().match(/\b\w+\b/g); // Extract words

// // console.log(new Set(words));

// const activeUsers = new Set();

// function userLogin(user) {
//   activeUsers.add(user);
//   console.log(`${user} logged in. Active users:`, activeUsers);
// }

// userLogin("Alice");
// userLogin("Bob");
// userLogin("Alice"); // Duplicate won't be added

// console.log(activeUsers.size); // Output: 2

const map = new Map([
  ["name", "ajay"],
  ["age", 23],
  ["address", "Mallampet"],
]);

// map.forEach((value, key) => {
//   console.log(`${key} -> ${value}`);
// });

const fruits = ["apple", "banana", "apple"];
const countMap = new Map();

for (const fruit of fruits) {
  countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
}
console.log(countMap); // Map(2) { 'apple' => 2, 'banana' => 1 }
