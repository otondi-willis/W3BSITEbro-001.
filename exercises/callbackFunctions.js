// callback = a function that is passed as an argument 
   //             to another function.
   //           used to handle asychronous operations
   //           reading a file
   //           network requests
   //           interacting with databases

   //           "Hey, when you are done, call this next"

//     hello(leave);
//    function hello(callback){
//     console.log("Hello");
//     callback();
//    }

//    function leave(){
//     console.log("Leave");
//    }
//    function goodbye(){
//     console.log("Goodbye");
//    }

sum(displayPage, 1,9);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);

}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
