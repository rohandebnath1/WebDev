// Deafult Params


// function rollDie(numSides){
//     return Math.floor(Math.random() * numSides) + 1;
// }

// the newer way

function rolldDie(numSides = 6){ //6 is set as default
    return Math.floor(Math.random() * numSides) + 1;
}

// Spread 

const nums = [23, 54, 2, 57, 2134, 5, 6, 9, 7233, 56, 1000]
Math.max(nums); //this will give error
Math.max(...nums); //this wont

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

// Spread in objects

const feline = {legs : 4, family : 'Felidae'};
const canine = {isFurry : true, family : 'Caninae'};

const catDog = {...feline, ...canine}; //family will be takes as Caninae

// rest params

function sum(){
    console.log(arguments);
}

function sum1(...nums){
    console.log(nums)
} //it will return an array of our parameters

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// Destructuring 

const scores = [4324235,2346234,63455,1233,647]

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;


    


