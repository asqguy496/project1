const randomTsCode = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const symbols = ["+", "-", "*", "/", "%", "<", ">", "=", "^", "&", "|", "(", ")", "{", "}", "[", "]"];
    let code = "";
    for (let i = 0; i < 10; i++) {
        const numIndex = Math.floor(Math.random() * numbers.length);
        const letterIndex = Math.floor(Math.random() * letters.length);
        const symbolIndex = Math.floor(Math.random() * symbols.length);
        code += `${numbers[numIndex]}${letters[letterIndex]}${symbols[symbolIndex]}`;
    }
    return code;
};
