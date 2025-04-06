function getRandomInt(max: number): number {
    const maxValue = Math.floor(Math.random() * max);
    return maxValue;
}

const secretCode = getRandomInt(100); // 1 to 99
console.log(`The secret code is ${secretCode}.`);
