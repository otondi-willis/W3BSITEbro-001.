const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() *(maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = parseInt(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    } else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number")
    } else {
        attempts++;
        if (guess < answer) {
            window.alert(`Too low try again`);
        } else if (guess > answer) {
            window.alert(`Too high try again`);
        } else{
            window.alert(`Correct! The answer was: ${answer}. it took you ${attempts} attempts`);
            running = false;
        }

    }
    
}