function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(5) + " " + getRandomInt(10));
