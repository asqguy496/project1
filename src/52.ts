function getRandomNumber(min: number = 0, max: number = 100): number {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range) + min;
    return randomNumber;
}
