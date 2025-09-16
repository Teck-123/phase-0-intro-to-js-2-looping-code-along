// Code your solutions in the solution here

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example usage:
// const names = ["Alice", "Bob", "Charlie"];
// const event = "birthday";
// console.log(writeCards(names, event));
// countDown(5);
