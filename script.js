// Login Form
let loginBtn = document.querySelector("#loginBtn");
let emailField = document.querySelector("#emailField");
let passwordField =document.querySelector("#passwordField")
let errorMsgEmail = document.querySelector("#errorMsgEmail");
let errorMsgPassword = document.querySelector("#errorMsgPassword");
let eyeShow = document.querySelector(".eyeShow");
let eyeClose = document.querySelector(".eyeClose");
let submitSystem = function submitSystem(){
let emailFieldValue = emailField.value;
let passwordFieldValue = passwordField.value;
    
    if(!emailFieldValue){
        errorMsgEmail.innerHTML ="Email is required";
    };
    if(!passwordFieldValue){
        errorMsgPassword.innerHTML ="Password is required";
    };
    
    if(emailFieldValue && passwordFieldValue ){
        alert("logged in Successfully");
    };
}

loginBtn.addEventListener("click",submitSystem);
eyeShow.addEventListener("click", function(){
   if(eyeShow.classList == "fa-regular fa-eye fa-fw eyeShow"){
    passwordField.type = "text";
    eyeShow.classList = "fa-solid fa-eye-slash fa-fw eyeClose";
   }
   else{
    passwordField.type = "password";
    eyeShow.classList = "fa-regular fa-eye fa-fw eyeShow";
   }    
})
// Background Color Change
let registrationFormWrapper = document.querySelector(".registrationFormWrapper");
let colorBtn = document.querySelector("#colorBtn");
function  rgbColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}
let rgbColorGenerator = rgbColor()
colorBtn.addEventListener("click", ()=>{
    registrationFormWrapper.style.background = "none";
    let rgbColorGenerator = rgbColor()
    console.log(rgbColorGenerator);
    document.body.style.backgroundColor= rgbColorGenerator;
});

// Increment & Decrement
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let numberCount = document.querySelector("#numberCount");

increment.addEventListener("click", ()=>{
    
    numberCountConvert =Number(numberCount.innerHTML);
    if(numberCountConvert<20){
        increment.classList.add("animate");
        numberCount.innerHTML=  numberCountConvert+1;
        numberCount.style.color = "green";
        increment.addEventListener("animationend", ()=>{
            increment.classList.remove("animate");
        });
        
        
    }
    
})
decrement.addEventListener("click", ()=>{
    numberCountConvert =Number(numberCount.innerHTML)
    if(numberCountConvert>0){
        decrement.classList.add("animate");
        numberCount.innerHTML=  numberCountConvert-1;
        numberCount.style.color = "red";
        decrement.addEventListener("animationend", ()=>{
            decrement.classList.remove("animate");
        });
    }
})