const inputUser = document.getElementById("userInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const userText = document.getElementById("textUser");
const emailText = document.getElementById("textEmail");
const passwordText = document.getElementById("textpassword");
const signUp = document.getElementById("signUp-container")
const signUpBtn = document.getElementById("signUp-btn");
const signUpBtn2 = document.getElementById("signUp-btn2");
const notice = document.getElementById("notify")
const loginAccess = document.getElementById("accessLogin");
const loginAccess2 = document.getElementById("second"); 

const inputUserLog = document.getElementById("userInput2");
const inputPasswordLog = document.getElementById("passwordInput2");
const login = document.getElementById("login-container")
const loginBtn = document.getElementById("login-btn");      
const note = document.getElementById("notifyLogin")
const loginSignUp = document.getElementById("accessSignUp"); 
const loginbutton2 = document.getElementById("btn2");


userText.innerHTML = localStorage.getItem("userValue")  
passwordText.innerHTML = localStorage.getItem("passwordValue")

userText.style.display = "none"
emailText.style.display = "none"
passwordText.style.display = "none"

login.style.display =  "none"
loginbutton2.style.display = "none";
signUpBtn2.style.display = "none"

signUpBtn.addEventListener("mouseenter", function() {
    if (inputUser.value.length > 0 && inputEmail.value.length > 0 && inputPassword.value.length > 0){
        localStorage.setItem("userValue", inputUser.value);
        localStorage.setItem("emailValue", inputEmail.value);
        localStorage.setItem("passwordValue", inputPassword.value);
        userText.innerHTML = localStorage.getItem("userValue")
        emailText.innerHTML = localStorage.getItem("emailValue")
        passwordText.innerHTML = localStorage.getItem("passwordValue")

        inputUser.value = "";
        inputEmail.value = "";
        inputPassword.value = ""
        signUpBtn.style.display = "none";
        signUpBtn2.style.display = "block";
    }else{
        notice.innerHTML = ` Fill in the fields `
        console.log("wwrong")
    }
})

// signUpBtn2.addEventListener("click", function() {
//     if (inputUser.value.length > 0 && inputEmail.value.length > 0 && inputPassword.value.length > 0){
//         localStorage.setItem("userValue", inputUser.value);
//         localStorage.setItem("emailValue", inputEmail.value);
//         localStorage.setItem("passwordValue", inputPassword.value);
//         userText.innerHTML = localStorage.getItem("userValue")
//         emailText.innerHTML = localStorage.getItem("emailValue")
//         passwordText.innerHTML = localStorage.getItem("passwordValue")

//         inputUser.value = "";
//         inputEmail.value = "";
//         inputPassword.value = ""

//     }else{
//     }
// })

loginAccess.addEventListener("click", function() {
    signUp.style.display = "none";
    login.style.display = "block"
})

loginSignUp.addEventListener("click", function() {
    signUp.style.display = "block";
    login.style.display = "none"
})

loginAccess2.addEventListener("click", function() {
    signUp.style.display = "none";
    login.style.display = "block"
})


// loginBtn.addEventListener("mouseenter", function() {
//     if (inputUserLog.value === userText.innerHTML && inputPasswordLog.value === passwordText.innerHTML){
//         loginBtn.style.display = "none"
//         loginbutton2.style.display = "block"
//     }else{
//         console.log("wrong")
//         note.innerHTML = `Wrong username or password`
//     }
// })

loginBtn.addEventListener("mouseenter", function() {
    if (inputUserLog.value === userText.innerHTML && inputPasswordLog.value === passwordText.innerHTML){
        loginBtn.style.display = "none"
        loginbutton2.style.display = "block"
    }else if (inputUserLog.value.length < 0 && inputPasswordLog.value.length < 0){
        note.style.display = "none";
    }else{
        console.log("wrong")
        note.innerHTML = `Wrong username or password`  
    }
})