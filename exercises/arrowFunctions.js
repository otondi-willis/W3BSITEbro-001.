//arrow functions = a concise way to write function expressions
                // good for simple functions that you use only once
                // (parameters) => some code

                const hello = (name) => console.log(`hello ${name}`);

                hello("willis");
                
                const numbers = [1, 2, 3, 4, 5, 6];
                    //const squares = ;
                
                    setTimeout(function(){const sq=numbers.map((element) => Math.pow(element,4));
                        return console.log(sq);
                    },2000); //passing a function as a variable
                
                    const fourthPower = numbers.map((element) => Math.pow(element,4));
                    console.log(fourthPower);   
                    const cubes = numbers.map((element) => Math.pow(element,3));
                    console.log(cubes);    
                    const evenNums = numbers.filter((element) => element%2===0);
                    console.log(evenNums); 
                    const total = numbers.reduce((previous,next) => previous + next);
                    console.log(total);    