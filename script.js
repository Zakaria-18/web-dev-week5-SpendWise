const APP_NAME = "SpendWise";
const CURRENCY  = "USD";

let monthlyBudget = 0;

let expenses = [];

const budgetInput = window.prompt(
  "Welcome to SpendWise!\n\nWhat is your monthly budget?"
);


monthlyBudget = Number(budgetInput);

if (isNaN(monthlyBudget) || monthlyBudget <= 0) {
  monthlyBudget = 0;
  console.warn("[SpendWise] No valid budget entered. Defaulting to $0.");
}


const expenseNameInput = window.prompt(
  "Add your first expense — what did you spend on?\n(e.g., Groceries)"
);

const expenseName = expenseNameInput ? expenseNameInput.trim() : "";


const expenseAmountInput = window.prompt(
  `How much did you spend on "${expenseName || "your expense"}"?`
);

const expenseAmount = Number(expenseAmountInput);


if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
  expenses.push({
    name: expenseName,
    amount: expenseAmount,
    category: "Other",
    date: new Date().toISOString().slice(0, 10),
  });
}


function calculateTotalSpent(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total = total + list[i].amount;
  }
  return total;
}


function calculateBalance(budget, spent) {
  return budget - spent;
}


function formatCurrency(value) {
  return "$" + value.toFixed(2);
}


function logLine(label, value) {
  console.log(`[${APP_NAME}] ${label}: ${value}`);
}


const totalSpent     = calculateTotalSpent(expenses);
const remainingMoney = calculateBalance(monthlyBudget, totalSpent);


console.log("==========================================");
console.log(` ${APP_NAME} — Budget Summary`);
console.log("==========================================");

logLine("Currency",       CURRENCY);
logLine("Monthly budget", formatCurrency(monthlyBudget));
logLine("Expenses count", expenses.length);

if (expenses.length > 0) {
  console.log(`[${APP_NAME}] Expense detail:`);
  expenses.forEach(function (item, index) {
    console.log(
      `   ${index + 1}. ${item.name} — ${formatCurrency(item.amount)} (${item.category}, ${item.date})`
    );
  });
} else {
  console.log(`[${APP_NAME}] No expenses were recorded.`);
}

logLine("Total spent",     formatCurrency(totalSpent));
logLine("Remaining money", formatCurrency(remainingMoney));


if (remainingMoney > 0) {
  console.log(`[${APP_NAME}] Status: You are within budget. 🟢`);
} else if (remainingMoney === 0) {
  console.log(`[${APP_NAME}] Status: You spent your entire budget. 🟡`);
} else {
  console.log(`[${APP_NAME}] Status: You are over budget by ${formatCurrency(Math.abs(remainingMoney))}. 🔴`);
}
