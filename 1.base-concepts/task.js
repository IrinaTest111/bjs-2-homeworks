"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  let roots = [];
  
  if (d < 0) {
    return roots;
  }
  
  if (d === 0) {
    const x = -b / (2 * a);
    roots = [x];
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    roots = [x1, x2];
  }
  
  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const p = Number(percent);
  const c = Number(contribution);
  const a = Number(amount);
  const months = Number(countMonths);
  
  if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(months)) {
    return false;
  }
  
  const S = a - c;
  
  if (S <= 0) {
    return 0;
  }
  
  const P = p / 100 / 12;
  const monthlyPayment = S * (P + (P / (Math.pow(1 + P, months) - 1)));
  const total = monthlyPayment * months;
  
  return Number(total.toFixed(2));
}


