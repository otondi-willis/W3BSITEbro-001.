// function declaration = define a reusable block of code
                        //that performs a specific task
                        //1. callbacks in asynchronous operations
                        //2. higher order functions
                        //3. closures
                        //4. Event Listeners

//     function hello(){
//         console.log("Hello");
//     }
// // function expression = a way to define functions as values or variables
//     const hello1 =function(){ //assigning a function to a variable
//         console.log("Hello");
//     };

    // hello();
    // hello1();

    // setTimeout(function(){ //passing an entire function as an argument
    //     console.log("Mimi");
    // },3000);

    //setTimeout(hello,4000); //passing a function as a value

    const numbers = [1, 2, 3, 4, 5, 6];
    //const squares = ;

    setTimeout(function(){numbers.map(function (element){
        
        const sq=Math.pow(element,3);
        return console.log(sq);
    });},2000); //passing a function as a variable

    
    
    
    
                        