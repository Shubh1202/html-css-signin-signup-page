function displayModal(){
    document.getElementById("modalid01").style.display = "block";
    
}
function cancelModal(){
    document.getElementById("modalid01").style.display = "none";
}

function validateLogin(){
    const userName = document.forms['user_login']['username'].value;
    if(userName == "")
    {
        alert("Please Enter Username");
        return false
    } 

    const userPass = document.forms['user_login']['userpass'].value;
    if(userPass ===""){
        alert("Please Enter Your Password");
        return false;
    }else if(userPass.length <= 8 ){
        alert("Your Password is Less Than 8 Character");
        return false;
    }

}

function signupValidate(obj){
    const useremail = obj["useremail"].value;
    if(useremail == ""){
        alert("Please Enter User-Email");
        return false;
    }
    let symbolls = /[@#$%^&*+-/]/g
    let signup_pass = obj['signuup_pass'].value;
    if(signup_pass == ""){
        alert("Password Should not be blank");
        return false
    }else if(signup_pass.length < 8){
        alert("Password must have 8 character or above");
        return false;
    }else if(signup_pass.match(/[A-Z]/g) == null){
        alert("Password must have one character in Upper Case");
        return false;
    }else if(signup_pass.match(/[a-z]/g) == null){
        alert("Password must have on character in Lower case");
        return false;
    }else if(signup_pass.match(/[0-9]/g) == null){
        alert("Password must have one numeric value");
        return false;
    }else if(signup_pass.match(symbolls) == null){
        alert("Paasword must have one special symbol");
        return false;
    }

    const confirmpass = obj["confirmpass"].value;
    if(confirmpass == ""){
        alert("Please Enter Confirm Password");
        return false;
    }
    if(signup_pass != confirmpass){
        alert("Password or Confirm Password not Match!");
        return false;

    }

}