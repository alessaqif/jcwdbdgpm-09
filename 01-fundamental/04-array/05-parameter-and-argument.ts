// Default parameter

function multiplyByN(num: number, n: number) {
  const result = num * n;
  return result;
}

console.log(multiplyByN(10, 5));

// REST PARAMETER
function sumAll(...rest) {
  console.log(rest);
}

console.log(sumAll(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

//LOOP ARRAY

const scores = [5, 10, 15, 20, 25];
console.log(scores.length);

let totalScores = 0;

for (let i = 0; i < scores.length; i++) {
  totalScores = totalScores + scores;
}

{
  function getLastArgument(...restParams: number[]) {
    return restParams[restParams.length - 1];
  }
  console.log(getLastArgument(10, 20, 30, 40, 50, 60, 70, 80, 90));
}

// Function as argument

function calcuteTax(salary: number, taxPercentage: number) {
  return salary * taxPercentage;
}

function showTax(
  calcuteTaxFunc: number,
  name: string,
  salary: number,
  taxPercentage: number
) {
  const tax = calcuteTax(salary, taxPercentage);
  return name + " " + "your tax is" + " " + tax;
}

console.log(showTax(calcuteTax, "ale", 5000, 10 / 100));
