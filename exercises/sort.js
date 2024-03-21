/*
sort()

method used to sort elements of an array in place.
sorts elements as strings in lexicographic order, not alphabetical 
lexicographic = (alphabet + numbers + symbols) as strings*/

let fruits = ["apple", "orange", "banana", "coconuts", "pineapple"];
let numbers = [ 3,10,9,1,4,7,5];

fruits.sort();
numbers.sort((a,b)=> b-a);

console.log(fruits);

console.log(numbers);

const people = [{name: 'John', age: 20, gpa:2.0},
                {name: 'Jane', age: 10, gpa:3.0},
                {name: 'Willis', age: 26, gpa:2.5},
                {name: 'Otondi', age: 20, gpa:2.90},
                ];

//people.sort((a,b)=> a.age - b.age);
people.sort((a,b)=> a.name.localeCompare(b.name));

console.log(people);