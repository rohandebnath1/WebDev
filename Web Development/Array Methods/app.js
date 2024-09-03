//  The Map Method


const numbers = [1,2,3,4,5,6,7,8];

const doubles = numbers.map(function (num) {
    return num * 2;
})

const movies = [
    {
        title : 'Amadeus',
        score: 99
    },
    {
        title : 'Stand By Me',
        score : 85
    },
    {
        title : 'Parasite',
        score : 95
    }
]

const titles = movies.map(function (movie){
    return movie.title;
})

// Using the Implicit Arror Function

const rating = movies.map(movie => {
    `${movie.title} - ${movie.score / 10}`;
})

// Set Timeout - It will print the message after the given time in ms 

setTimeout(() => {
    console.log("Hello!!!")
}, 6000)

// Set Interval - Keeps running on a given interval time in ms

const id = setInterval(() => {
    console.log("Hello!!")
},2000)

clearInterval(id)

// Fitler - Creates a new array if the elements pass the test

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const evenNo = nums.filter(n => {
    return n % 2 == 0
}) //Here it will return the even numbers in a new array called as evenNo

// Some and Every Methods -> Boolean = returns True or False

const exam = [85,56,78,34,67,98,76,82]

exam.every(score => score >= 75) // It will give False
exam.some(score => score >= 75) // It will give True


// Reduce Method - 

const sum2 = [3, 5, 7, 12, 15].reduce((accumulator, currentVal) => {
    return accumulator + currentVal
})
console.log(sum2 )

const price = [99, 149, 35, 68, 39, 65, 80]

const minPrice = price.reduce((min, price) => {
    if (price < min)
        return price;
    else
        return min;
})

console.log("The Minimum price is : ", minPrice)


// Arrow Function 

const person = {
    firstName : 'Rohan',
    lastName : 'Debnath',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

