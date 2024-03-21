/*
super = keyword is used in classes to call the constructor or access
the properties and methods of a parent (superclass)
this = this object
super = this parent

*/

class Animal{

    constructor (name,age){
        this.name = name;
        this.age = age;

    }

    move(speed){
        console.log(`The ${this.name} moves at speed of ${speed} mph`);
    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age); //invoke the constructor of the parent
        this.runSpeed = runSpeed;

    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }

}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;

    }
    swim(){
        console.log(`This ${this.name} can swim`);
        this.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit", 2, 100);
const fish = new Fish("Fish", 2, 100);
const hawk = new Hawk("Hawk", 2, 100);

console.log(rabbit.name);

console.log(rabbit.age);

console.log(rabbit.runSpeed);

rabbit.run();

fish.swim();

hawk.fly();

