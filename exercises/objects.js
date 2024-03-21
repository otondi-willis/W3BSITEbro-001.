//object = collection of related properties and or methods
//          can represent real world objects (people, products, places)
//          object = {key: value,
//                     function()}

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    // isMarried: true,
    // isAlive: true,
    isEmployed: true,
    sayHello: () => console.log("Hello there8!"),
}

console.log(person.firstName);
console.log(person.sayHello()); 