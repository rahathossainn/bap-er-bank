/* // step 1- add event listner to the deposte button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 - get the deposite amount from the deposite input field
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    // step 3 - get the current deposit total
    const depositTotalAmount = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalAmount.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString)
    // step 4 - add numbers to set the total deposit
    currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositeTotal;

    // step 5 - get ballance current total
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previosBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 - calculate current totoal balance
    const currentBalanceTotal = previosBalanceTotal + newDepositAmount;
    // set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal;
    // step 7 - clear field deposite
    depositField.value = '';
}) */

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(NewDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;
    


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal

    depositField.value = '';
})




























