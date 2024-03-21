/**
 * closure 
 * a function defined inside of another function,
 * the inner function has access to the variables and scope of the outer function.
 * Allow for private variables and state maintenance
 * used frequently in js frameworks: React Vue and Angular
 * benefits: variables encapsulation
 * 
 */

function outer(){
    let message = "Hello, world!";
    function inner(){
        console.log(message);
    }
    inner();
}

outer();

//state maintenance
 function createCounter(){
    let count = 0;
        function increment(){
            
            count ++;
            console.log(`Count increased to ${count}`);

        }
        function getCount(){
            return count;
        }
        return {increment, getCount};

}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);



