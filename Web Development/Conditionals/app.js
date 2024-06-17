// console.log("Hello World!")

// if (1+1 === 2 ){
//     console.log("Math Still Works!")
// }

// let random = Math.random();
// if (random > 0.5){
//     console.log("Random Number greater than 0.5")
//     console.log(random)
// }
// else{
//     console.log("Random number is less than or equals to 0.5")
//     console.log(random)
// }

// const dayOfWeek = prompt('Enter A Day').toLowerCase();

// if (dayOfWeek === 'monday'){
//     console.log("UGHH I dont like Mondays!")
// }

// else if (dayOfWeek === 'sunday'){
//     console.log("I lovee Sundays!!")
// }

// else if (dayOfWeek === 'friday'){
//     console.log("Party Night FRIDAYYY!!")
// }

// else{
//     console.log("MEH!")
// }


// const age = 2;

// if (age <5 ){
//     console.log("You are a child. You get in FREE")
// }
// else if (age < 10){
//     console.log("Your fare : $10")
// }
// else if (age < 65){
//     console.log("Your Fare: $20")
// }
// else if (age > 65){
//     console.log("Your Fare: $10")
// }

const password = prompt("Enter a new password ");

// Password must be 6 chars
if (password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log("Valid Password")
    }
    else{
        console.log("Please remove spaces")
    }
}
else{
    console.log("Password too short!! 6 char min")
}
// Must not contain space


