const student = {
    name: "Sakib khan",
    age: "32",
    movies: ['Dhakar mastan','King khan'],
}
const about = `My name is ${student.name} and my age is ${student.age}`;
// console.log(about);

//spread operator
const number = [77,85,66,42];
const newNumber = [...number,20];
console.log(number); 
console.log(newNumber); 

