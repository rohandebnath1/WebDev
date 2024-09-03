// Script for Guessing game

let input = prompt('What would you like to do?');

const todos = [];

while (input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        console.log('***********')
        for (let i = 0; i< todos.length; i++){
            console.log(`${i} : ${todos[i]}`)
        }
        console.log('***********')
    }
    else if(input === 'new'){
        const newTodo = prompt("Whats the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }

    else if(input === 'delete'){
        const index = parseInt(prompt("Enter an index to delete the todo: "));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok Deleted ${deleted[0]}`);
        }
        else{
            console.log("Invalid Index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log('Ok Quitting the App');