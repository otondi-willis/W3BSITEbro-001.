/* 
destructuring 
extract values from arrays and objects, then assign them to variables in a
convenient way
[] = to perform array destructuring
{} = to perform object destructuring

*/

// swap the value of two variables
/*let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);

console.log(b);*/

//swap 2 elements in an array

/*const fruits = ["orange", "mango", "pineapple", "lemon","apple"];

[fruits[1], fruits[3]] = [fruits[3], fruits[1]];

console.log(fruits);*/

//assign array elements to variable

const numbers = [1,2,3,4,5,6,7,8,9,10];

const [first,...rest] = numbers;

console.log(first);

console.log(rest);

//extract values from objects

const person = {
    name: "willis",
    age: 25,
    occupation: "programmer"
};

const person2 = {
    name: "Otondi",
    age: 250,
    occupation: "engineer"
}

const {name, occupation, job="Unemployed"} = person2;

console.log(name);

console.log(occupation);

console.log(job);

//destructure in function parameters
function displayPerson({name, age, occupation, job="unemployed"}){
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`occupation: ${occupation}`);
    console.log(`job: ${job}`);
}

const person3 = {
    name: "willis",
    age: 25,
    occupation: "programmer"
};

displayPerson(person3);
