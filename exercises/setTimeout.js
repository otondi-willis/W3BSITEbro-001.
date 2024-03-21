/**
 * setTimeout()
 * function in JavaScript that allows you to schedule the execution
 * of a function after an amount of time (milliseconds)
 * Times are approximate (varies based on the workload of the JavaScript
 * runtime environment.
 * setTimeout(callback,delay);
 * clearTimeout() = can cancel a timeout before it triggers
 */



const timeoutId = setTimeout(()=>console.log('Sasa'),2000);
clearTimeout(timeoutId);
setTimeout(function(){console.log('Hello');},3000);

let timeOutId;
function startTimer() {
    timeOutId = setTimeout(()=>console.log('Hello started'),2000);
}
function stopTimer() {
    clearTimeout(timeOutId);
    console.log('Hello stopped');
}


