//.reduce() = reduce the elements of an array to a single value.

const prices = [5, 10, 20, 30, 40, 50,70, 80.90, 100];


const total = prices.reduce(sum);
const maximum = prices.reduce(getMax);
console.log(`$${total.toFixed(2)}`);
console.log(`$${maximum.toFixed(2)}`);
 
function sum(accumulator, element){
    return accumulator + element;
}
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}


