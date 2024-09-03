
// const colors = ['red','blue','green','white']

// for (let color of colors){
//     console.log(color);
// }

// for (let char of "hello World"){
//     console.log(char);
// }

// For in for iterating through objects

let marks = {
    rd : 45,
    sg :67,
    tu : 89,
    ew : 9,
    hb : 10
}

for (let name in marks){
    console.log(name);
}

for (let person in marks){
    console.log(`${person} marks obtained is: ${marks[person]}`)
}

let sum = 0;
let scores = Object.values(marks);
for (let score of scores){
    sum += score;
}
console.log(`Total marks of class is ${sum}`);
console.log(`Avg marks of class is ${sum/scores.length}`);
