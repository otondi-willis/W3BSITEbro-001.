let fruits = ["abananad", "apple", "orange", "pineapple", "watermelon"];

let forma = fruits[0];
    forma = forma.charAt(0).toUpperCase() + forma.slice(1);
 
    //console.log(forma);


    //spread operator (...) in action

    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let maximum = Math.max(...numbers);
    let arrays = [...fruits, ...numbers];
    console.log(arrays);

    //rest parameters in action
    
    function openRoom(...persons){
        console.log(...persons);

    }
    const person1 = "first";
    const person2 = "second";
    const person3 = "third";
    const person4 = "fourth";
    const person5 = "fifth";

    openRoom(person1, person2, person3, person4, person5);
