//.filter() = creates a new array by filtering out elements.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const evenNums = numbers.filter(isEven);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}
