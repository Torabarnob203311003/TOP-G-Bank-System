  document.getElementById('button-depo').addEventListener('click',function(){

   const maildepo = document.getElementById('email-depo')
   const depoamount =maildepo.value;
   console.log(depoamount)
   const previousdepo = document.getElementById('total-depo')
   const recentdepo = previousdepo.innerText;
   previousdepo.innerText = depoamount;


  })