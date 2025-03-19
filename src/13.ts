
const generateRandomTSCode = () => {
    const code = `
    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const randNum1 = getRandomInt(1, 10);
    const randNum2 = getRandomInt(1, 10);
    console.log(randNum1, randNum2);
    `;
    return code;
}