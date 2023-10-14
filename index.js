const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//fucntiions

function showError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;

}

//show success outlien

function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className='form-control success';
}


//check email is valid

//do it when internet is avavilbale






// type 1 

// form.addEventListener('submit' , function(e){
//     e.preventDefault();

//     if(username.value == ''){
//         showError(username , 'Username is requried');
//     }else{
//         showSuccess(username);
//     }

//     if(email.value == ''){
//         showError(email , 'email is requried');
//     }else{
//         showSuccess(email);
//     }

//     if(password.value == ''){
//         showError(password , 'password is requried');
//     }else{
//         showSuccess(password);
//     }


//     if(password2.value == ''){
//         showError(password2 , 'password2 is requried');
//     }else{
//         showSuccess(password2);
//     }
// });









// type 2 (better)





// chekrequiered function

function checkrequired(inputArr){
    inputArr.forEach(function(input) {                       // forEach is a high order array code
        if(input.value === ''){
            showError(input,`${getfieldname(input)} is required`);      // `${}` is an ES6 code in which we can put variable in it
        }else{
            showSuccess(input);
        }

    });

}


//check passwprds match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'passwords do not match');
    }
}


// check input length

function checklength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getfieldname(input)} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getfieldname(input)} must be  less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}





//getfieldname
function getfieldname(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);     // toUpperCase uppercases every wpord in the string to do only first letter we need to slice
}



//event listeners

form.addEventListener('submit' , function(e){
    e.preventDefault();

    checkrequired([username,email,password,password2]);
    checklength(username ,3,15);
    checklength(password ,6,12);
    checkpasswordsmatch(password,password2);

});







