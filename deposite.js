//depo  
document.getElementById('button-depo').addEventListener('click',function(){

   const maildepo = document.getElementById('email-depo')
   const depoamountstring =maildepo.value;
   const depoamount =parseFloat(depoamountstring);
      maildepo.value = '';

      if(isNaN(depoamount)){

    alert('please provide a Valid Amount')
    return;
  };

//    console.log(typeof depoamount)
   const previousdepo = document.getElementById('total-depo')
   const recentdepostring = previousdepo.innerText;
   const recentdepo = parseFloat(recentdepostring)
   previousdepo.innerText = depoamount +recentdepo


   const balance =document.getElementById('total-balance')
    const previousbalancestring = balance.innerText;
    const previousbalance = parseFloat(previousbalancestring)
    balance.innerText = depoamount + previousbalance;
  
  })