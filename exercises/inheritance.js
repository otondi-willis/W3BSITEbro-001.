/* 
inheritance = allows a new class to inherit properties and methods from an 
 existing class. helps with code reusability.

*/

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
}

class Fish extends Animal{
    name = "Fish";
}
class Hawk extends Animal{
    name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.eat());