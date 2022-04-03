const myNames ="Arefin";
let myAge = 27;
// myAge = 28;
// console.log(myAge);

//2 condition >,<, ===, !==, <=, >=, &&, ||
if(myAge === 28){
    console.log("my age is 27");
}else if(myAge < 30 && myName === "Arefin"){
    console.log("condition is true");
}
else{
    console.log("my age is 28");
}

//3. Array. index, length, push, pop, shift, unshift
const students = ["Hasib","Rakib","Hadi","Sabbir"];
// console.log(students.indexOf('Hadi'));
console.log(students.length);
students.push("Rana");
students.unshift("Shekh Hacina");
students.pop();
students.shift();
console.log(students);

//4. for loop
const numbers = [25, 30, 35, 40, 45];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  //   console.log(number);
}

// function
function multiply(num1, num2) {
  const total = num1 * num2;
  return total;
}
const result = multiply(25, 5);
console.log(result);

// arrow function

const getNumber = () => 40;
const add = (num) => num + 20;

const isEven = (x) => x % 2 == 0;

// multi perameter.
const addNumber = (num1, num2) => num1 + num2;

//multyline function
const addetion = (num1, num2) => {
  const add = num1 + num2;
  return add;
};

//6. object. 3 ways to access the object by name
const student = {
    name: "Sakib khan",
    age: "32",
    movies: ['Dhakar mastan','King khan'],
}
const myName = 'name';
console.log(student.age);
//access via property name with string
console.log(student["age"]);

//access via property name in a variable
console.log(student[myName]);








