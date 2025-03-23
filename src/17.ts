function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let secretCode = getRandomInt(1000); // The generated code should be between 0 and 999

console.log("Generated secret code: " + secretCode);
