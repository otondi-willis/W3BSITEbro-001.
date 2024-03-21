/*
static = keyword that defines properties or methods that belong
to a class itself rather than the objects created from that class
(class owns anything static, not the objects)

*/

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return 2*radius;
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
    static getArea(radius){
        return this.PI*radius*radius;
    }
}

const user1 = new MathUtil();

console.log(user1.PI);//objects cant access it


console.log(MathUtil.PI); //no use of objects to access it
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10)); //