function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // clear the input field
    inputField.value = '';
    return inputAmount;
}

function addAmount(amountId, inputAmount) {
    const amount = document.getElementById(amountId);
    const amountText = amount.innerText;
    const previousAmount = parseFloat(amountText);
    amount.innerText = previousAmount + inputAmount;
}

function getCurrentBalance() {
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountText);
    return previousBalanceAmount;
}

function updateBalance(inputAmount, isAdd) {
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmount = getCurrentBalance();

    if (isAdd == true) {
        balanceAmount.innerText = previousBalanceAmount + inputAmount;
    }
    else {
        balanceAmount.innerText = previousBalanceAmount - inputAmount;
    }
}


document.getElementById('deposite-button').addEventListener('click', function () {
    // get input amount
    const inputDepositAmount = getInputValue('input-deposit');

    if (inputDepositAmount > 0) {
        addAmount('deposit-amount', inputDepositAmount);
        updateBalance(inputDepositAmount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount
    const inputWithdawAmount = getInputValue('input-withdraw');
    const currentBalance = getCurrentBalance();
    if (inputWithdawAmount > 0 && inputWithdawAmount <= currentBalance) {
        addAmount('withdraw-amount', inputWithdawAmount);
        updateBalance(inputWithdawAmount, false);
    }
});