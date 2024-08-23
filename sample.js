const fs = require("fs");
const [, , arg1, arg2, operation] = process.argv;
const calculator = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return +num1 + +num2;
    case "sub":
      return +num1 - +num2;
    case "mul":
      return num1 * num2;
    case "div":
      return num1 / num2;
    default:
      return "please specify valid arguments";
  }
};

console.log(result);
fs.readFile("./config.json", "utf-8", (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    const inputData = JSON.parse(data);
    const result = calculator(
      inputData.arg1,
      inputData.arg2,
      inputData.operation
    );
    console.log(result);
  }
});
