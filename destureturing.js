const numbers = [32,45];

const [first, second] =numbers;
const [x,y] = [32,45]
// console.log(first,second);

const products = [
    {name: "laptop", price: 1000, brand: "hp", color: "black"},
    {name: "mouse", price: 100, brand: "hp", color: "brown"},
    {name: "keyboard", price: 200, brand: "logitech", color: "black"},
    {name: "monitor", price: 500, brand: "Dell", color: "white"},
    {name: "camera", price: 1000, brand: "canon", color: "black"},
];


const [a, b, c] =  products;
// console.log(a, b,c);

//object destureturing 
const {name, height} = {name: 'hasib', age:26, height:68}
// console.log(name, height);

const {movies} = {
    name: "Sakib khan",
    age: "32",
    movies: ['Dhakar mastan','King khan'],
}
console.log(movies);

