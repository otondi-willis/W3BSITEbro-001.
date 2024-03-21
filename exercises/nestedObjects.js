/*
nested objects

objects inside of other objects.
Allows you to represent more complex data structures
Child object is enclosed by a Parent Object

Person{Address{}, contactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

*/

const person = {
    fullName : "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "Mountain",
        city: "Nairobi",
        country: "Int. Water"
    }

}

console.log(person.address.street);