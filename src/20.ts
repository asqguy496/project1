function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findPrimeFactors(n: number) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0 && i !== 1) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}

function calculateTotalCost(items: number[]): number {
    let totalCost = items.reduce((acc, item) => acc + item, 0);
    return totalCost;
}
