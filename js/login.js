        //  step 1 . get the button by id 
 document.getElementById('button-login').addEventListener('click',function(){

            // step 2.  get email by id 
       const Emailfeild= document.getElementById('email-section')
         //  step 3.     alwys rmmbr get the email value by .value 
       const Email =Emailfeild.value;
        // console.log(Email)
        // step 4.   get the pass by id 
        const Passfeild =document.getElementById('pass-section')
        // step . 5 get the value using .value 
        const pass = Passfeild.value;
        // console.log(pass)
        // step .6 verify username and pass 


         if(Email==='1234' && pass === '123'){

            console.log(' valid')
         }
         else{
            console.log('invalid')
         }
       
  
      

  })