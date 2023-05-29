console.clear();

const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = [
`January`,
`February`,
`March`,
`April`,
`May`,
`June`,
`July`,
`August`,
`September`,
`October`,
`November`,
`December`
];

// console.log(account[0].income)








// const lessProfit = account.sort((a, b) => a.income - b.income);


// -   buvo mažiausiai uždirbta, bet ne mažiau nulio;
let lessProfit = Infinity;
let lessProfitMonthNumber = 0;
let monthName = `None`
for ( let i = 0; i < account.length; i++){
if ( account[i].income < lessProfit ){
    lessProfit = account[i].income;
    lessProfitMonthNumber = account[i].month;
    monthName = months[lessProfitMonthNumber-1];
}}

console.log(lessProfit);
console.log(lessProfitMonthNumber);
console.log(monthName);
console.log(`-------------------`);

// -   buvo daugiausiai uždirbta;

let moreProfit = -Infinity;
let moreProfitMonthNumber = 0;
let moreMonthName = `None`
for ( let i = 0; i < account.length; i++){
if ( account[i].income > moreProfit ){
    moreProfit = account[i].income;
    moreProfitMonthNumber = account[i].month;
    moreMonthName = months[moreProfitMonthNumber-1];
}}

console.log(moreProfit);
console.log(moreProfitMonthNumber);
console.log(moreMonthName);
console.log(`-------------------`);

// -   buvo mažiausiai išlaidų, bet ne mažiau nulio;

let lessExpense = Infinity;
let lessExpenseMonthNumber = 0;
let lessExpenseMonthName = `None`
for ( let i = 0; i < account.length; i++){
if ( account[i].expense < lessExpense ){
    lessExpense = account[i].expense;
    lessExpenseMonthNumber = account[i].month;
    lessExpenseMonthName = months[lessExpenseMonthNumber-1];
}}

console.log(lessExpense);
console.log(lessExpenseMonthNumber);
console.log(lessExpenseMonthName);
console.log(`-------------------`);

// -   buvo daugiausiai išlaidų;

let mostExpense = -Infinity;
let mostExpenseMonthNumber = 0;
let mostExpenseMonthName = `None`
for ( let i = 0; i < account.length; i++){
if ( account[i].expense > mostExpense ){
    mostExpense = account[i].expense;
    mostExpenseMonthNumber = account[i].month;
    mostExpenseMonthName = months[mostExpenseMonthNumber-1];
}}

console.log(mostExpense);
console.log(mostExpenseMonthNumber);
console.log(mostExpenseMonthName);
console.log(`-------------------`);