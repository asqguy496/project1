function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

let secretNumber = getRandomInt(20) + 5; // Example of a random integer between 15 and 35
console.log(`The randomly generated secret number is: ${secretNumber}`);
