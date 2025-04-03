function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

const secretKey = "mySecretKey";
const password = getRandetPassword("MySecurePassword", "mySecretKey");
