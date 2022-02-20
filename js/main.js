
// one function 5 input 
// input function

function getInputId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const totalInputAmount = parseFloat(inputText);
    return totalInputAmount;
}
// calculation

document.getElementById('cal-btn').addEventListener('click', function (){

    // income
    const income = getInputId('income-input');
    // food
    const food = getInputId('food-input');
    // rent
    const rent = getInputId('rent-input');
    // clothes
    const clothes = getInputId('cloth-input');

    // total Expenses
    const totalExpense = food + rent + clothes;
    // expense output
    const expense = document.getElementById('expense-output');
    expense.innerText = totalExpense;
    
    // alert 
    if(income < totalExpense){
        const fail = document.getElementById('fail');
        fail.style.display = 'block';
        balance.style.display = 'none'
    }
    
    // balance after expence
    const totalBalance = income - totalExpense;
    // balance output
    const balance = document.getElementById('balance-output');
    balance.innerText = totalBalance;

});

// second function for saving

document.getElementById('saving-btn').addEventListener('click', function (){
   
    // income
    const income = getInputId('income-input');
    // food
    const food = getInputId('food-input');
    // rent
    const rent = getInputId('rent-input');
    // clothes
    const clothes = getInputId('cloth-input');
    // total Expenses
    const totalExpense = food + rent + clothes;
    // expense output
    const expense = document.getElementById('expense-output');
    expense.innerText = totalExpense;

    // alert bar
    if(income < totalExpense){
        const fail = document.getElementById('fail');
        fail.style.display = 'block';
        balance.style.display = 'none'
        savingAmount.style.display = 'none'
        remaining.style.display = 'none'
    }
    
    // balance after expence
    const totalBalance = income - totalExpense;
    // balance output
    const balance = document.getElementById('balance-output');
    balance.innerText = totalBalance;

    // save input
    const save = getInputId('save-input');
    
    // save math
    const saveMath = (income / 100) * save;
    // saving amount
    const savingAmount = document.getElementById('saving-output');
    savingAmount.innerText = saveMath;

    // total remaining balance 
    const totalRemaingBalance = totalBalance - saveMath;
    // Remaining balance
    const remaining = document.getElementById('remaining-output');
    remaining.innerText = totalRemaingBalance;
});

// alert for all input
document.getElementById('income-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        const failed = document.getElementById('notify-fail');
        failed.style.display = 'block';
    }
})
document.getElementById('food-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        const failed = document.getElementById('notify-fail');
        failed.style.display = 'block';
    }
})
document.getElementById('rent-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        const failed = document.getElementById('notify-fail');
        failed.style.display = 'block';
    }
})
document.getElementById('cloth-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        const failed = document.getElementById('notify-fail');
        failed.style.display = 'block';
    }
})
document.getElementById('save-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        const failed = document.getElementById('notify-fail');
        failed.style.display = 'block';
    }
})

// ---------------- done --------------------