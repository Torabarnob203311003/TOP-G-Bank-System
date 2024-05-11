//withdraw

document.getElementById('button-withdraw').addEventListener('click', function () {
  // Step 1
  const withdraw = document.getElementById('withdraw-section');
  const withdrawValueString = withdraw.value;

  const newWithdrawValue = parseFloat(withdrawValueString);
 withdraw.value = '';
            
    if(isNaN(newWithdrawValue)){

    alert('please provide a Valid Amount')
    return;
  };



  // Step 2
  const withdrawTotal = document.getElementById('withdraw-balance');
  const withdrawTotalValueString = withdrawTotal.innerText;

  const recentWithdraw = parseFloat(withdrawTotalValueString);
  const currentWithdrawTotal = recentWithdraw + newWithdrawValue;

  withdrawTotal.innerText = currentWithdrawTotal;
 

  // Last step
  const balanceAmountTotalElement = document.getElementById('total-balance');
  const previousBalanceString = balanceAmountTotalElement.innerText;

  const previousBalanceTotal = parseFloat(previousBalanceString);

//   console.log(previousBalanceTotal);
if( previousBalanceTotal<  newWithdrawValue){

    alert('You Dont Have That Much Money')
    return;
}

  const newBalanceTotal = previousBalanceTotal - newWithdrawValue;
  balanceAmountTotalElement.innerText = newBalanceTotal;
});