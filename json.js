//string to number
const number = "255";
const numberJson = JSON.parse(number);
// console.log(numberJson);

//Number to string
const num = 25;
const newNum = JSON.stringify(num);
// console.log(typeof(newNum));

//fetch
// const url = `https://google.com/image/dog/`
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// key, values
const student = {
  name: "Sakib khan",
  age: "32",
  movies: ["Dhakar mastan", "King khan"],
};
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student.movies);
// console.log(values);

//
const products = [
  { name: "laptop", price: 1000, brand: "hp", color: "black" },
  { name: "mouse", price: 100, brand: "hp", color: "brown" },
  { name: "keyboard", price: 200, brand: "logitech", color: "black" },
  { name: "monitor", price: 500, brand: "Dell", color: "white" },
  { name: "camera", price: 1000, brand: "canon", color: "black" },
];

const product = { name: "monitor", price: 500, brand: "Dell", color: "white" };
const newProduct = [...products, product];
console.log(products);
console.log(newProduct);

// ternary
const money = 200;

let food = money > 100 ? "biriyani" : null;
console.log(food);

//number to string
const num1 = 25;
const numStr = num1 + "";
console.log(numStr);

//string to number
const newNumber1 = "52";
const newStr = +newNumber1;
console.log(newStr);


