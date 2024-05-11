  document.getElementById('button-withdraw').addEventListener('click',function (){
//  step 1
   const withdraw = document.getElementById
   ('withdraw-section')
   
   const withdrawValuestring = withdraw.value;
  

   const newwithdrawValue = parseFloat(withdrawValuestring);
 
// step 2
   const withdrawtotall =document.getElementById('withdraw-balance')
   const withdrawTotalValuestring = withdrawtotall.innerText;
   
  const  recentwidthdraw = parseFloat(withdrawTotalValuestring)
//   console.log(recentwidthdraw)
 const currentwithdrawtotaal = recentwidthdraw + newwithdrawValue;
  withdrawtotall.innerText = currentwithdrawtotaal
  withdraw.value ='';
  })