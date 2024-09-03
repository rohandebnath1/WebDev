// Simple While Loop

// let count = 0;
// while (count < 10){
//     console.log(count)
//     count++;
// }


// A Simple Guessing Game


// const secret = "LargeEgg";

// let guess = prompt("Enter the secret code: ");
// while (guess !== secret){
//     guess = prompt("Enter the secret code: ");
// }
// console.log("Congrats you guessed it!")


// Break Statement

// let input = prompt("Say something");

// while(true){
//     input = prompt(input);
//     if (input === "Stop Copying"){
//         break;
//     }
// }
// console.log("OK I WILL STOP")



// Another Guessing Game

let max = parseInt(prompt("Enter the maximum number!"));

while (!max){
    max = parseInt(prompt("Enter a valid number: "));
}

const target = Math.floor(Math.random() * max) + 1;
console.log(target);

let guess = prompt("Enter your first guess: (Enter q to Quit.)");
let attempts = 1;

while (parseInt(guess) !== target){
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > target){
        guess = prompt("Too High! Enter a new guess");
        attempts++;
    }
    else if(guess < target){
        guess = prompt("Too Low! Enter a new guess:");
        attempts++;
    }
    else{
        guess = prompt("Invalid Guess. Please a number or q.");
    }
}
if (guess === 'q'){
    console.log("Ok Game quits");
}
else{
    console.log(`You got it! It took you ${attempts} guesses`);
}





