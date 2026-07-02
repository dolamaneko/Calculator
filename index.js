#!/usr/bin/env node

const args = process.argv.slice(2);

function usage() {
  console.log("Usage: calc <number1> <operator> <number2>");
  console.log("Operators: + - * /");
  console.log("Example: calc 5 + 3");
}

if (args.length !== 3) {
  usage();
  process.exit(1);
}

const [aStr, operator, bStr] = args;
const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Please provide valid numbers.");
  process.exit(1);
}

let result;

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b === 0) {
      console.log("Cannot divide by zero.");
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log("Invalid operator. Use +, -, *, or /.");
    process.exit(1);
}

console.log(`Result: ${result}`);
