# SpendWise — Budget Tracker

SpendWise is a personal budget and expense tracker. It started as a static
dashboard shell in Week 4 and now, in Week 6, gains a JavaScript foundation
that can collect user input, store budget data, run calculations, and print
a labeled budget summary to the browser console.

## Files

- `index.html` — dashboard structure (sidebar, header, category cards)
- `style.css` — layout, theme, responsive rules, micro-interactions
- `script.js` — JavaScript foundation: variables, input, calculations, functions
- `README.md` — this file

## What SpendWise does

SpendWise helps you track a monthly budget and the expenses against it.
This week's version:

1. Asks the user for a monthly budget and a first expense using `window.prompt`
2. Stores that data in JavaScript variables
3. Runs budget calculations (total spent, remaining balance)
4. Prints a clearly labeled budget summary to the browser console

The dashboard UI (from Week 4) remains on screen as the visual shell. The
JavaScript layer is intentionally wired to the console for now — connecting
it to the UI is the job of Week 7 and Week 8.

## JavaScript concepts implemented

### 1. Variables and data types

Two kinds of variables are used, following the modern rule:
`const` by default, `let` only when the value must change.

```js
const APP_NAME = "SpendWise";      // string — never reassigned
const CURRENCY = "USD";            // string — never reassigned

let monthlyBudget = 0;             // number — updated from user input
let expenses = [];                 // array — grows as expenses are added
