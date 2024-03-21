//this = reference to the object where THIS is used 
//       the object depends on the immediate context
//        person.name = this.name
//        Behaves differently for arrow functions

const person1 = {
    name: "Willis",
    age: 25,
    occupation: "Software Engineer",
    sayHello: function () {console.log(`Hi I am ${this.name}`)},
}

person1.sayHello();