//class 
/*
ES6 feature provides a more structured and cleaner way
 to work with objects compared to traditional constructors
 ex. static keyword, encapsulation, inheritance
*/ 

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Phone", 1090);
product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);
