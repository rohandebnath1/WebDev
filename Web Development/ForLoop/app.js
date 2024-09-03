// for loop in JS

// for (let i = 1; i<=10; i++){
//     console.log(i);
// }

//Printing all even numbers from 1 to 20

// for (let i = 0; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Printing numbers like 100 90 80 70 ...

for (let i = 100; i>=0;i-=10){
    console.log(i); 
}

// Infinite loop DO NOT RUN THIS CODE it will most probably crash the browser

// for (let i = 100; i>=0; i++){
//     console.log(i);
// }

// Nested For Loop

for (let i = 0; i<=10; i++){
    console.log(`i is: ${i}`)
    for (let j = 1; j<4;j++){
        console.log(`       j is ${j}`)
    }
}

// Traversing arrays

const seating = [['Rd','Tu'],['Ty','Hu'],['De','Fu']]

for (let i=0; i<seating.length; i++){
    const row = seating[i];
    console.log(`Row No. ${i+1}`)
    for (let j = 0; j< row.length; j++){
        console.log(row[j])
    }
}