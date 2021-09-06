const CalculatorService = require("./calculator.service");

let calculatorService;

beforeEach(() => {
  calculatorService = new CalculatorService();
});

describe("Calculator service", () => {
  test("adds two numbers", () => {
    const firstNumber = 6;
    const secondNumber = 3;
    const expectedResult = firstNumber + secondNumber;
    const result = calculatorService.add(firstNumber, secondNumber);
    expect(result).toBe(expectedResult);
  });

  test("subtracts two numbers", () => {
    const firstNumber = 6;
    const secondNumber = 3;
    const expectedResult = firstNumber - secondNumber;
    const result = calculatorService.subtract(firstNumber, secondNumber);
    expect(result).toBe(expectedResult);
  });
});
