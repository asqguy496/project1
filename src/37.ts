function greet(name: string): string {
    if (!name) {
        throw new Error("Name is required");
    }
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
