let first_name = document.querySelector('.fname') 
let last_name = document.querySelector('.lname') 
let user_email = document.querySelector('.memail')     
let submit_btn = document.querySelector('.button') 

function checkLength(item,len){

    if(item.length < len){
    
        return false;
        }
    
    else{
    
        return true;
        }
    }
function ValidateEmail(mail){

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){

            return (true)
   }

   return (false)
}


submit_btn.addEventListener('click', validate);
function validate(e){

    e.preventDefault();

    let fname = checkLength(first_name.value,4)
    let lname = checkLength(last_name.value,4)
    let email = ValidateEmail(user_email.value)
    let succsess=0;

    if(!fname){
        first_name.style.borderWidth = "1px";
        first_name.style.borderColor = "red";
        first_name.value = "";
        first_name.placeholder = "name cannot be less than 4 chracters";
        succsess=1;
    }

    if(!lname){
        last_name.style.borderWidth = "1px";
        last_name.style.borderColor = "red";
        last_name.value = "";
        last_name.placeholder = "name cannot be less than 4 chracters";
        succsess=1;
    }

    if(!email){
        user_email.style.borderWidth = "1px";
        user_email.style.borderColor = "red";
        user_email.value = "";
        user_email.placeholder = "Enter valid email"
        succsess=1;
    }

    if(succsess==0){

        alert("Thanks")
    }

    
}