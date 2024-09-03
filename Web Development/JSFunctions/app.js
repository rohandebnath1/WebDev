// Function basics

function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// singSong();


function avg(a,b){
    console.log(`Avg of ${a} and ${b} is ${(a+b)/2}`);
}

// avg(50,100);

function repeat(str, num){
    let res = '';
    for (let i = 0; i<num ; i++){
        res += str;
    }
    console.log(res);
}

// repeat("HOLA ",4);

// Using Return statement

function add(a,b){
    let sum = a + b;
    return sum;
}

// console.log(add(3,2));

// Function Scopes

// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = "hii";
// }

//console.log(radius);
//console.log(PI);  //Will give error as msg and PI are defined to a block


let radius = 8;
if (radius > 0){
    var msg = "Hii";
}

// console.log(msg); Will work this time as var is used


// function Robbery(){
//     const heroes = ['Spiderman','Wolverine','Batman'];
//     function cryForHelp(){
//         for (let hero of heroes){
//             console.log(`Please Help Us, ${hero.toUpperCase()}`);
//         }
//     }
//     cryForHelp();
// }


// Function Expressions

const sum = function(x, y){
    return x + y;
}

// console.log(sum(4,5));

// Higher Order Functions

function callTwice(func){
    func();
    func();
}

function rollDice(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDice);


// Returning Functions

function makeBetweenFunc(min , max){
    return function (num){
        return num >= min && num <= max;
    }
}


// Defining Methods

const myMath = {
    PI: 3.14159,
    square : function (num){
        return num * num;
    },
    cube : function(num){
        return num ** 3;
    }
}

// the THIS Keyword

const cat = {
    name : 'Blue Steele',
    color : 'grey',
    breed : 'Scpttish Fold',
    meow(){
        console.log(`${this.name} says MEOWWWW`);
    }
}


//  Arrow Functions

const add1 = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}


const rollDie = () => {
    return Math.floor(Math.random()*6) + 1;
}


//  Single argument may not have brackets

const greet = name => {
    return `Hey ${name}! How are you doing?`;
}


//  implicit Return

const add2 = (a,b) => a + b;  