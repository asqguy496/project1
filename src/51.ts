function fibonacci(n: number): number {
    if (n <= 0) {
        throw new Error("Input should be a positive integer.");
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci(10));
