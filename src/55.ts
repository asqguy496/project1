function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomInt(1, 100);
console.log(`Random number between 1 and 100: ${randomNumber}`);
